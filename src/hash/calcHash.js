import { createReadStream } from "fs";
import { resolve } from "path";
import { createHash } from "crypto";
import { pipeline } from "stream/promises";

const calculateHash = async () => {
  const filePath = resolve("src/hash/files/fileToCalculateHashFor.txt");
  const readStream = createReadStream(filePath);
  const hash = createHash("sha256");

  await pipeline(readStream, hash);

  console.log(hash.digest("hex"));
};

await calculateHash();
