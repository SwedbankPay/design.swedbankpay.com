import React from "react";
import { Link } from "react-router-dom";
import PrismCode from "react-prism";

import RenderCodeFigure from "../../utils/RenderCodeFigure";

const Fonts = () => {

    const removeRobotoCode = `html {
                                font-family: GillSans, Calibri, Trebuchet, sans-serif;
                            }`;

    return (
        <div className="col-md-12">
            <h2>Font</h2>
            <p>The standard font PayEx DesignGuide uses is Roboto. It is included in the stylesheet. The included font weights you can use are: 300, 400, 500, 700 & 900. Both normal and italicized is available.</p>
            <h3>Removing Roboto</h3>
            <p>In case your site is not going to use Roboto, you can modify your font stack by modifying the snippet below to your preferance and add it to your custom stylesheet.</p>
            <RenderCodeFigure styleSheet={removeRobotoCode} language="css" />
        </div>
    );
};

const Headings = () => {
    const HeadingsCode = () => (
        <div>
            <h1>Heading h1</h1>
            <h2>Heading h2</h2>
            <h3>Heading h3</h3>
            <h4>Heading h4</h4>
            <h5>Heading h5</h5>
            <h6>Heading h6</h6>
        </div>
    );

    const HeadingsClassesCode = () => (
        <div>
            <p className="h1">.h1 heading</p>
            <p className="h2">.h2 heading</p>
            <p className="h3">.h3 heading</p>
            <p className="h4">.h4 heading</p>
            <p className="h5">.h5 heading</p>
            <p className="h6">.h6 heading</p>
        </div>
    );

    return (
        <div className="col-md-12">
            <h2>Headings</h2>
            <p>PayEx DesignGuide provides basic styling on all headings (h1-h6).</p>
            <div className="showcase-panel">
                <HeadingsCode />
            </div>
            <RenderCodeFigure Component={HeadingsCode} language="html" removeOuterTag={true} />
            <p>The classes <code className="token property">.h1</code> through <code className="token property">.h6</code> are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.</p>
            <div className="showcase-panel">
                <HeadingsClassesCode />
            </div>
            <RenderCodeFigure Component={HeadingsClassesCode} language="html" removeOuterTag={true} />
        </div>
    );
};

const Small = () => {
    const SmallCode = () => (
        <div>
            <h2>Main heading <small>with a faded secondary heading</small></h2>
        </div>
    );

    return (
        <div className="col-md-12">
            <h2>Small</h2>
            <p>Use the <PrismCode className="language-html">{"<small></small>"}</PrismCode> tags to create a secondary heading within a heading tag or class.</p>
            <div className="showcase-panel">
                <SmallCode />
            </div>
            <RenderCodeFigure Component={SmallCode} language="html" removeOuterTag={true} />
        </div>
    );
};

const Lead = () => {
    const LeadCode = () => (
        <p className="lead">This is a leading paragraph which for instance can be used as an introduction.</p>
    );

    return (
        <div className="col-md-12">
            <h2>Lead</h2>
            <p>Make a paragraph stand out by using <code className="token property">.lead</code>.</p>
            <div className="showcase-panel">
                <LeadCode />
            </div>
            <RenderCodeFigure Component={LeadCode} language="html" removeOuterTag={false} />
        </div>
    );
};


const Inline = () => {
    const InlineCode = () => (
        <div>
            <p>You can use the mark tag to <mark>highlight</mark> text.</p>
            <p><del>This line of text is meant to be treated as deleted text.</del></p>
            <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
            <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
            <p><u>This line of text will render as underlined</u></p>
            <p><small>This line of text is meant to be treated as fine print.</small></p>
            <p><strong>This line rendered as bold text.</strong></p>
            <p><b>This line really stands out.</b></p>
            <p><em>This line rendered as italicized text.</em></p>
            <p><i>This is the last line, it too will render as italicized text.</i></p>
        </div>
    );

    return (
        <div className="col-md-12">
            <h2>Inline text elements</h2>
            <p>Styling for common inline HTML5 elements.</p>
            <div className="showcase-panel">
                <InlineCode />
            </div>
            <RenderCodeFigure Component={InlineCode} language="html" removeOuterTag={true} />
            <p>
                The <code className="token property">.mark</code> and <code className="token property">.small</code> classes are also available to apply the same styles as <PrismCode className="language-html">{"<mark>"}</PrismCode> and <PrismCode className="language-html">{"<small>"}</PrismCode> while avoiding any unwanted semantic implications that the tags would bring.
            </p>
            <p>
            While not shown above, feel free to use <PrismCode className="language-html">{"<b>"}</PrismCode> and <PrismCode className="language-html">{"<i>"}</PrismCode> in HTML5. <PrismCode className="language-html">{"<b>"}</PrismCode> is meant to highlight words or phrases without conveying additional importance while <PrismCode className="language-html">{"<i>"}</PrismCode> is mostly for voice, technical terms, etc.
            </p>
        </div>
    );
};

const TextUtilities = () => {
    return (
        <div className="col-md-12">
            <h2>Text utilities</h2>
            <p>Change text alignment, transform, style, weight, and color with our <Link to="/docs/utilities/text">text utilities</Link><b>(NOT YET IMPLEMENTED)</b> and <Link to="/docs/utilities/color">color utilities</Link><b>(NOT YET IMPLEMENTED)</b>.</p>
        </div>
    );
};

const Typography = () => {
    return (
        <div className="doc-container">
            <div className="row">
                <div className="col-md-12">
                    <p className="lead">Documentation and examples for PayEx DesignGuide typography.</p>
                </div>
                <Fonts />
                <Headings />
                <Small />
                <Lead />
                <Inline />
                <TextUtilities />
            </div>
        </div>
    );
};

export default Typography;
