import { spawn } from "child_process";
import { resolve } from "path";

const spawnChildProcess = async (args) => {
  const scriptPath = resolve("src/cp/files/script.js");

  // FYI: stdio -> https://nodejs.org/api/child_process.html#optionsstdio
  const childProcess = spawn("node", [scriptPath, ...args], {
    stdio: ["pipe", "pipe", "inherit"],
  });

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
  childProcess.on("error", (err) => {
    console.log(`Error: ${err}`);
  });
  childProcess.on("exit", (code) => {
    console.log(`Process exited with code ${code}`);
  });
};

spawnChildProcess(["someArgument1", "someArgument2"]);
