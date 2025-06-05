const fs = require("fs");
const ejs = require("ejs");
const shell = require('shelljs');
const { Index } = require("../src/index");

function renderContent(html) {
  createFolder("./dist");
  createFolder("./dist/css");
  shell.exec("cp -r ./src/assets/images ./dist");
  fs.writeFileSync("./dist/index.html", html);
}

const createFolder = (path) => {
  try {
    fs.mkdirSync(path);
  } catch (err) {
    /* folder exists */
  }
};

function minify(html) {
  const removedSpace = html.replace(/\s+/g, " ");
  const minified = removedSpace.replace(/> <+/g, "><");
  return minified;
}

const crudeTemplate = Index();
const refinedTemplate = minify(crudeTemplate);

renderContent(refinedTemplate);
