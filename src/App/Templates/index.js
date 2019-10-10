import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { SelectPanel, RenderRoutes, LoadingComponent } from "../utils";
import routes from "../routes/templates";

const Templates = () => (
    <div className="documentation">
        <div className="row">
            <div className="col-xxl-2 col-md-3">
                <SelectPanel routes={routes} />
            </div>
            <main className="doc-view col-xxl-10 col-md-9">
                <Suspense fallback={<LoadingComponent />}>
                    <Switch>
                        <Route exact path="/tmpl" render={() => <Redirect to="/tmpl/getting-started" />} />
                        {routes.map(route => <RenderRoutes key={`renderRoutes_${route.title}`} {...route} appFolder={"Templates"}/>)}
                        <Redirect from="/tmpl/*" to="/404" />
                    </Switch>
                </Suspense>
            </main>
        </div>
    </div>
);

export default Templates;
