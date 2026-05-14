#!/usr/bin/env bun
/** Runs formatting, autofix linting, and type checking for the protected push gate. */
import { readFile, writeFile } from "node:fs/promises";
import { stripComments } from "jsonc-parser";

const root = process.cwd();
const shouldCleanJson = !process.argv.includes("--no-clean-json");

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

async function trackedJsonFiles() {
  const proc = Bun.spawn(["git", "ls-files", "-z", "*.json"], {
    cwd: root,
    stdout: "pipe",
  });
  const output = await new Response(proc.stdout).text();
  if ((await proc.exited) !== 0) process.exit(1);
  return output.split("\0").filter(Boolean);
}

async function cleanJsonComments() {
  for (const file of await trackedJsonFiles()) {
    const source = await readFile(file, "utf8");
    const cleaned = stripComments(source);
    JSON.parse(cleaned);
    if (cleaned !== source) {
      await writeFile(file, cleaned);
      console.log(`Cleaned ${file}`);
    }
  }
}

if (shouldCleanJson) await cleanJsonComments();
await run("bunx", ["biome", "format", "--write", "."]);
await run("bunx", ["oxlint", "--fix", "."]);
await run("bun", ["tsc"]);
