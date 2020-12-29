const ROOTROUTES = ["/components", "/core", "examples", "/utilities", "/getting-started", "/404"];
const componentsRoutes = require("../src/App/routes/components");
const coreRoutes = require("../src/App/routes/identity");
const gettingStartedRoutes = require("../src/App/routes/getting-started");
const utilitiesRoutes = require("../src/App/routes/utilities");
// const examplesRoutes = require("../src/App/routes/examples");

const getRoutes = () => {
    const ROUTES = [...ROOTROUTES];

    [
        ...componentsRoutes,
        ...coreRoutes,
        ...gettingStartedRoutes,
        ...utilitiesRoutes
        // ...examplesRoutes
    ].forEach(route => {
        ROUTES.push(route.path);
        route.routes.forEach(r => ROUTES.push(r.path));
    });

    return ROUTES;
};

module.exports = getRoutes();

