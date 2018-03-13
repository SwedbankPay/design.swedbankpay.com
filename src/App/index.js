import React from "react";
import { BrowserRouter, withRouter, Switch, Route } from "react-router-dom";

import routes from "./routes/root.js";
import AppHeader from "./AppHeader";
import ErrorPage404 from "./ErrorPage404";

const AppHeaderWithRoutes = withRouter(props => <AppHeader {...props} />);

const App = () => (
    // TODO: https://github.com/facebook/create-react-app/issues/1765
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    <BrowserRouter>
        <div id="px-designguide">
            <AppHeaderWithRoutes />
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
    </BrowserRouter>
);

export default App;
