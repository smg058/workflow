// Gulp and required plugins
var gulp          = require('gulp');
var sass          = require('gulp-sass');
var sourcemaps    = require('gulp-sourcemaps');
var autoprefixer  = require('gulp-autoprefixer');
var sassdoc       = require('gulp-sassdoc');

// Input/output paths
var input = './src/scss/**/*.scss';
var output = './assets/css';
var mapoutput = './src/maps';

// Sass options
var sassArgs = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

// Autoprefixer options
var autoprefixerArgs = {
  browsers: ['last 2 versions', '> 1%', 'Firefox ESR']
};

// Sassdoc options
var sassdocArgs = {
  dest: './assets/doc';
};

// Sass task
gulp.task('sass', function() {
  return gulp
    .src(input)
    .pipe(sourcemaps.init())
    .pipe(sass(sassArgs).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerArgs))
    .pipe(sourcemaps.write(mapoutput))
    .pipe(gulp.dest(output))
});

// Sassdoc function
gulp.task('sassdoc', function() {
  return gulp
    .src(input)
    .pipe(sassdoc(sassdocArgs))
    .resume();
});

// Watch task
gulp.task('watch', function() {
  return gulp
    .watch(input, ['sass'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

// Default task
gulp.task('default', ['sass', 'watch']);

// Production task
gulp.task('production', ['sassdoc'], function() {
  return gulp
    .src(input)
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer(autoprefixerArgs))
    .pipe(gulp.dest(output));
});
