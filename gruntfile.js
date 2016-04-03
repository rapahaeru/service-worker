module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['v2/serviceworker.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        sass: {
            dev: {
                files: {
                    'v2/my-app/assets/css/style.css' : 'v2/my-app/assets/sass/style.scss'
                }
            }

        },
        watch: {
            js: {
                files: ['v2/serviceworker.js'],
                tasks: ['jshint']
            },
            sass: {
                files: ['v2/my-app/assets/sass/style.scss'],
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['jshint'],['sass:dev']);

};