import React from "react";
import { Link } from "react-router-dom";
import { ComponentPreview, DocContainer } from "@docutils";
import Tag from "@components/Tag";

const FullWidth = () => (
    <>
        <h2 id="full-width">Full width page</h2>
        <p>
            To use a full width layout use a combination of grid and the <Tag code type="secondary" text=".main-content" /> class. <Tag code type="secondary" text=".main-content" /> has a white background and some padding.
            For a full width layout use <Tag code type="secondary" text=".border-left" /> to clearly separate the sidebar and the main content. See <Link to="/utilities/borders">borders</Link> docs for more information.
        </p>
        <ComponentPreview language="html" codeFigure>
            <div className="container-fluid">
                <div className="row">
                    <header>
                        Topbar component...
                    </header>
                </div>
                <div className="row">
                    <div className="col-auto">
                        Sidebar component...
                    </div>
                    <main className="col main-content border-left">
                        Main content things...
                    </main>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const CenteredContent = () => (
    <>
        <h2 id="centered-content">Centered content</h2>
        <p>
            For a centered layout use <Tag code type="secondary" text=".container"/>, it has built in breakpoints and will switch to full-width if the screen size is small
            enough (see <Link to="/core/grid">grid</Link>). When the content is centered it will require <Link to="/utilities/borders">borders</Link> on
            the right and left side. To make your topbar fill the page horizontally you will have to wrap it in a <Tag code type="secondary" text=".row" /> and <Tag code type="secondary" text=".container-fluid" />.
        </p>
        <ComponentPreview language="html" codeFigure>
            <div className="container-fluid">
                <div className="row">
                    <header>
                        Topbar component...
                    </header>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-auto">
                        Sidebar component...
                    </div>
                    <main className="col main-content border-left border-right">
                        Main content things...
                    </main>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const PageLayout = () => (
    <DocContainer docToc >
        <p className="lead">
            Use grid with our <Tag code type="secondary" text=".main-content" /> class to use a variety of page layouts. As we have a mobile first approach we only use 1rem as base padding for
            our <Tag code type="secondary" text=".main-content"/> class. Use the <Link to="/identity/spacing">spacing</Link> classes to customize padding to fit your needs.
        </p>
        <FullWidth />
        <CenteredContent />
    </DocContainer>
);

export default PageLayout;

/* For testing */
export { FullWidth, CenteredContent };
