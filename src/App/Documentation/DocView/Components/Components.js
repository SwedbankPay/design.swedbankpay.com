import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Breadcrumb from "./Breadcrumb/Breadcrumb";

const GettingStarted = () => {
    return (
        <Switch>
            <Route exact path="/docs/components" render={() => (
                <Redirect to="/docs/components/breadcrumb" />
            )} />
            <Route exact path="/docs/components/breadcrumb" component={Breadcrumb} />
            <Route path="/docs/components/*" render={() => (
                <Redirect to="/docs/components/breadcrumb" />
            )} />
        </Switch>
    );
};

export default GettingStarted;
