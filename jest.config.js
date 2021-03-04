module.exports = {
    projects: [
        "<rootDir>/src/App",
        "<rootDir>/src/scripts"
    ],
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: [
        "json",
        "lcov",
        "text-summary"
    ]
};
