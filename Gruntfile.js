module.exports = function(grunt) {
  grunt.initConfig({
    nightwatch: {
      options: {
        "src_folders" : ["./test"],
        "output_folder" : "./reports",
        "custom_commands_path" : "./commands",
        "custom_assertions_path" : "./assertions",
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
              "enabled" : true,
              "path" : ""
            },
            "desiredCapabilities": {
              "browserName": "firefox",
              "javascriptEnabled": true,
              "acceptSslCerts": true
            }
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-nightwatch');
  grunt.loadNpmTasks('grunt-selenium-webdriver');

  grunt.registerTask('default', ['selenium_start', 'nightwatch', 'selenium_stop']);
};
