import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import Tag from "@components/Tag";

const Sizing = () => (
    <DocContainer>
        <p className="lead">Easily make an element as wide or as tall (relative to its parent) with our width and height utilities.</p>
        <p>
        Width and height utilities are generated with support for values; <Tag code type="secondary" text="25%" />, <Tag code type="secondary" text="50%" />, <Tag code type="secondary" text="75%" />, <Tag code type="secondary" text="100%" />, and <Tag code type="secondary" text="auto" />.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="w-25 p-3 sc-highlight">Width 25%</div>
            <div className="w-50 p-3 sc-highlight">Width 50%</div>
            <div className="w-75 p-3 sc-highlight">Width 75%</div>
            <div className="w-100 p-3 sc-highlight">Width 100%</div>
            <div className="w-auto p-3 sc-highlight">Width auto</div>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="sc-highlight" style={{ height: "100px" }}>
                <div className="h-25 d-inline-block sc-highlight" style={{ width: "120px" }}>Height 25%</div>
                <div className="h-50 d-inline-block sc-highlight" style={{ width: "120px" }}>Height 50%</div>
                <div className="h-75 d-inline-block sc-highlight" style={{ width: "120px" }}>Height 75%</div>
                <div className="h-100 d-inline-block sc-highlight" style={{ width: "120px" }}>Height 100%</div>
                <div className="h-auto d-inline-block sc-highlight" style={{ width: "120px" }}>Height auto</div>
            </div>
        </ComponentPreview>

        <p>You can also use <Tag code type="secondary" text="max-width: 100%;" /> and <Tag code type="secondary" text="max-height: 100%;" /> utilities as needed.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="sc-highlight" style={{ height: "100px" }}>
                <div className="mh-100 sc-highlight" style={{ width: "100px", height: "200px" }}>Max-height 100%</div> {/* eslint-disable-line object-property-newline */}
            </div>
        </ComponentPreview>
    </DocContainer>
);

export default Sizing;
