import React, { Component } from "react";
import PrismCode from "react-prism";

import { ComponentPreview, DocContainer, Property } from "#";
import PanelComponent from "@/Panel";

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
            You can pick between two different panel headers, brand color with white text and white with green text. add <Property value=".panel-default" /> or <Property value=".panel-brand" /> to
            the header to use one of them.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <PanelComponent title="Default panel" />{"\n\n"}
            <PanelComponent type="brand" title="Panel brand" />
        </ComponentPreview>
    </>
);

const PanelDark = () => (
    <>
        <h2 id="panel-dark-mode">Panel dark mode</h2>
        <p>Dark body with <Property value=".panel-dark" />...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <PanelComponent
                type="brand"
                title="Panel title"
                subTitle="Panel subtitle"
                bodyContent={bodyContent}
                footerText="Footer content goes here."
                footerBtnText="Footer button"
                darkMode
            />
        </ComponentPreview>
    </>
);

const PanelMuted = () => (
    <>
        <h2 id="muted-panel">Muted panel</h2>
        <p>
            If you wish to use a completely gray panel you can add <Property value=".panel-muted" /> to the panel <PrismCode className="language-html">{"<section>"}</PrismCode>.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <PanelComponent
                type="muted"
                title="Panel title"
                subTitle="Panel subtitle"
                bodyContent={bodyContent}
                footerText="Footer content goes here."
                footerBtnText="Footer button"
            />
        </ComponentPreview>
    </>
);

const PanelTable = () => (
    <>
        <h2 id="panel-with-table">Displaying a full width table</h2>
        <p>
            To display a full width table in a panel use <Property value=".panel-table" /> on a div wrapping the table.
            Put <Property value=".panel-table" /> as a direct child of <Property value=".panel" />. Tables put in a panel are given a
            border bottom to seperate it from the following elements.
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

class Panel extends Component {
    render () {
        return (
            <DocContainer docToc>
                <p className="lead">
                    Panels are large containers meant to be able to contain all of our other components.
                </p>
                <Overview />
                <PanelHeaders />
                <PanelDark />
                <PanelMuted />
                <PanelTable />
            </DocContainer>
        );
    }
}

export default Panel;

/* For testing */
export { Overview, PanelHeaders, PanelDark, PanelMuted, PanelTable, TableContent };
