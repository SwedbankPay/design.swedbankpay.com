import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import SelectPanel from "./SelectPanel";
import DocHeading from "./utils/DocHeading";
import RenderRoutes from "./utils/RenderRoutes";
import routes from "../routes/docs";

const Documentation = () => (
    <div className="documentation">
        <div className="row">
            <div className="sidebar-heading col-xxl-2 col-md-3 col-sm-12">
                <h1>DesignGuide</h1>
            </div>
            <div className="view-heading col-xxl-10 col-md-9 col-sm-12">
                <DocHeading />
            </div>
        </div>
        <div className="row">
            <SelectPanel />
            <main className="doc-view col-xxl-10 col-md-9 col-sm-12">
                <Switch>
                    <Route exact path="/docs" render={() => <Redirect to="/docs/getting-started" />} />
                    {routes.map((route, i) => <RenderRoutes key={i} {...route} />)}
                    <Redirect from="/docs/*" to="/404" />
                </Switch>
            </main>
        </div>
    </div>
);

export default Documentation;
