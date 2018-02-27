import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Introduction from "./Introduction";
import BrowserSupport from "./BrowserSupport";

const GettingStarted = () => (
    <Switch>
        <Route exact path="/docs/getting-started" render={() => (
            <Redirect to="/docs/getting-started/introduction" />
        )} />
        <Route exact path="/docs/getting-started/introduction" component={Introduction} />
        <Route exact path="/docs/getting-started/browser-support" component={BrowserSupport} />
        <Route path="/docs/getting-started/*" render={() => (
            <Redirect to="/docs/getting-started/introduction" />
        )} />
    </Switch>
);

export default GettingStarted;
