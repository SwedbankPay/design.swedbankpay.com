const ROOTROUTES = ["/docs", "/examples", "/templates", "/404"];
const docRoutes = require("../src/App/routes/docs");

const getRoutes = () => {
    const ROUTES = [...ROOTROUTES];

    docRoutes.forEach(route => {
        ROUTES.push(route.path);
        route.routes.forEach(r => ROUTES.push(r.path));
    });

    return ROUTES;
};

module.exports = getRoutes();

