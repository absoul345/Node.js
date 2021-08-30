module.exports = {
  pareser: "@babel/eslint-parser",
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    quotes: [2, "single", { avoidEscape: true, allowTemplateLiterals: true }],
    " comma-dangle": "off",
    "space-before-function-paren": 0,
  },
};
