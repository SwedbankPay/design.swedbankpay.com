import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import { overviewSlabs } from "./constants";
import CodeTags from "@components/CodeTags";
import { Link } from "react-router-dom";

const basename = process.env.basename;

const OverviewSlab = () => (
    <section id="slab-doc">
        <h2 id="default-slab">Overview</h2>
        <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={overviewSlabs} codeFigure/>
        <h3>Things to consider</h3>
        <ul className="list list-bullet">
            <li>When combining other components with the slab, one must consider how the slab`s border-radius affects the edges of the on-top placed component.</li>
            <li>When using a slab component, the border-radius could differ for different devices and sizes. Border-radius always requires to be adjusted accordingly to the dimensions.</li>
        </ul>
        <h3>How to adjust slab radius</h3>
        <div className="row">
            <div className="col-lg-6 col-sm-12">
                <div className="slab slab-plain slab-border-success pb-1">
                    <h4 className="mb-3 mt-0">Do</h4>
                    <div className="d-flex justify-content-center mt-3 mb-3">
                        <img className="img-fluid" src={`${basename}img/documentation/slab/do-nested-slabs.png`} alt="A slab with a smaller slab inside of it. Their border-radius values are equal, the padding size is therefore not consistent." />
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-sm-12">
                <div className="slab slab-plain slab-border-error pb-1">
                    <h4>{"Don't"}</h4>
                    <div className="d-flex justify-content-center mt-3 mb-3">
                        <img className="img-fluid" src={`${basename}img/documentation/slab/dont-nested-slabs.png`} alt="A slab with a smaller slab inside of it. Their border-radius value are not equal, which makes the padding consistent."/>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <div>When using a smaller slab in a slab component, in that case, the inner slab needs to adjust its border-radius accordingly in order for the padding between the slabs to remain relevant and consistent.</div>
        <h3>New design</h3>
        <p className="list">
            This is a breaking change regarding the visuals of the component.
            If necessary, <CodeTags type="secondary" code=".slab-edges"/> will sharpen the corners and make it look like the old design.
        </p>
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

const SlabColors = () => (
    <section id="slab-colors">
        <h2 id="slab-colors">Slab colors</h2>
        <p>The slab component supports several colors. You can use our background classes, presented in our <Link to="/identity/color">color</Link> section, or you can use specific slab-classnames.</p>
        <table className="table table-plain table-condensed">
            <caption>Color classes for the slab component</caption>
            <thead>
                <tr>
                    <th scope="col">Class name</th>
                    <th scope="col">Background class</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="bg-primary">slab-primary</td>
                    <td>bg-primary</td>
                </tr>
                <tr>
                    <td className="bg-secondary">slab-secondary</td>
                    <td>bg-secondary</td>
                </tr>
                <tr>
                    <td className="bg-quaternary">slab-plain</td>
                    <td>bg-quaternary</td>
                </tr>
                <tr>
                    <td className="bg-tertiary">This can be used</td>
                    <td>bg-tertiary</td>
                </tr>
                <tr>
                    <td className="bg-white">This can be used</td>
                    <td>bg-white</td>
                </tr>
            </tbody>
        </table>
    </section>
);

const Slab = () => (
    <DocContainer>
        <p className="lead">
            Slabs are container components, therefore it works with whatever you want to put in it.
        </p>
        <OverviewSlab />
        <SlabArrow />
        <SlabColors/>
    </DocContainer>
);

export default Slab;

/* For testing */
export { OverviewSlab, SlabArrow };
