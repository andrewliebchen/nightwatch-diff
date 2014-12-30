// assertions/compareScreenshot.js
var resemble = require('resemble'),
    fs = require('fs');

exports.assertion = function(filename, expected) {
    var screenshotPath = 'test/screenshots/',
        baselinePath = screenshotPath + 'baseline/' + filename,
        resultPath = screenshotPath + 'results/' + filename,
        diffPath = screenshotPath + 'diffs/' + filename;

    this.message = 'Unexpected compareScreenshot error.';
    this.expected = expected || 0;   // misMatchPercentage tolerance default 0%

    this.command = function(callback) {
        // create new baseline photo if none exists
        if (!fs.existsSync(baselinePath)) {
            console.log('WARNING: Baseline Photo does NOT exist.');
            console.log('Creating Baseline Photo from Result: ' + baselinePath);
            fs.writeFileSync(baselinePath, fs.readFileSync(resultPath));
        }

        resemble
            .resemble(baselinePath)
            .compareTo(resultPath)
            .ignoreAntialiasing()
            .onComplete(callback);  // calls this.value with the result

        return this;
    };

    this.value = function(result) {
        var diff = new Buffer(result.getImageDataUrl().replace(/data:image\/png;base64,/,''), 'base64');
        fs.writeFileSync(diffPath, diff);

        return parseFloat(result.misMatchPercentage, 10);  // value this.pass is called with
    };

    this.pass = function(value) {
        var pass = value <= this.expected;
        if (pass) {
            this.message = 'Screenshots Matched for ' + filename +
                ' with a tolerance of ' + this.expected + '%.';
        } else {
            this.message = 'Screenshots Match Failed for ' + filename +
                ' with a tolerance of ' + this.expected + '%.\n' +
                '   Screenshots at:\n' +
                '    Baseline: ' + baselinePath + '\n' +
                '    Result: ' + resultPath + '\n' +
                '    Diff: ' + diffPath + '\n' +
                '   Open ' + diffPath + ' to see how the screenshot has changed.\n' +
                '   If the Result Screenshot is correct you can use it to update the Baseline Screenshot and re-run your test:\n' +
                '    cp ' + resultPath + ' ' + baselinePath;
        }
        return pass;
    };
};
