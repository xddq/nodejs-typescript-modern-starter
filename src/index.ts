#!/usr/bin/env node
// NOTE: You can remove the first line if you don't plan to release an
// executable package. E.g. code that can be used as cli like prettier or eslint

const main = () => {
  console.log("hello Node.js and Typescript world :]");
  console.log("live reloading");
  console.log("live reloading2");
};

// This was just here to force a linting error for now to demonstrate/test the
// eslint pipeline. You can uncomment this and run "yarn lint:check" to test the
// linting.
// const x: number[] = [1, 2];
// const y: Array<number> = [3, 4];
// if (x == y) {
//   console.log("equal!");
// }

main();
