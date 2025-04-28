import { readFile } from "fs/promises";
import { resolve } from "path";

const read = async () => {
  try {
    const filePath = resolve("src/fs/files/fileToRead.txt");
    const fileData = await readFile(filePath, "utf8");
    console.log(fileData);
  } catch (error) {
    console.error(error.code === "ENOENT" ? "FS operation failed" : error);
  }
};

await read();
