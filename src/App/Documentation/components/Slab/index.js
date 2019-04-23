import React, { Component } from "react";

import { ComponentPreview, DocContainer } from "#";

const { validation } = window.px;

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
            <div className="slab slab-white">
                <p className="lead text-center">Here is some text and then a striped item list</p>
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
                <p>Maybe include a steps component in this slab so you can track your progress!</p>
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

const SlabMuted = () => (
    <>
        <h2 id="slab-muted">Slab muted</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-muted">
                <h4>This text will be gray.</h4>{"\n"}
                <span>And this text will be gray.</span>{"\n"}
                Even this text will be gray!
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
            <div className="slab slab-white slab-muted slab-elevated">
                This is an elevated white slab with muted text.
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-well slab-lg">
                This is a big well!
            </div>
        </ComponentPreview>
    </>
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
                <DefaultSlab />
                <SlabElevated />
                <SlabWell />
                <SlabWhite />
                <SlabMuted />
                <SlabSizes />
                <SlabCombinations />
            </DocContainer>
        );
    }
}

export default Slab;

/* For testing */
export { DefaultSlab, SlabElevated, SlabWell, SlabWhite, SlabSizes, SlabMuted, SlabCombinations };
