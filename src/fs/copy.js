import { cp, access, constants } from "fs";

const copy = async () => {
  const sourceDir = "src/fs/files/";
  const destDir = "src/fs/files_copy/";

  access(sourceDir, constants.F_OK, (err) => {
    if (err) throw new Error("FS operation failed");
  });

  access(destDir, constants.F_OK, (err) => {
    if (!err) throw new Error("FS operation failed");
  });

  cp(sourceDir, destDir, { recursive: true }, (err) => {
    if (err) throw new Error("FS operation failed");
  });
};

await copy();
