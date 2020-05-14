const ROOTROUTES = ["/docs", "/components", "/examples", "/res", "/404"];
const docRoutes = require("../src/App/routes/docs");
const resRoutes = require("../src/App/routes/resources");
const componentsRoutes = require("../src/App/routes/components");

const getRoutes = () => {
    const ROUTES = [...ROOTROUTES];

    [
        ...docRoutes,
        ...resRoutes,
        ...componentsRoutes
    ].forEach(route => {
        ROUTES.push(route.path);
        route.routes.forEach(r => ROUTES.push(r.path));
    });

    return ROUTES;
};

module.exports = getRoutes();

