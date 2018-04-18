import React, { Component } from "react";

import ComponentPreview from "../../utils/ComponentPreview";
import DocToc from "../../utils/DocToc";
import PanelComponent from "../../../components/Panel";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Panel...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <PanelComponent
                title="Panel title"
                subTitle="Panel subtitle"
                footerText="Footer content goes here."
                footerBtnText="Footer button"
            >
                <p>Your main panel content is put here.</p>
                <p>Some more content over here.</p>
                <p>And one more line, just to be safe.</p>
            </PanelComponent>
        </ComponentPreview>
    </>
);

const PanelHeaders = () => (
    <>
        <h2 id="panel-headers">Panel headers</h2>
        <p>Two types of headers... <code className="token property">.panel-default</code> and <code className="token property">.panel-brand</code>...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <PanelComponent title="Default panel" />{"\n\n"}
            <PanelComponent type="brand" title="Panel brand" />
        </ComponentPreview>
    </>
);

const DarkMode = () => (
    <>
        <h2 id="panel-dark-mode">Panel dark mode</h2>
        <p>Dark body with <code className="token property">.panel-dark-mode</code>...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <PanelComponent
                type="brand"
                title="Panel title"
                subTitle="Panel subtitle"
                footerText="Footer content goes here."
                footerBtnText="Footer button"
                darkMode={true}
            >
                <p className="lead">This is a panel with dark mode.</p>
                <p>Your main panel content is put here.</p>
                <p>Some more content over here.</p>
                <p>And one more line, just to be safe.</p>
            </PanelComponent>
        </ComponentPreview>
    </>
);

const PanelMuted = () => (
    <>
        <h2 id="muted-panel">Muted panel</h2>
        <p>Muted panel with <code className="token property">.panel-muted</code>...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <PanelComponent
                type="muted"
                title="Panel title"
                subTitle="Panel subtitle"
                footerText="Footer content goes here."
                footerBtnText="Footer button"
            >
                <p className="lead">This is a muted panel.</p>
                <p>Your main panel content is put here.</p>
                <p>Some more content over here.</p>
                <p>And one more line, just to be safe.</p>
            </PanelComponent>
        </ComponentPreview>
    </>
);

const PanelText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Panels...</p>
        <Overview />
        <PanelHeaders />
        <DarkMode />
        <PanelMuted />
    </div>
);

class Panel extends Component {
    componentDidMount () {
    }

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

/* for testing */
export { Overview, PanelHeaders, DarkMode, PanelMuted, PanelText };
