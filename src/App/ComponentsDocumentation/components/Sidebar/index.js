import React, { useEffect } from "react";

import { ComponentPreview, DocContainer, JavascriptDocs, JavascriptDocElement } from "@docutils";
import SidebarComponent from "@components/Sidebar";
import CodeTags from "@components/CodeTags";

const { sidebar } = window.dg;

import { SidebarNavList, SidebarNavListExtended } from "./constants";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>
            The sidebar supports a depth of up to 3 levels. Note that if used with a sticky topbar, add
            class <CodeTags type="secondary" code=".sidebar-topbar-sticky" />, <CodeTags type="secondary" code=".topbar-min-{breakpoint}-sticky" />, or <CodeTags type="secondary" code=".topbar-max-{breakpoint}-sticky" /> depending
            on the class of the sticky topbar,
            to the outmost <CodeTags type="primary" code="<div>" /> of the sidebar.
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
        <p>This sidebar is an extended sidebar which supports a depth of up to 4 levels. To use the extended sidebar, add class <CodeTags type="secondary" code=".extended-sidebar" /> to the second <CodeTags type="primary" code="<ul>"/> along with the <CodeTags type="secondary" code=".secondary-nav-ul" /> class.
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
            code={<CodeTags type="secondary" code="dg.sidebar.setActiveState(<sidebar-id>, group-index, subgroup-index, leaf-index)"/>}
            description={
                <>
                    Note: This method is optional
                    <br/>
                    <br/>

                    Sets group, subgroup and leaf of the {componentName} to active depending on the parameters
                    passed. The paramater <CodeTags type="secondary" code="group-index" /> is the index of the group to be set active,
                    the paramater <CodeTags type="secondary" code="subgroup-index" /> is the index of the subgroup beneath the group selected
                    by <CodeTags type="secondary" code="group-index" />, and the paramater <CodeTags type="secondary" code="leaf-index" /> is the
                    index of the leaf beneath both <CodeTags type="secondary" code="group-index" /> and <CodeTags type="secondary" code="subgroup-index" />.
                    If the group only has two levels, only <CodeTags type="secondary" code="group-index" /> and <CodeTags type="secondary" code="leaf-index" /> is
                    needed. Since group always is present, <CodeTags type="secondary" code="group-index" /> should always be provided.
                    Pass <CodeTags type="secondary" code="null" /> as a paramater in cases where the parameter needs to be empty, such as
                    when <CodeTags type="secondary" code="subgroup-index" /> is the only one needed,
                    use <CodeTags type="secondary" code="setActiveState(<sidebar-id>, group-index, null, null)"/>.
                    The paramater <CodeTags type="secondary" code="<sidebar-id>"/> must always be a valid id.
                </>
            }
        />
    </>
);

const RemoveActiveState = ({ componentName }) => (
    <>

        <JavascriptDocElement
            code={<CodeTags type="secondary" code="dg.sidebar.removeActiveState(<sidebar-id>, group-index, subgroup-index, leaf-index)"/>}
            description={
                <>
                    Note: This method is optional
                    <br/>
                    <br/>

                    Remove group, subgroup and leaf of the {componentName} active state depending on the parameters
                    passed. The paramater <CodeTags type="secondary" code="group-index" /> is the index of the group to have the active state removed,
                    the paramater <CodeTags type="secondary" code="subgroup-index" /> is the index of the subgroup beneath the group selected
                    by <CodeTags type="secondary" code="group-index" />, and the paramater <CodeTags type="secondary" code="leaf-index" /> is the
                    index of the leaf beneath both <CodeTags type="secondary" code="group-index" /> and <CodeTags type="secondary" code="subgroup-index" />.
                    If the group only has two levels, only <CodeTags type="secondary" code="group-index" /> and <CodeTags type="secondary" code="leaf-index" /> is
                    needed. Since group always is present, <CodeTags type="secondary" code="group-index" /> should always be provided.
                    Pass <CodeTags type="secondary" code="null" /> as a paramater in cases where the parameter needs to be empty, such as
                    when <CodeTags type="secondary" code="subgroup-index" /> is the only one needed,
                    use <CodeTags type="secondary" code="removeActiveState(<sidebar-id>, group-index, null, null)"/>.
                    The paramater <CodeTags type="secondary" code="<sidebar-id>"/> must always be a valid id.
                </>
            }
        />
    </>
);

const InitScrollListener = ({ componentName }) => (
    <>
        <JavascriptDocElement
            code={<CodeTags type="secondary" code="dg.sidebar.initScrollListener(<sidebar-id>, content-id, header-type)"/>}
            description={
                <>
                    Note: This method is optional
                    <br/>
                    <br/>

                    Makes the {componentName} with id <CodeTags type="secondary" code="<sidebar-id>"/> listen to scroll events on the element
                    with id <CodeTags type="secondary" code="content-id"/>, and matches a leaf with the corresponding header
                    of <CodeTags type="secondary" code="header-type"/> to visualize active leaf depending on scroll position of element with
                    id <CodeTags type="secondary" code="content-id"/>.
                </>
            }
        />
    </>
);

const RemoveScrollListener = () => (
    <>
        <JavascriptDocElement
            code={<CodeTags type="secondary" code="dg.sidebar.removeScrollListener(<sidebar-id>, content-id)"/>}
            description={
                <>
                    Note: This method is optional
                    <br />
                    <br />

                    Removes scroll listener on the element
                    with id <CodeTags type="secondary" code="content-id"/>.
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
        </DocContainer>
    );
};

export default Sidebar;

/* For testing */
export { Overview, ExtendedSidebar, JavascriptMethods, SetActiveState, RemoveActiveState, InitScrollListener, RemoveScrollListener };
