import React from "react";

import ComponentPreview from "../../utils/ComponentPreview";
import DocToc from "../../utils/DocToc";

const HowItWorks = () => (
    <>
        <h2 id="how-it-works">How it works</h2>
        <p>The grid system is heavily based on Bootstrap{"'"}s grid from v.4.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={true}>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            One of three columns
                        </div>
                        <div className="col-sm">
                            One of three columns
                        </div>
                        <div className="col-sm">
                            One of three columns
                        </div>
                    </div>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const AutoLayoutColumns = () => (
    <>
        <h2 id="auto-layout-columns">Auto-layout columns</h2>
        <p>Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like <code className="token property">.col-sm-6</code>.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true} removeOuterTag={true}>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            1 of 2
                        </div>
                        <div className="col">
                            2 of 2
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            1 of 3
                        </div>
                        <div className="col">
                            2 of 3
                        </div>
                        <div className="col">
                            3 of 3
                        </div>
                    </div>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const GridText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Use our grid system...</p>
        <HowItWorks />
        <AutoLayoutColumns />
    </div>
);

const Grid = () => {
    return (
        <div className="doc-container">
            <div className="row">
                <GridText />
                <DocToc component={GridText} />
            </div>
        </div>
    );
};

export default Grid;
