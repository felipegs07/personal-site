var gulp = require('gulp');
    var sass = require('gulp-sass');
    var watch = require('gulp-watch');
    
    gulp.task('sass', function(){
        return gulp.src('src/sass/main.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
    });

    gulp.task('watch', function(){
        gulp.watch('src/base/*.scss', gulp.series('sass'));
        gulp.watch('src/components/*.scss', gulp.series('sass'));
        gulp.watch('src/layout/*.scss', gulp.series('sass'));
        gulp.watch('src/pages/*.scss', gulp.series('sass'));
        gulp.watch('src/utils/*.scss', gulp.series('sass'));
    });

    //gulp.task('default', ['sass', 'watch']);