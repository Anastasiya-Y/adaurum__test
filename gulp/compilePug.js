import gulp from 'gulp';
import gulpPug from 'gulp-pug';
import versionNumber from 'gulp-version-number';
import plumber from 'gulp-plumber';

const pug = () => {
  return gulp.src('source/pug/pages/*.pug')
      .pipe(plumber())
      .pipe(
          versionNumber({
            'value': '%DT%',
            'append': {
              'key': '_v',
              'cover': 0,
              'to': [
                'css',
                'js'
              ]
            },
            'output': {
              'file': 'version.json',
            },
          })
      )
      // неминифицированный html
      .pipe(gulpPug({
        pretty: true,
        verbose: true,
      }))
      // минифицированный html
      // .pipe(gulpPug())
      //   .pipe(rename({
      //     extname: '.min.html'
      // }))
      .pipe(gulp.dest('build'));
};

export {pug};
