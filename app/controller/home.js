'use strict';

exports.index = function* index() {
  // this.body = 'hi, node';
  yield this.render('index.ejs', {
    assets: this.assets
  })
};
