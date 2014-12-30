# Nightwatch Diff

Write simple UI integration tests with [NightwatchJS](http://nightwatchjs.org/) and run visual diffs against a baseline for catching regressions.

Thanks to [richard-flosi](https://github.com/richard-flosi) for the [screenshot comparison stuff](https://gist.github.com/richard-flosi/8a5d2e10b6609ab9d06a).

## Getting started

Clone this repository, and run `npm install` to install dependencies. You'll need to install [Grunt](http://gruntjs.com/getting-started) if you haven't already.

## Running tests

Run tests from your command line with `grunt`.

Tests are located within `/test`. This repo comes with a simple demo test that visits google.com and takes a screenshot. For more involved tests, checkout the [Nightwatch documentation](http://nightwatchjs.org/guide).
