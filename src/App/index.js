import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import Loadable from "react-loadable";

import AppHeader from "./AppHeader";

const BASENAME = process.env.basename;

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

// TODO: Create a better route loader [EH]
const LoadingComponent = () => <h2>Loading...</h2>;

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

    render () {
        return (
            <Router basename={BASENAME}>
                <ScrollToTopComponent>
                    <AppHeader />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/docs" component={Documentation} />
                        <Route path="/Examples" component={Examples} />
                        <Route path="/Templates" component={Templates} />
                        <Route component={ErrorPage404} />
                    </Switch>
                </ScrollToTopComponent>
            </Router>
        );
    }
}

export default App;
