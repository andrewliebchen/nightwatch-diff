module.exports = function(grunt) {
  grunt.initConfig({
    nightwatch: {
      options: {
        "src_folders" : ["./tests"],
        "output_folder" : "./reports",
        "custom_commands_path" : "",
        "custom_assertions_path" : "",
        "globals_path" : "",

        "selenium" : {
          "start_process" : true,
          "server_path" : "",
          "log_path" : "",
          "host" : "127.0.0.1",
          "port" : 4444
        },

        "test_settings" : {
          "default" : {
            "launch_url" : "http://localhost",
            "selenium_port"  : 4444,
            "selenium_host"  : "localhost",
            "silent": true,
            "firefox_profile": false,
            "chrome_driver": "",
            "ie_driver": "",
            "screenshots" : {
              "enabled" : false,
              "path" : ""
            },
            "desiredCapabilities": {
              "browserName": "firefox",
              "javascriptEnabled": true,
              "acceptSslCerts": true
            }
          }
        }
      },

      // test groups
      google : {
        "src_folders" : ["./tests/google"]
      },
      yahoo : {
        "src_folders" : ["./tests/yahoo"]
      }
    }
  });

  grunt.loadNpmTasks('grunt-nightwatch');
  grunt.loadNpmTasks('grunt-selenium-webdriver');

  var group = grunt.option('group');
  var testGroup = group ? ':' + group : '';

  grunt.registerTask('test', [
    'selenium_start',
    'nightwatch' + testGroup,
    'selenium_stop'
  ]);
};
