const ROOTROUTES = ["/components", "/core", "/utilities", "/getting-started", "/resources", "/404"];
const resRoutes = require("../src/App/routes/resources");
const componentsRoutes = require("../src/App/routes/components");
const coreRoutes = require("../src/App/routes/core");
const gettingStartedRoutes = require("../src/App/routes/getting-started");
const utilitiesRoutes = require("../src/App/routes/utilities");

const getRoutes = () => {
    const ROUTES = [...ROOTROUTES];

    [
        ...resRoutes,
        ...componentsRoutes,
        ...coreRoutes,
        ...gettingStartedRoutes,
        ...utilitiesRoutes
    ].forEach(route => {
        ROUTES.push(route.path);
        route.routes.forEach(r => ROUTES.push(r.path));
    });

    return ROUTES;
};

module.exports = getRoutes();

