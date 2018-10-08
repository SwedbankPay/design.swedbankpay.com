import React, { Component } from "react";
import { Link } from "react-router-dom";
import PrismCode from "react-prism";

import { ComponentPreview, DocToc, ExperimentalComponentAlert } from "#";
import { tabs } from "$/px-script";
import TabsComponent from "@/Tabs";

const tabItems = ["Kort", "Rabatter", "Transaksjoner", "Faktura", "Instillinger", "Audit trail"];

const BasicUsage = () => (
    <>
        <h2 id="basicusage">Basic usage</h2>
        <p>Add class <code className="token property">.tabs</code> with a <code className="token property">.tabs-horizontal-desired_size</code> to a div containing an arrow icon along with <PrismCode className="language-html">{"<ul>"}</PrismCode> and nest <PrismCode className="language-html">{"<li>"}</PrismCode> as needed. The <code className="token property">.tabs-horizontal-desired_size</code> class determines when your tabs will switch from horizontal to collapsed. The available sizes can be found in our <Link to="/docs/core/breakpoints">breakpoints documentation</Link>.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <TabsComponent mode=" tabs-horizontal-xl" items={tabItems}/>
        </ComponentPreview>
    </>
);

const Collapsed = () => (
    <>
        <h2 id="collapsed">Collapsed</h2>
        <p>If no <code className="token property">.tabs-horizontal-desired_size</code> is provided then the tabs will always be in collapsed mode.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <TabsComponent items={tabItems}/>
        </ComponentPreview>
    </>
);

const TabsText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <ExperimentalComponentAlert />
        <p className="lead">Tabs...</p>
        <BasicUsage />
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

/* For testing */
export { BasicUsage, Collapsed, TabsText };
