import { rename as renameFile, access, constants } from "fs";
import { resolve } from "path";

const rename = async () => {
  const initialFile = resolve("src/fs/files/wrongFilename.txt");
  const renamedFile = resolve("src/fs/files/properFilename.md");

  access(initialFile, constants.F_OK, (err) => {
    if (err) throw new Error("FS operation failed");
  });

  access(renamedFile, constants.F_OK, (err) => {
    if (!err) throw new Error("FS operation failed");
  });

  renameFile(initialFile, renamedFile, (err) => {
    if (err) throw new Error("FS operation failed");
  });
};

await rename();
