const Prism = require("prismjs");
const prettier = require("prettier");

export const parseRawCode = (rawCode: string) => {
  const cleanedCode = rawCode
    .replace(/\(\) => GWT\(async \(Given, When, Then\) => {/g, "")
    .replace(/\w*_1\./g, "")
    .replace(/async/g, "")
    .replace(/await/g, "")
    .replace(/new/g, "")
    .replace(/const/g, "")
    .replace(/}\)/g, "");
  const prettierCode = prettier.format(cleanedCode, {
    parser: "babel",
    semicolon: false,
  });
  return Prism.highlight(
    prettierCode,
    Prism.languages.javascript,
    "javascript"
  );
};
