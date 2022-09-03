gulp.task('serve', function () {
    browserSync({
        proxy: 'site.domain.dev'
    });

    gulp.watch('assets/styles/source/**/*.scss', ['styles']);
    gulp.watch('*.php', reload);
    gulp.watch('assets/js/source/*.js', ['scripts']);
    gulp.watch('assets/js/plugins/**/*.js', ['plugins']);
});