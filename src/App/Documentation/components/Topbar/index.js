import React, { Component } from "react";

import { ComponentPreview, DocToc, Property } from "#";
import TopbarComponent from "@/Topbar";
import { topbar } from "$/px-script";

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

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>This will only show the code for the <Property value=".topbar" /> component, at least for now. For a demonstration of the usage check the example app (coming soon), or implement it in your own project!</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <TopbarComponent logo="default" menuInfo={menuInfo} />
        </ComponentPreview>
    </>
);

const TopbarText = () => (
    <div className="col-lg-10 doc-body">
        <p className="lead">Topbar...</p>
        <Overview />
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
export { Overview, TopbarText };
