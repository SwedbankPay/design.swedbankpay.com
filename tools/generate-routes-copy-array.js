const ROOTROUTES = ["/docs", "/examples", "/tmpl", "/res", "/404"];
const docRoutes = require("../src/App/routes/docs");
const tmplRoutes = require("../src/App/routes/templates");
const resRoutes = require("../src/App/routes/resources");

const getRoutes = () => {
    const ROUTES = [...ROOTROUTES];

    [
        ...docRoutes,
        ...tmplRoutes,
        ...resRoutes
    ].forEach(route => {
        ROUTES.push(route.path);
        route.routes.forEach(r => ROUTES.push(r.path));
    });

    return ROUTES;
};

module.exports = getRoutes();

