// Generated on 2016-01-20 using generator-angular 0.15.1
'use strict';

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-wiredep-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  //// Automatically load required Grunt tasks
  //require('jit-grunt')(grunt, { //TODO: Switch to that once all else is fine
  //  useminPrepare: 'grunt-usemin',
  //  ngtemplates: 'grunt-angular-templates',
  //  cdnify: 'grunt-google-cdn'
  //});
  //
  //// Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };
  //
  //// Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      //bower: {
      //  files: ['bower.json'],
      //  tasks: ['wiredep']
      //},
      //js: {
      //  files: ['<%= yeoman.app %>/{,*/}*.js'],
      //  tasks: [''],
      //  options: {
      //    livereload: '<%= connect.options.livereload %>'
      //  }
      //},
      //jsTest: {
      //  files: ['test/spec/{,*/}*.js'],
      //  tasks: ['newer:jshint:test', 'newer:jscs:test', 'karma']
      //},
      //styles: {
      //  files: ['<%= yeoman.app %>/assets/styles/{,*/}*.css'],
      //  tasks: ['newer:copy:styles', 'postcss']
      //},
      //gruntfile: {
      //  files: ['Gruntfile.js']
      //},
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.dist %>/**/*'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: '127.0.0.1',
        livereload: 35730
      },
      livereload: {
        options: {
          open: true,
          base: '<%= yeoman.app %>'//,
          //middleware: function (connect) {
          //  return [
          //    connect.static('.tmp'),
          //    connect().use(
          //      '/bower_components',
          //      connect.static('./bower_components')
          //    ),
          //    connect().use(
          //      '/app/styles',
          //      connect.static('./app/styles')
          //    ),
          //    connect.static(appConfig.app)
          //  ];
          //}
        }
      },
      //test: {
      //  options: {
      //    port: 9001,
      //    middleware: function (connect) {
      //      return [
      //        connect.static('.tmp'),
      //        connect.static('test'),
      //        connect().use(
      //          '/bower_components',
      //          connect.static('./bower_components')
      //        ),
      //        connect.static(appConfig.app)
      //      ];
      //    }
      //  }
      //},
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      }
    },
    //
    //  // Make sure there are no obvious mistakes
    //  jshint: {
    //    options: {
    //      jshintrc: '.jshintrc',
    //      reporter: require('jshint-stylish')
    //    },
    //    all: {
    //      src: [
    //        'Gruntfile.js',
    //        '<%= yeoman.app %>/{,*/}*.js'
    //      ]
    //    },
    //    test: {
    //      options: {
    //        jshintrc: 'test/.jshintrc'
    //      },
    //      src: ['test/spec/{,*/}*.js']
    //    }
    //  },
    //
    //  // Make sure code styles are up to par
    //  jscs: {
    //    options: {
    //      config: '.jscsrc',
    //      verbose: true
    //    },
    //    all: {
    //      src: [
    //        'Gruntfile.js',
    //        '<%= yeoman.app %>/{,*/}*.js'
    //      ]
    //    },
    //    test: {
    //      src: ['test/spec/{,*/}*.js']
    //    }
    //  },
    //
    //  // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            //'.tmp',
            '<%= yeoman.dist %>/{,*/}*'//,
            //'!<%= yeoman.dist %>/.git{,*/}*'
          ]
        }]
      }//,
      //server: '.tmp'
    },
    concat: {
      options: {
        separator: '//'
      },
      dist: {
        src: [
          'app/components/dhtmlx/main.js',
          'app/components/dhtmlx/directives/*.js',
          'app/components/dhtmlx/factories/*.js'
        ],
        dest: 'directives.js'
      }
    },
    //
    //  // Add vendor prefixed styles
    //  postcss: {
    //    options: {
    //      processors: [
    //        require('autoprefixer-core')({browsers: ['last 1 version']})
    //      ]
    //    },
    //    server: {
    //      options: {
    //        map: true
    //      },
    //      files: [{
    //        expand: true,
    //        cwd: '.tmp/styles/',
    //        src: '{,*/}*.css',
    //        dest: '.tmp/styles/'
    //      }]
    //    },
    //    dist: {
    //      files: [{
    //        expand: true,
    //        cwd: '.tmp/styles/',
    //        src: '{,*/}*.css',
    //        dest: '.tmp/styles/'
    //      }]
    //    }
    //  },
    //
    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath: /\.\.\//
      }//,
      //test: {
      //  devDependencies: true,
      //  src: '<%= karma.unit.configFile %>',
      //  ignorePath: /\.\.\//,
      //  fileTypes: {
      //    js: {
      //      block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
      //      detect: {
      //        js: /'(.*\.js)'/gi
      //      },
      //      replace: {
      //        js: '\'{{filePath}}\','
      //      }
      //    }
      //  }
      //}
    },
    wiredepCopy: {
      target: {
        options: {
          src: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          wiredep: {}
        }
      }
    },
    //
    //  // Renames files for browser caching purposes
    //  filerev: {
    //    dist: {
    //      src: [
    //        '<%= yeoman.dist %>/{,*/}*.js',
    //        '<%= yeoman.dist %>/assets/styles/{,*/}*.css',
    //        '<%= yeoman.dist %>/assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
    //        '<%= yeoman.dist %>/assets/styles/fonts/*'
    //      ]
    //    }
    //  },
    //
    //  // Reads HTML for usemin blocks to enable smart builds that automatically
    //  // concat, minify and revision files. Creates configurations in memory so
    //  // additional tasks can operate on them
    //  useminPrepare: {
    //    html: '<%= yeoman.app %>/index.html',
    //    options: {
    //      dest: '<%= yeoman.dist %>',
    //      flow: {
    //        html: {
    //          steps: {
    //            js: ['concat', 'uglifyjs'],
    //            css: ['cssmin']
    //          },
    //          post: {}
    //        }
    //      }
    //    }
    //  },
    //
    //  // Performs rewrites based on filerev and the useminPrepare configuration
    //  usemin: {
    //    html: ['<%= yeoman.dist %>/{,*/}*.html'],
    //    css: ['<%= yeoman.dist %>/assets/styles/{,*/}*.css'],
    //    js: ['<%= yeoman.dist %>/{,*/}*.js'],
    //    options: {
    //      assetsDirs: [
    //        '<%= yeoman.dist %>',
    //        '<%= yeoman.dist %>/assets/images',
    //        '<%= yeoman.dist %>/assets/styles'
    //      ],
    //      patterns: {
    //        js: [[/(images\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g, 'Replacing references to images']]
    //      }
    //    }
    //  },
    //
    //  imagemin: {
    //    dist: {
    //      files: [{
    //        expand: true,
    //        cwd: '<%= yeoman.app %>/assets/images',
    //        src: '{,*/}*.{png,jpg,jpeg,gif}',
    //        dest: '<%= yeoman.dist %>/assets/images'
    //      }]
    //    }
    //  },
    //
    //  svgmin: {
    //    dist: {
    //      files: [{
    //        expand: true,
    //        cwd: '<%= yeoman.app %>/assets/images',
    //        src: '{,*/}*.svg',
    //        dest: '<%= yeoman.dist %>/assets/images'
    //      }]
    //    }
    //  },
    //
    //  htmlmin: {
    //    dist: {
    //      options: {
    //        collapseWhitespace: true,
    //        conservativeCollapse: true,
    //        collapseBooleanAttributes: true,
    //        removeCommentsFromCDATA: true
    //      },
    //      files: [{
    //        expand: true,
    //        cwd: '<%= yeoman.dist %>',
    //        src: ['*.html'],
    //        dest: '<%= yeoman.dist %>'
    //      }]
    //    }
    //  },
    //
    //  ngtemplates: {
    //    dist: {
    //      options: {
    //        module: 'angularDhtmlxDemoApp',
    //        htmlmin: '<%= htmlmin.dist.options %>',
    //        usemin: 'root'
    //      },
    //      cwd: '<%= yeoman.app %>',
    //      src: 'root/{,*/}*.html',
    //      dest: '.tmp/templateCache.js'
    //    }
    //  },
    //
    //  // ng-annotate tries to make the code safe for minification automatically
    //  // by using the Angular long form for dependency injection.
    //  ngAnnotate: {
    //    dist: {
    //      files: [{
    //        expand: true,
    //        cwd: '.tmp/concat/scripts',
    //        src: '*.js',
    //        dest: '.tmp/concat/scripts'
    //      }]
    //    }
    //  },
    //
    //  // Replace Google CDN references
    //  cdnify: {
    //    dist: {
    //      html: ['<%= yeoman.dist %>/*.html']
    //    }
    //  },
    //
    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: '<%= yeoman.app %>',
            dest: '<%= yeoman.dist %>',
            src: [
              '*.{ico,png,txt}',
              '*.html',
              'root/{,*/}*.html',
              'root/{,*/}*.js',
              'app.js',
              'assets/{,*/}*.*',
              'components/**/*',
              'bower_components/dhtmlx/dhtmlx.css'
            ]
          }//,
          //{
          //  expand: true,
          //  cwd: '.tmp/images',
          //  dest: '<%= yeoman.dist %>/assets/images',
          //  src: ['generated/*']
          //}
        ]
      }//,
      //styles: {
      //  expand: true,
      //  cwd: '<%= yeoman.app %>/assets/styles',
      //  dest: '.tmp/styles/',
      //  src: '{,*/}*.css'
      //}
    }//,
    //
    //  // Run some tasks in parallel to speed up the build process
    //  //concurrent: {
    //  //  server: [
    //  //    'copy:styles'
    //  //  ],
    //  //  test: [
    //  //    'copy:styles'
    //  //  ],
    //  //  dist: [
    //  //    'copy:styles',
    //  //    'imagemin',
    //  //    'svgmin'
    //  //  ]
    //  //},
    //
    //  // Test settings
    //  karma: {
    //    unit: {
    //      configFile: 'test/karma.conf.js',
    //      singleRun: true
    //    }
    //  }
  });
  //
  //
  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    console.log(target);
    //if (target === 'dist') {
    //  return grunt.task.run(['build', 'connect:dist:keepalive']);
    //}
    //grunt.log.warn(target);
    //grunt.log.warn('Targets other than dist not supported!');
    grunt.task.run([
      //'clean:server',
      //'wiredep',
      //'concurrent:server',
      //'postcss:server',
      'connect:livereload',
      'watch'
    ]);
  });
  //
  //grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
  //  grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
  //  grunt.task.run(['serve:' + target]);
  //});
  //
  //grunt.registerTask('test', [
  //  'clean:server',
  //  'wiredep',
  //  'concurrent:test',
  //  'postcss',
  //  'connect:test',
  //  'karma'
  //]);
  //
  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    //  'useminPrepare', //TODO: Perhaps later!
    //  'concurrent:dist',
    //  'postcss',
    //  'ngtemplates',
    //  'concat',
    //  'ngAnnotate',
    'copy:dist',
    'wiredepCopy'
    //  'cdnify',
    //  'cssmin',
    //  'uglify',
    //  'filerev',
    //  'usemin',
    //  'htmlmin'
  ]);

  grunt.registerTask('buildLibrary', [
    'concat:dist'
  ]);
};
