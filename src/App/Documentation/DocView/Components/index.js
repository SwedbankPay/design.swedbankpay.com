import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Alerts from "./Alerts";
import Breadcrumb from "./Breadcrumb";
import Buttons from "./Buttons";
import Loaders from "./Loaders";

const GettingStarted = () => {
    return (
        <Switch>
            <Route exact path="/docs/components" render={() => (
                <Redirect to="/docs/components/alerts" />
            )} />
            <Route exact path="/docs/components/alerts" component={Alerts} />
            <Route exact path="/docs/components/breadcrumb" component={Breadcrumb} />
            <Route exact path="/docs/components/buttons" component={Buttons} />
            <Route exact path="/docs/components/loaders" component={Loaders} />
            <Route path="/docs/components/*" render={() => (
                <Redirect to="/docs/components/alerts" />
            )} />
        </Switch>
    );
};

export default GettingStarted;
