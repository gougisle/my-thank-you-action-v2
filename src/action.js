//This is JS scripte we will run. This is our Action script
const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  const GITHUB_TOKEN = core.getInput("GITHUB_TOKEN");
  const octokit = github.getOctokit(GITHUB_TOKEN);

  const { context = {} } = github;
  const { pull_request } = context.payload;

  await octokit.issues.createComment({
    ...context.repo,
    issues_number: pull_request.number,
    body: "Thank you for the pull request we will review asap.",
  });
}

run();
