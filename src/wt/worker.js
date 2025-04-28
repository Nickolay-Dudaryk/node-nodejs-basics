import { parentPort } from "worker_threads";

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

// This function sends result of nthFibonacci computations to main thread
const sendResult = (number) => {
  try {
    const result = nthFibonacci(number);
    parentPort.postMessage(result);
  } catch (err) {
    parentPort.postMessage({ error: true, message: err.message });
  }
};

parentPort.on("message", (number) => sendResult(number));
