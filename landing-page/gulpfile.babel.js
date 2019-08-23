import gulp from 'gulp';
import connect from 'gulp-connect';
import notify from 'gulp-notify';
import livereload from 'gulp-livereload';
import del from 'del';
import util from 'gulp-util';
import concat from 'gulp-concat';
import plumbler from 'gulp-plumber';
import imagemin from 'gulp-imagemin';
import minifyCss from 'gulp-minify-css';
import minifyHTML from 'gulp-minify-html';
import rev from 'gulp-rev';
import revCollector from 'gulp-rev-collector';
import uglify from 'gulp-uglify';
import sass from 'gulp-sass';
import babel from 'gulp-babel';

/**
 *
 * @type {{jsSRC: string, distDir: string, revDir: string, htmlSRC: string, buildDir: string, sassSRC: string, imgSRC: string}}
 */
const PATH = {
  htmlSRC: 'src/',
  sassSRC: 'src/styles/',
  imgSRC: 'src/images/',
  jsSRC: 'src/js/',


  buildDir: 'build/',
  revDir: 'rev/',
  distDir: 'dist/'
};

/**
 *
 * @param error
 */
const onError = (error) => {
  util.beep();
  util.log(util.colors.red(error));
};

/**
 *
 * @returns {*}
 */
const igniteServer = () => {
  return connect.server({
    root: 'build',
    livereload: true
  })
};

gulp.task('b-html', () => {
  return gulp.src(PATH.htmlSRC.concat('**/*.html'))
      .pipe(gulp.dest(PATH.buildDir.concat('/')))
      .pipe(livereload())
});

gulp.task('b-css', () => {
  return gulp.src(PATH.sassSRC.concat('**/*.scss'))
      .pipe(sass({
        includePaths: require('node-neat').includePaths,
        style: 'nested',
        onError: () => {
          console.log('Warning: Something happens when compile SASS');
        }
      }))
      .pipe(plumbler({errorHandler: onError()}))
      .pipe(gulp.dest(PATH.buildDir.concat('/css')))
      .pipe(livereload())
});

gulp.task('b-js', () => {
  return gulp.src(PATH.jsSRC.concat('*.js'))
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(plumbler({errorHandler: onError}))
      .pipe(changed(PATH.buildDir.concat('/js')))
      .pipe(gulp.dest(PATH.buildDir.concat('/js')))
      .pipe(livereload())
});

gulp.task('b-img', () => {
  return gulp.src(PATH.imgSRC.concat('**/*.+(png|jpg|jpeg|gif|svg)'))
      .pipe(changed(PATH.buildDir.concat('/images')))
      .pipe(gulp.dest(PATH.buildDir.concat('/images')))
      .pipe(livereload())
});

gulp.task('watch', () => {e
  gulp.watch('src/*.html', ['b-html']);
  gulp.watch('src/styles', ['b-css']);
  gulp.watch(PATH.jsSRC.concat('**/*.js'), ['b-js']);
  gulp.watch(PATH.imgSRC.concat('**/*.+(png|jpg|jpeg|gif|svg'), ['b-images'])
});

gulp.task('build', ['b-html','b-css','b-js','b-img'], () => {
  return igniteServer();
});

const ENV = process.env.SERVER_ENV||'development';
if(ENV === 'development') {
  gulp.task('default', ['build, watch'])
}