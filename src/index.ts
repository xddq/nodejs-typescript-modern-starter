const main = () => {
  console.log("hello Node.js and Typescript world :]");
};

// This is just here to force a linting error for now to demonstrate/test the
// eslint pipeline.
const x: number[] = [1, 2];
const y: Array<number> = [3, 4];

// This is just here to force a linting error for now to demonstrate/test the
// eslint pipeline.
if (x == y) {
  console.log("equal!");
}

main();
