import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import GettingStarted from "./GettingStarted";
import Core from "./Core";
import Components from "./Components";

const DocView = () => (
    <main className="doc-view col-md-9 col-sm-12">
        <Switch>
            <Route exact path="/docs" render={() => (
                <Redirect to="/docs/getting-started" />
            )} />
            <Route path="/docs/getting-started" component={GettingStarted} />
            <Route path="/docs/core" component={Core} />
            <Route path="/docs/components" component={Components} />
            <Route path="/docs/*" render={() => (
                <Redirect to="/docs/getting-started" />
            )} />
        </Switch>
    </main>
);

export default DocView;
