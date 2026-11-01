const { test } = require("node:test");
const assert = require("node:assert/strict");
const { spawnSync } = require("node:child_process");
const { resolve } = require("node:path");
const { packageManager } = require("../package.json");

function check(userAgent) {
  const env = { ...process.env };
  delete env.npm_config_user_agent;
  if (userAgent !== undefined) env.npm_config_user_agent = userAgent;
  return spawnSync(
    process.execPath,
    [resolve(__dirname, "check-package-manager.cjs")],
    {
      env,
      encoding: "utf8",
    },
  );
}

test("accepts the pinned pnpm version with its normal user-agent suffix", () => {
  const result = check(
    `${packageManager.replace("@", "/")} npm/? node/${process.version} linux x64`,
  );
  assert.equal(result.status, 0, result.stderr);
});

for (const agent of [
  undefined,
  "npm/11.0.0 node/v24.12.0",
  "yarn/4.12.0",
  "pnpm/1.0.0",
  "pnpm/12.16.10",
]) {
  test(`rejects an unsupported installer: ${agent ?? "missing user agent"}`, () => {
    const result = check(agent);
    assert.equal(result.status, 1);
    assert.match(result.stderr, /corepack enable/);
    assert.ok(result.stderr.includes(packageManager));
  });
}
