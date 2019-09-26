import React, { Component } from "react";
import { Router, Switch, Route, withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import Loadable from "react-loadable";

import Footer from "@components/Footer";
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

const Home = Loadable({
    loader: () => import(/* webpackChunkName: "home.chunk" */ "./Home/index.js"),
    loading: LoadingComponent
});

const Documentation = Loadable({
    loader: () => import(/* webpackChunkName: "documentation.chunk" */ "./Documentation/index.js"),
    loading: LoadingComponent
});

const Examples = Loadable({
    loader: () => import(/* webpackChunkName: "examples.chunk" */ "./Examples/index.js"),
    loading: LoadingComponent
});

const Templates = Loadable({
    loader: () => import(/* webpackChunkName: "templates.chunk" */ "./Templates/index.js"),
    loading: LoadingComponent
});

const Resources = Loadable({
    loader: () => import(/* webpackChunkName: "templates.chunk" */ "./Resources/index.js"),
    loading: LoadingComponent
});

const ErrorPage404 = Loadable({
    loader: () => import(/* webpackChunkName: "404.chunk" */ "./ErrorPage404/index.js"),
    loading: LoadingComponent
});

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
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/docs" component={Documentation} />
                        <Route path="/Examples" component={Examples} />
                        <Route path="/Templates" component={Templates} />
                        <Route path="/Resources" component={Resources} />
                        <Route path="/404" component={ErrorPage404} />
                        <Route component={ErrorPage404} />
                    </Switch>
                    <Footer />
                </ScrollToTopComponent>
            </Router>
        );
    }
}

export default App;
