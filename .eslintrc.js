module.exports = {
  root: true,
  extends: [
    "@react-native",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "@typescript-eslint", "jest"],
  rules: {
    "prettier/prettier": "off",
    quotes: ["error", "double"],
    "@typescript-eslint/no-var-requires": "off",
    "react/no-unstable-nested-components": "off",
    "react/react-in-jsx-scope": "off",
  },
};
