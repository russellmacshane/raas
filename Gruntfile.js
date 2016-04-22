module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            express: {
                files: ['server.js', 'app/**/*.js'],
                tasks: ['express:dev'],
                options: {
                    spawn: false
                }
            },
            gruntfile: {
                files: ['Gruntfile.js']
            }
        },
        express: {
            options: {
                // Override defaults here
            },
            dev: {
                options: {
                    script: 'server.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');

    // Default task(s).
    grunt.registerTask('default', ['express:dev', 'watch']);
};