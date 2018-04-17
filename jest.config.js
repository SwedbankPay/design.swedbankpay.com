module.exports = {
    verbose: false,
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.{js,jsx}",
        "!src/index.js",
        "!src/polyfills/**/*.js",
        "!src/_px-script/**/*.js"
    ],
    coverageDirectory: "coverage",
    coverageReporters: [
        "json",
        "lcov"
    ],
    setupFiles: [
        "./jest.setup.js"
    ],
    snapshotSerializers: [
        "enzyme-to-json/serializer"
    ],
    testPathIgnorePatterns: [
        "/node_modules/",
        "/_px-script/",
        "\\.spec\\.js"
    ]
};
