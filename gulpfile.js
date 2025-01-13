const { src, dest } = require('gulp')

function defaultTask(cb) {
  src('src/components/**')
    .pipe(dest('lib'))

  cb();
}

exports.default = defaultTask