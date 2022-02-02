import React, { useEffect } from "react";

import { ComponentPreview, DocContainer, JavascriptDocs, JavascriptDocElement } from "@docutils";
import SidebarComponent from "@components/Sidebar";
import Tag from "@components/Tag";

import { sidebar } from "@src/scripts/main";

import { SidebarNavList, SidebarNavListExtended } from "./constants";
import NpmInformation from "@docutils/NpmInformation";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>
            The sidebar supports a depth of up to 3 levels. Note that if used with a sticky topbar, add
            class <Tag code type="secondary" text=".sidebar-topbar-sticky" />, <Tag code type="secondary" text=".topbar-min-{breakpoint}-sticky" />, or <Tag code type="secondary" text=".topbar-max-{breakpoint}-sticky" /> depending
            on the class of the sticky topbar,
            to the outmost <Tag code type="primary" text="<div>" /> of the sidebar.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="container-fluid">
                <div className="row">
                    <SidebarComponent id="dg-sidebar1" sidebarNavList={SidebarNavList}/>
                    <main className="col main-content">Main content things...</main>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const ExtendedSidebar = () => (
    <>
        <h2 id="extended-sidebar">Extended sidebar</h2>
        <p>This sidebar is an extended sidebar which supports a depth of up to 4 levels. To use the extended sidebar, add class <Tag code type="secondary" text=".extended-sidebar" /> to the second <Tag code type="primary" text="<ul>"/> along with the <Tag code type="secondary" text=".secondary-nav-ul" /> class.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="container-fluid">
                <div className="row">
                    <SidebarComponent id="dg-sidebar2" sidebarNavList={SidebarNavListExtended} extendedSidebar={true}/>
                    <main className="col main-content">Main content things...</main>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const SetActiveState = ({ componentName }) => (
    <>
        <JavascriptDocElement
            code={<Tag code type="secondary" text="dg.sidebar.setActiveState(<sidebar-id>, group-index, subgroup-index, leaf-index)"/>}
            description={
                <>
                    Note: This method is optional
                    <br/>
                    <br/>

                    Sets group, subgroup and leaf of the {componentName} to active depending on the parameters
                    passed. The parameter <Tag code type="secondary" text="group-index" /> is the index of the group to be set active,
                    the parameter <Tag code type="secondary" text="subgroup-index" /> is the index of the subgroup beneath the group selected
                    by <Tag code type="secondary" text="group-index" />, and the parameter <Tag code type="secondary" text="leaf-index" /> is the
                    index of the leaf beneath both <Tag code type="secondary" text="group-index" /> and <Tag code type="secondary" text="subgroup-index" />.
                    If the group only has two levels, only <Tag code type="secondary" text="group-index" /> and <Tag code type="secondary" text="leaf-index" /> is
                    needed. Since group always is present, <Tag code type="secondary" text="group-index" /> should always be provided.
                    Pass <Tag code type="secondary" text="null" /> as a parameter in cases where the parameter needs to be empty, such as
                    when <Tag code type="secondary" text="subgroup-index" /> is the only one needed,
                    use <Tag code type="secondary" text="setActiveState(<sidebar-id>, group-index, null, null)"/>.
                    The parameter <Tag code type="secondary" text="<sidebar-id>"/> must always be a valid id.
                </>
            }
        />
    </>
);

const RemoveActiveState = ({ componentName }) => (
    <>

        <JavascriptDocElement
            code={<Tag code type="secondary" text="dg.sidebar.removeActiveState(<sidebar-id>, group-index, subgroup-index, leaf-index)"/>}
            description={
                <>
                    Note: This method is optional
                    <br/>
                    <br/>

                    Remove group, subgroup and leaf of the {componentName} active state depending on the parameters
                    passed. The paramater <Tag code type="secondary" text="group-index" /> is the index of the group to have the active state removed,
                    the paramater <Tag code type="secondary" text="subgroup-index" /> is the index of the subgroup beneath the group selected
                    by <Tag code type="secondary" text="group-index" />, and the paramater <Tag code type="secondary" text="leaf-index" /> is the
                    index of the leaf beneath both <Tag code type="secondary" text="group-index" /> and <Tag code type="secondary" text="subgroup-index" />.
                    If the group only has two levels, only <Tag code type="secondary" text="group-index" /> and <Tag code type="secondary" text="leaf.index"/> is
                    needed. Since group always is present, <Tag code type="secondary" text="group-index" /> should always be provided.
                    Pass <Tag code type="secondary" text="null" /> as a paramater in cases where the parameter needs to be empty, such as
                    when <Tag code type="secondary" text="subgroup-index" /> is the only one needed,
                    use <Tag code type="secondary" text="removeActiveState(<sidebar-id>, group-index, null, null)"/>.
                    The paramater <Tag code type="secondary" text="<sidebar-id>"/> must always be a valid id.
                </>
            }
        />
    </>
);

const InitScrollListener = ({ componentName }) => (
    <>
        <JavascriptDocElement
            code={<Tag code type="secondary" text="dg.sidebar.initScrollListener(<sidebar-id>, content-id, header-type)"/>}
            description={
                <>
                    Note: This method is optional
                    <br/>
                    <br/>

                    Makes the {componentName} with id <Tag code type="secondary" text="<sidebar-id>"/> listen to scroll events on the element
                    with id <Tag code type="secondary" text="content-id"/>, and matches a leaf with the corresponding header
                    of <Tag code type="secondary" text="header-type"/> to visualize active leaf depending on scroll position of element with
                    id <Tag code type="secondary" text="content-id"/>.
                </>
            }
        />
    </>
);

const RemoveScrollListener = () => (
    <>
        <JavascriptDocElement
            code={<Tag code type="secondary" text="dg.sidebar.removeScrollListener(<sidebar-id>, content-id)"/>}
            description={
                <>
                    Note: This method is optional
                    <br />
                    <br />

                    Removes scroll listener on the element
                    with id <Tag code type="secondary" text="content-id"/>.
                </>
            }
        />
    </>
);

const JavascriptMethods = () => (
    <>
        <h2 id="javascript-methods">JavaScript methods</h2>
        <p className="pl-3 mb-0">Note: The sidebar should be initialized with ID</p>
        <JavascriptDocs componentName="sidebar" others={[SetActiveState, RemoveActiveState, InitScrollListener, RemoveScrollListener]} />
    </>
);

const Sidebar = () => {
    useEffect(() => {
        sidebar.init("dg-sidebar1", true);
        sidebar.init("dg-sidebar2", true);
    });

    return (
        <DocContainer docToc>
            <p className="lead">The sidebar is used to give users an easily available navigational bar on the left side of your web application.</p>
            <Overview />
            <ExtendedSidebar />
            <JavascriptMethods />
            <NpmInformation componentName={"sidebar"}/>
        </DocContainer>
    );
};

export default Sidebar;

/* For testing */
export { Overview, ExtendedSidebar, JavascriptMethods, SetActiveState, RemoveActiveState, InitScrollListener, RemoveScrollListener };
