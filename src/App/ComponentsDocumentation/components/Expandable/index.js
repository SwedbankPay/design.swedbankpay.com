import React, { useEffect } from "react";

import { ComponentPreview, DocContainer, JavascriptDocs } from "@docutils";
import ExpandableComponent from "@components/Expandable";
import CodeTags from "@components/CodeTags";

const { expandable } = window.dg;

const items = [
    {
        id: "exp-1",
        title: "My title",
        subtitle: "My subtitle",
        content: "Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit consectetur aliqua officia Lorem elit. Cupidatat ea tempor ut esse. Aliquip exercitation in nisi reprehenderit anim Lorem. Excepteur nostrud officia irure tempor aute ipsum. Voluptate nisi incididunt proident enim reprehenderit fugiat fugiat magna sit reprehenderit Lorem anim. Aute commodo cillum nisi consectetur amet eiusmod do tempor incididunt anim."
    },
    {
        id: "exp-2",
        title: "My title",
        subtitle: "My subtitle",
        content: "Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit consectetur aliqua officia Lorem elit. Cupidatat ea tempor ut esse. Aliquip exercitation in nisi reprehenderit anim Lorem. Excepteur nostrud officia irure tempor aute ipsum. Voluptate nisi incididunt proident enim reprehenderit fugiat fugiat magna sit reprehenderit Lorem anim. Aute commodo cillum nisi consectetur amet eiusmod do tempor incididunt anim."
    },
    {
        id: "exp-3",
        title: "My title",
        subtitle: "My subtitle",
        content: "Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit consectetur aliqua officia Lorem elit. Cupidatat ea tempor ut esse. Aliquip exercitation in nisi reprehenderit anim Lorem. Excepteur nostrud officia irure tempor aute ipsum. Voluptate nisi incididunt proident enim reprehenderit fugiat fugiat magna sit reprehenderit Lorem anim. Aute commodo cillum nisi consectetur amet eiusmod do tempor incididunt anim."
    }
];

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>
            The expandable component shows only what is contained in the <CodeTags type="secondary" code=".expandable-header" /> when it is
            closed. <CodeTags type="secondary" code=".expandable-body" /> will be visible in its open state.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ExpandableComponent items={items} />
        </ComponentPreview>
    </>
);

const ExpandableGroup = () => (
    <>
        <h2 id="expandable-group">Expandable Group</h2>
        <p>
            If you use a wrapper with <CodeTags type="secondary" code=".expandable-group"/> then only one expandable can be open at the
            same time.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="expandable-group">
                <ExpandableComponent items={items} />
            </div>
        </ComponentPreview>
    </>
);

const JavascriptMethods = () => (
    <>
        <h2 id="javascript-methods">JavaScript methods</h2>
        <JavascriptDocs componentName="expandable" open close />
    </>
);

const Expandable = () => {
    useEffect(() => { expandable.init(); }, []);

    return (
        <DocContainer docToc>
            <p className="lead">
                Expandables toggle between hiding and showing content on click.
            </p>
            <Overview />
            <ExpandableGroup />
            <JavascriptMethods />
        </DocContainer>
    );
};

export default Expandable;

/* For testing */
export { Overview, ExpandableGroup };
