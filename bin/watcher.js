#!/usr/bin/env node

// FIXME: Colours for info vs error output

var watch = require('node-watch');
var spawn = require('child_process').spawn;

function getFileExt(filename) {
  return filename.split('.').pop();
}

watch('es', (filename) => {
  if (getFileExt(filename) !== 'js') {
    return;
  }

  // eslint
  var eslint = spawn('npm', ['run', 'lint']);
  eslint.stdout.on('data', data => {
    if (data.indexOf('error') >= 0) {
      console.error(data.toString());
    }
  });

  // es transpilation
  var transpile = spawn('npm', ['run', 'transpile']);
  transpile.stderr.on('data', data => {
    console.error(data.toString());
  });
});

process.on('uncaughtException', err => {
  console.error('[error]: An uncaught exception occurred. Shutting down.\n\n', err);
  setTimeout(() => process.exit(1), 1000);
});
