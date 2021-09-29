const componentsRoutes = require("./components");
const identityRoutes = require("./identity");
const gettingStartedRoutes = require("./getting-started");
const utilitiesRoutes = require("./utilities");
const templatesRoutes = require("./templates");
// const examplesRoutes = require("./examples");

module.exports = [
    ...gettingStartedRoutes,
    ...identityRoutes,
    ...componentsRoutes,
    ...templatesRoutes,
    ...utilitiesRoutes
    // ...examplesRoutes
];
