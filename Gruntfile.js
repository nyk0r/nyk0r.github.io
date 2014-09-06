module.exports = function (grunt) {
   grunt.initConfig({
      less: {
         build: {
            files: {
               'style.css': 'style.less'
            }
         }
      },

      watch: {
         files: 'style.less',
            tasks: ['less']
      }
   });

   grunt.loadNpmTasks('grunt-contrib-less');
   grunt.loadNpmTasks('grunt-contrib-watch');
};
