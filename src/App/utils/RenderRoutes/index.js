import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Route, Navigate } from "react-router-dom";

import { DocHeading, StatusBadge } from "@docutils";

const renderRoutes = ({ key, path, redirect, routes, appFolder }) => (
    <Fragment key={key}>
        <Route exact path={"/"} element={<Navigate to={redirect} />}/>
        {routes.map(route => {
            const { path, componentPath } = route;

            // The following is ignored because of issues with template literals and dynamic imports (https://github.com/babel/babel-eslint/issues/681) [THN]
            // eslint-disable-next-line
            const RouteRenderComponent = React.lazy(() => import(/* webpackChunkName: "doc-route.chunk_" */"../../" + appFolder + "/" + componentPath + "/index.js"));
            // const RouteRenderComponent = React.lazy(() => import(/* webpackChunkName: "doc-route.chunk_" */`../../${appFolder}/${componentPath}/index.js`));

            return <Route key={`doc_route_${path}`} exact path={path} element={<>
                <div className="d-flex align-items-center ">
                    <DocHeading />
                    {route.statusBadges && route.statusBadges.map(statusBadge => <StatusBadge key={`status-badge-${statusBadge}`} type={statusBadge} />)}
                </div>
                <RouteRenderComponent />
            </>} />;
        })}
        <Route path={`${path}/*`} element={<Navigate to="/404" />} />
    </ Fragment>
);

renderRoutes.propTypes = {
    path: PropTypes.string.isRequired,
    redirect: PropTypes.string.isRequired,
    routes: PropTypes.array.isRequired,
    appFolder: PropTypes.string.isRequired
};

export default renderRoutes;
