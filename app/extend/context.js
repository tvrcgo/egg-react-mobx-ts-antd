const resolve = require('path').resolve

module.exports = {
  // 应用启动时读取 build 生成的资源文件
  get assets() {
    const lib = require(resolve(process.cwd(), 'run/lib_assets.json'))
    const entry = require(resolve(process.cwd(), 'run/app_assets.json'))
    return Object.assign({}, lib, entry)
  }
}
