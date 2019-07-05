module.exports = {
  __swagger__: {
    name: '相关id服务接口',
    description: '相关id服务接口'
  },
  '/skyapi/id': {
    name: '获取一个或多个id',
    desc: '获取一个或多个不重复的id',
    method: 'get',
    controller: 'skyapi/id.getId',
    param: {
      count: {
        name: '输出id个数 默认1',
        desc: '输出id个数 默认1',
        req: 0,
        def: 1,
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
