module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'ashlar.min.js': ['ashlar.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib');

  grunt.registerTask('default', ['uglify']);

};