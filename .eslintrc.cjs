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
   * the default, just remove or uncomment the whole "rules" section inside the
   * "overrides" property and you are done.
   *
   * The following rules are my personal preference and reflect a subset of the
   * recommended options. They also include a lot of the more strict options NOT
   * included in the recommended ones. My goal is to simplify having a
   * consistent code base/code style, to avoid catchable bugs early and advocate
   * for usage of newer features of the language.
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
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        "@typescript-eslint/no-unnecessary-condition": "error",
        "@typescript-eslint/prefer-includes": "error",
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/prefer-reduce-type-parameter": "error",
        "@typescript-eslint/prefer-string-starts-ends-with": "error",
        "@typescript-eslint/ban-types": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-unsafe-call": "error",
        "@typescript-eslint/no-unsafe-return": "error",
        "@typescript-eslint/no-unsafe-member-access": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/restrict-plus-operands": "error",
      },
    },
  ],
  root: true,
};
