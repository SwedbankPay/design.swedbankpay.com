import React, { useEffect } from "react";

import { ComponentPreview, DocContainer, JavascriptDocs, JavascriptDocElement, OldComponentPreview } from "@docutils";
import CodeTags from "@components/CodeTags";

import { sidebar } from "@src/scripts/main";

import { SidebarShowcase } from "./constants";
import NpmInformation from "@docutils/NpmInformation";

const Overview = () => (
    <section id="sidebar-overview">
        <h2 id ="overview">Overview</h2>

        <OldComponentPreview language="html" showCasePanel showCasePanelAdvanced={SidebarShowcase} codeFigure />
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

const DeveloperDocumentation = () => (
    <section>
        <h2 id="developer-documentation">Developer documentation</h2>
        <section>
            <h3>Infinite depth</h3>
            <section>
                <h4>Deeper?</h4>
                <p>To create four levels and more, inside <CodeTags type="secondary" code=".secondary-nav-li.leaf" />, insert a <CodeTags type="primary" code="<ul>" />, containing <CodeTags type="secondary" code="a.previous-nav" />, followed by a <CodeTags type="primary" code="<header>" />, then the next <CodeTags type="primary" code="<li>" />-elements. Repeat this pattern into eternity.</p>
                <ComponentPreview language="html" codeFigure>
                    <li className="secondary-nav-li leaf">{"\n"}
                        <a href="#">Li title</a>{"\n"}
                        <ul>{"\n"}
                            <a href="#" className="previous-nav">{"\n"}
                                <i className="material-icons" aria-hidden="true">arrow_back_ios</i>{"\n"}
                                <span>Back to Previous</span>{"\n"}
                            </a>
                            <header>Icon Title</header>
                            <li className="leaf">{"\n"}
                                <a href="#">Li title</a>{"\n"}
                                {"{*"} Continue the pattern here {"*}"}
                            </li>
                        </ul>
                    </li>
                </ComponentPreview>
            </section>
            <section>
                <h4>Deep enough?</h4>
                <p>Replace the <CodeTags type="secondary" code=".leaf" /> class with <CodeTags type="secondary" code=".group" />. And the last <CodeTags type="primary" code="<li>" />&apos;s should have <CodeTags type="secondary" code=".nav-leaf" /></p>
                <ComponentPreview language="html" codeFigure>
                    <li className="group">{"\n"}
                        <a href="#">Li title</a>{"\n"}
                        <ul>{"\n"}
                            <li className="nav-leaf">{"\n"}
                                <a href="#">Li title</a>{"\n"}
                            </li>
                            <li className="nav-leaf">{"\n"}
                                <a href="#">Li title</a>{"\n"}
                            </li>
                            <li className="nav-leaf">{"\n"}
                                <a href="#">Li title</a>{"\n"}
                            </li>
                        </ul>
                    </li>
                </ComponentPreview>
            </section>
        </section>
        <section>
            <h3>JavaScript methods</h3>
            <p className="pl-3 mb-0"><b>Note:</b> The sidebar should be initialized with ID</p>
            <JavascriptDocs componentName="sidebar" others={[SetActiveState, RemoveActiveState, InitScrollListener, RemoveScrollListener]} />
        </section>
    </section>
);

const Sidebar = () => {
    useEffect(() => {
        sidebar.init("dg-sidebar");
    });

    return (
        <DocContainer>
            <section id="sidebar-doc">
                <p className="lead">The sidebar is used to give users an easily available navigational bar on the left side of your web application.</p>
                <Overview />
                <DeveloperDocumentation />
                <NpmInformation componentName={"sidebar"}/>
            </section>
        </DocContainer>
    );
};

export default Sidebar;

/* For testing */
export { Overview, DeveloperDocumentation, SetActiveState, RemoveActiveState, InitScrollListener, RemoveScrollListener };
