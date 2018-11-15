import React, { Component } from "react";

import { ComponentPreview, DocToc, ExperimentalComponentAlert } from "#";
import { validation } from "$/px-script/main/";

const DefaultSlab = () => (
    <>
        <h2 id="default-slab">Default slab</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab">
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
                Look ma, im elevated!
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
        <p>This slab can contain so many things</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <p className="lead text-center">Here is some text and then a striped item list</p>
            <div className="slab slab-white">
                <ul className="item-list item-list-striped">
                    <li>
                        <span>4925*********004</span>
                    </li>
                    <li>{"\n"}
                        <span>{"\n\t\t\t"}4925*********004{"\n\t\t\t"}
                            <span className="badge badge-blue">new</span>{"\n"}
                        </span>{"\n"}
                        <a href="https://developer.payex.com">developer.payex.com</a>{"\n"}
                    </li>
                    <li>{"\n"}
                        <span>4925*********004</span>{"\n"}
                        <i className="material-icons">star</i>{"\n"}
                    </li>
                    <li>{"\n"}
                        <span>4925*********004</span>{"\n"}
                        <span className="status status-success">Active</span>{"\n"}
                        <button type="button" className="btn btn-danger btn-xs"><i className="material-icons">delete</i></button>{"\n"}
                    </li>
                </ul>
                <p>You can also put a steps component in this slab so you can track your progress!</p>
                <div className="steps">
                    <ol>
                        <li className="steps-completed">
                            <div className="material-icons steps-icon">check</div>
                            Step one
                            <div className="steps-sub-title">24.12.17 12:10</div>
                        </li>
                        <li className="steps-ongoing steps-selected">Step two</li>
                        <li>Step three</li>
                        <li>Step four</li>
                    </ol>
                    <div className="steps-responsive">
                        <div className="steps-responsive-text">Step 3</div>
                    </div>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const SlabSizes = () => (
    <>
        <h2 id="slab-sizes">Slab sizes</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-sm">
                This is very snug.
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-lg">
                This is so spacious I can hardly believe it!
            </div>
        </ComponentPreview>
    </>
);

const SlabCombinations = () => (
    <>
        <h2 id="slab-combinations">Slab combinations</h2>
        <p>
            You can mix and match slab variations as you see fit.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-white slab-elevated">
                This is an elevated white slab.
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-white slab-well slab-lg">
                This well is too big for my liking.
            </div>
        </ComponentPreview>
    </>
);

const SlabText = () => (
    <div className="col-lg-10 doc-body">
        <ExperimentalComponentAlert />
        <p className="lead">
            Slabs are container components, therefore it works with whatever you want to put in it.
        </p>
        <DefaultSlab />
        <SlabElevated />
        <SlabWell />
        <SlabWhite />
        <SlabSizes />
        <SlabCombinations />
    </div>
);

class Slab extends Component {
    componentDidMount () {
        validation.init();
    }

    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <SlabText />
                    <DocToc component={SlabText} />
                </div>
            </div>
        );
    }
}

export default Slab;

/* For testing */
export { DefaultSlab, SlabElevated, SlabWell, SlabWhite, SlabSizes, SlabCombinations, SlabText };
