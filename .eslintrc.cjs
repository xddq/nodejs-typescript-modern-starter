/* eslint-env node */
module.exports = {
  extends: [
    /**
     * Here I simply want to disable all rules. I feel like a pretty strict
     * tsconfig already catches a lot of the recommended rules and I want to
     * avoid any mental overhead of unnecessary "duplicated warnings/errors".
     * If you want to go with the "default/recommended" version, simply
     * uncomment the following lines in the extends array.
     */
    // "eslint:recommended",
    // "plugin:@typescript-eslint/recommended",
    // "plugin:@typescript-eslint/recommended-requiring-type-checking",
    /* This prettier extends is used to disable all the formatting rules that
     * are enabled by the different "recommended" rules.
     */
    // "prettier",
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  /**
   * You can use the rules inside this overrides to specify the rules you want
   * to use on a one by one / case by case basis. If you simply want to go with
   * the default, just remove or uncomment the whole "overrides"
   * property/attribute. The following rules are my preference and consist of a
   * mix of recommended(not all recommended ones) and more strict(not all strict
   * ones :]) eslint and typescript-eslint rules.
   **/
  overrides: [
    {
      // Enables type checking for typescript files.
      // Src for the overrides from here :
      // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
      files: ["*.ts", "*.tsx", "*.mts", "*.cts"],
      rules: {
        // "eslint" rules
        // check https://eslint.org/docs/latest/rules/ for reference
        "no-cond-assign": ["error", "always"],
        eqeqeq: ["error"],
        "no-constant-binary-expression": "error",
        curly: "error",
        "default-case": "error",
        "default-case-last": "error",
        "no-constant-condition": "error",
        "no-duplicate-imports": "error",
        "no-fallthrough": "error",
        "use-isnan": "error",
        "arrow-body-style": ["error", "always"],
        "no-loss-of-precision": "error",
        "no-promise-executor-return": "error",
        // See "when not to use it", and check your use case, if you think this
        // rule should be disabled.
        "no-await-in-loop": "error",
        "no-useless-escape": "error",
        "prefer-object-spread": "error",
        "prefer-spread": "error",
        "no-empty": "error",
        "no-useless-catch": "error",
        // See "when not to use it", and check your use case, if you think this
        // rule should be disabled.
        "no-bitwise": "error",
        // typescript-eslint rules
        // check https://typescript-eslint.io/rules/ for reference
        "@typescript-eslint/array-type": "error",
      },
    },
  ],
  root: true,
};

//  - [ ] no-constant-condition
//   - [ ] no-duplicate-imports
//   - [ ] no-fallthrough
//   - [ ] no-loss-of-precision
//   - [ ] no-promise-executor-return
//   - [ ] use-isnan
//   - [ ] arrow-body-style [error,always]
//   - [ ] default-case
//   - [ ] default-case-last
