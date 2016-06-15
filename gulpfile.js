'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');

function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end');
}

gulp.task('scss',function() {
  gulp.src('scss/app.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', handleErrors))
    .pipe(rename('app.css'))
    // .pipe(sass({outputStyle: 'compressed'}).on('error', handleErrors))
    // .pipe(rename('app.min.css'))
    .pipe(gulp.dest('css'))
});

gulp.task('watch', ['scss'], function () {
  gulp.watch('scss/**/*', ['scss']);
});

gulp.task('default', ['watch']);
