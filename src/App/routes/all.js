const componentsRoutes = require("./components");
const identityRoutes = require("./identity");
const getStartedRoutes = require("./get-started");
const patternsRoutes = require("./patterns");
const playbookRoutes = require("./playbook");

// remove Playbook routes if PayEx side
module.exports = process.env.isSwedbankPay
	? [
			...getStartedRoutes,
			...playbookRoutes,
			...identityRoutes,
			...componentsRoutes,
			...patternsRoutes,
	  ]
	: [
			...getStartedRoutes,
			...identityRoutes,
			...componentsRoutes,
			...patternsRoutes,
	  ];
