module.exports = {
    projects: ["<rootDir>/src/app/jest.config.js",/*  "<rootDir>/src/scripts" */],
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: [
        "json",
        "lcov",
        "text-summary"
    ]
};
