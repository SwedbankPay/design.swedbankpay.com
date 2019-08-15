import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import Loadable from "react-loadable";

import { LoadingComponent } from "@src/App/utils";

const RenderRoutes = ({ path, redirect, routes }) => (
    <Switch>
        <Route exact path={path} render={() => <Redirect to={redirect} />}/>
        {routes.map(route => {
            const { path, componentPath } = route;
            const LoadableComponent = Loadable({
                loader: () => import(/* webpackChunkName: "doc-route.chunk_" */ `../../${componentPath}/index.js`),
                loading: LoadingComponent
            });

            return <Route key={`doc_route_${path}`} exact path={path} render={() => <LoadableComponent />} />;
        })}
        <Redirect from={`${path}/*`} to="/404" />
    </Switch>
);

RenderRoutes.propTypes = {
    path: PropTypes.string.isRequired,
    redirect: PropTypes.string.isRequired,
    routes: PropTypes.array.isRequired
};

export default RenderRoutes;
