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
        "\\.(svg)$": "<rootDir>/../../__mocks__/svgMock.js"
    },
    setupFiles: [
        "./jest.setup.js"
    ],
    snapshotSerializers: [
        "enzyme-to-json/serializer"
    ],
    testMatch: [
        // "**/JavascriptDocs/?(*.)+(spec|test).[jt]s?(x)",
        "**/JavascriptDocElement/?(*.)+(spec|test).[jt]s?(x)",
        "**/main/?(*.)+(spec|test).[jt]s?(x)"
    ],
    testPathIgnorePatterns: [
        "\\.spec\\.js",

        // TODO: The following snapshot is 360k long and brakes AppVeyor... solution?
        "./src/app/docutils/ComponentPreview/"
    ],
    globals: {
        stopDg: true
    }
};
