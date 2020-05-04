import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { SelectPanel, RenderRoutes, LoadingComponent } from "../utils";
import routes from "../routes/docs";

const Documentation = () => (
    <div className="documentation">
        <div className="row">
            <div className="col-xxl-2 col-md-3 d-none d-md-block">
                <SelectPanel id="doc-siderbar" routes={routes} />
            </div>
            <main className="doc-view col-xxl-10 col-md-9">
                <Suspense fallback={<LoadingComponent />}>
                    <Switch>
                        <Route exact path="/docs" render={() => <Redirect to="/docs/getting-started" />} />
                        {routes.map(route => <RenderRoutes key={`renderRoutes_${route.title}`} {...route} appFolder={"Documentation"} />)}
                        <Redirect from="/docs/*" to="/404" />
                    </Switch>
                </Suspense>
            </main>
        </div>
    </div>
);

export default Documentation;
