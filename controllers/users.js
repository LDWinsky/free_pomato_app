const root = require('app-root-path')

const { User } = root.require('/databases')

exports.register = async (ctx, next) => {
  // 判断账户是否存在
  // 判断同个ID是否注册的用户短时间内超标
  //

}
