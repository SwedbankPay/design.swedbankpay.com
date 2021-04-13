module.exports = {
    rootDir: process.cwd(),
    projects: [
        "./src/app",
        "./src/scripts"
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
