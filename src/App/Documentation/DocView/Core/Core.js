import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Color from "./Color";
import Typography from "./Typography";

const GettingStarted = () => {
    return (
        <Switch>
            <Route exact path="/docs/core" render={() => (
                <Redirect to="/docs/core/color" />
            )} />
            <Route exact path="/docs/core/color" component={Color} />
            <Route exact path="/docs/core/typography" component={Typography} />
            <Route path="/docs/core/*" render={() => (
                <Redirect to="/docs/core/color" />
            )} />
        </Switch>
    );
};

export default GettingStarted;
