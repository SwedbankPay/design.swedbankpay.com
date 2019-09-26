import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import SelectPanel from "../utils/SelectPanel";
import RenderRoutes from "../utils/RenderRoutes";
import routes from "../routes/resources";

const Resources = () => (
    <div className="documentation">
        <div className="row">
            <div className="col-xxl-2 col-md-3">
                <SelectPanel routes={routes} />
            </div>
            <main className="doc-view col-xxl-10 col-md-9">
                <Switch>
                    <Route exact path="/Resources" render={() => <Redirect to="/Resources/getting-started" />} />
                    {routes.map(route => <RenderRoutes key={`renderRoutes_${route.title}`} {...route} appFolder={"Resources"}/>)}
                    <Redirect from="/Resources/*" to="/404" />
                </Switch>
            </main>
        </div>
    </div>
);

export default Resources;
