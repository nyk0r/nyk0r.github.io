module.exports = function (grunt) {
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      less: {
         all: {
            files: {
               'style.css': 'style.less'
            },

            options: {
               banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */'
            }
         }
      },

      wiredep: {
         all: {
            src: 'index.html'
         }
      },

      watch: {
         files: 'style.less',
         tasks: ['less']
      }
   });

   grunt.loadNpmTasks('grunt-contrib-less');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-wiredep');
};
