import React, { Component } from "react";

import ComponentPreview from "../../utils/ComponentPreview";
import DocToc from "../../utils/DocToc";
import TabsComponent from "../../../components/Tabs";

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
        <p>Overview... <code className="token property">.nav-tabs</code>...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <TabsComponent mode="auto" items={tabItems} />
            <TabsComponent mode="stacked" items={tabItems} />
            <TabsComponent mode="collapsed" items={tabItems} />
        </ComponentPreview>
    </>
);

const New = () => (
    <>
        <h2 id="new">New</h2>
        <p>New... <code className="token property">.tabs</code>...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <TabsComponent test={true} mode="auto" items={tabItems} />
            <TabsComponent test={true} mode="stacked" items={tabItems} />
            <TabsComponent test={true} mode="collapsed" items={tabItems} />
        </ComponentPreview>
    </>
);

const TabsText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Tabs...</p>
        <Overview />
        <New />
    </div>
);

class Tabs extends Component {
    componentDidMount () {
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
