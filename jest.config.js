module.exports = {
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: [
        "json",
        "lcov",
        "text-summary"
    ],
    collectCoverageFrom: [
        "**/*.{js,jsx}"
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
    testMatch: [
        // "**/topbar/?(*.)+(test).[jt]s?(x)"
        "**/main/**/?(*.)+(test).[jt]s?(x)"
    ],
    testPathIgnorePatterns: [
        "\\.spec\\.js"
    ]
};
