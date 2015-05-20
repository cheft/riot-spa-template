gulp = require 'gulp'
browserify = require 'gulp-browserify'
uglify = require 'gulp-uglify'
server = require 'gulp-server-livereload'
coffee = require 'gulp-coffee'
rename = require 'gulp-rename'
riot = require 'gulp-riot'
sleet = require 'gulp-sleet'

gulp.task 'build', ->
    gulp.src('demo/**/*.coffee')
        .pipe(coffee())
        .pipe(gulp.dest('demo'))

    gulp.src('demo/scripts/**/*.html')
        .pipe(riot({type: 'none'}))
        .pipe(gulp.dest('demo/scripts'))

    gulp.src('demo/scripts/app/test/tag.js', { read: false })
        .pipe(browserify())
        .pipe(rename('main.js'))
        .pipe(gulp.dest('demo/scripts/app/test'))

gulp.task 'serve', ->
    ser = server livereload: true, directoryListing: {path: './'}, open: true, defaultFile: 'demo/index.html'
    gulp.src('./').pipe ser

gulp.task 'watch', ['build', 'serve'], ->
    gulp.watch ['src/**', 'demo/**'], ['build']

gulp.task 'default', ['watch']
