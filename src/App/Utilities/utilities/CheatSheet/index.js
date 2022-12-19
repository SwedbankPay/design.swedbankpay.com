import React, { useEffect } from "react";
import { DocContainer } from "@docutils";
import ExpandableComponent from "@components/Expandable";
import CodeTagComponent from "@components/CodeTags";
import { expandable } from "~/src/scripts/main";
import { spacings, borders, breakpoints } from "./constants";

const Border = () => (
    <section id="borderOverview">
        <h2 id="border">Border</h2>
            <ExpandableComponent items={borders}/>
    </section>
);

const Breakpoints = () => (
    <section id="breakpointsOverview">
        <h2 id="breakpoints">Breakpoints</h2>
        <p>Like Bootstrap our breakpoints are ranged from <CodeTagComponent type="secondary" code="xs" /> to <CodeTagComponent type="secondary" code="xl" />. In addition, we have added yet another breakpoint for even bigger screens called <CodeTagComponent type="secondary" code="xxl" />.</p>
        <p>Note that when targeting screensize <CodeTagComponent type="secondary" code="xs" />, it is optional to append the infix to the classname.</p>
        <ExpandableComponent items={breakpoints}/>
    </section>
)

const Spacing = () => (
    <section id="spacingOverview">
        <h2 id="spacing">Spacing</h2>
        <p>One can alter only desired sides of the element. Just add the letter t(op), b(ottom), l(eft) or r(ight) after your m(argin) or p(adding).</p> 
        <p>For example, <CodeTagComponent code="mt-5" type="secondary"/> will give <CodeTagComponent code="margin-top: 3rem" type="secondary"/></p>
        <div className="d-flex flex-wrap">
            <ExpandableComponent items={spacings}/>
        </div>
    </section>
);

const CheatSheet = () => {
    useEffect(() => {
        expandable.init();
    })

    return (
        <DocContainer>
        <p className="lead">
            The utility classes in our design system is based on Bootstrap. Here you can view (in our opinion) the <i>most</i> used and important classes.
        </p>
        <Border/>
        <Breakpoints />
        <Spacing />
    </DocContainer>
    );
}

export default CheatSheet;

/* For testing */

//export default { <components.....>};