import { createReadStream, createWriteStream } from "fs";
import { unlink } from "fs/promises";
import { resolve } from "path";
import { pipeline } from "stream/promises";
import { createGzip } from "zlib";

const compress = async () => {
  try {
    const filePath = resolve("src/zip/files/fileToCompress.txt");
    const gzipedFilePath = resolve("src/zip/files/archive.gz");
    const readStream = createReadStream(filePath);
    const writeStream = createWriteStream(gzipedFilePath);
    const gzip = createGzip();

    await pipeline(readStream, gzip, writeStream);
    await unlink(filePath);
  } catch (error) {
    console.log(error);
  }
};

await compress();
