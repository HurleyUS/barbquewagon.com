#!/usr/bin/env bun
/** Dispatches the Blacksmith/Vercel prebuilt ship workflow for this repo. */
import { readFile } from "node:fs/promises";
import { parseArgs } from "node:util";

const { values } = parseArgs({
  args: process.argv.slice(2),
  options: {
    branch: { type: "string", short: "b" },
    help: { type: "boolean", short: "h" },
    "no-watch": { type: "boolean" },
    setup: { type: "boolean" },
  },
});

async function exec(command: string, args: string[]) {
  const exitCode = await Bun.spawn([command, ...args], {
    cwd: process.cwd(),
    env: process.env,
    stderr: "inherit",
    stdout: "inherit",
  }).exited;
  if (exitCode !== 0) throw new Error(`${command} ${args.join(" ")} exited ${exitCode}`);
}

async function capture(command: string, args: string[]) {
  const proc = Bun.spawn([command, ...args], {
    cwd: process.cwd(),
    env: process.env,
    stderr: "pipe",
    stdout: "pipe",
  });
  const [stdout, stderr, exitCode] = await Promise.all([
    new Response(proc.stdout).text(),
    new Response(proc.stderr).text(),
    proc.exited,
  ]);
  if (exitCode !== 0) throw new Error(stderr.trim());
  return stdout.trim();
}

async function repoName() {
  return capture("gh", ["repo", "view", "--json", "nameWithOwner", "--jq", ".nameWithOwner"]);
}

async function branchName() {
  return values.branch ?? capture("git", ["branch", "--show-current"]);
}

async function setupSecrets(repo: string) {
  const project = JSON.parse(await readFile(".vercel/project.json", "utf8"));
  await exec("gh", ["secret", "set", "VERCEL_ORG_ID", "--repo", repo, "--body", project.orgId]);
  await exec("gh", [
    "secret",
    "set",
    "VERCEL_PROJECT_ID",
    "--repo",
    repo,
    "--body",
    project.projectId,
  ]);
}

if (values.help) {
  console.log("Usage: bun ship [--setup] [--branch BRANCH] [--no-watch]");
} else {
  const repo = await repoName();
  const branch = await branchName();
  if (values.setup) await setupSecrets(repo);
  await exec("git", ["push", "origin", branch]);
  await exec("gh", ["workflow", "run", "ship.yml", "--repo", repo, "--ref", branch]);
  if (!values["no-watch"]) await exec("gh", ["run", "watch", "--repo", repo, "--exit-status"]);
}
