'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    env: {
      test: {
        concat: {
          PATH : {
            'value': 'node_modules/.bin',
            'delimiter': ':'
          }
        }
      }
    },
    nodeunit: {
      files: ['test/*_test.js'],
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      lib: {
        src: ['lib/*.js', '!lib/page_build.js']
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
        src: ['lib/page/build.js'],
        dest: 'lib/page_build.js'
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
