import React, { useEffect } from "react";

import { ComponentPreview, DocContainer } from "#";
import accordion from "$/px-script/main/accordion";
import AccordionComponent from "@/Accordion";

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
