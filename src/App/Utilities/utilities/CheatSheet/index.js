import React from "react";
import { ComponentPreview, DocContainer } from "@docutils";
import CodeTags from "@components/CodeTags";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Some interesting facts</p>
    </>
);

const Borders = () => (
    <DocContainer>
        <p className="lead">
            Padding and Margin are important and yeah lets do it man
        </p>
        <Overview />
    </DocContainer>
);

export default Borders;

/* For testing */

export { Overview };
