import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer } from "@docutils";
import { howToUse, sliderShowCase } from "./constants";
import Tag from "@components/Tag";
import RangesliderComponent from "~/src/App/components/Rangeslider";

import { rangeslider } from "@src/scripts/main";
import NpmInformation from "@docutils/NpmInformation";

const Overview = () => (
    <section>
        <h2 id="overview">Overview</h2>
        <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={sliderShowCase} codeFigure />

        <h3>When to consider something else</h3>
        <ul className="list list-bullet">
            <li>Use a <Link to="/components/input-field">text input</Link> instead when the user needs to select specific number.</li>
        </ul>

        <h3>How to use sliders</h3>

        {howToUse.map(({ type, component, text }, i) => (
            <React.Fragment key={i}>
                <div className={`slab slab-plain slab-border-${type} h-100 mb-2`}>
                    <h3 className="mt-0">Do{type === "error" && "n’t"}</h3>
                    <div className="d-flex flex-column align-items-center">
                        <div className="py-3 col-12 col-lg-8">
                            {component}
                        </div>
                    </div>
                </div>
                {text}
            </React.Fragment>
        ))}
        <DisableState/>
    </section>
);

const ContentGuidelines = () => (
    <section>
        <h2 id="content-guidelines">Content guidelines</h2>

        <div className="slab slab-plain h-100 mb-2">
            <div className="d-flex flex-column align-items-center">
                <div className="py-3 col-12 col-lg-8">
                    <div>
                        <div className="rangeslider">
                            <input type="range"/>
                            <div className="d-flex justify-content-between">
                                <p className="rangeslider-label">Label</p>
                                <output className="value-label px-2 align-items-center">
                                    Selected Value
                                </output>
                            </div>
                            <div className="value-range">
                                <small>Minimum Value</small>
                                <small>Maximum Value</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <ul className="list list-bullet">
            <li>The <b>label</b> should clearly explain the context of the slider</li>
            <li>Make sure to align the <b>values</b> so that they all follow the same structure and not mixed values or symbols</li>
        </ul>
    </section>
);

const DeveloperDocumentation = () => (
    <section>
        <h2 id="developer-documentation mb-3">Developer documentation</h2>
        <h3>Javascript methods</h3>
        <p className="my-3">Use <Tag code type="secondary" text="dg.rangeslider.init()"/> to <a href="/get-started/for-developers" >initialize</a> all rangesliders.</p>
        <p>Or <Tag code type="secondary" text='dg.rangeslider.init("component-id")'/> to initialize one specific component.</p>
    </section>
);

const DisableState = () => (
    <>
        <h3>Disabled state</h3>
        <p>Disable a slider by adding <Tag code type="primary" text="disabled"/> attribute to the desired slider. </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className = "d-flex flex-column align-items-center">
                <div className="py-3 col-12 col-lg-8">
                    <RangesliderComponent id="disabled_state_example" label="Label" min={0} max={100} value={50} disabled/>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const Rangeslider = () => {
    useEffect(() => {
        rangeslider.init();
    });

    return (
        <DocContainer>
            <p className="lead">The slider component lets the user increase and decrease the value by moving the slider along a horizontal line and lets the user choose a value</p>
            <Overview />
            <ContentGuidelines />
            <DeveloperDocumentation />
            <NpmInformation componentName={"rangeslider"}/>
        </DocContainer>
    );
};

export default Rangeslider;

export { Overview, ContentGuidelines, DeveloperDocumentation };
