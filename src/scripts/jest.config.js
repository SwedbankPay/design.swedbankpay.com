module.exports = {
    collectCoverageFrom: [
        "**/*.{js,jsx}"
    ],
    setupFiles: [
        "./jest.setup.js"
    ],
    snapshotSerializers: [
        "enzyme-to-json/serializer"
    ],
    testPathIgnorePatterns: [
        "\\.spec\\.js"
    ],
    testMatch: [
        // "**/main/?(*.)+(spec|test).[jt]s?(x)"
        "**/main/?(*.)+(spec|test).[jt]s?(x)"
    ]
};
