const gulp = require('gulp'),
uglify = require('gulp-uglify-es').default,
minify = require('gulp-minify-css'),
htmlmini = require('gulp-minify-html'),
imagemin = require('gulp-imagemin'),
watch = require('gulp-watch'),
connect = require('gulp-connect');


//压缩js
gulp.task('minjs', function() {
    gulp.src('app/js/*js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    // 将你的默认的任务代码放在这
    console.log('压缩js');
  });

//压缩css
gulp.task('mincss', function () {
    gulp.src('app/css/*.css')  //要压缩的css
        .pipe(minify())
        .pipe(gulp.dest('dist/css'));
});

//压缩html
gulp.task('minhtml', function () {
    gulp.src('app/*html')
        .pipe(htmlmini())
        .pipe(gulp.dest('dist'));
})

//压缩图片
gulp.task('minimg', function () {
    gulp.src('app/images/*')
        .pipe(imagemin({
            progressive: true,
        }))
        .pipe(gulp.dest('dist/images'));
});

//all
gulp.task('all', ['mincss', 'minhtml', 'minjs','minimg'], function() {
    // 将你的默认的任务代码放在这
    console.log('任务执行完成');
  });

//监听
gulp.task('watch', function(){
    gulp.watch('app/*.html', ['minhtml']);
  })

//开服务器
gulp.task('connect', function() {
    connect.server({
      root:'dist',
      port:8888,
      livereload: true
    });
  });