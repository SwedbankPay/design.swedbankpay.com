module.exports = {
    verbose: false,
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.{js,jsx}",
        "!src/index.js",
        "!src/polyfills/**/*.js"
    ],
    coverageDirectory: "coverage",
    coverageReporters: [
        "json",
        "lcov"
    ],
    moduleNameMapper: {
        "\\.(svg)$": "<rootDir>/__mocks__/svgMock.js"
    },
    setupFiles: [
        "./jest.setup.js"
    ],
    snapshotSerializers: [
        "enzyme-to-json/serializer"
    ],
    testPathIgnorePatterns: [
        "/node_modules/",
        "\\.spec\\.js"
    ]
};
