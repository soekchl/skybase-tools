/* global $ */

const Tools = require('../../tools/phoneCode.js')

module.exports = {
  async sendPhoneCode(ctx) {
    const { phone } = ctx.checkedData.data
    let r = await Tools.sendPhoneMsg(phone)
    if (r) {
      ctx.throwCode(400, r)
      return
    }
    ctx.throwCode(200, '成功', {})
  },
  async checkPhoneCode(ctx) {
    const { phone, code } = ctx.checkedData.data
    let r = await Tools.checkCode(phone, code)
    if (r) {
      ctx.throwCode(400, r)
      return
    }
    ctx.throwCode(200, '成功', {})
  }
}
