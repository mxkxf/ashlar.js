module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'ashlar.js']
    },
    uglify: {
      my_target: {
        files: {
          'ashlar.min.js': 'ashlar.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib');

  grunt.registerTask('default', ['jshint', 'uglify']);

};