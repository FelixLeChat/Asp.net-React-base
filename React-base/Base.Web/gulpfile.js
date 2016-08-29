/// <binding BeforeBuild='dev' Clean='external-scripts-clean, app-scripts-clean' ProjectOpened='external-scripts-bundle, watch' />
"use strict";

var gulp = require("gulp");
var util = require("gulp-util");
var sequence = require("run-sequence");
var requireDir = require("require-dir");

requireDir("./Scripts/gulp", { recurse: true });

// "app-scripts-bundle",
var bundle = ["external-scripts-bundle", "app-sass-bundle", "app-sass-bundle-css"];

gulp.task("dev", function (callback) {
    sequence("lint-dev", bundle, callback);
});
