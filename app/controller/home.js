
exports.index = function* index() {
  yield this.launch('index.ejs', {
    title: 'Hi, node',
    entry: 'index',
    props: {}
  })
}
