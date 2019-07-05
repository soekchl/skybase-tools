const path = require('path')
const packageJson = require('../package')
module.exports = {
  name: packageJson.name,
  rootDir: path.join(__dirname, '../'),
  redis: {
    host: 'localhost',
    port: 6379,
    auth: '',
    db: 2
  },
  phoneMsgKey: {
    saveTime: 7200
  }
}
