const sky = require('skybase')
const config = require('./config')
const createIoredis = require('skybase/sky-module/create_ioredis')

/* global $ */

config.beforeMount = async () => {
  // 连接redis
  const redis = createIoredis(config.redis)
  await redis.waitForConnected()
  global.redis = redis
}

sky.start(config, async () => {
  $.log('项目成功启动')
})