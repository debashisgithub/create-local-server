const browserSync = require('browser-sync')
    , path = require('path')
    , modRewrite = require('connect-modrewrite')
    , initPort = process.env.PORT || 3000
    , initBaseDir = process.env.DIR || path.join(__dirname, './public');

function initiate(port, baseDir, watch = false, stoc = null) {
    browserSync.init({
        watch,
        port: port || initPort,
        server: {
            baseDir: baseDir || initBaseDir,
            middleware: [
                modRewrite([
                    '!\\.\\w+$ /index.html [L]'
                ])
            ]
        }
    });
}
module.exports = initiate;