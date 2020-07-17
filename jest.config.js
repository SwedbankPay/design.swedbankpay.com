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
        "<rootDir>/src/App/docutils/ComponentPreview/",
        "<rootDir>/src/App/docutils/JavascriptDocs/",
        "<rootDir>/src/scripts/main/datepicker/",
        "<rootDir>/src/scripts/main/topbar/",
        "<rootDir>/dist/"
    ]
};
