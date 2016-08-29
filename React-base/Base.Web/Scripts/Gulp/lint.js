"use strict";

var gulp = require("gulp");
var sassLint = require("gulp-sass-lint");

gulp.task("lint-dev", ["lint-sass"], function () {
});

gulp.task("lint-sass", function () {
    return gulp.src("./Content/scss/App/**/*.scss")
        .pipe(sassLint({
            options: {
                formatter: "stylish", "merge-default-rules": false
            },
            rules: {
                "indentation": [1, { "size": 4 }],
                "quotes": [1, { "style": "double" }],
                "property-sort-order": [1, { "order": "recess", "ignore-custom-properties": true }],
                "property-units": [1, { "global": ["px", "s", "ms", "em", "rem"] }],
                "space-around-operator": [1, { "include": true }],
                "no-trailing-whitespace": 1,
                "final-newline": 0,
                "space-before-brace": 1,
                "space-after-colon": 1,
                "space-after-comma": 1,
                "no-color-literals": 1,
                "no-color-keywords": 1,
                "empty-line-between-blocks": 1,
                "extends-before-declarations": 1,
                "leading-zero": 1,
                "no-trailing-zero": 1,
                "mixins-before-declarations": 1,
                "no-empty-rulesets": 1,
                "no-mergeable-selectors": 1,
                "one-declaration-per-line": 1,
                "trailing-semicolon": 2
            }
        }))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
});