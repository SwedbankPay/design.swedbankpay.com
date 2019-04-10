module.exports = {
    collectCoverageFrom: [
        "**/*.{js,jsx}"
    ],
    moduleNameMapper: {
        "\\.(svg)$": "<rootDir>/../../__mocks__/svgMock.js"
    },
    setupFiles: [
        "./jest.setup.js"
    ],
    snapshotSerializers: [
        "enzyme-to-json/serializer"
    ],
    testPathIgnorePatterns: [
        "\\.spec\\.js"
    ]
};
