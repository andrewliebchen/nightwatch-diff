module.exports = {
  "Demo test Yahoo" : function (client) {
    client
      .url("http://www.yahoo.com")
      .waitForElementVisible("body", 1000)
      .assert.title("Yahoo")
      .assert.visible("input[type=text]")
      .setValue("input[type=text]", "nightwatch")
      .waitForElementVisible("button[name=btnG]", 1000)
      .click("button[name=btnG]")
      .pause(1000)
      .assert.containsText("#main", "The Night Watch")
      .end();
  }
};
