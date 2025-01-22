// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  ignorePatterns: ["/dist/*"],
  plugins: ["prettier", "react-native"],
  rules: {
    "react-native/no-unused-styles": "error",
  },
};
