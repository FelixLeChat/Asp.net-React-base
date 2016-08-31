"use strict";

var gulp = require("gulp");

// Watch scss change to build bundle
gulp.task("watch-sass", function () {
    return gulp.watch("./Content/scss/**/*.scss", ["lint-sass", "app-sass-bundle-min"]);
});

gulp.task("watch-jsx", function () {
    return gulp.watch("./Content/jsx/Components/**/*.jsx", ["react-components-bundle"]);
});

gulp.task("watch", ["app-sass-bundle-min", "watch-sass", "watch-jsx"], function () { });