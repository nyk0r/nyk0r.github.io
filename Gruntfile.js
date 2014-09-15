module.exports = function (grunt) {
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      less: {
         all: {
            files: {
               '.tmp/style.css': 'style.less'
            },

            options: {
               banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */'
            }
         }
      },

      autoprefixer: {
         all: {
            files: {
               'style.css': '.tmp/style.css'
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
         tasks: ['less', 'autoprefixer']
      }
   });

   grunt.loadNpmTasks('grunt-contrib-less');
   grunt.loadNpmTasks('grunt-autoprefixer');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-wiredep');

   grunt.registerTask('build', ['less', 'autoprefixer', 'wiredep'])
};
