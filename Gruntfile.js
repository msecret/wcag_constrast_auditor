'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    nodeunit: {
      files: ['test/**/*_test.js'],
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      lib: {
        src: ['lib/*.js']
      },
      test: {
        src: ['test/*.js']
      },
    },
    watch: {
    },
    browserify: {
      page: {
        options: {
          exclude: 'lib/page/build.js',
          browserifyOptions: {
             debug: true
          }
        },
        src: ['lib/page/*.js'],
        dest: 'lib/page/build.js'
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-testling');

  grunt.registerTask('test', ['jshint', 'testling', 'build', 'nodeunit']);
  grunt.registerTask('build', ['jshint', 'browserify']);
  // Default task.
  grunt.registerTask('default', ['jshint', 'test', 'build']);
};
