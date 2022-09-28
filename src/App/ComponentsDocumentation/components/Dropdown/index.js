import React from "react";
import { Link } from "react-router-dom";
import { ComponentPreview, DocContainer, JavascriptDocs } from "@docutils";

const Overview = () => (
    <section>
        <h2 id="overview">Overview</h2>
        <p>
            Everything is ready for you now, Raphael 🎉
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            todo
        </ComponentPreview>
    </section>
);

const Dropdown = () => (
    <DocContainer>
        <p className="lead">Some informational text about the dropdown component</p>
        <Overview/>
    </DocContainer>
);

export default Dropdown;
