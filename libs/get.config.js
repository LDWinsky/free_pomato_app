const root = require('app-root-path')
const { readFileSync } = require('fs')
const yaml = require('js-yaml')

module.exports = (path) => {
  const configPath = root.resolve(path)
  const configFile = readFileSync(configPath, 'utf8')
  return yaml.safeLoad(configFile)
}
