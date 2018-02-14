import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import GettingStarted from "./GettingStarted/GettingStarted";
import Core from "./Core/Core";

const DocView = () => {
    return (
        <main className="doc-view col-md-9 col-sm-12">
            <Switch>
                <Route exact path="/docs" render={() => (
                    <Redirect to="/docs/getting-started" />
                )} />
                <Route path="/docs/getting-started" component={GettingStarted} />
                <Route path="/docs/core" component={Core} />
                <Route path="/docs/*" render={() => (
                    <Redirect to="/docs/getting-started" />
                )} />
            </Switch>
        </main>
    );
};

export default DocView;
