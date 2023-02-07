import React, { Component, Suspense, useEffect } from "react";
import { Router, Switch, Route } from "react-router-dom";
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

const Home = React.lazy(() => import(/* webpackChunkName: "home.chunk" */ "./Home/index.js"));

const GetStarted = React.lazy(() => import(/* webpackChunkName: "get-started.chunk" */ "./GetStarted/index.js"));

const Components = React.lazy(() => import(/* webpackChunkName: "components.chunk" */ "./ComponentsDocumentation/index.js"));

const Identity = React.lazy(() => import(/* webpackChunkName: "core.chunk" */ "./Identity/index.js"));

const Patterns = React.lazy(() => import(/* webpackChunkName: "patterns.chunk" */ "./Patterns/index.js"));

const ErrorPage404 = React.lazy(() => import(/* webpackChunkName: "404.chunk" */ "./ErrorPage404/index.js"));

const Utilities = React.lazy(() => import(/* webpackChunkName: "utilities.chunk" */ "./Utilities/index.js"));

const App = () => {

    useEffect(() => {
        topbar.init();
    }, []);

    return (
        <Router basename={basename} history={history}>
            <AppHeader /> {/* mobile & tablet topbar & hamburger menu */}
            <div className="documentation">
                <div className="d-md-flex">
                    <SkipLink/>
                    <div className="d-none d-lg-block"> {/* desktop sidebar nav */}
                        <SelectPanel id="doc-sidebar" routes={routes} />
                    </div>
                    <main id="doc-view" className="doc-view">
                        <SearchBox className={"d-none d-lg-block"}/>
                        <Suspense fallback={<LoadingComponent />}>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/get-started" component={GetStarted} />
                                <Route path="/components" component={Components} />
                                <Route path="/identity" component={Identity} />
                                <Route path="/patterns" component={Patterns} />
                                <Route path="/utilities" component={Utilities} />
                                <Route path="/404" component={ErrorPage404} />
                                <Route component={ErrorPage404} />
                            </Switch>
                        </Suspense>
                    </main>
                </div>
            </div>
        </Router>
    );
};

export default App;
