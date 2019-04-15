import React from "react";
import { Property, ComponentPreview, DocContainer } from "#";

const FullWidth = () => (
    <>
        <h2 id="full-width">Full width page</h2>
        <p>
            To get a full-width page with a sidebar/nav menu use <Property value=".container-fluid" />.
        </p>
        <ComponentPreview language="html" codeFigure>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-auto">
                        Sidebar component...
                    </div>
                    <div className="col page-container">
                        Main content things...
                    </div>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const CenteredContent = () => (
    <>
        <h2 id="centered-content">Centered content</h2>
        <p>
            If you wish to have your content centered use <Property value=".container"/>. This class has built in breakpoints and will
            switch to full-width if the screen size is small enough.
        </p>
        <ComponentPreview language="html" codeFigure>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-auto">
                        Sidebar component...
                    </div>
                    <div className="col page-container">
                        Main content things...
                    </div>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const PageLayout = () => (
    <DocContainer docToc >
        <p className="lead">
            Supported page layouts. Use our container classes to customize how your page looks and behaves at different breakpoints.
        </p>
        <FullWidth />
        <CenteredContent />
    </DocContainer>
);

export default PageLayout;

/* For testing */
export { FullWidth, CenteredContent };
