import { unlink } from "fs/promises";
import { resolve } from "path";

const remove = async () => {
  try {
    await unlink(resolve("src/fs/files/fileToRemove.txt"));
  } catch (error) {
    console.error("FS operation failed");
  }
};

await remove();
