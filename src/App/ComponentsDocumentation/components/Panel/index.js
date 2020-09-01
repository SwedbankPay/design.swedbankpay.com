import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import PanelComponent from "@components/Panel";
import CodeTags from "@components/CodeTags";

const bodyContent = [
    "Your main panel content is put here.",
    "Some more content over here.",
    "And one more line, just to be safe."
];

const TableContent = () => (
    <table className="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Location</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Sven</td>
                <td>Svensson</td>
                <td>Visby</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Sara</td>
                <td>Svensson</td>
                <td>Stockholm</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Ola</td>
                <td>Nordmann</td>
                <td>Oslo</td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>Holger</td>
                <td>Danske</td>
                <td>Copenhagen</td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td>Matti</td>
                <td>Meikäläinen</td>
                <td>Lahti</td>
            </tr>
        </tbody>
    </table>
);

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>
            A panel consists of three parts: A header, a body and a footer. You can mostly put whatever you want in any of these,
            but try not to put too much in the header and footer as these are meant to contain short and concise information about the body content.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <PanelComponent
                title="Panel title"
                subTitle="Panel subtitle"
                footerText="Footer content goes here."
                footerBtnText="Footer button"
                bodyContent={bodyContent}
            />
        </ComponentPreview>
    </>
);

const PanelHeaders = () => (
    <>
        <h2 id="panel-headers">Panel headers</h2>
        <p>
            You can pick between two different panel headers, brand color with white text and white with green text. add <CodeTags type="secondary" code=".panel-default" /> or <CodeTags type="secondary" code=".panel-brand" /> to
            the header to use one of them.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <PanelComponent title="Default panel" />{"\n\n"}
            <PanelComponent type="brand" title="Panel brand" />
        </ComponentPreview>
    </>
);

const PanelTable = () => (
    <>
        <h2 id="panel-with-table">Displaying a full width table</h2>
        <p>
            To display a full width table in a panel use <CodeTags type="secondary" code=".panel-table" /> on a div wrapping the table.
            Put <CodeTags type="secondary" code=".panel-table" /> as a direct child of <CodeTags type="secondary" code=".panel" />. Tables put in a panel are given a
            border bottom to separate it from the following elements.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <PanelComponent
                type="brand"
                title="Panel title"
                subTitle="Panel subtitle"
                bodyContent={bodyContent}
                footerText="Footer content goes here."
                footerBtnText="Footer button"
                panelTable={TableContent}
            />
        </ComponentPreview>
    </>
);

const Panel = () => (
    <DocContainer docToc>
        <p className="lead">
            Panels are large containers meant to be able to contain all of our other components.
        </p>
        <Overview />
        <PanelHeaders />
        <PanelTable />
    </DocContainer>
);

export default Panel;

/* For testing */
export { Overview, PanelHeaders, PanelTable, TableContent };
