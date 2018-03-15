module.exports.config = {
    specs: ["./src/**/*.spec.js"],
    baseUrl: "http://localhost:3000",
    services: ["selenium-standalone"],
    capabilities: {
        maxInstances: 1,
        browserName: "chrome"
    },
    before: () => {
        browser.windowHandleSize({ width: 1920, height: 1080 });
    }
};
