import React, { useEffect } from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import SidebarComponent from "@components/Sidebar";
import TopbarComponent from "@components/Topbar";

const { sidebar } = window.dg;

const SidebarNavList = [
    {
        title: "Introduction",
        lastParent: true,
        subList: [
            {
                title: "Introduction 1"
            },
            {
                title: "Introduction 2"
            },
            {
                title: "Introduction 3"
            }
        ]
    },
    {
        title: "Summary",
        lastParent: true,
        subList: [
            {
                title: "Summary chapter 1"
            },
            {
                title: "Summary chapter 2"
            },
            {
                title: "Summary chapter 3"
            }
        ]
    },
    {
        title: "Other features",
        lastParent: false,
        subList: [
            {
                title: "Operations",
                lastParent: true,
                subList: [
                    {
                        title: "Operations"
                    },
                    {
                        title: "Lorem ipsum"
                    },
                    {
                        title: "Dolor sit amet consectetur"
                    },
                    {
                        title: "Adipiscing elit"
                    }
                ]
            },
            {
                title: "Events",
                lastParent: true,
                subList: [
                    {
                        title: "Event 1"
                    },
                    {
                        title: "Event 2"
                    },
                    {
                        title: "Event 3"
                    }
                ]
            },
            {
                title: "Extras",
                lastParent: false,
                subList: [
                    {
                        title: "Events",
                        lastParent: true,
                        subList: [
                            {
                                title: "Event 1"
                            },
                            {
                                title: "Event 2"
                            },
                            {
                                title: "Event 3"
                            }
                        ]
                    },
                    {
                        title: "Operations",
                        lastParent: true,
                        subList: [
                            {
                                title: "Operations"
                            },
                            {
                                title: "Lorem ipsum"
                            },
                            {
                                title: "Dolor sit amet consectetur"
                            },
                            {
                                title: "Adipiscing elit"
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>The sidebar supports a depth of up to 3 levels.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="container-fluid">
                <div className="row">
                    <TopbarComponent wide="xl" logout id="demo-topbar" />
                </div>
                <div className="row">
                    <div className="col-auto">
                        <SidebarComponent id="dg-sidebar" sidebarNavList={SidebarNavList} />
                    </div>
                    <main className="col main-content border-left">Main content things...</main>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const Sidebar = () => {
    useEffect(() => { sidebar.init("dg-sidebar"); });

    return (
        <DocContainer docToc>
            <p className="lead">The sidebar is used to give users an easily available navigational bar on the left side of your web application.</p>
            <Overview />
        </DocContainer>
    );
};

export default Sidebar;

/* For testing */
export { Overview };
