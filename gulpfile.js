/**
 * @author Bilal Cinarli
 */

'use strict';

var gulp    = require('gulp'),
    pkg     = require('./package.json'),
    sass    = require('gulp-sass'),
    csslint = require('gulp-csslint'),
    rename  = require('gulp-rename');

var tasks = {
    sass:    function() {
        return gulp.src('settings.scss')
            .pipe(sass({
                outputStyle: 'expanded'
            }))
            .pipe(rename(pkg.name + '.css'))
            .pipe(gulp.dest('build'));
    },
    csslint: function() {
        return gulp.src('build/' + pkg.name + '.css')
            .pipe(csslint())
            .pipe(csslint.reporter());
    }
};

gulp.task('sass', tasks.sass);

gulp.task('styles', ['sass'], function() {
    return tasks.csslint();
});

gulp.task('watch', ['styles'], function() {
    // --------------------------
    // watch:sass
    // --------------------------
    gulp.watch('**/*.scss', ['styles']);
});

gulp.task('default', ['watch']);