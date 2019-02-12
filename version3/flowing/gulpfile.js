const { series, src, dest, parallel } = require('gulp');
const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

    let paths = {
        img: {
            src: './images/*',
            dest: './assets/img'
        },
        scripts: {
            src: './javascript/*.js',
            dest: './assets/js'
        }
    }

    function js(){
        return src(paths.scripts.src)
            .pipe(babel({
                presets: [
                    ['@babel/env', {
                        modules:false
                    }]
                ]
            }))
            .pipe(uglify())
            .pipe(dest(paths.scripts.dest))
    }

    function img(){
        return src(paths.img.src)
            .pipe(imagemin({optimizationLevel: 5}))
            .pipe(dest(paths.img.dest))
    }

    function watch(){
        gulp.watch(paths.scripts.src, js);
        gulp.watch(paths.img.src, img);
    }

exports.js = js;
exports.img = img;
exports.watch = watch;
exports.default = parallel(js, img);
