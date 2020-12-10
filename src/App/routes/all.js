const componentsRoutes = require("./components");
const coreRoutes = require("./core");
const gettingStartedRoutes = require("./getting-started");
const utilitiesRoutes = require("./utilities");
// const examplesRoutes = require("./examples");

module.exports = [
    ...gettingStartedRoutes,
    ...coreRoutes,
    ...componentsRoutes,
    ...utilitiesRoutes
    // ...examplesRoutes
];
