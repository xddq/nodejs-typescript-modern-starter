// showcasing "new" esm imports
// src: https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/#type-in-package-json-and-new-extensions
import { returnHelloWorld } from "./hello.js";

const main = () => {
  console.log(`${returnHelloWorld} in Node.js and Typescript :]`);
};

main();
