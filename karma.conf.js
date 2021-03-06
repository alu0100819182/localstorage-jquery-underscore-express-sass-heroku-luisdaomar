// Karma configuration
// Generated on Thu Jan 29 2015 16:51:38 GMT+0000 (WET)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',

    // frameworks to use
    frameworks: ['mocha', 'chai'],

    client: {
      mocha: {
              ui: 'bdd'
          }
    },

    preprocessors: {
          'tests/test.html': ['html2js']
    },


    // list of files / patterns to load in the browser
    files: [
      'public/vendor/blanket.js',
      'public/vendor/chai.js',
      'public/vendor/mocha.js',
      'public/vendor/mocha-blanket.js',
      'public/vendor/sinon-1.12.2.js',
      'public/vendor/sinon-1.17.3.js',
      'public/csv.js',
      'public/csv_test.js'
    ],


    // list of files to exclude
    exclude: [

    ],

    plugins : [
      'karma-mocha',
      'karma-chai',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-html2js-preprocessor',
      'karma-safari-launcher'
    ],

   customLaunchers: {
    Chrome_travis_ci: {
      base: 'Chrome',
      flags: ['--no-sandbox']
    }
  },

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: [
               'Chrome_travis_ci',
               //'Firefox',
               //'PhantomJS',
               //'Safari'
               ],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
