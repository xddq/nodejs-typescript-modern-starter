/* eslint-env node */
module.exports = {
  extends: [
    /**
     * Here I simply want to disable all rules. I feel like a pretty strict
     * tsconfig already catches a lot of these recommended rules and I want to
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
   * property/attribute.
   **/
  overrides: [
    {
      // Enables type checking for typescript files.
      // Src for the overrides from here :
      // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
      files: ["*.ts", "*.tsx", "*.mts", "*.cts"],
      rules: {
        "@typescript-eslint/array-type": "error",
        eqeqeq: ["error"],
      },
    },
  ],
  root: true,
};
