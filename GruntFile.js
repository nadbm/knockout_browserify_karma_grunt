/**
 * Created by ritz078 on 14/05/15.
 */

module.exports=function(grunt){
    grunt.initConfig({
        browserify:{
            dist:{
                options:{
                    transform:['babelify']
                },
                files: {'dist/module.js':'modules/index.js'}
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('build',["browserify"]);
};

