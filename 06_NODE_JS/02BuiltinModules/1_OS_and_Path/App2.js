const path = require('path');
const log = require('console');

log(`Path separator is : ${path.sep}`);

absolute_path = path.resolve(__dirname);
log(absolute_path);