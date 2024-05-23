# Node.js Typescript Modern Starter

While developing with Typescript and Node.js is awesome, **setting up a new
project is painful**.
This minimal and modern starter repo is here to help you get started with
Node.js and Typecript without the pain.

## Overview

This starter uses a bare-bones and minimal approach to get anyone up and
running with a new project in no time. It provides:

- Typescript 5 with a strict tsconfig.
- Yarn/Npm scripts ready to do everything you commonly need. Supporting `compile`,
  `clean`, `test`, `bundle`, `dev` and `start`. These scripts are created to be
  compatible with the operating systems linux, macos and windows.
- Github Actions in place runnung with current node LTS version (20) on linux,
  macos and windows to automatically (for each PR):
  - test the code
  - compile the codebase from ts to js
  - check for formatting issues
  - check for linting issues
- Testing via [jest](https://www.npmjs.com/package/jest)
- Formatting via [prettier](https://prettier.io/).
- Linting via [eslint](https://eslint.org/) and
  [typescript-eslint](https://typescript-eslint.io/)
- Bundling via [esbuild](https://esbuild.github.io/), a fast bundler that "just
  works".
- Debugging set up with examples for vscode and vim.
- Automated dependency updates via
  [renovate](https://github.com/renovatebot/renovate).
- Using the current LTS, nodejs 20

#### Project Goals

- Help you to just **get started** with a Node.js Typescript setup and **not
  worry about configuration**.
- All scripts compatible with linux, macos and windows.
- No magic. Everything kept as simple as possible while configuring anything you
  might need.
- Advocate for **testing your code**. The common approaches of _tests and code
  side by side_ as well as _all tests in a seperate folder_ already working and
  set up for you.
- Advocate for **using CI/CD** (in this case Github Actions). Automatically
  check formatting, check linting, compile and test the code base. Everything running
  on each PR.
- Advocate establishing best practices via linting rules using eslint and
  typescript-eslint. However, still giving a documented way to quickly and
  easily disable them, if that is preferred.
- Use modern tools like esbuild, typescript 5 and the nodejs test runner.
- Be open for any framework or library that you prefer. This setup should be
  useful to everyone. You can easily add your preferred packages in no time.

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
.git-hooks/pre-commit .git/hooks/pre-commit`. For windows you need to use
  [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) to use this.
- Use the node version specified in .nvmrc `nvm install && nvm use` (on windows you need to specify the node version in the command)
- Enable corepack and update yarn `corepack enable`
- Install dependencies `yarn`
- You're done🎉 What about you try running the tests? Run `yarn test`. See the
  section below for all available commands together with their explanation.

## Scripts and their explanation

All scripts can be found inside the package.json file under the "scripts"
attribute.

- `yarn bundle` -> Bundles the whole code into a single javascript file which
  will be stored inside the dist folder. For prod deployments you typically just
  copy this file somewhere and then run something like `node --enable-source-maps
./index.js`.
- `yarn clean` -> Removes bundled files by deleting the dist folder. Normally
  there is no need to invoke this manually.
- `yarn compile` -> Runs the typescript compiler against the typescript
  codebase. Displays any errors if they occur.
- `yarn compile:watch` -> Runs the typescript compiler every time you make
  changes to a file. It is good to open this in another terminal while
  developing to spot typescript issues.
- `yarn dev` -> This should be used for running the code while developing. It
  watches all changes you make to your typescript codebase and automatically
  rebuilds the project. It does also watch all changes made to the built project
  and restarts the code whenever changes are detected. This enables a quick
  feedback loop.
- `yarn debug` -> Starts the app in debugging mode. Waits for a debugger to
  attach. See Debugging below for more info.
  - If you want to restart the debugging process every time you change the code,
    you can use something like `nodemon --watch src --watch test --ext ts,json
--exec 'yarn debug'` or when debugging tests with `nodemon --watch src --watch
test --ext ts,json --exec 'yarn debug:test'`
- `yarn debug:test` -> Starts the test run in debugging mode. Waits for a
  debugger to attach. See Debugging below for more info.
- `yarn format` -> Formats the code using prettier.
- `yarn format:check` -> Checks for formatting errors using prettier. This is
  typically only invoked by the CI/CD pipeline.
- `yarn lint` -> Lints the code using eslint. Fixes problems that are
  auto-fixable and reports the rest of them to you.
- `yarn lint:check` -> Checks for linting errors using eslint. This is typically
  only invoked by the CI/CD pipeline.
- `yarn start` -> Runs the code. This only works if the code was bundled before ;).
- `yarn test` -> Tests your codebase. Basic tests are created for both major
  common approaches of putting tests beside the source code as well as putting
  tests in a separate folder.
  - You can inspect the code coverage in depth by running `npx http-server
./coverage/lcov-report` and then browsing http://localhost:8080.

## Debugging

An enourmous amount of people default to `console log debugging` since
understanding the setup for debugging typescript can be somewhat awful and
painful. This repo provides a debug config and guide ready to use for
[vscode](git@github.com:microsoft/vscode.git) and for vim using
[vimspector](https://github.com/puremourning/vimspector). Both use the mostly
DAP compliant debugger
[vscode-js-debug](https://github.com/microsoft/vscode-js-debug).

### Debugging Code

There are somewhat "different" ways of starting the debugger. Once is by
starting the app and waiting for a debugger to connect and the other one is
starting the app initiated by the debugger. I made the experience that the
former works on any given code base, no matter the amount of transipilation or
bundling steps and custom steups while the latter does fail in extremely
customized scenarios. Therefore here only the first one is covered with
examples.

#### Vim or Vscode

- Run `yarn debug` in another terminal
- Open src/index.ts `vim ./src/index.ts` (or code ./src/index.ts) in another terminal.
- Set breakpoint somewhere in the file at the console log (F9 is the default mapping).
- Start by pressing F5
- Press F5 again, should see the console.log output
- Done🎉

### Debugging Tests

#### Vim or Vscode

- Run `yarn debug:test` in another terminal
- Open src/index.ts `vim ./src/hello.test.ts` in another terminal.
- Set breakpoint in the line of the console log in the test file.
- Start by pressing F5 (then skip the jest internal file once with F5)
- Check the terminal where you ran `yarn debug:test`, it should not display the console log yet.
- Press F5 again, should see the console.log output there now.
- Done🎉

## Linting

This repo has [eslint](https://eslint.org/) and
[typescript-eslint](https://typescript-eslint.io/) as well as an automated
Github Action to check for linting set up and ready to go.

The rules in this project are my personal preference and reflect a subset of the
recommended options. They also include a lot of the more strict options (NOT
included in the recommended ones). My goal is to simplify having a consistent
code base/code style, to avoid catchable bugs early and advocate for usage of
newer features of the language.

However, I made it **dead simple** to enable the default/recommended eslint
rules, if you want to use them instead. Everything is documented, just browse to
[./.eslintrc.cjs](https://github.com/xddq/nodejs-typescript-modern-starter/blob/main/.eslintrc.cjs)
and adapt the code.

## Automated Dependency Updates

After using this repo (either via the github template or by simply cloning it)
you have to set up a renovate bot. For github this can easily be done via the
Github Apps [renovate](https://github.com/apps/renovate) as well as
[renovate-approve](https://github.com/apps/renovate-approve). To be able to the
mimic the approach used in this repo, you should set up:

- the repo setting to allow auto-merge
- a branch protection rule for the main branch to require approval (will be
  handled via renovate-approve)
