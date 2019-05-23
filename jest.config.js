module.exports = {
    projects: ["<rootDir>/src/app", "<rootDir>/src/px-script"],
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: [
        "json",
        "lcov",
        "text-summary"
    ]
};
