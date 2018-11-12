import React, { Component } from "react";

import { ComponentPreview, DocToc, Property } from "#";
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
        <p>Panel...</p>
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
        <p>Two types of headers... <Property value=".panel-default" /> and <Property value=".panel-brand" />...</p>
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
        <p>Muted panel with <Property value=".panel-muted" />...</p>
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

const PanelText = () => (
    <div className="col-lg-10 doc-body">
        <p className="lead">Panels...</p>
        <Overview />
        <PanelHeaders />
        <PanelDark />
        <PanelMuted />
        <PanelTable />
    </div>
);

class Panel extends Component {
    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <PanelText />
                    <DocToc component={PanelText} />
                </div>
            </div>
        );
    }
}

export default Panel;

/* For testing */
export { Overview, PanelHeaders, PanelDark, PanelMuted, PanelText, PanelTable };
