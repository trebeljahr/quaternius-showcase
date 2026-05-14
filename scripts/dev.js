const { spawn } = require("node:child_process");

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || "3567";

const NPM_CONFIG_KEYS_TO_DROP = new Set([
  "npm_config__jsr_registry",
  "npm_config_npm_globalconfig",
  "npm_config_verify_deps_before_run",
]);

const env = { ...process.env };

// pnpm can pass these config values through env; nested npm calls warn about them.
for (const key of Object.keys(env)) {
  if (NPM_CONFIG_KEYS_TO_DROP.has(key.toLowerCase())) {
    delete env[key];
  }
}

function validatePort(value) {
  const port = Number.parseInt(value, 10);

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    console.error(`Invalid PORT: ${value}`);
    process.exit(1);
  }
}

function main() {
  validatePort(PORT);

  const nextBin = require.resolve("next/dist/bin/next");
  const child = spawn(process.execPath, [nextBin, "dev", "-H", HOST, "-p", PORT], {
    env,
    stdio: "inherit",
  });

  for (const signal of ["SIGINT", "SIGTERM"]) {
    process.on(signal, () => {
      child.kill(signal);
    });
  }

  child.on("exit", (code, signal) => {
    if (signal) {
      process.exit(1);
    }

    process.exit(code ?? 0);
  });
}

main();
