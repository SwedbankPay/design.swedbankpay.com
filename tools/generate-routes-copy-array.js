const ROOTROUTES = ["/utilities", "/404"];
const componentsRoutes = require("../src/App/routes/components");
const identityRoutes = require("../src/App/routes/identity");
const getStartedRoutes = require("../src/App/routes/get-started");
const patternsRoutes = require("../src/App/routes/patterns");
const playbookRoutes = require("../src/App/routes/playbook");

const getRoutes = () => {
	const ROUTES = [...ROOTROUTES];

	[
		...componentsRoutes,
		...identityRoutes,
		...getStartedRoutes,
		...patternsRoutes,
		...playbookRoutes,
	].forEach((route) => {
		ROUTES.push(route.path);
		route.routes.forEach((r) => ROUTES.push(r.rootPath));
	});

	return ROUTES;
};

module.exports = getRoutes();
