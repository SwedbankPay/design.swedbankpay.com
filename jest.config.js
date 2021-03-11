module.exports = {
    /*    projects: [
        "<rootDir>/src/App",
        "<rootDir>/src/scripts"
    ], */
    /*  collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: [
        "json",
        "lcov",
        "text-summary"
    ], */

    moduleNameMapper: {
        "\\.(svg)$": "<rootDir>/__mocks__/svgMock.js"
    },
    setupFiles: [
        "./jest.setup.js"
    ],
    snapshotSerializers: [
        "enzyme-to-json/serializer"
    ],
    testMatch: [
        // "**/?(*.)+(test).[jt]s?(x)",
        // "**/JavascriptDocElement/?(*.)+(spec|test).[jt]s?(x)",
        // "**/sidebar/?(*.)+(spec|test).[jt]s?(x)",
        // "**/Buttons/?(*.)+(spec|test).[jt]s?(x)",
        "**/ComponentPreview/?(*.)+(spec|test).[jt]s?(x)",
        // "**/datepicker/?(*.)+(spec|test).[jt]s?(x)",
        // "**/topbar/?(*.)+(spec|test).[jt]s?(x)",
        // "**/Topbar/?(*.)+(spec|test).[jt]s?(x)",
        // "**/rangeslider/?(*.)+(spec|test).[jt]s?(x)",
        // "**/main/?(*.)+(spec|test).[jt]s?(x)"
    ],
    testPathIgnorePatterns: [
        "\\.spec\\.js",

        // TODO: The following snapshot is 360k long and brakes AppVeyor... solution?
        "./src/app/docutils/ComponentPreview/"
    ],
    globals: {
        stopDg: true
    },
    bail: 1
};
