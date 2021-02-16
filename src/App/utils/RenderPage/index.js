import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import packageJson from "~/package";

import { RenderRoutes, LoadingComponent } from "../";
import routes from "@src/App/routes/all";

const RenderPage = ({ path, initPath }) => (
    <Suspense fallback={<LoadingComponent />}>
        <div className="doc-container">
            <span className="dg-current-version text-uppercase">Design Guide – v. {packageJson.version}</span>
            <Switch>
                <Route exact path={path} render={() => <Redirect to={initPath} />} />
                {routes.map(route => <RenderRoutes key={`renderRoutes_${route.title}`} {...route} appFolder={route.appFolder} />)}
                <Redirect from={`${path}/*`} to="/404" />
            </Switch>
        </div>
    </Suspense>
);

RenderPage.propTypes = {
    path: PropTypes.string.isRequired,
    initPath: PropTypes.string.isRequired
};

export default RenderPage;
