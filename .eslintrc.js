// We don't have much control over the code generated
// by openapi-codegen, so we have to tune some expectations
// of lint. 
module.exports = {
    parserOptions: {
      project: "./tsconfig.json",
      // OpenAPI outputs ecma6 code using modules.
      // All following are needed to avoid
      // parsing errors which can be very hard to diagnose
      // with the standard espree parser.
      ecmaVersion: 6,
      sourceType: "module",
      ecmaFeatures: {
        "modules": true
      }
    },
    // We want to declare that the client code
    // can run in both browser and node evironments
    env: {
      browser: true,
      node: true
    },
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [
      "prettier/@typescript-eslint",
      "plugin:prettier/recommended"
    ],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/no-parameter-properties": "off",
      "@typescript-eslint/no-use-before-define": "off"
    }
  };
  