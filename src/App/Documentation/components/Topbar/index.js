import React, { Component } from "react";

import ComponentPreview from "../../utils/ComponentPreview";
import DocToc from "../../utils/DocToc";
import TopbarComponent from "../../../components/Topbar";
import { topbar } from "../../../../px-script";

const leftMenu = {
    id: "topbar-nav-left",
    btn: {
        icon: "menu",
        text: "Menu"
    },
    hierarchy: {}
};

const rightMenu = {
    id: "topbar-nav-right",
    btn: {
        icon: "menu",
        text: "Menu"
    },
    hierarchy: {}
};

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Overview... <code className="token property">.topbar</code>...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <TopbarComponent logo="default" leftMenu={leftMenu} rightMenu={rightMenu} />
        </ComponentPreview>
    </>
);

const TopbarText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Topbar...</p>
        <Overview />
    </div>
);

class Topbar extends Component {
    componentDidMount () {
        topbar.init();
    }

    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <TopbarText />
                    <DocToc component={TopbarText} />
                </div>
            </div>
        );
    }
}

export default Topbar;

/* for testing */
export { Overview, TopbarText };
