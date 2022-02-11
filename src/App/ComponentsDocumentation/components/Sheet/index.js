import React, { Component } from "react";

import { ComponentPreview, DocContainer, JavascriptDocs } from "@docutils";
import CodeTags from "@components/CodeTags";
import { Link } from "react-router-dom";

import { sheet } from "@src/scripts/main";
import NpmInformation from "@docutils/NpmInformation";

import { sheetShowCase } from "./constants";

const basename = process.env.basename;

const SheetExample = () => (
    <>
        <h2 id="example">Example</h2>
        <p>
        The sheets is used to provide users with actions and information contextual to the page. It can be used in different contexts, but common use cases are to display multiple actions that will affect the screen’s primary content such as filters or other ways to manipulate the main content.
        </p>
        <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={sheetShowCase} codeFigure/>
        <h3>When to consider something else</h3>
        <ul className="list list-bullet">
            <li>To enforce an action before the user can proceed, use the <Link to="/components/dialog">Dialog</Link> component.</li>
            <li>To present a small amount of content or actions in a non-blocking overlay, use the <Link to="/components/popover">Popover</Link> component.</li>
        </ul>

        <h2>How to use Sheets</h2>
        <div className="row">
            <div className="col-lg-6">
                <div className="slab slab-plain slab-border-success">
                    <h3>Do</h3>
                    <div className="d-flex flex-column align-items-center">
                        <img src={`${basename}img/documentation/sheet/do1.png`}alt="Sheet component with correct margins and overflowing contents, showing possibility to scroll within the component." className="img-fluid"/>
                    </div>
                </div>
                <p>Sheets can be vertically scrolled if the main content is long and exceeds the screen hight. The header and footer should still be fixed.</p>
            </div>
            <div className="col-lg-6">
                <div className="slab slab-plain slab-border-error">
                    <h3>Don&apos;t</h3>
                    <div className="d-flex flex-column align-items-center">
                        <img src={`${basename}img/documentation/sheet/dont1.png`} alt="Sheet component with no margins." className="img-fluid"/>
                    </div>
                </div>
                <p>Do not allow horizontal scrolling in a Sheet or layout that suggests horizontal scrolling.</p>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <div className="slab slab-plain slab-border-success">
                    <h3>Do</h3>
                    <div className="d-flex flex-column align-items-center">
                        <img src={`${basename}img/documentation/sheet/do2.png`}alt="Sheet component in mobile view. Displaying filter example." className="img-fluid"/>
                    </div>
                </div>
                <p>A Sheet can be used as a container of a <Link to="/patterns/filters">filter</Link> functionality. This is especially helpful on small screens like mobile device where space is limited and can’t fit filter components inline with the content.</p>
            </div>
        </div>
    </>
);

const ContentGuidelines = () => (
    <>
        <h2>Content guidelines</h2>
        <div className="row">
            <div className="col-12">
                <div className="d-flex justify-content-center mt-4 mb-4">
                    <img src={`${basename}img/documentation/sheet/content-guidelines.png`} alt="Sheet component with sticky header and footer" className="img-fluid"/>
                </div>
            </div>
            <ul className="list list-bullet">
                <li>The <b>header</b> should have a title and a close button.</li>
                <li>The <b>main content</b> area can contain a number of different components and this area can be vertically scrollable.</li>
                <li>The <b>footer</b> is optional and designed to contain buttons that will lead to certain actions. The footer is also sticky.</li>
            </ul>
        </div>
    </>
);

const DeveloperDocumentation = () => (
    <>
        <h2 id="developer-documentation">Developer Documentation</h2>
        <h3 id="javascript-methods">JavaScript methods</h3>
        <p>Use <CodeTags type="secondary" code="dg.sheet.init()"/> to <Link to="/get-started/for-developers">initialize</Link> all accordions. This will give the sheets open and close functions automatically.</p>
        <p>To open a given sheet, use <CodeTags type="secondary" code="dg.sheet.open(<sheet-id>)"/></p>
        <p>To close a given sheet, use <CodeTags type="secondary" code="dg.sheet.close(<sheet-id>)"/></p>
        <p>To disable the listener responsible for closing the sheet when a user clicks outside, add <CodeTags type="secondary" code="data-require-action"/> to your sheet.</p>
    </>
);

class Sheet extends Component {

    componentDidMount () {
        sheet.init();
    }

    render () {
        return (
            <DocContainer docToc>
                <p className="lead">
                A sheet is a container component that slides in and out from the edge of the screen and overlays the page content.  It can be used to focus users attention to a specific task without leaving the current page.
                </p>
                <SheetExample />
                <ContentGuidelines/>
                <DeveloperDocumentation />
                <NpmInformation componentName={"sheet"}/>
            </DocContainer>
        );
    }
}

export default Sheet;

/* For testing */
export { SheetExample, ContentGuidelines, DeveloperDocumentation };
