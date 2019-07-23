import React, { useEffect } from "react";

import { ComponentPreview, DocContainer, Property } from "#";
import ExpandableComponent from "@/Expandable";

const { expandable } = window.px;

const items = [
    {
        title: "My title",
        subtitle: "My subtitle",
        content: "Esse est enim Lorem amet ut consequat ut. Cillum esse labore sint mollit est sint sint. Lorem esse labore sint non elit laborum. Ipsum nostrud cupidatat ipsum elit irure elit fugiat. Culpa proident commodo id minim enim."
    },
    {
        title: "My title",
        subtitle: "My subtitle",
        content: "Incididunt nulla veniam eu irure quis excepteur irure dolor. Deserunt irure ad nulla proident commodo ea consectetur officia. Culpa esse pariatur excepteur ullamco."
    },
    {
        title: "My title",
        subtitle: "My subtitle",
        content: "Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit consectetur aliqua officia Lorem elit. Cupidatat ea tempor ut esse. Aliquip exercitation in nisi reprehenderit anim Lorem. Excepteur nostrud officia irure tempor aute ipsum. Voluptate nisi incididunt proident enim reprehenderit fugiat fugiat magna sit reprehenderit Lorem anim. Aute commodo cillum nisi consectetur amet eiusmod do tempor incididunt anim."
    }
];

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>
            The expandable component shows only what is contained in the <Property value=".expandable-header" /> when it is
            closed. <Property value=".expandable-content" /> will be visible in its open state.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ExpandableComponent items={items} />
        </ComponentPreview>
    </>
);

const Accordion = () => (
    <>
        <h2 id="accordion">Accordion</h2>
        <p>
            If you use a wrapper with <Property value=".accordion"/> then only one expandable can be open at the
            same time.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="accordion">
                <ExpandableComponent items={items} />
            </div>
        </ComponentPreview>
    </>
);

const Expandable = () => {
    useEffect(() => { expandable.init(); }, []);

    return (
        <DocContainer docToc>
            <p className="lead">
                Accordion
            </p>
            <Overview />
            <Accordion />
        </DocContainer>
    );
};

export default Expandable;

/* For testing */
export { Overview, Accordion };
