const componentsRoutes = require("./components");
const identityRoutes = require("./identity");
const gettingStartedRoutes = require("./getting-started");
const utilitiesRoutes = require("./utilities");
const patternsRoutes = require("./patterns");
// const examplesRoutes = require("./examples");

module.exports = [
    ...gettingStartedRoutes,
    ...identityRoutes,
    ...componentsRoutes,
    ...patternsRoutes,
    ...utilitiesRoutes
    // ...examplesRoutes
];
