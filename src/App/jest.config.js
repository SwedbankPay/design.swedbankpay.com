module.exports = {
    displayName: "Design Guide Documentation",
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
        "\\.spec\\.js",

        // TODO: The following snapshot is 360k long and brakes AppVeyor... solution?
        "./docutils/ComponentPreview/"
    ],
    globals: {
        stopDg: true
    },
    testEnvironment: "jsdom"
};
