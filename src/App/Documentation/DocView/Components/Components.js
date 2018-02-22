import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Alerts from "./Alerts/Alerts";
import Breadcrumb from "./Breadcrumb/Breadcrumb";
import Buttons from "./Buttons/Buttons";

const GettingStarted = () => {
    return (
        <Switch>
            <Route exact path="/docs/components" render={() => (
                <Redirect to="/docs/components/alerts" />
            )} />
            <Route exact path="/docs/components/alerts" component={Alerts} />
            <Route exact path="/docs/components/breadcrumb" component={Breadcrumb} />
            <Route exact path="/docs/components/buttons" component={Buttons} />
            <Route path="/docs/components/*" render={() => (
                <Redirect to="/docs/components/alerts" />
            )} />
        </Switch>
    );
};

export default GettingStarted;
