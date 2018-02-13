import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import GettingStarted from "./GettingStarted/GettingStarted";

const DocView = () => {
    return (
        <main className="doc-view col-md-9 col-sm-12">
            <Switch>
                <Route exact path="/docs" render={() => (
                    <Redirect to="/docs/getting-started" />
                )} />
                <Route path="/docs/getting-started" component={GettingStarted} />
                <Route path="/docs/getting-started/:section" component={GettingStarted} />
                <Route path="/docs/*" render={() => (
                    <Redirect to="/docs/getting-started" />
                )} />
            </Switch>
        </main>
    );
};

export default DocView;
