var fs = require('extfs');


var empty = fs.isEmptySync("/screenshots/base");
var screenshotPath = (typeof empty === 'undefined') ? 'screenshots/base/' : 'screenshots/test/';
console.log(empty);

module.exports = {


  "Demo test Google" : function (client) {
    client
      .url("http://www.google.com")
      .waitForElementVisible("body", 1000)
      .assert.title("Google")
      // .saveScreenshot(screenshotPath + "1.png")
      .end();
  }
};
