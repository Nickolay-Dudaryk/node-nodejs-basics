import { createReadStream, createWriteStream } from "fs";
import { unlink } from "fs/promises";
import { resolve } from "path";
import { pipeline } from "stream/promises";
import { createGunzip } from "zlib";

const decompress = async () => {
  try {
    const gzipedFilePath = resolve("src/zip/files/archive.gz");
    const unzipedFilePath = resolve("src/zip/files/fileToCompress.txt");
    const readStream = createReadStream(gzipedFilePath);
    const writeStream = createWriteStream(unzipedFilePath);
    const decompress = createGunzip();

    await pipeline(readStream, decompress, writeStream);
    await unlink(gzipedFilePath);
  } catch (error) {
    console.log(error);
  }
};

await decompress();
