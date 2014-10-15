/* jshint node:true */
module.exports = function (grunt) {
   'use strict';

   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      less: {
         all: {
            files: {
               '.tmp/style.css': 'style.less'
            },

            options: {
               banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */'//,
               //sourceMap: true
            }
         }
      },

      autoprefixer: {
         all: {
            files: {
               'style.css': '.tmp/style.css'
            }
         },

         options: {
            //map: true
         }
      },

      wiredep: {
         all: {
            src: 'index.html'
         }
      },

      jshint: {
         files: [
            'Gruntfile.js',
            'app.js'
         ],
         options: {
            jshintrc: '.jshintrc'
         }
      },

      connect: {
       server: {
            options: {
               port: 8383,
               base: '.'
            }
         }
      },

      watch: {
         files: 'style.less',
         tasks: ['less', 'autoprefixer']
      }
   });

   grunt.loadNpmTasks('grunt-contrib-less');
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-autoprefixer');
   grunt.loadNpmTasks('grunt-contrib-connect');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-wiredep');

   grunt.registerTask('default', ['less', 'autoprefixer', 'connect', 'wiredep', 'watch']);
   grunt.registerTask('build', ['less', 'autoprefixer', 'wiredep']);
};
