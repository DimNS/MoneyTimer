var gulp       = require('gulp');             // Сам Gulp JS
var cleanCSS   = require('gulp-clean-css');   // Минификация CSS
var concat     = require('gulp-concat');      // Склейка css и js файлов
var rev        = require('gulp-rev');         // Версионность файлов
var revRewrite = require('gulp-rev-rewrite'); // Внедрение ссылок на css и js файлы в index.html
var sort       = require('gulp-sort');        // Сортировка списка файлов
var uglify     = require('gulp-uglify');      // Минификация JS
var includer   = require('gulp-x-includer');  // Склейка html файлов
var del        = require('del');              // Удаление файлов

// YOUR TASKS

function bootstrap() {
    var list = [
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
    ];

    return gulp.src(list)
        .pipe(gulp.dest('public/assets/plugins/bootstrap'));
}

function jqueryLightAjax() {
    var list = [
        'node_modules/jquery-lightajax/dist/jquery.lightajax.min.css',
        'node_modules/jquery-lightajax/dist/jquery.lightajax.min.js',
    ];

    return gulp.src(list)
        .pipe(gulp.dest('public/assets/plugins/jquery-lightajax'));
}

function others(done) {
    var list = [
        'node_modules/dimns-is-empty-js/dist/isEmpty.min.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/template7/dist/template7.min.js'
    ];

    if (list.length > 0) {
        return gulp.src(list)
            .pipe(gulp.dest('public/assets/plugins'));
    } else {
        done();
    }
}

var plugins = gulp.parallel(
    bootstrap,
    jqueryLightAjax,
    others
);

// CLEAN

function cleanAssets() {
    return del('public/assets/**', {force: true});
}

function cleanAppCSS() {
    return del('public/assets/app-*.min.css');
}

function cleanAppJS() {
    return del('public/assets/app-*.min.js');
}

function cleanAppMinCSS() {
    return del('public/assets/app.min.css');
}

function cleanAppMinJS() {
    return del('public/assets/app.min.js');
}

// WATCHER

function watcherCSS() {
    return gulp.watch('src/css/*.css', gulp.series(
        cleanAppCSS,
        appCSS,
        revManifestAppCSS,
        cleanAppMinCSS,
        indexHTML
    ));
}

function watcherJS() {
    return gulp.watch('src/js/**/*.js', gulp.series(
        cleanAppJS,
        appJS,
        revManifestAppJS,
        cleanAppMinJS,
        indexHTML
    ));
}

function watcherHTML() {
    return gulp.watch('src/html/**/*.html', indexHTML);
}

// APP

function copyToAssets() {
    return gulp.src(['src/copy-to-assets/**/*'])
        .pipe(gulp.dest('public/assets'));
}

function appCSS() {
    return gulp.src('src/css/*.css')
        .pipe(sort())
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('public/assets'));
}

function appJS() {
    return gulp.src('src/js/**/*.js')
        .pipe(sort())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('public/assets'));
}

function minAppCSS() {
    return gulp.src('public/assets/app.min.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('public/assets'));
}

function minAppJS() {
    return gulp.src('public/assets/app.min.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/assets'));
}

function revManifestAppCSS() {
    return gulp.src('public/assets/app.min.css')
        .pipe(rev())
        .pipe(gulp.dest('public/assets'))
        .pipe(rev.manifest('./rev-manifest.json', {
            base : 'public/assets',
            merge: true
        }))
        .pipe(gulp.dest('public/assets'));
}

function revManifestAppJS() {
    return gulp.src('public/assets/app.min.js')
        .pipe(rev())
        .pipe(gulp.dest('public/assets'))
        .pipe(rev.manifest('./rev-manifest.json', {
            base : 'public/assets',
            merge: true
        }))
        .pipe(gulp.dest('public/assets'));
}

function indexHTML() {
    var manifest = gulp.src('./rev-manifest.json');

    return gulp.src('src/html/index.html')
        .pipe(includer())
        .pipe(revRewrite({
            manifest: manifest
        }))
        .pipe(gulp.dest('public'));
}

// VARS

var allFirst = gulp.series(
    gulp.parallel(
        copyToAssets,
        plugins,
    ),
    appCSS,
    appJS
);

var allSecond = gulp.series(
    revManifestAppCSS,
    revManifestAppJS,
    cleanAppMinCSS,
    cleanAppMinJS,
    indexHTML
);

// TASKS

gulp.task('build', gulp.series(
    cleanAssets,
    allFirst,
    gulp.parallel(
        minAppCSS,
        minAppJS
    ),
    allSecond
));

gulp.task('build-dev', gulp.series(
    cleanAssets,
    allFirst,
    allSecond
));

gulp.task('watcher', gulp.series(
    'build-dev',
    gulp.parallel(
        watcherCSS,
        watcherJS,
        watcherHTML
    )
));