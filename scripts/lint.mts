#!/usr/bin/env bun
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const ignoredDirectories = new Set([
  ".git",
  ".next",
  ".vercel",
  "build",
  "coverage",
  "dist",
  "node_modules",
  "out",
]);

function stripJsonComments(source: string) {
  let output = "";
  let inString = false;
  let escaped = false;

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    const next = source[index + 1];

    if (inString) {
      output += char;
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === '"') {
        inString = false;
      }
      continue;
    }

    if (char === '"') {
      inString = true;
      output += char;
      continue;
    }

    if (char === "/" && next === "/") {
      while (index < source.length && source[index] !== "\n") index += 1;
      output += "\n";
      continue;
    }

    if (char === "/" && next === "*") {
      index += 2;
      while (index < source.length && !(source[index] === "*" && source[index + 1] === "/")) {
        index += 1;
      }
      index += 1;
      continue;
    }

    output += char;
  }

  return output;
}

async function collectJsonFiles(directory: string, files: string[] = []) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!ignoredDirectories.has(entry.name)) {
        await collectJsonFiles(path.join(directory, entry.name), files);
      }
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".json")) {
      files.push(path.join(directory, entry.name));
    }
  }

  return files;
}

async function cleanJsonComments() {
  const files = await collectJsonFiles(root);

  for (const file of files) {
    const source = await readFile(file, "utf8");
    const stripped = stripJsonComments(source);
    JSON.parse(stripped);

    if (source !== stripped) {
      await writeFile(file, stripped);
      console.log(`Cleaned ${path.relative(root, file)}`);
    }
  }
}

async function run(command: string, args: string[]) {
  const proc = Bun.spawn([command, ...args], {
    cwd: root,
    env: process.env,
    stderr: "inherit",
    stdout: "inherit",
  });
  const exitCode = await proc.exited;
  if (exitCode !== 0) process.exit(exitCode);
}

await cleanJsonComments();
await run("bunx", ["biome", "format", "--write", "."]);
await run("bunx", ["oxlint", "--fix", "."]);
await run("bun", ["tsc"]);
