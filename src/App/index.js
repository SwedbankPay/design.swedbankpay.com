import React, { Component } from "react";
import { Router, Switch, Route, withRouter } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import routes from "./routes/root.js";
import AppHeader from "./AppHeader";
import ErrorPage404 from "./ErrorPage404";

const history = createBrowserHistory();

class ScrollToTop extends Component {
    componentDidUpdate (prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    render () {
        return this.props.children;
    }
}

const ScrollToTopComponent = withRouter(ScrollToTop);

const App = () => (
    <div id="px-designguide">
        <Router history={history}>
            <ScrollToTopComponent>
                <AppHeader />
                <Switch>
                    {routes.map((route, i) => {
                        const { path, component, exact } = route;
                        const RouteComponent = component.default;

                        return (
                            <Route key={i} exact={exact} path={path} render={() => {
                                if (process.env.google) {
                                    history.listen(location => {
                                        window.gtag("config", "UA-3440932-20", {
                                            "page_location": window.location.href,
                                            "page_path": location.pathname
                                        });
                                    });
                                }

                                return <RouteComponent />;
                            }} />
                        );
                    })}
                    <Route component={ErrorPage404} />
                </Switch>
            </ScrollToTopComponent>
        </Router>
    </div>
);

export default App;
