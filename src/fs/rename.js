import { rename as renameFile, access, constants } from "fs";

const rename = async () => {
  const pathToFile = "src/fs/files/";
  const initialFile = `${pathToFile}wrongFilename.txt`;
  const renamedFile = `${pathToFile}properFilename.md`;

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
