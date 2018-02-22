import React, { Component } from "react";
import { Link } from "react-router-dom";

import ComponentPreview, { DataAttribute, PxScript } from "../../../utils/ComponentPreview";
import DocToc from "../../../utils/DocToc";

import ButtonComponent from "../../../../components/Button/Button";

const Examples = () => (
    <div>
        <h2 id="examples">Examples</h2>
        <p>Several button styles etc...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <ButtonComponent color="brand" label="Brand button" />
            <ButtonComponent color="brand" label="Brand button" />
        </ComponentPreview>
    </div>
);

const ButtonsText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Use buttons...</p>
        <Examples />
    </div>
);


const Button = () => {
    return (
        <div className="doc-container">
            <div className="row">
                <ButtonsText />
                <DocToc component={ButtonsText} />
            </div>
        </div>
    );
};

export default Button;
