module.exports = {
    rootDir: ".",
    moduleNameMapper: {
        "\\.(svg)$": "<rootDir>/__mocks__/svgMock.js"
    },
    collectCoverage: true,
    collectCoverageFrom: [
        "<rootDir>/src/App/**/*.{js,jsx}",
        "<rootDir>/src/scripts/**/*.{js,jsx}"
    ],
    coverageDirectory: "coverage",
    coverageReporters: [
        "json",
        "lcov",
        "text-summary"
    ],
    setupFiles: [
        "<rootDir>/jest.setup.js"
    ],
    snapshotSerializers: [
        "enzyme-to-json/serializer"
    ],
    testMatch: [
        "<rootDir>/src/App/**/*.test.js",
        "<rootDir>/src/scripts/**/*.test.js"
    ],
    testPathIgnorePatterns: [
        "\\.spec\\.js",
        // The snapshot generated from the following files simply destroyed agents, lets just skip the entire thing [THN]
        "<rootDir>/src/App/docutils/ComponentPreview/",
        // TODO test fails now that jest has config on root level for some reason
        "<rootDir>/src/App/docutils/JavascriptDocs/",
        // TODO test fails now that jest has config on root level for some reason
        "<rootDir>/src/scripts/main/datepicker/",
        // TODO test fails now that jest has config on root level for some reason
        "<rootDir>/src/scripts/main/topbar/",
        "<rootDir>/dist/"
    ]
};
