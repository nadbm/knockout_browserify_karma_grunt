/**
 * Created by ritz078 on 14/05/15.
 */

module.exports=function(grunt){
    grunt.initConfig({
        browserify:{
            dist:{
                options:{
                  // transform:[[{'loose':"all"}]]
                },
                files: {
                    './dist/module.js':['./modules/index.js']
                }
            }
        },
	karma: {
	  unit: {
		configFile:'karma.conf.js'
	  }
	},
        watch:{
            scripts:{
                files:['./modules/*.js'],
                tasks:['browserify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('default',["watch"]);
    grunt.registerTask('test',["grunt-karma"]);
    grunt.registerTask('build',["browserify"]);
};

