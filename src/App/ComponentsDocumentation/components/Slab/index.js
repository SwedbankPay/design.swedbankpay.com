import React, { Component } from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import CodeTags from "@components/CodeTags";

const { validation } = window.dg;

const DefaultSlab = () => (
    <>
        <h2 id="default-slab">Default slab</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-default">
                <p>Do you want to sign up for the slab mailing list?</p>
                <form action="#" noValidate data-validate>
                    <div className="form-group">
                        <label htmlFor="validation-email-2">Email</label>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="material-icons" aria-hidden="true">email</i></span>
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

const SlabColors = () => (
    <>
        <h2 id="slab-colors">Slab colors</h2>
        <p>
        We offer three additional slab types; <CodeTags type="secondary" code=".slab-primary" />, <CodeTags type="secondary" code=".slab-secondary" /> and <CodeTags type="secondary" code=".slab-plain" />.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-primary">
                <h4>Here is some text and then a striped item list</h4>
                <small>
                    Some text with a small listing of items underneath.
                </small>
                <ul className="list item-list">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>

            <div className="slab slab-secondary">
                <h4>Here is some text and then a striped item list</h4>
                <small>
                    Some text with a small listing of items underneath.
                </small>
                <ul className="list item-list">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>

            <div className="slab slab-plain">
                <h4>Here is some text and then a striped item list</h4>
                <small>
                    Some text with a small listing of items underneath.
                </small>
                <ul className="list item-list">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>
        </ComponentPreview>
        <p>
        If no slab extension class is added, it is defaulted to white. In this example we use the utility class <CodeTags type="secondary" code=".border" /> to make it easier for us to see the actual slab container.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab border">
                <h4>Here is some text and then a striped item list</h4>
                <small>
                    Some text with a small listing of items underneath.
                </small>
                <ul className="list item-list">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>
        </ComponentPreview>
    </>
);

const SlabBorderTop = () => (
    <>
        <h2 id="slab-border-top">Slab with top border</h2>
        <p>Slab with top border can be used to display, for instance, pros and cons lists.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="row">
                <div className="col-6">
                    <div className="slab slab-plain slab-border-success">
                        <h3>Do</h3>
                        <ul className="list list-bullet">
                            <li>Do this</li>
                            <li>Do that</li>
                            <li>Do the other</li>
                        </ul>
                    </div>
                </div>
                <div className="col-6">
                    <div className="slab slab-plain slab-border-error">
                        <h3>Don&apos;t</h3>
                        <ul className="list list-bullet">
                            <li>Don&apos;t do this</li>
                            <li>Don&apos;t do that</li>
                            <li>Don&apos;t to the other</li>
                        </ul>
                    </div>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const SlabElevated = () => (
    <>
        <h2 id="elevated-slab">Elevated slab</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-default slab-elevated">
                Look ma, im elevated!
            </div>
        </ComponentPreview>
    </>
);

const SlabWell = () => (
    <>
        <h2 id="slab-well">Slab well</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-default slab-well">
                Look ma, im in a well!
            </div>
        </ComponentPreview>
    </>
);

const SlabArrow = () => (
    <>
        <h2 id="slab-arrow">Slab arrow</h2>
        <p>
            <CodeTags type="secondary" code=".slab-arrow" /> inherits the color from the slab it is appended to.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-default slab-arrow">
                <p>
                    This slab has some connection to the content above.
                </p>
            </div>
            <div className="slab border slab-arrow">
                <p>
                    This slab has some connection to the content above.
                </p>
            </div>
            <div className="slab slab-primary slab-arrow">
                <p>
                    This slab has some connection to the content above.
                </p>
            </div>
            <div className="slab slab-secondary slab-arrow">
                <p>
                    This slab has some connection to the content above.
                </p>
            </div>
            <div className="slab slab-plain slab-arrow">
                <p>
                    This slab has some connection to the content above.
                </p>
            </div>
        </ComponentPreview>
    </>
);

const SlabMuted = () => (
    <>
        <h2 id="slab-muted">Slab muted</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-default slab-muted">
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
            <div className="slab slab-default slab-sm">
                This is very snug.
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="slab slab-default slab-lg">
                This is so spacious I can hardly believe it!
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
                <SlabColors />
                <SlabBorderTop />
                <SlabElevated />
                <SlabWell />
                <SlabArrow />
                <SlabMuted />
                <SlabSizes />
            </DocContainer>
        );
    }
}

export default Slab;

/* For testing */
export { DefaultSlab, SlabElevated, SlabWell, SlabArrow, SlabColors, SlabSizes, SlabMuted, SlabBorderTop };
