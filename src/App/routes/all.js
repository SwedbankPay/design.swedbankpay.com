const componentsRoutes = require("./components");
const identityRoutes = require("./identity");
const getStartedRoutes = require("./get-started");
const patternsRoutes = require("./patterns");

module.exports = [
	...getStartedRoutes,
	...identityRoutes,
	...componentsRoutes,
	...patternsRoutes,
];
