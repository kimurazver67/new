const gulp        = require('gulp');
const browserSync = require('browser-sync');
const watch = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function(){
    return gulp.src("sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false 
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
        
})

gulp.task('watch', function(){
    gulp.watch("sass/**/*.+(scss|sass|css)", gulp.parallel('sass'));
    gulp.watch("./**/*.html").on("change", browserSync.reload);
    gulp.watch("js/**/*.js").on('change', gulp.parallel('scripts'));
    gulp.watch("fonts/**/*").on('all', gulp.parallel('fonts'));
    gulp.watch("icons/**/*").on('all', gulp.parallel('icons'));
    gulp.watch("img/**/*").on('all', gulp.parallel('image'));
})

gulp.task('image', function(){
    gulp.src('img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
        .pipe(browserSync.stream());
})

gulp.task('html', function () {
    return gulp.src("./*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist/"));
});

gulp.task('scripts', function () {
    return gulp.src("js/**/*.js")
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
});

gulp.task('fonts', function () {
    return gulp.src("fonts/**/*")
        .pipe(gulp.dest("dist/fonts"))
        .pipe(browserSync.stream());
});

gulp.task('icons', function () {
    return gulp.src("icons/**/*")
        .pipe(gulp.dest("dist/icons"))
        .pipe(browserSync.stream());
});


gulp.task('default', gulp.parallel('watch','server', 'sass', 'image', 'html', 'scripts', 'icons', 'fonts' ))
