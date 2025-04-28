import { createReadStream } from "fs";
import { resolve } from "path";
import { pipeline } from "stream/promises";
import { Transform } from "stream";

const read = async () => {
  const filePath = resolve("src/streams/files/fileToRead.txt");
  const readStream = createReadStream(filePath, "utf-8");

  const transform = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString() + "\n");
    },
  });

  try {
    await pipeline(readStream, transform, process.stdout);
  } catch (error) {
    console.log(error);
  }
};

await read();
