"use strict";

var del = require("del");
var gulp = require("gulp");
var sass = require("gulp-sass");
var gutil = require("gulp-util");
var concat = require("gulp-concat");
var plumber = require("gulp-plumber");
var minify = require("gulp-minify-css");
var sourcemaps = require("gulp-sourcemaps");
var cachebuster = require("gulp-cache-bust");

// Source and destination for less compile
var config = {
    src: ["Content/scss/main.scss"],
    dest: "Content/scss",
    cssSrc: ["Content/scss/main.css"]
}

gulp.task("app-sass-bundle", [], function () {
    return gulp.src(config.src)
        .pipe(sourcemaps.init())
        .pipe(plumber({ errorHandler: function (error) { handleError(error); } }))
        .pipe(sass().on("error", sass.logError))
        .pipe(concat("main.css"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(config.dest));
});

gulp.task("app-sass-bundle-min", ["app-sass-bundle"], function () {
    return gulp.src(config.cssSrc)
        .pipe(sourcemaps.init())
        .pipe(plumber({ errorHandler: function (error) { handleError(error); } }))
        .pipe(minify())
        .pipe(concat("main.min.css"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(config.dest));
});


var handleError = function (error) {
    gutil.log(gutil.colors.red("Error with plugin:"), gutil.colors.gray(error.plugin));
    gutil.log(gutil.colors.magenta("Message:"), gutil.colors.gray(error.message));
    gutil.log(gutil.colors.magenta("Filename:"), gutil.colors.gray(error.fileName));
    gutil.log(gutil.colors.magenta("Line Number:"), gutil.colors.gray(error.lineNumber));
};