module.exports = {
	displayName: "Design Guide Documentation",
	collectCoverageFrom: ["**/*.{js,jsx}"],
	moduleNameMapper: {
		"\\.(svg)$": "<rootDir>/../../__mocks__/svgMock.js",
	},
	setupFiles: ["./jest.setup.js"],
	testPathIgnorePatterns: ["\\.spec\\.js"],
	globals: {
		stopDg: true,
	},
	testEnvironment: "jsdom",
};
