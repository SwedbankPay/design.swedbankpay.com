import React, { Component, Suspense } from "react";
import { Router, Switch, Route, withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import AppHeader from "./AppHeader";
import { LoadingComponent } from "./utils";

const { topbar } = window.dg;

const BASENAME = process.env.basename || "/";

const history = createBrowserHistory({ basename: BASENAME });

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

const Home = React.lazy(() => import(/* webpackChunkName: "home.chunk" */ "./Home/index.js"));

const Documentation = React.lazy(() => import(/* webpackChunkName: "documentation.chunk" */ "./Documentation/index.js"));

const Templates = React.lazy(() => import(/* webpackChunkName: "templates.chunk" */ "./Templates/index.js"));

const Resources = React.lazy(() => import(/* webpackChunkName: "templates.chunk" */ "./Resources/index.js"));

const ErrorPage404 = React.lazy(() => import(/* webpackChunkName: "404.chunk" */ "./ErrorPage404/index.js"));

class App extends Component {
    constructor () {
        super();

        if (process.env.google) {
            history.listen(location => {
                window.gtag("config", "UA-3440932-20", {
                    /* eslint-disable camelcase */
                    page_location: window.location.href,
                    page_path: location.pathname
                    /* eslint-enable camelcase */
                });
            });
        }
    }

    componentDidMount () {
        topbar.init();
    }

    render () {
        return (
            <Router basename={BASENAME} history={history}>
                <ScrollToTopComponent>
                    <AppHeader />
                    <Suspense fallback={<LoadingComponent />}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/docs" component={Documentation} />
                            <Route path="/tmpl" component={Templates} />
                            <Route path="/res" component={Resources} />
                            <Route path="/404" component={ErrorPage404} />
                            <Route component={ErrorPage404} />
                        </Switch>
                    </Suspense>
                </ScrollToTopComponent>
            </Router>
        );
    }
}

export default App;
