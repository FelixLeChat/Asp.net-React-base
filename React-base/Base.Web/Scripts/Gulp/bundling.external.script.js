"use strict";

var del = require("del");
var gulp = require("gulp");
var gutil = require("gulp-util");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var plumber = require("gulp-plumber");
var sourcemaps = require("gulp-sourcemaps");

// Bundle external scripts
var config = {
    dest: "Content/js/Bundle/"
}
gulp.task("external-scripts-bundle", [
    "external-bundle"], function () { });

gulp.task("external-bundle", [
    "external-scripts-clean",
    "jquery-bundle",
    "bootstrap-bundle",
    "kube-bundle",
    "modernizr-bundle",
    "underscore-bundle"], function () {
        return minifyAndBundle([
            "Content/js/Bundle/jquery-bundle.min.js",
            "Content/js/Bundle/bootstrap-bundle.min.js",
            "Content/js/Bundle/kube-bundle.min.js",
            "Content/js/Bundle/modernizr-bundle.min.js",
            "Content/js/Bundle/underscore-bundle.min.js"], "external-bundle.min.js");
});

gulp.task("jquery-bundle", [], function () {
    return minifyAndBundle("Content/js/External/Jquery/**/*.js", "jquery-bundle.min.js");
});
gulp.task("bootstrap-bundle", [], function () {
    return minifyAndBundle("Content/js/External/Bootstrap**/*.js", "bootstrap-bundle.min.js");
});
gulp.task("kube-bundle", [], function () {
    return minifyAndBundle([
        "Content/js/External/Kube/_app.js",
    "Content/js/External/Kube/_observer.js",
    "Content/js/External/Kube/alert.js",
    "Content/js/External/Kube/animation.js",
    "Content/js/External/Kube/collapse.js",
    "Content/js/External/Kube/dropdown.js",
    "Content/js/External/Kube/message.js",
    "Content/js/External/Kube/modal.js",
    "Content/js/External/Kube/offcanvas.js",
    "Content/js/External/Kube/sticky.js",
    "Content/js/External/Kube/tabs.js",
    "Content/js/External/Kube/toggleme.js"], "kube-bundle.min.js");
});
gulp.task("modernizr-bundle", [], function () {
    return minifyAndBundle(["Content/js/External/Modernizr/**/*.js"], "modernizr-bundle.min.js");
});
gulp.task("underscore-bundle", [], function () {
    return minifyAndBundle(["Content/js/External/Underscore/**/*.js"], "underscore-bundle.min.js");
});

gulp.task("external-scripts-clean", function () {
    return del([
        "bootstrap-bundle.min.js",
        "jquery-bundle.min.js",
        "kube-bundle.min.js",
        "modernizr-bundle.min.js",
        "underscore-bundle.min.js"]);
});

var minifyAndBundle = function (source, filename) {
    return gulp.src(source)
        .pipe(sourcemaps.init())
        .pipe(plumber({ errorHandler: function (error) { handleError(error); } }))
        .pipe(concat(filename))
        .pipe(sourcemaps.write(".", { sourceRoot: "/Content/" }))
        .pipe(gulp.dest(config.dest));
}

var handleError = function (error) {
    gutil.log(gutil.colors.red("Error with plugin:"), gutil.colors.gray(error.plugin));
    gutil.log(gutil.colors.magenta("Message:"), gutil.colors.gray(error.message));
    gutil.log(gutil.colors.magenta("Filename:"), gutil.colors.gray(error.fileName));
    gutil.log(gutil.colors.magenta("Line Number:"), gutil.colors.gray(error.lineNumber));
};