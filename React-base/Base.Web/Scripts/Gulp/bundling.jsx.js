var gulp = require("gulp");
var react = require('gulp-react');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require("gulp-util");
var concat = require("gulp-concat");
var plumber = require("gulp-plumber");

var config = {
    dest: "Content/jsx/Bundle/"
}

gulp.task("react-components-bundle", [], function () {
    return compileAndBundle(["Content/jsx/Components/**/*.jsx"], "react-components.min.jsx");
});

var compileAndBundle = function(source, filename) {
    return gulp.src(source)
        .pipe(sourcemaps.init())
        .pipe(react())
        .pipe(plumber({ errorHandler: function (error) { handleError(error); } }))
        .pipe(concat(filename))
        .pipe(sourcemaps.write(".", { sourceRoot: "/Content/" }))
        .pipe(gulp.dest(config.dest));
};

var handleError = function (error) {
    gutil.log(gutil.colors.red("Error with plugin:"), gutil.colors.gray(error.plugin));
    gutil.log(gutil.colors.magenta("Message:"), gutil.colors.gray(error.message));
    gutil.log(gutil.colors.magenta("Filename:"), gutil.colors.gray(error.fileName));
    gutil.log(gutil.colors.magenta("Line Number:"), gutil.colors.gray(error.lineNumber));
};