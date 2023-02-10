import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
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

const ScrollToTop = () => {
    useEffect(() => {

        window.scrollTo(0, 0);
    }, [location]);

    return null;
};

const Home = React.lazy(() => import(/* webpackChunkName: "home.chunk" */ "./Home/index.js"));

const GetStarted = React.lazy(() => import(/* webpackChunkName: "get-started.chunk" */ "./GetStarted/index.js"));

const Components = React.lazy(() => import(/* webpackChunkName: "components.chunk" */ "./ComponentsDocumentation/index.js"));

const Identity = React.lazy(() => import(/* webpackChunkName: "core.chunk" */ "./Identity/index.js"));

const Patterns = React.lazy(() => import(/* webpackChunkName: "patterns.chunk" */ "./Patterns/index.js"));

const ErrorPage404 = React.lazy(() => import(/* webpackChunkName: "404.chunk" */ "./ErrorPage404/index.js"));

const Utilities = React.lazy(() => import(/* webpackChunkName: "utilities.chunk" */ "./Utilities/index.js"));

const App = () => {

    const [version, setVersion] = useState();

    const VersionTopBanner = () => {

        useEffect(() => {
            fetch("https://design.swedbankpay.com/latestVersion.json").then(data => data.json())
                .then(data => setVersion(data.latestVersion))
                .catch(error => console.warn("Could not fetch latest version from Azure:", error));
        }, []);

        const pathname = useLocation().pathname;

        return (
            <div className="text-align-center py-2 bg-version-banner text-white"><span>You are using an older version of the Design Guide. Click <a className="text-banner" href={`https://design.${brand}.com/v/${version}${pathname}`}>here</a> to get to the latest version ({version}).</span></div>
        );
    };

    useEffect(() => {
        topbar.init();
    }, []);

    return (
        <BrowserRouter basename={basename} >
            <ScrollToTop>
                <AppHeader /> {/* mobile & tablet topbar & hamburger menu */}
                <div className="documentation">
                    {packageJson.version !== version && <VersionTopBanner/>}
                    <div className="d-md-flex">
                        <SkipLink/>
                        <div className="d-none d-lg-block"> {/* desktop sidebar nav */}
                            <SelectPanel id="doc-sidebar" routes={routes} />
                        </div>
                        <main id="doc-view" className="doc-view">
                            <SearchBox className={"d-none d-lg-block"}/>
                            <Suspense fallback={<LoadingComponent />}>
                                <Routes>
                                    <Route exact path="/" element={<Home />} />
                                    <Route path="get-started/*" element={<GetStarted />} />
                                    <Route path="components/*" element={<Components />} />
                                    <Route path="identity/*" element={<Identity />} />
                                    <Route path="patterns/*" element={<Patterns />} />
                                    <Route path="utilities/*" element={<Utilities />} />
                                    <Route path="404/*" element={<ErrorPage404 />} />
                                    <Route element={<ErrorPage404 />} />
                                </Routes>
                            </Suspense>
                        </main>
                    </div>
                </div>
            </ScrollToTop>
        </BrowserRouter>
    );
};

export default App;
