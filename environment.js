const semver = require('semver')
const root = require('app-root-path')

if (semver.lte(process.version, '7.6.0')) {
  console.error('node must be no less than version 7.6.0')
  process.exit()
}

root.setPath(__dirname)
