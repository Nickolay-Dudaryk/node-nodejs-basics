import { unlink } from "fs/promises";

const remove = async () => {
  try {
    await unlink("src/fs/files/fileToRemove.txt");
  } catch (error) {
    console.error("FS operation failed");
  }
};

await remove();
