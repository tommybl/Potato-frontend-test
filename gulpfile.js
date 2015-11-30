var gulp = require('gulp');
var bower = require('gulp-bower');
var less = require('gulp-less');
var path = require('path');

gulp.task('default', function() {
    return bower()
        .pipe(gulp.src('./less/*.less'))
        .pipe(less({ paths: [ path.join(__dirname, 'less', 'includes') ] }))
        .pipe(gulp.dest('./css'));
});