import React from "react";

import { ComponentPreview, DocToc, ExperimentalComponentAlert, Property } from "#";

const DefaultSlab = () => (
    <>
        <h2 id="default-slab">Default slab</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab">
                <p className="lead">Put things in me!</p> {/* Too sexual? :) */}
                <p>Do you want to sign up for the slab mailing list?</p>
                <form action="#" noValidate data-validate>
                    <div className="form-group">
                        <label htmlFor="validation-email-2">Email</label>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="material-icons">email</i></span>
                            <input type="email" className="form-control" id="validation-email-2" placeholder="bob.corlsan@example.com" required />
                        </div>
                        <div className="help-block" data-success="Right!" data-error="Wrong!">This one might be a little tricky</div>
                    </div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        </ComponentPreview>
    </>
);

const SlabElevated = () => (
    <>
        <h2 id="elevated-slab">Elevated slab</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-elevated">
                <p>Look ma, im elevated!</p>
            </div>
        </ComponentPreview>
    </>
);

const SlabWell = () => (
    <>
        <h2 id="slab-well">Slab well</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-well">
                Look ma, im in a well!
            </div>
        </ComponentPreview>
    </>
);

const SlabWhite = () => (
    <>
        <h2 id="slab-white">Slab white</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-white">
                <h2>This slab can fit so many tabs in it.</h2>
                <div className="tabs tabs-horizontal-xl">
                    <i className="material-icons">keyboard_arrow_right</i>
                    <ul>
                        <li>
                            <a href="#">Kort</a>
                        </li>
                        <li className="active">
                            <a href="#">Rabatter</a>
                        </li>
                        <li>
                            <a href="#">Transaksjoner</a>
                        </li>
                        <li>
                            <a href="#">Faktura</a>
                        </li>
                        <li>
                            <a href="#">Instillinger</a>
                        </li>
                        <li>
                            <a href="#">Audit trail</a>
                        </li>
                    </ul>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const SlabSizes = () => (
    <>
        <h2 id="well-sizes">Well sizes</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-sm">
                Look ma, im on a small slab!
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-white slab-lg">
                <p className="lead">Here you can easily see how far along you are in this part of the slab docs. Ain't that neat?</p>
                <ol className="step-bar step-bar--horizontal">
                    <li className="step-bar-item-complete">Step one</li>
                    <li className="step-bar-item-complete">Step two</li>
                    <li className="step-bar-item-complete">Step three</li>
                    <li className="step-bar-item-complete">
                        <div className="material-icons step-bar-icon">check</div>Step four
                    </li>
                </ol>
            </div>
        </ComponentPreview>
    </>
);

const SlabText = () => (
    <div className="col-lg-10 doc-body">
        <ExperimentalComponentAlert />
        <p className="lead">
            Slabs are meant to be used as container components,
            therefore it works with whatever you want to put in it.
        </p>
        <DefaultSlab />
        <SlabElevated />
        <SlabWell />
        <SlabWhite />
        <SlabSizes />
    </div>
);

const Well = () => (
    <div className="doc-container">
        <div className="row">
            <SlabText />
            <DocToc component={SlabText} />
        </div>
    </div>
);

export default Well;

/* For testing */
export { DefaultSlab, SlabElevated, SlabWell, SlabWhite, SlabSizes, SlabText };
