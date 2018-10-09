import React, { Component } from "react";

import { ComponentPreview, DocToc } from "#";
import SidebarComponent from "@/Sidebar";

const Overview = () => (
    <>
        <h2 id="example-usage">Example usage</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <SidebarComponent />
        </ComponentPreview>
    </>
);

const SidebarText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Sidebars...</p>
        <Overview />
    </div>
);

class Sidebar extends Component {
    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <SidebarText />
                    <DocToc component={SidebarText} />
                </div>
            </div>
        );
    }
}

export default Sidebar;

/* For testing */
export { Overview };
