import gulp from 'gulp';

const copy = () => {
  return gulp.src([
    'source/fonts/**',
    'source/img/**',
    'source/favicon/**'
  ], {
    base: 'source',
  })
      .pipe(gulp.dest('build'));
};

export {copy};
