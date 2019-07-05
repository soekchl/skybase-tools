module.exports = {
  __swagger__: {
    name: '相关手机验证码服务接口',
    description: '相关手机验证码服务接口'
  },
  '/skyapi/sendPhoneCode': {
    name: '发送验证码到相应手机',
    desc: '发送验证码到相应手机',
    method: 'post',
    controller: 'skyapi/phoneMsg.sendPhoneCode',
    param: {
      phone: {
        name: '手机号码',
        desc: '手机号码',
        req: 1,
        def: 0,
        type: 'string',
        reg: /^[1][0-9]{10}$/, // 正则表达式 0-9 数字
        err: '请输入正确的手机号码'
      },
    },
    'token': false,
    'needSign': false,
    'err_code': {},
    'test': {},
    'front': true
  },
  '/skyapi/checkPhoneCode': {
    name: '检查手机验证码',
    desc: '检查手机验证码',
    method: 'post',
    controller: 'skyapi/phoneMsg.checkPhoneCode',
    param: {
      phone: {
        name: '手机号码',
        desc: '手机号码',
        req: 1,
        def: null,
        type: 'string',
        reg: /^[1][0-9]{10}$/, // 正则表达式 0-9 数字
        err: '请输入正确的手机号码'
      },
      code: {
        name: '验证码',
        desc: '验证码',
        req: 1,
        def: null,
        type: 'number'
      }
    },
    'token': false,
    'needSign': false,
    'err_code': {},
    'test': {},
    'front': true
  }
}
