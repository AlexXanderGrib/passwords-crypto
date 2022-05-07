import typescript from "rollup-plugin-typescript2";
import { builtinModules } from "module";
import { dependencies, devDependencies, optionalDependencies } from "./package.json";
import cleanup from "rollup-plugin-cleanup";
import prettier from "rollup-plugin-prettier";

import prettierConfig from "./.prettierrc.json";
import { glob } from "glob";

/** @type {import('rollup').RollupOptions} */
const config = {
  input: ["./src/index.ts", ...glob.sync("./src/adapters/*.ts")],
  external: [
    ...builtinModules,
    ...Object.keys({ ...devDependencies, ...dependencies, ...optionalDependencies })
  ],
  output: [
    {
      dir: "./dist/cjs",
      format: "commonjs",
      exports: "named",
      preserveModules: true,
      entryFileNames: "[name].js",
      compact: true,
      generatedCode: {
        constBindings: true,
        arrowFunctions: true,
        objectShorthand: true
      },
      externalLiveBindings: false,
      minifyInternalExports: true
    },
    {
      dir: "./dist/esm",
      format: "module",
      exports: "named",
      preserveModules: true,
      entryFileNames: "[name].mjs",
      compact: true,
      generatedCode: {
        constBindings: true,
        arrowFunctions: true,
        objectShorthand: true
      },
      externalLiveBindings: false,
      minifyInternalExports: true
    }
  ],
  treeshake: {
    unknownGlobalSideEffects: false,
    moduleSideEffects: false,
    correctVarValueBeforeDeclaration: false,
    preset: "smallest",
    annotations: false,
    propertyReadSideEffects: false
  },
  plugins: [
    typescript({ tsconfig: "./tsconfig.build.json" }),
    cleanup({
      extensions: ["js", "ts", "mjs"],
      comments: ["jsdoc"],
      compactComments: true
    }),
    prettier({
      ...prettierConfig,
      parser: "babel-ts"
    })
  ]
};

export default config;
