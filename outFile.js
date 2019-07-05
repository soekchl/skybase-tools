const fs = require('fs')

module.exports = { outFile, codeConfig }

// 配置文档
function codeConfig() {
  return {
    config: `
    phoneMsgKey: {
      saveTime: 7200
    },
`,
    common: { // 公用模块
      redis: getCommonRedis()
    }
  }
}


async function outFile(destBaseDir = '.', srcBaseDir = `${__dirname}/node_modules/skybase-tools/`) {
  let obj = {
    'router': {
      'skyapi': {
        'id.js': './router/skyapi/id.js',
        'phoneMsg.js': './router/skyapi/phoneMsg.js'
      }
    },
    'model': {
      'api': {
        'skyapi': {
          'id.js': './model/api/skyapi/id.js',
          'phoneMsg.js': './model/api/skyapi/phoneMsg.js'
        }
      }
    },
    'tools': {
      'phoneCode.js': './tools/phoneCode.js'
    }
  }
  try {
    let isExist = fs.existsSync(srcBaseDir) // 判断目录是否存在
    if (!isExist) {
      console.error(srcBaseDir, '目录不存在！')
      return
    }

    await outPutFile(destBaseDir, '', obj, srcBaseDir)
  } catch (e) {
    console.error(e.stack)
  }
}

function getCommonRedis() {
  return {
    config: `
    redis: {
      host: 'localhost',
      port: 6379,
      auth: '',
      db: 1
    },
`,
    index: {
      require: `
const createIoRedis = require('skybase/sky-module/create_ioredis')
`,
      beforeMount: `
    // 连接redis
    const redis = createIoRedis(config.redis)
    await redis.waitForConnected()
    global.redis = redis
  
    // 连接mq
    // global.rtsMQ = await createRbmq(config.stackRabbitMQ)
`
    }
  }
}

async function outPutFile(dir, key, obj, srcBaseDir) {
  if (typeof obj == 'string') {
    // console.log(`创建目录  ${dir}`)
    await fs.mkdirSync(dir, { recursive: true })
    // console.log(`原：${srcBaseDir}${obj}  目的：${dir}/${key}`)
    if (!await checkFileExist(`${srcBaseDir}${obj}`)) {
      console.error(`原文件不存在\t${srcBaseDir}${obj}`)
      return
    }
    await fs.copyFileSync(`${srcBaseDir}${obj}`, `${dir}/${key}`);
    return
  }
  for (let k in obj) {
    outPutFile(key === '' ? dir : `${dir}/${key}`, k, obj[k], srcBaseDir)
  }
}

async function checkFileExist(filePath) {
  try {
    await fs.accessSync(filePath, fs.constants.R_OK)
    return true
  } catch (e) { }
  return false
}

