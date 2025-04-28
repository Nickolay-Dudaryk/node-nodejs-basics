import { createWriteStream } from "fs";
import { resolve } from "path";
import { pipeline } from "stream/promises";

const write = async () => {
  const filePath = resolve("src/streams/files/fileToWrite.txt");
  const writeStream = createWriteStream(filePath, "utf8");

  try {
    console.log("Press Ctrl+D to terminate the process");
    await pipeline(process.stdin, writeStream);
  } catch (error) {
    console.log(error);
  }
};

await write();
