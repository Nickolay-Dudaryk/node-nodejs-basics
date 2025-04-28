import { readdir, access, constants } from "fs/promises";
import { resolve } from "path";

const list = async () => {
  try {
    const pathToDir = resolve("src/fs/files/");
    await access(pathToDir, constants.F_OK);
    const files = await readdir(pathToDir, { recursive: true });
    console.log(files);
  } catch (error) {
    console.error("FS operation failed");
  }
};

await list();
