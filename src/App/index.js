import React, { Component, Suspense } from "react";
import { Router, Switch, Route, withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import AppHeader from "./AppHeader";
import { LoadingComponent } from "./utils";
import SelectPanel from "./utils/SelectPanel";

import routes from "./routes/all";

import SkipLink from "@components/SkipLink";

import SearchBox from "./utils/SearchBox";

import { topbar } from "@src/scripts/main";

const basename = process.env.basename || "/";

const history = createBrowserHistory({ basename });

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

const GetStarted = React.lazy(() => import(/* webpackChunkName: "get-started.chunk" */ "./GetStarted/index.js"));

const Components = React.lazy(() => import(/* webpackChunkName: "components.chunk" */ "./ComponentsDocumentation/index.js"));

const Identity = React.lazy(() => import(/* webpackChunkName: "core.chunk" */ "./Identity/index.js"));

const Examples = React.lazy(() => import(/* webpackChunkName: "examples.chunk" */ "./Examples/index.js"));

const Utilities = React.lazy(() => import(/* webpackChunkName: "utilities.chunk" */ "./Utilities/index.js"));

const Patterns = React.lazy(() => import(/* webpackChunkName: "utilities.chunk" */ "./Patterns/index.js"));

const ErrorPage404 = React.lazy(() => import(/* webpackChunkName: "404.chunk" */ "./ErrorPage404/index.js"));

class App extends Component {

    componentDidMount () {
        topbar.init();
    }

    render () {
        return (
            <Router basename={basename} history={history}>
                <ScrollToTopComponent>
                    <AppHeader />
                    <div className="documentation">
                        <div className="d-md-flex">
                            <SkipLink/>
                            <div className="d-none d-lg-block">
                                <SelectPanel id="doc-sidebar" newSidebar={true} routes={routes} />
                            </div>
                            <main id="doc-view" className="doc-view">
                                <SearchBox className={"d-none d-lg-block"}/>
                                <Suspense fallback={<LoadingComponent />}>
                                    <Switch>
                                        <Route exact path="/" component={Home} />
                                        <Route path="/get-started" component={GetStarted} />
                                        <Route path="/components" component={Components} />
                                        <Route path="/identity" component={Identity} />
                                        <Route path="/examples" component={Examples} />
                                        <Route path="/patterns" component={Patterns} />
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
