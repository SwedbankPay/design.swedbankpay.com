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
    testMatch: [
        "<rootDir>/components/MediaObject/*.test.js"
    ],
    testPathIgnorePatterns: [
        "\\.spec\\.js",

        // TODO: The following snapshot is 360k long and breaks everything, ignore it [THN]
        "./docutils/ComponentPreview/"
    ]
};
