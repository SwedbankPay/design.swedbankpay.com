import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import SelectPanel from "./SelectPanel";
import RenderRoutes from "./utils/RenderRoutes";
import routes from "../routes/docs";

const Documentation = () => (
    <div className="documentation">
        <div className="row">
            <div className="col-xxl-2 col-md-3">
                <SelectPanel />
            </div>
            <main className="doc-view col-xxl-10 col-md-9">
                <Switch>
                    <Route exact path="/docs" render={() => <Redirect to="/docs/getting-started" />} />
                    {routes.map(route => <RenderRoutes key={`renderRoutes_${route.title}`} {...route} />)}
                    <Redirect from="/docs/*" to="/404" />
                </Switch>
            </main>
        </div>
    </div>
);

export default Documentation;
