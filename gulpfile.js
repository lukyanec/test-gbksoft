var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var cleanCSS = require('gulp-clean-css');

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './'
        },
        notify: false
    });
});

gulp.task('sass', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('cleanCSS', ['sass'], function() {
  return gulp.src('css/**/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('css'))
});

gulp.task('img', function() {
    return gulp.src('images/**/*')
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('images'));
});

gulp.task('watch', ['browser-sync', 'img', 'cleanCSS'], function() {
    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('js/**/*.js', browserSync.reload);
});