import React from "react";
import { BrowserRouter, HashRouter, Switch, Route } from "react-router-dom";

import routes from "./routes/root.js";
import AppHeader from "./AppHeader";
import ErrorPage404 from "./ErrorPage404";

const Router = (process.env.NODE_ENV === "production") ? HashRouter : BrowserRouter;

const App = () => (
    <Router>
        <div id="px-designguide">
            <AppHeader />
            <Switch>
                {routes.map((route, i) => {
                    const { path, component, exact } = route;
                    const RouteComponent = component.default;

                    return (
                        <Route key={i} exact={exact} path={path} render={() => <RouteComponent />} />
                    );
                })}
                <Route component={ErrorPage404} />
            </Switch>
        </div>
    </Router>
);

export default App;
