
const Pack = require('../package.json')
const Config = require('../config')

/* global $ redis */

const phoneMsgKey = `${Pack.name}:phoneCode:`

module.exports = {
    checkCode,
    sendPhoneMsg
}

//  手机号和验证码是否一直验证
//  一直：return null
//  错误：return error msg
async function checkCode(phone, code) {
    let o = await redis.get(`${phoneMsgKey}${phone}`)
    if (o) {
        try {
            o = JSON.parse(o)
        } catch (error) {
            return '验证码发送后方可验证'
        }
    } else {
        return '验证码发送后方可验证'
    }

    if (o.code !== code) {
        return '验证码错误'
    }

    redis.del(`${phoneMsgKey}${phone}`) // 已验证 删除
    return null
}

// 发送手机短信
async function sendPhoneMsg(phone) {
    let code = $.tools.rnd(100000, 999999)
    let errMsg = await checkSend(phone, code)
    if (errMsg) {
        return errMsg
    }

    // NOTICE send phone msg function
    $.log(`发送手机短信 phone=${phone} code=${code}`)
}

// 检测是否可发送
async function checkSend(phone, code) {
    let t = Math.floor(+new Date() / 1000)
    let obj = {
        phone: phone,
        code,
        t
    }

    let o = await redis.get(`${phoneMsgKey}${phone}`)
    if (o) {
        o = JSON.parse(o)
        if (t - o.t < 60) {
            return `请等待 ${60 - t + o.t} 秒后在发送`
        }
    }
    await redis.setex(`${phoneMsgKey}${phone}`, Config.phoneMsgKey.saveTime, JSON.stringify(obj))

    return null
}

