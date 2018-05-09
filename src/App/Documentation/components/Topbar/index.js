import React, { Component } from "react";

import ComponentPreview from "../../utils/ComponentPreview";
import DocToc from "../../utils/DocToc";
import TopbarComponent from "../../../components/Topbar";
import { topbar } from "../../../../px-script";

const menu = {
    btn: {
        icon: "menu",
        text: "Menu"
    },
    hierarchy: [
        {
            id: "1",
            items: [
                {
                    groupTitle: "Group 1",
                    items: [
                        {
                            title: "Item 1",
                            target: "2"
                        },
                        {
                            title: "Link 1",
                            target: "2"
                        }
                    ]
                },
                {
                    groupTitle: "Group 2",
                    items: [
                        {
                            title: "Item 2",
                            target: "3"
                        }
                    ]
                },
                {
                    title: "Link 2",
                    href: "#"
                },
                {
                    title: "Link 2",
                    target: "#"
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
        },
        {
            id: "2",
            items: [
                {
                    title: "Link 4",
                    target: "#"
                },
                {
                    title: "Link 4",
                    target: "#"
                },
                {
                    title: "Link 4",
                    href: "#"
                }
            ]
        },
        {
            id: "3",
            items: [
                {
                    title: "Link 5",
                    target: "#"
                },
                {
                    title: "Link 5",
                    href: "#"
                },
                {
                    title: "Link 5",
                    href: "#"
                }
            ]
        }
    ]
};

const leftMenu = Object.assign({ id: "topbar-nav-left" }, menu);
const rightMenu = Object.assign({ id: "topbar-nav-right" }, menu);

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Overviews... <code className="token property">.topbar</code>...</p>
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
