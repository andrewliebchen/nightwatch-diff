module.exports = {
    'My Test': function(browser) {
        browser
        .url('http://www.google.com')
        .compareScreenshot('compare-google-screenshot.png')
        .end();
    }
};
