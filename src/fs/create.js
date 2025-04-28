import { access, appendFile, constants } from "fs/promises";

const create = async () => {
  const filePath = "src/fs/files/fresh.txt";

  try {
    await access(filePath, constants.F_OK);
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code === "ENOENT") {
      await appendFile(filePath, "I am fresh and young");
    } else {
      console.error(error);
    }
  }
};

await create();
