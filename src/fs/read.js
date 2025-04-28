import { readFile } from "fs/promises";

const read = async () => {
  try {
    const fileData = await readFile("src/fs/files/fileToRead.txt", "utf8");
    console.log(fileData);
  } catch (error) {
    console.error(error.code === "ENOENT" ? "FS operation failed" : error);
  }
};

await read();
