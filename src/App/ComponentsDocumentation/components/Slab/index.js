import React, { Component } from "react";

import { ComponentPreview, DocContainer } from "@docutils";

import CodeTags from "@components/CodeTags";

import { overviewSlabs } from "./constants";
import { validation } from "@src/scripts/main";

const basename = process.env.basename;

const OverviewSlab = () => (
    <section id="slab-doc">
        <h2 id="default-slab">Overview</h2>
        <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={overviewSlabs} codeFigure/>
        <h3>Things to consider</h3>
        <ul className="list list-bullet">
            <li>When using the slab component with a combination of other elements on it, we need to consider how the border radius of the slab it is affecting the border radius of the element which takes place as content in the slab.</li>
            <li>When using a slab component, the border radius could differ for different devices and sizes. Border radius always requires to be adjusted accordingly to the dimensions.</li>
        </ul>
        <h3>How to adjust slab radius</h3>
        <div className="row">
            <div className="col-lg-6 col-sm-12">
                <div className="slab slab-plain slab-border-success pb-1">
                    <h4 className="mb-3 mt-0">Do</h4>
                    <div className="d-flex justify-content-center mt-3 mb-3">
                        <img className="img-fluid" src={`${basename}img/documentation/slab/do-nested-slabs.png`} alt="A slab with a smaller slab inside of it. Their border radius values are equal, the padding size is therefore not consistent." />
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-sm-12">
                <div className="slab slab-plain slab-border-error pb-1">
                    <h4>{"Don't"}</h4>
                    <div className="d-flex justify-content-center mt-3 mb-3">
                        <img className="img-fluid" src={`${basename}img/documentation/slab/dont-nested-slabs.png`} alt="A slab with a smaller slab inside of it. Their border radius value are not equal, which makes the padding consistent."/>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <div> When using a smaller slab in a slab component, in that case the inner slab needs to adjust its border radius accordingly in order the padding between the slabs to remain relevant and consistent.</div>
    </section>
);

const SlabArrow = () => (
    <section id="slab-arrow">
        <h2 id="slab-arrow">Slab arrow</h2>
        <p>
            <CodeTags type="secondary" code=".slab-arrow" /> inherits the color from the slab it is appended to.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-arrow">
                <p>
                    This slab has some connection to the content above.
                </p>
            </div>
        </ComponentPreview>
    </section>
);

class Slab extends Component {
    componentDidMount () {
        validation.init();
    }

    render () {
        return (
            <DocContainer docToc>
                <p className="lead">
                    Slabs are container components, therefore it works with whatever you want to put in it.
                </p>
                <OverviewSlab />
                <SlabArrow />
            </DocContainer>
        );
    }
}

export default Slab;

/* For testing */
export { OverviewSlab, SlabArrow };
