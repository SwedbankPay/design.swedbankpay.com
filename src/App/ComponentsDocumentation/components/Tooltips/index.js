import React, { useEffect } from "react";

import { ComponentPreview, OldComponentPreview, DocContainer, JavascriptDocs } from "@docutils";
import { tooltips } from "@src/scripts/main";
import NpmInformation from "@docutils/NpmInformation";

import ButtonComponent from "@components/Button";
import TooltipComponent from "@components/Tooltips";

import { tooltipShowCase } from "./constants";

const basename = process.env.basename;

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Tooltips should be used sparingly. If you’re building something that requires a lot of tooltips, work on clarifying the design and the language in the experience.</p>

        <OldComponentPreview language="html" showCasePanel showCasePanelAdvanced={tooltipShowCase} codeFigure/>

        <h3>When to consider something else</h3>
        <p>If there are sufficient space within the design it is always preferred to keep content visible by default.</p>
        <div className="row mb-2">
            <div className="col-md-6 col-12">
                <div className="slab slab-plain slab-border-success pb-4">
                    <h3>Do</h3>
                    <div className="d-flex justify-content-center pb-2">
                        <ButtonComponent type="link" label="Contact us" id="do-example-tooltip" icon="chat_bubble_outline" />
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-12">
                <div className="slab slab-plain slab-border-error h-100">
                    <h3>Don&apos;t</h3>
                    <div className="d-flex justify-content-center mt-3">
                        <TooltipComponent isVisible text="Contact us" icon="chat_bubble_outline"/>
                    </div>
                </div>
            </div>
        </div>
        <p>If you think the function of an icon button need to be explained, consider using a button with icon and text instead.</p>

        <h3>How to use tooltips</h3>
        <div className="row mb-2">
            <div className="col-12">
                <div className="slab slab-plain slab-border-error h-100 pb-5">
                    <h3>Don&apos;t</h3>
                    <div className="d-flex justify-content-center">
                        <img id="tooltip-error-image" src={`${basename}img/documentation/tooltips/dont-example.png`} alt="An e-mail input field in error state with a tooltip displaying an error message." className="col-12 col-sm-9"/>
                    </div>
                </div>
            </div>
        </div>
        <p>Tooltips should not be used to communicate critical information, including errors in forms or other interaction feedback.</p>
    </>
);

const ContentGuidelines = () => (
    <section>
        <h2>Content guidelines</h2>
        <div className="slab slab-plain py-5 d-flex justify-content-center">
            <img className="w-25" src={`${basename}img/documentation/tooltips/content.png`} alt="A small tooltip containing only the word Content."/>
        </div>
        <ul className="list list-bullet">
            <li>The tooltip <b>content</b> should be short and concise providing useful, additional information or clarification.</li>
        </ul>
    </section>
);

const JavascriptMethods = () => (
    <>
        <h2 id="javascript-methods">JavaScript methods</h2>
        <JavascriptDocs componentName="tooltips" />
    </>
);

const Tooltip = () => {
    useEffect(() => { tooltips.init(); });

    return (
        <DocContainer>
            <p className="lead">The tooltip component displays a brief explanation when a cursor hovers over an interface element. The tooltip is always anchored to this element.</p>
            <Overview />
            <ContentGuidelines/>
            <JavascriptMethods />
            <NpmInformation componentName={"tooltips"}/>
        </DocContainer>
    );
};

export default Tooltip;

/* For testing */
export { Overview, JavascriptMethods };
