var fs = require('extfs');

var empty = fs.isEmptySync('./screenshots/base');
var screenshotPath = empty ? 'screenshots/base/' : 'screenshots/test/';
var screenshotType = empty ? '_base' : '_test';
console.log('Adding screenshots to ' + screenshotPath);

module.exports = {
  "Demo test Google" : function (client) {
    client
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .saveScreenshot(screenshotPath + '1' + screenshotType + '.png')
      .end();
  }
};
