import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { RenderRoutes, LoadingComponent } from "../";
import routes from "@src/App/routes/all";

const RenderPage = ({ path, initPath }) => (
    <Suspense fallback={<LoadingComponent />}>
        <Switch>
            <Route exact path={path} render={() => <Redirect to={initPath} />} />
            {routes.map(route => <RenderRoutes key={`renderRoutes_${route.title}`} {...route} appFolder={route.appFolder} />)}
            <Redirect from={`${path}/*`} to="/404" />
        </Switch>
    </Suspense>
);

RenderPage.propTypes = {
    path: PropTypes.string.isRequired,
    initPath: PropTypes.string.isRequired
};

export default RenderPage;
