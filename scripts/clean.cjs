const { rmSync } = require("node:fs");
const { resolve } = require("node:path");

for (const entry of ["build-tsc", ".next", "out", "tsconfig.tsbuildinfo"]) {
  rmSync(resolve(__dirname, "..", entry), { recursive: true, force: true });
}
