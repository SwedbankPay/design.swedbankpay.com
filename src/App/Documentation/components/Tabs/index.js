import React, { Component } from "react";

import ComponentPreview from "../../utils/ComponentPreview";
import DocToc from "../../utils/DocToc";
import TabsComponent from "../../../components/Tabs";
import { tabs } from "../../../../px-script";

const tabItems = [
    {
        name: "Tab1",
        active: false
    },
    {
        name: "Tab2",
        active: true
    },
    {
        name: "Tab3",
        active: false
    }
];

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Overview... <code className="token property">.tabs</code>...<code className="token property">.tabs-auto</code></p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <TabsComponent mode="auto" items={tabItems} />
        </ComponentPreview>
    </>
);

const Stacked = () => (
    <>
        <h2 id="stacked">Stacked</h2>
        <p>Stacked... <code className="token property">.tabs</code>...<code className="token property">.tabs-stacked</code></p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <TabsComponent mode="stacked" items={tabItems} />
        </ComponentPreview>
    </>
);

const Collapsed = () => (
    <>
        <h2 id="collapsed">Collapsed</h2>
        <p>Collapsed... <code className="token property">.tabs</code>...<code className="token property">.tabs-collapsed</code></p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <TabsComponent mode="collapsed" items={tabItems} />
        </ComponentPreview>
    </>
);

const TabsText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Tabs...</p>
        <Overview />
        <Stacked />
        <Collapsed />
    </div>
);

class Tabs extends Component {
    componentDidMount () {
        tabs.init();
    }

    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <TabsText />
                    <DocToc component={TabsText} />
                </div>
            </div>
        );
    }
}

export default Tabs;

/* for testing */
export { Overview, TabsText };
