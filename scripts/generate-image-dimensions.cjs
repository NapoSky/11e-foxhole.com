const fs = require("node:fs");
const path = require("node:path");

const imageRoot = path.join(__dirname, "../src/images");

function dimensions(file) {
  const data = fs.readFileSync(file);
  if (
    data.toString("ascii", 0, 4) !== "RIFF" ||
    data.toString("ascii", 8, 12) !== "WEBP"
  ) {
    throw new Error(`Not a WebP image: ${file}`);
  }

  for (let offset = 12; offset + 8 <= data.length;) {
    const type = data.toString("ascii", offset, offset + 4);
    const length = data.readUInt32LE(offset + 4);
    const start = offset + 8;
    if (start + length > data.length) break;

    if (type === "VP8X" && length >= 10) {
      return {
        width: data.readUIntLE(start + 4, 3) + 1,
        height: data.readUIntLE(start + 7, 3) + 1,
      };
    }
    if (type === "VP8L" && length >= 5 && data[start] === 0x2f) {
      const bits = data.readUInt32LE(start + 1);
      return {
        width: (bits & 0x3fff) + 1,
        height: ((bits >>> 14) & 0x3fff) + 1,
      };
    }
    if (
      type === "VP8 " &&
      length >= 10 &&
      data.toString("hex", start + 3, start + 6) === "9d012a"
    ) {
      return {
        width: data.readUInt16LE(start + 6) & 0x3fff,
        height: data.readUInt16LE(start + 8) & 0x3fff,
      };
    }
    offset = start + length + (length % 2);
  }
  throw new Error(`Cannot read WebP dimensions: ${file}`);
}

function collect(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory()
      ? collect(file)
      : entry.name.endsWith(".webp")
        ? [file]
        : [];
  });
}

const metadata = {};
for (const file of collect(imageRoot).sort()) {
  const name = path.basename(file);
  if (metadata[name]) throw new Error(`Duplicate image filename: ${name}`);
  metadata[name] = dimensions(file);
}
const output = path.join(imageRoot, "dimensions.json");
const sorted = Object.fromEntries(
  Object.keys(metadata)
    .sort()
    .map((name) => [name, metadata[name]]),
);
const content = `${JSON.stringify(sorted, null, 2)}\n`;
if (!fs.existsSync(output) || fs.readFileSync(output, "utf8") !== content) {
  fs.writeFileSync(output, content);
}
