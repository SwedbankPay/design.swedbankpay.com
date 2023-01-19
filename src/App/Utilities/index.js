import React, { useEffect } from "react";
import ExpandableComponent from "@components/Expandable";
import CodeTagComponent from "@components/CodeTags";
import { expandable } from "~/src/scripts/main";
import { spacings, borders, breakpoints, colors, displayHidingElements, flex, images, sizings, text, visibility } from "./constants";
import StatusBadgeComponent from "@docutils/StatusBadge";
import packageJson from "~/package";
import { Link } from "react-router-dom";

const UtilitiesPresentation = () => (
    <section id="borderOverview">
        <div className="row">
            {utilitiyDocPresenter.map(({ title, items, description }, i) => (
                <div key={i} className="col-lg-6 co-sm-12 mb-4">
                    <h2>{title}</h2>
                    <ExpandableComponent items={items}/>
                    {description}
                </div>
            ))}
        </div>
    </section>
);

const utilitiyDocPresenter = [
    {
        title: "Border",
        items: borders,
        description: <p>Border utility classes.</p>
    },
    {
        title: "Breakpoints",
        items: breakpoints,
        description:
        <>
            <p>Like Bootstrap our breakpoints are ranged from <CodeTagComponent type="secondary" code="xs" /> to <CodeTagComponent type="secondary" code="xl" />. In addition, we have added yet another breakpoint for even bigger screens called <CodeTagComponent type="secondary" code="xxl" />.</p>
            <p>Note that when targeting screensize <CodeTagComponent type="secondary" code="xs" />, it is optional to append the infix to the classname.</p>
        </>
    },
    {
        title: "Color",
        items: colors,
        description: <p>We have a few color utility classes. For more information about our colors, refer to this <Link to="/identity/color">color section</Link>.</p>
    },
    {
        title: "Display",
        items: displayHidingElements,
        description: <p>Display utility classes apply to all breakpoints, from <CodeTagComponent type="secondary" code="xs"/> to <CodeTagComponent type="secondary" code="xxl"/>, or you can apply them without breakpoints.</p>
    },
    {
        title: "Flex",
        items: flex,
        description: <p>For quickly managing the layout, alignment, sizing of grid columns, navigation, components and more.</p>
    },
    {
        title: "Image",
        items: images,
        description: <p>For adding rules to your pictures quickly.</p>
    },
    {
        title: "Sizing",
        items: sizings,
        description: <p>Easily make an element as wide or tall as you like. (Relative to it&apos;s parent)</p>
    },
    {
        title: "Spacing",
        items: spacings,
        description: <>
            <p>One can alter only desired sides of the element. Just add the letter t(op), b(ottom), l(eft) or r(ight) after your m(argin) or p(adding).</p>
            <p>For example, <CodeTagComponent code="mt-5" type="secondary"/> will give <CodeTagComponent code="margin-top: 3rem" type="secondary"/></p>
            You can also approach the spacings with the x and y-axis. <CodeTagComponent type="secondary" code="my-5"/> will give you <CodeTagComponent code="margin-top: 3rem; margin-bottom: 3rem" type="secondary"/>
        </>
    },
    {
        title: "Text",
        items: text,
        description: <p>For controlling alignment, wrapping, weight and more.</p>
    },
    {
        title: "Visibility",
        items: visibility,
        description: <p>Control the visibility without modifying the display of your elements.</p>
    }
];

const Utilities = () => {
    useEffect(() => {
        expandable.init();
    }, []);

    return (
        <div className="doc-container utilities-page">
            <span className="dg-current-version text-uppercase">Design Guide - v. {packageJson.version}</span>
            <div className="d-flex align-items-center"><h1>Utilities</h1><StatusBadgeComponent type={"new"} /></div>
            <p className="lead">
                The utility classes in our design system is based on Bootstrap. Here you can view the <i>most</i> used and important classes.
            </p>
            <UtilitiesPresentation/>
        </div>
    );
};

export default Utilities;

/* For testing */
