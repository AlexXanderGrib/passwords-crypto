const { readdirSync, writeFileSync } = require("fs");
const path = require("path");
const packageJson = require("../package.json");
const typedoc = require("../typedoc.json");

const adapters = readdirSync(path.resolve(__dirname, "../src/adapters")).map(
  (file) => path.parse(file).name
);

packageJson.exports = {
  ".": {
    require: "./index.js",
    import: "./index.mjs",
    default: "./index.mjs",
    types: "./index.d.ts"
  }
};

typedoc.entryPoints = ["./index.d.ts"].concat(
  adapters.map((adapter) => `./${adapter}.d.ts`)
);

for (const adapter of adapters) {
  const base = path.resolve(__dirname, "..", adapter);

  packageJson.exports[`./${adapter}`] = {
    require: `./${adapter}.js`,
    import: `./${adapter}.mjs`,
    default: `./${adapter}.mjs`,
    types: `./${adapter}.d.ts`
  };

  packageJson.files.push(`${adapter}.js`, `${adapter}.mjs`, `${adapter}.d.ts`);

  writeFileSync(
    `${base}.mjs`,
    `export * from "./dist/esm/adapters/${adapter}.mjs";\n`
  );
  writeFileSync(
    `${base}.js`,
    `module.exports = require("./dist/cjs/adapters/${adapter}.js");\n`
  );
  writeFileSync(`${base}.d.ts`, `export * from "./dist/cjs/adapters/${adapter}";\n`);
}

packageJson.files = [...new Set(packageJson.files)];

writeFileSync(
  path.resolve(__dirname, "../package.json"),
  JSON.stringify(packageJson, null, 2),
  "utf-8"
);

writeFileSync(
  path.resolve(__dirname, "../typedoc.json"),
  JSON.stringify(typedoc, null, 2),
  "utf-8"
);
