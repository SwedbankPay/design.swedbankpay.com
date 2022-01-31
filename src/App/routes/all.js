const componentsRoutes = require("./components");
const identityRoutes = require("./identity");
const getStartedRoutes = require("./get-started");
const utilitiesRoutes = require("./utilities");
const patternsRoutes = require("./patterns");
// const examplesRoutes = require("./examples");

module.exports = [
    ...getStartedRoutes,
    ...identityRoutes,
    ...componentsRoutes,
    ...patternsRoutes,
    ...utilitiesRoutes
    // ...examplesRoutes
];
