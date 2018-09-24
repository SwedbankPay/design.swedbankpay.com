import React from "react";

import { ComponentPreview, DocToc, ExperimentalComponentAlert } from "#";
import TabsComponent from "@/Tabs";

const tabItems = ["Tab #1", "Tab #2", "Tab #3"];

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Overview... <code className="token property">.tabs</code>...<code className="token property">.tabs-auto</code></p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <TabsComponent mode="auto" items={tabItems} />
        </ComponentPreview>
    </>
);

const Stacked = () => (
    <>
        <h2 id="stacked">Stacked</h2>
        <p>Stacked... <code className="token property">.tabs</code>...<code className="token property">.tabs-stacked</code></p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <TabsComponent mode="stacked" items={tabItems} />
        </ComponentPreview>
    </>
);

const Collapsed = () => (
    <>
        <h2 id="collapsed">Collapsed</h2>
        <p>Collapsed... <code className="token property">.tabs</code>...<code className="token property">.tabs-collapsed</code></p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <TabsComponent mode="collapsed" items={tabItems} />
        </ComponentPreview>
    </>
);

const TabsText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <ExperimentalComponentAlert />
        <p className="lead">Tabs...</p>
        <Overview />
        <Stacked />
        <Collapsed />
    </div>
);

const Tabs = () => (
    <div className="doc-container">
        <div className="row">
            <TabsText />
            <DocToc component={TabsText} />
        </div>
    </div>
);

export default Tabs;

/* for testing */
export { Overview, Stacked, Collapsed, TabsText };
