module.exports = function(grunt) {

    // require('es6-promise').polyfill();
    // var postcss = require('postcss');

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
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({browsers: ['last 5 versions']})
                ]
            },
            dist: {
                src: 'v2/my-app/assets/css/style.css'
                //dest: 'v2/my-app/assets/css/prefixed-style.css'
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
    grunt.loadNpmTasks('grunt-postcss');

    grunt.registerTask('default', ['jshint','sass:dev','postcss']);
    grunt.registerTask('cssprefixer',['postcss']);

};