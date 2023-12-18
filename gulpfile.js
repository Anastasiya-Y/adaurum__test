import gulp from 'gulp';
import {deleteAsync as del} from 'del';
import browserSync from 'browser-sync';

import {copy} from './gulp/copyFiles.js';
import {pug} from './gulp/compilePug.js'
import {styles} from './gulp/compileStyles.js';
import {scripts} from './gulp/compileScripts.js';
import {sprite, adaptImages, adaptSvg} from './gulp/adaptImages.js';

const clean = () => del('build');

const server = browserSync.create();

const syncServer = () => {
    server.init({
        server: {
            baseDir: 'build'
        },
        cors: true,
        notify: false,
        ui: false,
    });
}

const reloadStyles = () => styles().pipe(server.stream());

const reload = (done) => {
    server.reload();
    done();
};

const watcher = () => {
    gulp.watch('source/sass/**/*.scss', reloadStyles);
    gulp.watch('source/js/**/*.js', scripts);
    gulp.watch('source/pug/**/*.pug', gulp.series(pug, reload));
}

export const build = gulp.series(
    clean,
    copy,
    sprite,
    gulp.parallel(
        pug,
        styles,
        scripts,
        adaptImages,
        adaptSvg
    ),
    gulp.parallel(
        syncServer,
        watcher
    )
)
