module.exports = {
    rootDir: process.cwd(),
    projects: [
        "<rootDir>/src/app",
        "<rootDir>/src/scripts"
    ],
    roots: [
        "<rootDir>/src/app",
        "<rootDir>/src/scripts"
    ],
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: [
        "json",
        "lcov",
        "text-summary"
    ],
    collectCoverageFrom: [
        "**/*.{js,jsx}"
    ]
};
