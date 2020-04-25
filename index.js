const appRoot = require('app-root-path');
const dir = require('dir_filenames');
const _ = require('lodash');
const path = require('path');

function isClass(func) {
  return typeof func === 'function'
    && /^class\s/.test(Function.prototype.toString.call(func));
}

const files = dir(`${appRoot}/dist`);

files.forEach((item) => {
  /* eslint-disable import/no-dynamic-require */
  /* eslint-disable global-require */
  const name = path.parse(item).base.replace(/\.\w+$/, '');
  if (isClass(require(item).default)) {
    exports[_.upperFirst(name)] = require(item).default;
  } else {
    exports[name] = require(item).default;
  }
  /* eslint-enable global-require */
  /* eslint-enable import/no-dynamic-require */
});
