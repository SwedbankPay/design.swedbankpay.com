import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import packageJson from "~/package";

import AppHeader from "./AppHeader";
import { LoadingComponent, removeTrailingSlash } from "./utils";
import SelectPanel from "./utils/SelectPanel";

import routes from "./routes/all";

import SkipLink from "@components/SkipLink";

import SearchBox from "./utils/SearchBox";

import { topbar } from "@src/scripts/main";

const basename = removeTrailingSlash(process.env.basename) || "/";

const brand = process.env.brand;

const Home = React.lazy(() => import(/* webpackChunkName: "home.chunk" */ "./Home/index.js"));

const GetStarted = React.lazy(() => import(/* webpackChunkName: "get-started.chunk" */ "./GetStarted/index.js"));

const Components = React.lazy(() => import(/* webpackChunkName: "components.chunk" */ "./ComponentsDocumentation/index.js"));

const Identity = React.lazy(() => import(/* webpackChunkName: "core.chunk" */ "./Identity/index.js"));

const Patterns = React.lazy(() => import(/* webpackChunkName: "patterns.chunk" */ "./Patterns/index.js"));

const ErrorPage404 = React.lazy(() => import(/* webpackChunkName: "404.chunk" */ "./ErrorPage404/index.js"));

const Utilities = React.lazy(() => import(/* webpackChunkName: "utilities.chunk" */ "./Utilities/index.js"));

const ScrollToTop = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return children;
};

export const VersionTopBanner = () => {

    const pathname = useLocation().pathname;

    const [version, setVersion] = useState(undefined);

    useEffect(() => {
        fetch("https://design.swedbankpay.com/latestVersion.json").then(data => data.json())
            .then(data => setVersion(data.latestVersion))
            .catch(error => console.warn("Could not fetch latest version from Azure:", error));
    }, []);

    return (
        <>
            {version && packageJson.version !== version &&
            <div className="text-align-center py-2 bg-info text-white"><span>You are using an older version of the Design Guide. Click <a className="text-banner" href={`https://design.${brand}.com/v/${version}${pathname}`}>here</a> to get to the latest version ({version}).</span></div>}
        </>
    );
};

const App = () => {

    useEffect(() => {
        topbar.init();
    }, []);

    return (
        <BrowserRouter basename={basename} >
            <ScrollToTop>
                <AppHeader /> {/* mobile & tablet topbar & hamburger menu */}
                <div className="documentation">
                    <VersionTopBanner/>
                    <div className="d-md-flex">
                        <SkipLink/>
                        <div className="d-none d-lg-block"> {/* desktop sidebar nav */}
                            <SelectPanel id="doc-sidebar" routes={routes} />
                        </div>
                        <main id="doc-view" className="doc-view">
                            <SearchBox className={"d-none d-lg-block"}/>
                            <Suspense fallback={<LoadingComponent />}>
                                <Routes>
                                    <Route index path="/" element={<Home />} />
                                    <Route path="get-started/*" element={<GetStarted />} />
                                    <Route path="components/*" element={<Components />} />
                                    <Route path="identity/*" element={<Identity />} />
                                    <Route path="patterns/*" element={<Patterns />} />
                                    <Route path="utilities/*" element={<Utilities />} />
                                    <Route path="404/*" element={<ErrorPage404 />} />
                                    <Route path="*" element={<ErrorPage404 />} />
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
