import React, { useEffect } from "react";

import { ComponentPreview, DocContainer, JavascriptDocs, JavascriptDocElement } from "@docutils";
import SidebarComponent from "@components/Sidebar";
import CodeTags from "@components/CodeTags";

import { sidebar } from "@src/scripts/main";

import { SidebarNavList, SidebarNavListExtended } from "./constants";
import NpmInformation from "@docutils/NpmInformation";

const Test = () => (
    <section>
        <div className="container-fluid">
            <div className="row">
                <div id="dg-sidebar3" className="sidebar">
                    <nav className="sidebar-main-nav">
                        <div className="sidebar-logo"><a href="/" aria-label="To homepage"><img src="/img/logo/swedbankpay-logo-v.svg" alt="Swedbank Pay vertical logo" className="logotype-vertical logotype-md" /></a></div>
                        <ul className="main-nav-ul">
                            <li className="main-nav-li active">
                                <a><i className="material-icons-outlined" aria-hidden="true">home</i>Home Page</a>
                            </li>
                            <li className="main-nav-li">
                                <a><i className="material-icons-outlined rotated" aria-hidden="true">wb_incandescent</i>Get Started</a>
                                <nav className="sidebar-secondary-nav">
                                    <header className="secondary-nav-header">Get Started</header>
                                    <ul className="secondary-nav-ul extended-sidebar">
                                        <li className="secondary-nav-li leaf">
                                            <a><i className="material-icons-outlined rotated" aria-hidden="true">accessibility</i>Accessibility</a>
                                        </li>
                                        <li className="secondary-nav-li leaf">
                                            <a><i className="material-icons-outlined rotated" aria-hidden="true">palette</i>Colors</a>
                                            <ul>
                                                <a className="icon-link text-decoration-none previous-nav">
                                                    <i className="material-icons" aria-hidden="true">arrow_back_ios</i>
                                                    <span className="ml-2">Back to Get Started</span>
                                                </a>
                                                <header className="mt-2">
                                                    <i className="material-icons-outlined rotated" aria-hidden="true">palette</i>Colors
                                                </header>
                                                <li className="leaf"><a>Primary colors</a></li>
                                                <li className="leaf"><a>Tertiary colors</a>
                                                    <ul>
                                                        <a className="icon-link text-decoration-none previous-nav">
                                                            <i className="material-icons" aria-hidden="true">arrow_back_ios</i>
                                                            <span className="ml-2">Back to colors</span>
                                                        </a>
                                                        <header className="test-header mt-2">
                                                            <i className="material-icons-outlined rotated" aria-hidden="true">palette</i>Tertiary
                                                        </header>
                                                        <li className="leaf"><a>Children 1</a></li>
                                                        <li className="leaf">
                                                            <a>Children 2</a>
                                                            <ul>
                                                                <a className="icon-link text-decoration-none previous-nav">
                                                                    <i className="material-icons" aria-hidden="true">arrow_back_ios</i>
                                                                    <span className="ml-2">Back to Tertiary</span>
                                                                </a>
                                                                <header className="test-header mt-2">
                                                                    <i className="material-icons-outlined rotated" aria-hidden="true">palette</i>Children 2
                                                                </header>
                                                                <li className="leaf"><a>Granchildren 1</a></li>
                                                                <li className="leaf"><a>Granchildren 2</a></li>
                                                                <li className="leaf">
                                                                    <a>Granchildren 3</a>
                                                                    <ul>
                                                                        <a className="icon-link text-decoration-none previous-nav">
                                                                            <i className="material-icons" aria-hidden="true">arrow_back_ios</i>
                                                                            <span className="ml-2">Back to Children 2</span>
                                                                        </a>
                                                                        <header className="test-header mt-2">
                                                                            <i className="material-icons-outlined rotated" aria-hidden="true">palette</i>Grandchildren 3
                                                                        </header>
                                                                        <li className="leaf"><a>Children 1</a></li>
                                                                        <li className="group">
                                                                            <a>Children 2</a>
                                                                            <ul>
                                                                                <li className="nav-leaf"><a>Grangranchildren 1</a></li>
                                                                                <li className="nav-leaf"><a>Grangranchildren 2</a></li>
                                                                                <li className="nav-leaf"><a>Grangranchildren 3</a></li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </li>
                        </ul>
                    </nav>
                </div>
                <main className="col main-content">Main content things...</main>
            </div>
        </div>
    </section>
);
const Overview = () => (
    <section>
        <h2 id ="overview">Overview</h2>
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
    </section>
);

const ExtendedSidebar = () => (
    <section>
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
    </section>
);

const SetActiveState = ({ componentName }) => (
    <section>
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
    </section>
);

const RemoveActiveState = ({ componentName }) => (
    <section>

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
    </section>
);

const InitScrollListener = ({ componentName }) => (
    <section>
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
    </section>
);

const RemoveScrollListener = () => (
    <section>
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
    </section>
);

const JavascriptMethods = () => (
    <section>
        <h2 id="javascript-methods">JavaScript methods</h2>
        <p className="pl-3 mb-0">Note: The sidebar should be initialized with ID</p>
        <JavascriptDocs componentName="sidebar" others={[SetActiveState, RemoveActiveState, InitScrollListener, RemoveScrollListener]} />
    </section>
);

const Sidebar = () => {
    useEffect(() => {
        sidebar.init("dg-sidebar1");
        sidebar.init("dg-sidebar2");
        sidebar.init("dg-sidebar3");
    });

    return (
        <DocContainer docToc>
            <Test />
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
