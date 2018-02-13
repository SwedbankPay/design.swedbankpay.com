import React from "react";
import { BrowserRouter, withRouter, Switch, Route, Redirect } from "react-router-dom";

import AppHeader from "./AppHeader/Appheader";
import Home from "./Home/Home";
import Documentation from "./Documentation/Documentation";
import Examples from "./Examples/Examples";
import Templates from "./Templates/Templates";
import ErrorPage404 from "./ErrorPage404/ErrorPage404";

const AppHeaderWithRoutes = withRouter(props => <AppHeader {...props} />);

const App = () => {
    return (
        <BrowserRouter>
            <div className="doc-container" id="px-designguide">
                <AppHeaderWithRoutes />
                <Switch>
                    <Route exact path="/" render={() => (
                        <Redirect to="/home" />
                    )} />
                    <Route exact path="/home" component={Home} />
                    <Route path="/docs" component={Documentation} />
                    <Route path="/examples" component={Examples} />
                    <Route path="/templates" component={Templates} />
                    <Route path="/*" component={ErrorPage404} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
