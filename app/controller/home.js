'use strict';

exports.index = function* index() {
  yield this.render('index.ejs', {
    title: 'Hi, node',
    entry: 'index',
    assets: this.assets,
    props: {}
  })
};
