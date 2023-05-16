// @ts-check

/**
 * Specifying all tasks (build, test, bundle, etc..) inside code to be able to
 * more easily guarantuee a similar interface across operating systems (linux,
 * macos, windows).
 */
import shell from "shelljs";
import path from "node:path";
import nodemon from "nodemon";

/**
 * Builds project. Typescript -> Javascript
 * @param {Array<string>} [additionalArguments]
 */
export const build = (additionalArguments = []) => {
  clean();
  const pathToTsc = ["node_modules", "typescript", "bin", "tsc"].join(path.sep);
  const { code } = shell.exec(
    `node ${pathToTsc} ${additionalArguments.join(" ")}`
  );
  handleNonZeroReturnCode(code);
};

/**
 * Tests the project.
 */
export const test = () => {
  build();
  // runs tests based on the test runner execution model
  // src: https://nodejs.org/api/test.html#test-runner-execution-model"
  const { code } = shell.exec(`node --test --test-reporter spec`);
  handleNonZeroReturnCode(code);
};

/**
 * Bundles the code into a single file.
 */
export const bundle = () => {
  // Builds without emitting to ensure that the code is still valid typescript
  // before bundling.
  build(["--noEmit"]);
  const pathToEsbuild = ["node_modules", "esbuild", "bin", "esbuild"].join(
    path.sep
  );
  const { code } = shell.exec(
    `node ${pathToEsbuild} src/index.ts --outdir=bundle --bundle --platform=node --target=node18.16.0`
  );
  handleNonZeroReturnCode(code);
};

/**
 * Runs your code. Only works if it was built before.
 */
export const start = () => {
  const pathToCode = ["dist", "src", "index.js"].join(path.sep);
  const { code } = shell.exec(`node ${pathToCode}`);
  handleNonZeroReturnCode(code);
};

/**
 * Runs your javscript code every time it changes. Use this while developing to
 * reduce the time taken to get feedback.
 * Typically invoked by running "yarn dev".
 */
export const watchNode = () => {
  const pathToCode = ["dist", "src", "index.js"].join(path.sep);
  nodemon({
    script: pathToCode,
    ext: "js json",
  });

  nodemon
    .on("start", function () {
      console.log("App has started");
    })
    .on("quit", function () {
      console.log("App has quit");
      process.exit();
    })
    .on("restart", function (files) {
      console.log("App restarted due to: ", files);
    });
};

/**
 * Compiles your typescript code to javascript every time it changes. Use this
 * while developing to reduce the time taken to get feedback.
 * Typically invoked by running "yarn dev".
 */
export const watchTs = () => {
  const pathToTsc = ["node_modules", "typescript", "bin", "tsc"].join(path.sep);
  const { code } = shell.exec(`node ${pathToTsc} -w`);
  handleNonZeroReturnCode(code);
};

/**
 * Cleans up all built/bundled files by removing the bundle and dist
 * directories.
 */
export const clean = () => {
  shell.rm("-rf", ["dist", "build"]);
};

/**
 * Formats the whole codebase (ignores files specified in .prettierignore).
 * @param {Array<string>} [additionalArguments]
 */
export const format = (additionalArguments) => {
  const pathToPrettier = ["node_modules", "prettier", "bin-prettier"].join(
    path.sep
  );
  const { code } = shell.exec(
    `node ${pathToPrettier} . ${additionalArguments}`
  );
  if (code !== 0) {
    console.error(`task failed with code ${code}`);
    console.error(
      "Run `yarn format` to format your codebase. Or set up the pre-commit hook to avoid these kind of issues."
    );
    process.exit(code);
  }
};

/**
 * Lints the whole codebase (ignores files specified in .eslintignore).
 * @param {Array<string>} [additionalArguments]
 */
export const lint = (additionalArguments) => {
  const pathToEslint = ["node_modules", "eslint", "bin", "eslint.js"].join(
    path.sep
  );
  const { code } = shell.exec(`node ${pathToEslint} . ${additionalArguments}`);
  if (code !== 0) {
    console.error(`task failed with code ${code}`);
    console.error(
      "Run `yarn lint` to lint your codebase. It fixes automatically fixable problems for you." +
        "The rest of the problems have to be figured out and cleared by yourself."
    );
    process.exit(code);
  }
};

/**
 * @param {number} code
 **/
const handleNonZeroReturnCode = (code) => {
  if (code !== 0) {
    console.error(`task failed with code ${code}`);
    process.exit(code);
  }
};

const main = () => {
  const [_, __, taskName, ...additionalArguments] = process.argv;
  if (taskName === "build") {
    return build();
  }
  if (taskName === "bundle") {
    return bundle();
  }
  if (taskName === "clean") {
    return clean();
  }
  if (taskName === "format") {
    return format(additionalArguments);
  }
  if (taskName === "lint") {
    return lint(additionalArguments);
  }
  if (taskName === "start") {
    return start();
  }
  if (taskName === "test") {
    return test();
  }
  if (taskName === "watch-node") {
    return watchNode();
  }
  if (taskName === "watch-ts") {
    return watchTs();
  }

  console.error(`Unknown task: ${taskName}`);
  process.exit(-1);
};

main();
