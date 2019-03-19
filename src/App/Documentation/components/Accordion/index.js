import React, { useEffect } from "react";

import { ComponentPreview, DocContainer } from "#";
import accordion from "$/px-script/main/accordion";
import AccordionComponent from "@/Accordion";

const items = [
    {
        title: "Foo",
        content: <p>My accordion content</p>
    },
    {
        title: "Bar",
        content: <p>My accordion content</p>
    },
    {
        title: "Baz",
        content: <>
                <p>My accordion content</p>
                <p>My accordion content</p>
                <p>My accordion content</p>
                <p>My accordion content</p>
                <p>My accordion content</p>
            </>
    }
];

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Accordion.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <AccordionComponent items={items} />
        </ComponentPreview>
    </>
);

const Accordion = () => {
    useEffect(() => accordion.init());

    return (
        <DocContainer docToc>
            <p className="lead">
                Accordion
            </p>
            <Overview />
        </DocContainer>
    );
};

export default Accordion;

/* For testing */
export { Overview };
