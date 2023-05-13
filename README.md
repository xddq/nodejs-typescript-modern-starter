# Node.js Typescript Modern Starter

While developing with Typescript and Node.js is awesome, **setting up a new
project is painful**.
This minimal and mordern starter repo is here to help you solve this.

## Overview

This starter uses a bare-bones and minimal approach and ideal to get up and
running with a new project in no time. It provides:

- Typescript 5 set up with the entrypoint in `./src/index.ts`.
- Yarn/Npm scripts ready to do everything you commonly need. Supporting `build`,
  `clean`, `test`, `bundle`, `dev` and `start`. These scripts are created to be
  compatible with the operating systems linux, macos and windows.
- A Github Action set up to automatically build and test the code for each PR.
  Running with current node versions (18,20) on linux, macos and windows.
- Testing set up via the new Node.js [test
  runner](https://nodejs.org/api/test.html#test-runner) instead of something
  like mocha or jest.
- Formatting set up via [prettier](https://prettier.io/).
- Bundling set up via [esbuild](https://esbuild.github.io/), a fast bundler that
  "just works" and is nowadays even used in the typescript codebase.

## Prerequisites

- [nvm](https://github.com/nvm-sh/nvm) (or something like
  [nvm-windows](https://github.com/coreybutler/nvm-windows) if you are on
  windows)

## Quickstart

- Clone the repo `git clone git@github.com:xddq/nodejs-typescript-modern-starter`
- Remove the .git folder `cd nodejs-typescript-modern-starter && rm -rf .git`
- (optional) Update the package.json name, author, keywords, etc..
- Set up your own git folder and create your first commit. Run `git init && git
add . && git commit -am "initial commit"`
- (optional) Set up the git hook for formatting your code. `cp
.git-hooks/pre-commit .git/hooks/pre-commit`
- Use the node version specified in .nvmrc `nvm install && nvm use`
- Install dependencies `npm i -g yarn && yarn --immutable`
- You're done🎉 What about you try running the tests? Run `yarn test`. See the
  section below for all available commands together with their explanation.

## Scripts and their explanation

All scripts can be found inside the package.json file under the "scripts"
attribute. They simply invoke the `tasks.mjs` file which handles the logic
behind these scripts. The `tasks.mjs` file was created in order to be able to
easily implement operating system dependant code and leverage comments. You can
just take a look inside the tasks.mjs file in order to understand what is going
on behind the scenes. It contains comments for every script.

- `yarn build` -> Builds the project. It transpiles the typescript code to
  javascript and stores the output inside the dist folder. Deletes any files
  from previous builds beforehand to become repeatable/idempotent.
- `yarn bundle` -> Bundles the whole code into a single javascript file which
  will be stored inside the bundle folder.
- `yarn clean` -> Removes built files. Deletes the dist and bundle directory and
  the files inside of them. Normally there is no need to invoke this manually.
- `yarn dev` -> This should be used for running the code while developing. It
  watches all changes you make to your typescript codebase and automatically
  rebuilds the project. It does also watch all changes made to the built project
  and restarts the code whenever changes are detected. This enables a quick
  feedback loop.
- `yarn start` -> Runs the code. This only works if the code was built before ;).
- `yarn test` -> Tests your codebase. Basic tests are created for both major
  approaches of putting tests beside the source code as well as putting tests in
  a seperate folder.
