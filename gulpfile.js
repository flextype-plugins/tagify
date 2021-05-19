const gulp         = require('gulp');
const concat       = require('gulp-concat');
const csso         = require('gulp-csso');
const autoprefixer = require('gulp-autoprefixer');
const sass         = require('gulp-sass');
const size         = require("gulp-size");
const gzip         = require("gulp-gzip");
const rename       = require("gulp-rename")
sass.compiler      = require('node-sass');

/**
 * Task: gulp css
 */
 gulp.task("css", function () {
    return gulp
        .src([
            // Tagify
            'node_modules/@yaireo/tagify/dist/tagify.css',

            // Blocks
            'blocks/Tagify/block.scss',
        ])
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: [
                "last 1 version"
            ],
            cascade: false
        }))
        .pipe(csso())
        .pipe(concat('tagify.min.css'))
        .pipe(gulp.dest("blocks/Tagify/dist/css/"))
        .pipe(size({ showFiles: true }))
        .pipe(gzip())
        .pipe(rename("tagify.min.css.gz"))
        .pipe(gulp.dest("blocks/Tagify/dist/css/"))
        .pipe(size({ showFiles: true, gzip: true }));
});


/**
 * Task: gulp js
 */
 gulp.task('js', function () {
    return gulp
        .src([
            // Tagify
            'node_modules/@yaireo/tagify/dist/jQuery.tagify.min.js',

            // Blocks
            'blocks/Tagify/block.js'
        ])
        .pipe(concat('tagify.min.js'))
        .pipe(size({ showFiles: true }))
        .pipe(gulp.dest('blocks/Tagify/dist/js/'))
        .pipe(gzip())
        .pipe(rename("tagify.min.js.gz"))
        .pipe(gulp.dest("blocks/Tagify/dist/js/"))
        .pipe(size({ showFiles: true, gzip: true }));
});


/**
 * Task: gulp default
 */
gulp.task('default', gulp.series(
    'css', 'js'
));

/**
 * Task: gulp watch
 */
gulp.task('watch', function () {
    gulp.watch(["blocks/"], gulp.series('default'));
});
