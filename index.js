const root = require('app-root-path')

root.setPath(__dirname)

global.root = root

require('./session')
