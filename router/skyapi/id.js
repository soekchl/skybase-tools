/* global $ */

const Snowflake = new $.Snowflake(1, 1, 0)

module.exports = {
  async getId(ctx) {
    const { count } = ctx.checkedData.data
    if (count < 1) {
      ctx.throwCode(400, `count 值不能小于1`)
      return
    }
    let data = []
    for (let i = 0; i < count; i++) {
      data.push(Snowflake.nextId().toString())
    }
    ctx.throwCode(200, '成功', data)
  }
}
