import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer } from "@docutils";
import { howToUse, sliderShowCase } from "./constants";
import CodeTags from "@components/CodeTags";

const Overview = () => (
    <section>
        <h2 id="overview">Overview</h2>
        <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={sliderShowCase} codeFigure />

        <h3>When to consider something else</h3>
        <ul className="list list-bullet">
            <li>Use a text input instead when the user needs to select specific number.</li>
        </ul>{/* Link to text-input */}

        <h3>How to use sliders</h3>

        {howToUse.map(({ type, component, text }, i) => (
            <React.Fragment key={i}>
                <div className={`slab slab-plain slab-border-${type} h-100`}>
                    <h3 className="mt-0">Do{type === "error" && "n’t"}</h3>
                    <div className="d-flex flex-column align-items-center">
                        <div className="py-3 col-8">
                            {component}
                        </div>
                    </div>
                </div>
                {text}
            </React.Fragment>
        ))}
    </section>
);

const ContentGuidelines = () => (
    <section>
        <h2 id="content-guidelines">Content guidelines</h2>

        <div className="slab slab-plain h-100">
            <div className="d-flex flex-column align-items-center">
                <div className="py-3 col-8">
                    <div>{/* add label */}
                        <div className="rangeslider">
                            <p className="rangeslider-label">Label</p>
                            <input type="range"/>
                            <output className="value-label">
                                Selected Value
                            </output>
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

const JavascriptMethods = () => (
    <section>
        <h2 id="javascript-method mb-3">Javascript method</h2>
        <CodeTags type="secondary" code="dg.rangeslider.init()"/>
        <p className="my-3"><a href="/get-started/for-developers" >Initalizes</a> rangeslider</p>
    </section>
);

const Rangeslider = () => {
    useEffect(() => {
        window.dg.rangeslider.init();
    });

    return (<DocContainer>
        <p className="lead">The slider component lets the user increase and decrease the value by moving the slider along a horizontal line and lets the user choose an approximate value</p>
        <Overview />
        <ContentGuidelines />
        <JavascriptMethods />
    </DocContainer>);
};

export default Rangeslider;

/* for testing */
