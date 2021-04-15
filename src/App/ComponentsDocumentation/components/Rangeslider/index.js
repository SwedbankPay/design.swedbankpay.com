import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer } from "@docutils";
import RangesliderComponent from "@components/FormComponents/Rangeslider";
import { howToUse } from "./constants";
import CodeTags from "@components/CodeTags";

const { rangeslider } = window.dg;

const Overview = () => (
    <section>
        <h2 id="overview">Overview</h2>
        <div className="showcase-panel">
            <RangesliderComponent min={0} max={200} step={1} value={100} />
        </div>
        <div className="p-4 border-right border-left">
            <h2>Slider</h2>
            <p className="m-0">The slider component has a label which decribes the intent of the slider. It also has a minimum and maximum range which displays the range which user can pick inbetween. By holding and draging the circle indicator along the line, the user can see the value change and update in real time.</p>
        </div>
        <ComponentPreview language="html" codeFigure>
            <RangesliderComponent min={0} max={200} step={1} value={100} />
        </ComponentPreview>

        <h3>When to consider something else</h3>
        <ul className="list list-bullet">
            <li>Use a text input instead when the user needs to select specific number.</li>
        </ul>

        <h3>How to use sliders</h3>

        {howToUse.map(({ type, component, text }) => (
            <>
                <div className={`slab slab-plain slab-border-${type} h-100`}>
                    <h3>Do</h3>
                    <div className="d-flex flex-column align-items-center">
                        <div className="pt-3 pb-5 col-8">
                            {component}
                        </div>
                    </div>
                </div>
                <p>{text}</p>
            </>
        ))}
    </section>
);

const ContentGuidelines = () => (
    <section>
        <h2 id="content-guidelines">Content guidelines</h2>

        <div className="slab slab-plain h-100">
            <h3>Do</h3>
            <div className="d-flex flex-column align-items-center">
                <div className="pt-3 pb-5 col-8">
                    <div>{/* add label */}
                        <div className="rangeslider">{"\n"}
                            <input type="range"/>
                            <output className="value-label">
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

        <ul className="list list-bullet">
            <li>The label should clearly explain the context of the slider</li>
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
