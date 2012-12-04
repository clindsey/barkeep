module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    meta: {
      ducksboard_api_key: 'foo.bar'
    },
    snockets: {
      test: {
          src: ['test/fixtures/b.js'],
          options: {
              concat: {
                 destExtension: "debug.js",
                 destDir: "target"
              },
              min: {
                 destExtension: "min.js"
              }
          }
      },
      coffee: {
        src: ['test/fixtures/first.coffee'],
        options: {
            concat: {
              destExtension: "debug.coffee",
              destDir: 'target'
            }
        }
      }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },
    deploy: {
        aws_key: 'key',
        aws_secret: 'secret',
        aws_bucket: 'bucket',
        bucketDir: 'scripts',
        srcDir: 'tasks',
        src: ['tasks/*.js']
    },
    jshint: {
      files: ['grunt.js', 'tasks/**/*.js', 'test/**/*.js'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true
      },
      globals: {}
    },
    ducksboard: {
        tasks: {
            src: ['tasks/*.js'],
            endpoint: 'foo.bar'
        }
    }
  });
  
  // Load S3 -- currently does not work with grunt-0.4
  // grunt.loadNpmTasks('grunt-s3');
    grunt.loadNpmTasks('grunt-contrib-jshint');

  // Load local tasks.
  grunt.loadTasks('tasks');
  
  // Default task.
  grunt.registerTask('default', 'jshint');
};
