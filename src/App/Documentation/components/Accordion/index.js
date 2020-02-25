import React, { useEffect } from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import AccordionComponent from "@components/Accordion";

const { accordion } = window.dg;

const items = [
    {
        id: "exp-1",
        title: "My title",
        content: "Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit consectetur aliqua officia Lorem elit. Cupidatat ea tempor ut esse. Aliquip exercitation in nisi reprehenderit anim Lorem. Excepteur nostrud officia irure tempor aute ipsum. Voluptate nisi incididunt proident enim reprehenderit fugiat fugiat magna sit reprehenderit Lorem anim. Aute commodo cillum nisi consectetur amet eiusmod do tempor incididunt anim."
    },
    {
        id: "exp-2",
        title: "My title",
        content: "Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit consectetur aliqua officia Lorem elit. Cupidatat ea tempor ut esse. Aliquip exercitation in nisi reprehenderit anim Lorem. Excepteur nostrud officia irure tempor aute ipsum. Voluptate nisi incididunt proident enim reprehenderit fugiat fugiat magna sit reprehenderit Lorem anim. Aute commodo cillum nisi consectetur amet eiusmod do tempor incididunt anim."
    },
    {
        id: "exp-3",
        title: "My title",
        content: "Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit consectetur aliqua officia Lorem elit. Cupidatat ea tempor ut esse. Aliquip exercitation in nisi reprehenderit anim Lorem. Excepteur nostrud officia irure tempor aute ipsum. Voluptate nisi incididunt proident enim reprehenderit fugiat fugiat magna sit reprehenderit Lorem anim. Aute commodo cillum nisi consectetur amet eiusmod do tempor incididunt anim."
    }
];

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <AccordionComponent items={items} />
        </ComponentPreview>
    </>
);

const Accordion = () => {
    useEffect(() => { accordion.init(); }, []);

    return (
        <DocContainer docToc>
            <Overview />
        </DocContainer>
    );
};

export default Accordion;
