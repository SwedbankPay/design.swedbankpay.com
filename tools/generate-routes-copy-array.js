const ROOTROUTES = ["/components", "/core", "examples", "/utilities", "/get-started", "/404"];
const componentsRoutes = require("../src/App/routes/components");
const coreRoutes = require("../src/App/routes/identity");
const getStartedRoutes = require("../src/App/routes/get-started");
const patternsRoutes = require("../src/App/routes/patterns");
// const examplesRoutes = require("../src/App/routes/examples");

const getRoutes = () => {
    const ROUTES = [...ROOTROUTES];

    [
        ...componentsRoutes,
        ...coreRoutes,
        ...getStartedRoutes,
        ...patternsRoutes
        // ...examplesRoutes
    ].forEach(route => {
        ROUTES.push(route.path);
        route.routes.forEach(r => ROUTES.push(r.path));
    });

    return ROUTES;
};

module.exports = getRoutes();

