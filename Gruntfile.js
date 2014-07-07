module.exports = function(grunt) {

  grunt.initConfig({
    copy: {
      main: {
        expand: true,
        cwd: '../master',
        src: '**',
        dest: 'app/widgets/nl.fokkezb.color/',
      },
    },
    clean: {
      main: ['app/widgets/nl.fokkezb.color']
    },
    titanium: {
      main: {
        options: {
          command: 'build',
          platform: 'ios',
          logLevel: 'trace',
          iosVersion: 7.1
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-titanium');

  grunt.registerTask('default', ['clean', 'copy', 'titanium']);

};