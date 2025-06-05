const chokidar = require('chokidar');
const shell = require('shelljs');
const process = require('process');
require('dotenv').config();

const compileHtml = 'node ./utils/render.js';
const compileSass = 'sass src/assets/scss:dist/css --no-source-map --style=compressed';

const build = () => {
  shell.exec('clear');
  console.log('Compiling...');
  setTimeout(() => {
    shell.exec('clear');
    shell.exec(compileSass);
    shell.exec('cp -r ./src/assets/images ./dist');
    shell.exec('cp -r ./src/assets/scripts ./dist');
    shell.exec(compileHtml);
  }, 1000);
};

if (process.argv[2] === 'dev') {
  console.log(' Development Compiler started... ');
  const watcher = chokidar.watch('./src', {
    ignored: [/(^|[\\/])\../],
    persistent: true
  });
  watcher.on('change', () => {
    build();
  });
} else if (process.argv[2] === 'build') {
  build();
} else {
  console.log('npm start < option > ( dev | build) ');
}
