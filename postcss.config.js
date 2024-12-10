const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
	plugins: [
		postcssPresetEnv({
			stage: 2,
			minimumVendorImplementations: 2,
			preserve: true,
		}),
	],
};
