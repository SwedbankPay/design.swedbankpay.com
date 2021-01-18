const componentsRoutes = require("./components");
const identityRoutes = require("./identity");
const gettingStartedRoutes = require("./getting-started");
const utilitiesRoutes = require("./utilities");
// const examplesRoutes = require("./examples");

module.exports = [
    ...gettingStartedRoutes,
    ...identityRoutes,
    ...componentsRoutes,
    ...utilitiesRoutes
    // ...examplesRoutes
];
