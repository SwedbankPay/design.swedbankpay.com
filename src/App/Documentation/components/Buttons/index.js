import React, { Component } from "react";
import { Link } from "react-router-dom";
import PrismCode from "react-prism";

import { ComponentPreview, Attribute, Property, DocToc } from "#";
import ButtonComponent from "@/Button";
import { button } from "$/px-script";

const Examples = () => (
    <>
        <h2 id="examples">Examples</h2>
        <p>Several button styles etc...</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent type="primary" label="Primary" />{"\n"}
                <ButtonComponent type="secondary" label="Secondary" />{"\n"}
                <ButtonComponent type="danger" label="Danger" />{"\n"}
                <ButtonComponent type="link" label="Link" />{"\n"}
            </div>
        </ComponentPreview>
    </>
);

const UsageWithOtherTags = () => (
    <>
        <h2 id="usage-with-other-tags">Usage with other tags</h2>
        <p>The <Property value=".btn" /> class can also be used with other html-tags like <PrismCode className="language-html">{"<a>"}</PrismCode> or <PrismCode className="language-html">{"<input>"}</PrismCode>.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent type="primary" label="Anchor" href="#" />{"\n"}
                <ButtonComponent type="primary" label="Button" />{"\n"}
                <ButtonComponent type="primary" input value="Input" btnType="button" />{"\n"}
                <ButtonComponent type="primary" input value="Submit" btnType="submit" />{"\n"}
                <ButtonComponent type="primary" input value="Reset" btnType="reset" />{"\n"}
            </div>
        </ComponentPreview>
    </>
);

const OutlineButtons = () => (
    <>
        <h2 id="outline-buttons">Outline buttons</h2>
        <p>Several button styles etc...<Property value=".btn-outline-{variant}" /></p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent outline type="primary" label="Primary" />{"\n"}
                <ButtonComponent outline type="secondary" label="Secondary" />{"\n"}
                <ButtonComponent outline type="danger" label="Danger" />{"\n"}
            </div>
        </ComponentPreview>
    </>
);

const ButtonGroup = () => (
    <>
        <h2 id="button-group">Using buttons together</h2>
        <p>When you use buttons next to each other you have to wrap them in a <Property value=".button-group" />.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="button-group">{"\n"}
                <ButtonComponent type="primary" label="Activate" />{"\n"}
                <ButtonComponent type="secondary" label="Disable" />{"\n"}
                <ButtonComponent type="danger" label="Delete" />{"\n"}
            </div>
        </ComponentPreview>
    </>
);

const Sizes = () => (
    <>
        <h2 id="sizes">Sizes</h2>
        <p>Several button sizes etc...</p>
        <h3>Large buttons</h3>
        <p>...<Property value=".btn-lg" /></p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent size="lg" type="primary" label="Large button" />{"\n"}
                <ButtonComponent size="lg" type="secondary" label="Large button" />{"\n"}
            </div>
        </ComponentPreview>
        <h3>Small buttons</h3>
        <p>...<Property value=".btn-sm" /></p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent size="sm" type="primary" label="Small button" />{"\n"}
                <ButtonComponent size="sm" type="secondary" label="Small button" />{"\n"}
            </div>
        </ComponentPreview>
        <h3>Extra small buttons</h3>
        <p>...<Property value=".btn-xs" /></p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent size="xs" type="primary" label="Extra small button" />{"\n"}
                <ButtonComponent size="xs" type="secondary" label="Extra small button" />{"\n"}
            </div>
        </ComponentPreview>
        <h3>Block level</h3>
        <p>...<Property value=".btn-block" /></p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent fullWidth type="primary" label="Block level button" />{"\n"}
                <ButtonComponent fullWidth type="secondary" label="Block level button" />{"\n"}
            </div>
        </ComponentPreview>
    </>
);

const ActiveState = () => (
    <>
        <h2 id="active-state">Active state</h2>
        <p>Active state with <Property value=".active" />...</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent active type="primary" label="Primary" />{"\n"}
                <ButtonComponent active type="secondary" label="Secondary" />{"\n"}
                <ButtonComponent active type="danger" label="Danger" />{"\n"}
            </div>
        </ComponentPreview>
    </>
);

const DisabledState = () => (
    <>
        <h2 id="disabled-state">Disabled state</h2>
        <p>Disabled state with <Attribute name="disabled" />...</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent disabled type="primary" label="Primary" />{"\n"}
                <ButtonComponent disabled type="secondary" label="Secondary" />{"\n"}
                <ButtonComponent disabled type="danger" label="Danger" />{"\n"}
            </div>
        </ComponentPreview>
    </>
);

const UsageWithIcons = () => (
    <>
        <h2 id="usage-with-icons">Usage with icons</h2>
        <p>To use a button with an icon... Read more about icon usage here <Link to="/docs/core/icons">here</Link>.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent icon="cloud" type="primary" label="Primary" />{"\n\n"}
                <ButtonComponent icon="cloud" type="secondary" label="Secondary" />{"\n"}
            </div>
        </ComponentPreview>
    </>
);

const ButtonLoader = () => (
    <>
        <h2 id="button-loader">Button loader</h2>
        <p>To use a button with a loader simply add the attribute <Attribute data name="button-loader" /> to add the required markup for the loader component. Add class <Property value=".loading" /> to display the loader.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent type="primary" label="Primary" loader loading />{"\n"}
                <ButtonComponent type="secondary" label="Secondary" loader loading />{"\n"}
                <ButtonComponent type="danger" label="Danger" loader loading />{"\n"}
            </div>
        </ComponentPreview>
        <p>With <Property value="disabled" /></p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent disabled type="primary" label="Primary" loader loading />{"\n"}
                <ButtonComponent disabled type="secondary" label="Secondary" loader loading />{"\n"}
                <ButtonComponent disabled type="danger" label="Danger" loader loading />{"\n"}
            </div>
        </ComponentPreview>
        <p>With <Property value=".outline" /></p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent outline type="primary" label="Primary" loader loading />{"\n"}
                <ButtonComponent outline type="secondary" label="Secondary" loader loading />{"\n"}
                <ButtonComponent outline type="danger" label="Danger" loader loading />{"\n"}
            </div>
        </ComponentPreview>
        <p>Adding the attribute <Attribute data name="button-loader" /> to a button component will produce the following html:</p>
        <ComponentPreview language="html" codeFigure>
            <button className="btn btn-default loading" type="button" data-button-loader>{"\n\t"}
                Default{"\n\t"}
                <div className="loader">{"\n\t\t"}
                    <ul className="loader-icon">{"\n\t\t\t"}
                        <li></li>{"\n\t\t\t"}
                        <li></li>{"\n\t\t\t"}
                        <li></li>{"\n\t\t"}
                    </ul>{"\n\t"}
                </div>{"\n"}
            </button>
        </ComponentPreview>
        <p>If you want more control over the loader component you can include the html yourself (e.g. for server-side rendering), just make sure you <b>don{"'"}t</b> add the attribute <Attribute data name="button-loader" />.</p>
    </>
);

const ButtonsText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Use buttons...</p>
        <Examples />
        <UsageWithOtherTags />
        <OutlineButtons />
        <ButtonGroup />
        <Sizes />
        <ActiveState />
        <DisabledState />
        <UsageWithIcons />
        <ButtonLoader />
    </div>
);

class Buttons extends Component {
    componentDidMount () {
        button.init();
    }

    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <ButtonsText />
                    <DocToc component={ButtonsText} />
                </div>
            </div>
        );
    }
}

export default Buttons;

/* for testing */
export { Examples, UsageWithOtherTags, OutlineButtons, Sizes, ActiveState, DisabledState, UsageWithIcons, ButtonLoader, ButtonsText, ButtonGroup };
