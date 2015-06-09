gulp       = require 'gulp'
preprocess = require 'gulp-preprocess'
uglify     = require 'gulp-uglify'
coffee     = require 'gulp-coffee'
rename     = require 'gulp-rename'

gulp.task 'build', ->
    gulp.src('src/cheft.coffee')
        .pipe preprocess({context: { NODE_ENV: 'production', DEBUG: true}})
        .pipe coffee()
        .pipe gulp.dest('./dist')
        .pipe rename('cheft.min.js')
        .pipe uglify()
        .pipe gulp.dest('./dist')

gulp.task 'default', ['build']
