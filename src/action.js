//This is JS scripte we will run. This is our Action script
const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  //const PULL_REQUEST = core.getInput("PULL_REQUEST");

  console.log($github.event.pull_request);
}

run();
