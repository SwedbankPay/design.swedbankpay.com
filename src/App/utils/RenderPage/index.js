import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { SelectPanel, RenderRoutes, LoadingComponent } from "../";

const RenderPage = ({ routes, appFolder, path, initPath }) => (
    <div className="documentation">
        <div className="row">
            <div className="col-xxl-2 col-md-3 d-none d-md-block">
                <SelectPanel id="doc-sidebar" routes={routes} />
            </div>
            <main className="doc-view col-xxl-10 col-md-9">
                <Suspense fallback={<LoadingComponent />}>
                    <Switch>
                        <Route exact path={path} render={() => <Redirect to={initPath} />} />
                        {routes.map(route => <RenderRoutes key={`renderRoutes_${route.title}`} {...route} appFolder={appFolder} />)}
                        <Redirect from={`${path}/*`} to="/404" />
                    </Switch>
                </Suspense>
            </main>
        </div>
    </div>
);

export default RenderPage;
