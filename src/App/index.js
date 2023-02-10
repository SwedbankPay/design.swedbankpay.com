import React, { Component, Suspense, useState, useEffect } from "react";
import { Router, Switch, Route, withRouter, useLocation } from "react-router-dom";
import { createBrowserHistory } from "history";
import packageJson from "~/package";
import AppHeader from "./AppHeader";
import { LoadingComponent } from "./utils";
import SelectPanel from "./utils/SelectPanel";

import routes from "./routes/all";

import SkipLink from "@components/SkipLink";

import SearchBox from "./utils/SearchBox";

import { topbar } from "@src/scripts/main";

const basename = process.env.basename || "/";

const brand = process.env.brand;

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

const Patterns = React.lazy(() => import(/* webpackChunkName: "patterns.chunk" */ "./Patterns/index.js"));

const ErrorPage404 = React.lazy(() => import(/* webpackChunkName: "404.chunk" */ "./ErrorPage404/index.js"));

const Utilities = React.lazy(() => import(/* webpackChunkName: "utilities.chunk" */ "./Utilities/index.js"));

const App = () => {

    const [version, setVersion] = useState(undefined);

    useEffect(() => {
        fetch("https://design.swedbankpay.com/latestVersion.json").then(data => data.json())
            .then(data => setVersion(data.latestVersion))
            .catch(error => console.warn("Could not fetch latest version from Azure:", error));
    }, []);

    const VersionTopBanner = () => {
        const pathname = useLocation().pathname;

        return (
            <div className="text-align-center py-2 bg-version-banner text-white"><span>You are using an older version of the Design Guide. Click <a className="text-banner" href={`https://design.${brand}.com/v/${version}${pathname}`}>here</a> to get to the latest version ({version}).</span></div>
        );
    };

    useEffect(() => {
        topbar.init();
    }, []);

    return (
        <Router basename={basename} history={history}>
            <ScrollToTopComponent>
                <AppHeader />
                <div className="documentation">
                    { version && packageJson.version !== version && <VersionTopBanner/>}
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
};

export default App;
