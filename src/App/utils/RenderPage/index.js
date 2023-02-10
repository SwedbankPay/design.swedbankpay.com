import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import packageJson from "~/package";
import { renderRoutes, LoadingComponent } from "../";
import routes from "@src/App/routes/all";

const RenderPage = ({ initPath }) => (
    <Suspense fallback={<LoadingComponent />}>
        <div className="doc-container">
            <span className="dg-current-version text-uppercase">Design Guide – v. {packageJson.version}</span>
            <Routes>
                <Route exact path={"/"} element={<Navigate replace to={initPath} />} />
                {routes.map(route => renderRoutes({
                    key: `renderRoutes_${route.title}`,
                    path: route.path,
                    redirect: route.redirect,
                    routes: route.routes,
                    appFolder: route.appFolder,
                })
                )}
                <Route path={"*"} element={<Navigate replace to="/404" /> } />
            </Routes>
        </div>
    </Suspense>
);

RenderPage.propTypes = {
    path: PropTypes.string.isRequired,
    initPath: PropTypes.string.isRequired
};

export default RenderPage;
