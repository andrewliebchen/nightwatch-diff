// commands/compareScreenshot.js
exports.command = function(filename, expected, callback) {
    var self = this,
        screenshotPath = 'test/screenshots/',
        resultPath = screenshotPath + 'results/' + filename;

    self.saveScreenshot(resultPath, function(response) {
        self.assert.compareScreenshot(filename, expected, function(result) {
            if (typeof callback === 'function') {
                callback.call(self, result);
            }
        });
    });

    return this; // allows the command to be chained.
};
