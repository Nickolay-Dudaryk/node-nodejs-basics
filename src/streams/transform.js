import { pipeline } from "stream/promises";
import { Transform } from "stream";

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split("").reverse().join("") + "\n");
    },
  });

  try {
    console.log("Press Ctrl+D to terminate the process");
    await pipeline(process.stdin, reverse, process.stdout);
  } catch (error) {
    console.log(error);
  }
};

await transform();
