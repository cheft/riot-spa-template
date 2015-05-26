gulp = require 'gulp'
browserify = require 'gulp-browserify'
preprocess = require 'gulp-preprocess'
uglify = require 'gulp-uglify'
server = require 'gulp-server-livereload'
coffee = require 'gulp-coffee'
rename = require 'gulp-rename'
riot = require 'gulp-riot'
sleet = require 'gulp-sleet'

gulp.task 'cheft', ->
    gulp.src('src/cheft.coffee')
        .pipe preprocess({context: { NODE_ENV: 'production', DEBUG: true}})
        .pipe coffee()
        .pipe gulp.dest('./dist')
        .pipe rename('cheft.min.js')
        .pipe uglify()
        .pipe gulp.dest('./dist')

gulp.task 'build', ->
    gulp.src('demo/**/*.coffee')
        .pipe(coffee())
        .pipe(gulp.dest('demo'))

    gulp.src('demo/scripts/**/*.html')
        .pipe(riot({type: 'none'}))
        .pipe(gulp.dest('demo/scripts'))

    gulp.src('demo/scripts/main.js', { read: false })
        .pipe(browserify())
        .pipe(rename('app.js'))
        .pipe(gulp.dest('demo/scripts'))

gulp.task 'serve', ->
    ser = server host: '0.0.0.0', livereload: false, directoryListing: {path: './'}, defaultFile: 'demo/index.html'
    gulp.src('./').pipe ser

gulp.task 'watch', ['build', 'serve'], ->
    gulp.watch ['src/**', 'demo/**'], ['build']

gulp.task 'default', ['watch']
