#!/usr/bin/env node
const argv = require('yargs').argv
    , path = require('path')
    , initiate = require('../index');

let currentPath = !!argv['baseDir'] && typeof argv['baseDir'] === 'string' ? path.join(process.cwd(), argv['baseDir']) : process.cwd();
currentPath = currentPath !== process.cwd() ? currentPath.replace(process.cwd(), "") : currentPath;
const port = (!!argv['p'] && typeof argv['p'] === 'number') || (!!argv['port'] && typeof argv['port'] === 'number') ? (argv['port'] || argv['p']) : 3000;
const watch = (argv['w'] && typeof argv['w'] === 'boolean') || (argv['watch'] && typeof argv['watch'] === 'boolean') ? (argv['w'] || argv['watch']) : false;

initiate(port, currentPath, watch);

