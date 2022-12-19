import React, { useEffect } from "react";
import { DocContainer } from "@docutils";
import ExpandableComponent from "@components/Expandable";
import CodeTagComponent from "@components/CodeTags";
import { expandable } from "~/src/scripts/main";
import { spacings, borders, breakpoints, colors } from "./constants";

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
);

const Colors = () => (
    <section className="combinedExpandables">
        <h2 id="colors">Color</h2>
        <p>We have a few color utility classes. For more information about our colors, refer to this <a href="/identity/color">color section</a>.</p>
        <div className="d-flex flex-wrap">
            <ExpandableComponent items={colors}/>
        </div>
    </section>
)

const Display = () => (
    <section>
        <h2 id="display">Display</h2>
    </section>
);

const Flex = () => (
    <section>
        <h2 id="flex">Flex</h2>
    </section>
);

const Images = () => (
    <section>
        <h2 id="images">Images</h2>
    </section>
);

const Sizing = () => (
    <section>
        <h2 id="sizing">Sizing</h2>
    </section>
);

const Spacing = () => (
    <section className="combinedExpandables">
        <h2 id="spacing">Spacing</h2>
        <p>One can alter only desired sides of the element. Just add the letter t(op), b(ottom), l(eft) or r(ight) after your m(argin) or p(adding).</p> 
        <p>For example, <CodeTagComponent code="mt-5" type="secondary"/> will give <CodeTagComponent code="margin-top: 3rem" type="secondary"/></p>
        <div className="d-flex flex-wrap">
            <ExpandableComponent items={spacings}/>
        </div>
    </section>
);

const Text = () => (
    <section>
        <h2 id="text">Text</h2>
    </section>
);

const Visibility = () => (
    <section>
        <h2 id="visibility">Visibility</h2>
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
        <Colors/>
        <Display/>
        <Flex/>
        <Images/>
        <Spacing />
        <Sizing/>
        <Text/>
        <Visibility/>
    </DocContainer>
    );
}

export default CheatSheet;

/* For testing */

//export default { <components.....>};