import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import routes from "./routes/root.js";
import AppHeader from "./AppHeader";
import ErrorPage404 from "./ErrorPage404";

// const isProd = process.env.NODE_ENV === "production";
// const history = createBrowserHistory({ basename: "/design.payex.com" });
const history = createBrowserHistory();

const App = () => (
    <Router history={history}>
        <div id="px-designguide">
            <AppHeader />
            <Switch>
                {routes.map((route, i) => {
                    const { path, component, exact } = route;
                    const RouteComponent = component.default;

                    return (
                        <Route key={i} exact={exact} path={path} render={() => {
                            history.listen(location => {
                                window.gtag("config", "UA-3440932-20", {
                                    "page_location": window.location.href,
                                    "page_path": location.pathname
                                });
                            });
                            return <RouteComponent />;
                        }} />
                    );
                })}
                <Route component={ErrorPage404} />
            </Switch>
        </div>
    </Router>
);

export default App;
