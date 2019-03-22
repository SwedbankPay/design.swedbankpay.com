import React, { useEffect } from "react";

import { ComponentPreview, DocContainer } from "#";
import expandable from "$/px-script/main/expandable";
import ExpandableComponent from "@/Expandable";

const items = [
    {
        title: "Foo",
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique scelerisque blandit. Vestibulum venenatis elit non nunc pulvinar, vitae tincidunt quam malesuada.
            Etiam orci dui, ultricies consectetur venenatis sit amet, ullamcorper quis metus. Aliquam eget consequat erat. Praesent arcu tortor, eleifend ac lorem eu, ullamcorper tristique purus.
            Phasellus felis mi, malesuada et egestas eget, efficitur at magna. Fusce euismod, elit tempor vulputate mollis, diam eros venenatis libero, eget ultricies diam velit at erat.
            Morbi mattis scelerisque augue, ut volutpat lectus sodales iaculis.
        </p>
    },
    {
        title: "Bar",
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique scelerisque blandit. Vestibulum venenatis elit non nunc pulvinar, vitae tincidunt quam malesuada.
            Etiam orci dui, ultricies consectetur venenatis sit amet, ullamcorper quis metus. Aliquam eget consequat erat. Praesent arcu tortor, eleifend ac lorem eu, ullamcorper tristique purus.
            Phasellus felis mi, malesuada et egestas eget, efficitur at magna. Fusce euismod, elit tempor vulputate mollis, diam eros venenatis libero, eget ultricies diam velit at erat.
            Morbi mattis scelerisque augue, ut volutpat lectus sodales iaculis.
        </p>
    },
    {
        title: "Baz",
        content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique scelerisque blandit. Vestibulum venenatis elit non nunc pulvinar, vitae tincidunt quam malesuada.
            Etiam orci dui, ultricies consectetur venenatis sit amet, ullamcorper quis metus. Aliquam eget consequat erat. Praesent arcu tortor, eleifend ac lorem eu, ullamcorper tristique purus.
            Phasellus felis mi, malesuada et egestas eget, efficitur at magna. Fusce euismod, elit tempor vulputate mollis, diam eros venenatis libero, eget ultricies diam velit at erat.
            Morbi mattis scelerisque augue, ut volutpat lectus sodales iaculis.
        </p>
    }
];

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Accordion.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ExpandableComponent items={items} />
        </ComponentPreview>
    </>
);

const Accordion = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Accordion.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="accordion">
                <ExpandableComponent items={items} />
            </div>
        </ComponentPreview>
    </>
);

const Expandable = () => {
    useEffect(() => expandable.init());

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
