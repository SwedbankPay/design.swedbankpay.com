const webdriverio = require("webdriverio");
const browser = webdriverio
    // setup your selenium server address.
    // If you are using default settings, leave it empty
    .remote()
    // run browser that we want to test
    .init({
        browserName: "chrome",
        version: "45"
    });

// stolen shamelessly from srm
describe("Browser ", function () {
    it("should log our browsername", function () {
        browser.url("https://www.whatismybrowser.com/");

        browser.waitUntil(function () {
            return browser.getTitle().includes("What browser");
        }, 5000, "Expected title to include 'What browser'", 500);

        // console.log("Current browser being tested: " + browser.getText(".string-major"));
    });
});
