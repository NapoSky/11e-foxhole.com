const { packageManager } = require("../package.json");
const expected = packageManager.replace("@", "/");
const actual = (process.env.npm_config_user_agent || "").split(" ")[0];

if (actual !== expected) {
  console.error(
    `This project requires ${packageManager}. Run corepack enable, then pnpm install --frozen-lockfile.`,
  );
  process.exit(1);
}
