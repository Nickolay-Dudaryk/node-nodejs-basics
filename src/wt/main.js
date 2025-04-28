import { Worker } from "worker_threads";
import { resolve } from "path";
import { cpus } from "os";

const performCalculations = async () => {
  const workerFilePath = resolve("src/wt/worker.js");

  const runWorker = (number) => {
    return new Promise((resolveWorker) => {
      const worker = new Worker(workerFilePath);

      worker.postMessage(number);

      worker.on("message", (message) => {
        resolveWorker({ status: "resolved", data: message });
      });

      worker.on("error", () => {
        resolveWorker({ status: "error", data: null });
      });

      worker.on("exit", (code) => {
        if (code !== 0) {
          resolveWorker({ status: "error", data: null });
        }
      });
    });
  };

  const numberOfCores = cpus().length;
  const promises = [];

  for (let i = 0; i < numberOfCores; i++) {
    promises.push(runWorker(10 + i));
  }

  const workerResults = await Promise.all(promises);
  console.log(workerResults);
};

await performCalculations();
