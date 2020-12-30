import React, { Component, Suspense } from "react";
import { Router, Switch, Route, withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import AppHeader from "./AppHeader";
import { LoadingComponent } from "./utils";
import SelectPanel from "./utils/SelectPanel";

import routes from "./routes/all";

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

const GettingStarted = React.lazy(() => import(/* webpackChunkName: "getting-started.chunk" */ "./GettingStarted/index.js"));

const Components = React.lazy(() => import(/* webpackChunkName: "components.chunk" */ "./ComponentsDocumentation/index.js"));

const Identity = React.lazy(() => import(/* webpackChunkName: "core.chunk" */ "./Identity/index.js"));

const Examples = React.lazy(() => import(/* webpackChunkName: "examples.chunk" */ "./Examples/index.js"));

const Utilities = React.lazy(() => import(/* webpackChunkName: "utilities.chunk" */ "./Utilities/index.js"));

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
                    <div className="documentation">
                        <div className="d-md-flex">
                            <div className="d-none d-lg-block">
                                <SelectPanel id="doc-sidebar" newSidebar={true} routes={routes} />
                            </div>
                            <main className="doc-view">
                                <Suspense fallback={<LoadingComponent />}>
                                    <Switch>
                                        <Route exact path="/" component={Home} />
                                        <Route path="/get-started" component={GettingStarted} />
                                        <Route path="/components" component={Components} />
                                        <Route path="/identity" component={Identity} />
                                        <Route path="/examples" component={Examples} />
                                        <Route path="/utilities" component={Utilities} />
                                        <Route path="/404" component={ErrorPage404} />
                                        <Route component={ErrorPage404} />
                                    </Switch>
                                </Suspense>
                            </main>
                        </div>
                    </div>
                </ScrollToTopComponent>
            </Router>
        );
    }
}

export default App;
