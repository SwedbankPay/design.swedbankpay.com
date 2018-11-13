import React, { Component } from "react";

import { ComponentPreview, DocToc, Property } from "#";
import TopbarComponent from "@/Topbar";
import { topbar } from "$/px-script";
import Alert from "@/Alert";

const menu = {
    btn: {
        icon: "menu",
        text: "Menu"
    },
    items: [
        {
            title: "Link 1",
            href: "#"
        },
        {
            title: "Link 2",
            href: "#"
        },
        {
            title: "Link 3",
            href: "#"
        }
    ]
};

const menuInfo = {
    id: "topbar-nav-left",
    ...menu
};

// TODO: Remove when deprecated parts are deleted.
const DeprecatedAlert = () => (
    <Alert type="danger">
        <h3>Component contains deprecated parts</h3>
        <p>The following parts are deprecated and will be removed:</p>
        <ul>
            <li>Right nav</li>
            <li>Levels in left nav</li>
        </ul>
        <p>For continued support, please follow the examples in the documentation.</p>
    </Alert>
);

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>This will only show the code for the <Property value=".topbar" /> component, at least for now. For a demonstration of the usage check the example app (coming soon), or implement it in your own project!</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <TopbarComponent logo="default" menuInfo={menuInfo} />
        </ComponentPreview>
    </>
);

const StaticTopbar = () =>  (
    <>
        <h2 id="static-topbar">Static topbar</h2>
        <p>This will only show the code for the <Property value=".topbar" /> component, at least for now. For a demonstration of the usage check the example app (coming soon), or implement it in your own project!</p>
        <ComponentPreview language="html" codeFigure>
            <TopbarComponent logo="default" menuInfo={menuInfo} />
        </ComponentPreview>
    </>
);

const TopbarText = () => (
    <div className="col-lg-10 doc-body">
        <DeprecatedAlert />
        <p className="lead">Topbar...</p>
        <Overview />
        <StaticTopbar />
    </div>
);

class Topbar extends Component {
    componentDidMount () {
        topbar.init(1);
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

/* For testing */
export { Overview, TopbarText, DeprecatedAlert, StaticTopbar };
