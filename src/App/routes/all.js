const componentsRoutes = require("./components");
const identityRoutes = require("./identity");
const getStartedRoutes = require("./get-started");
const patternsRoutes = require("./patterns");
const playbookRoutes = require("./playbook");

module.exports = [
	...getStartedRoutes,
	...playbookRoutes,
	...identityRoutes,
	...componentsRoutes,
	...patternsRoutes,
];
