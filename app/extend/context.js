const resolve = require('path').resolve

const lib = require(resolve(process.cwd(), 'run/lib_assets.json'))
const entry = require(resolve(process.cwd(), 'run/app_assets.json'))

module.exports = {
  // 会话发起时读取 build 生成的资源文件，输出到 locals
  * launch(tpl, locals) {
    const assets = Object.assign({}, lib, entry)
    yield this.render(tpl, Object.assign({
      assets
    }, locals))
  }
}
