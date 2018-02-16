import React from "react";
import { Link } from "react-router-dom";
import PrismCode from "react-prism";

import RenderCodeFigure from "../../utils/RenderCodeFigure";
import DocToc from "../../utils/DocToc";

const Fonts = () => {

    const removeRobotoCode = `html {
                                font-family: GillSans, Calibri, Trebuchet, sans-serif;
                            }`;

    return (
        <div>
            <h2 className="doc-section-heading" id="font">Font</h2>
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
        <div>
            <h2 className="doc-section-heading" id="headings">Headings</h2>
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
        <div>
            <h2 className="doc-section-heading" id="small">Small</h2>
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
        <div>
            <h2 className="doc-section-heading" id="lead">Lead</h2>
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
        <div>
            <h2 className="doc-section-heading" id="inline-text-elements">Inline text elements</h2>
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
        <div>
            <h2 className="doc-section-heading" id="text-utilities">Text utilities</h2>
            <p>Change text alignment, transform, style, weight, and color with our <Link to="/docs/utilities/text">text utilities</Link> <b>(NOT YET IMPLEMENTED)</b> and <Link to="/docs/utilities/color">color utilities</Link> <b>(NOT YET IMPLEMENTED)</b>.</p>
        </div>
    );
};

const Abbreviations = () => {
    const AbbrCode = () => (
        <div>
            <p><abbr title="Laugh Out Loud">LOL</abbr></p>
            <p><abbr title="HyperText Markup Language" className="initialism">HTML</abbr></p>
        </div>
    );

    return (
        <div>
            <h2 className="doc-section-heading" id="abbreviations">Abbreviations</h2>
            <p>Stylized implementation of HTML’s <PrismCode className="language-html">{"<abbr>"}</PrismCode> element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies.</p>
            <p>Add <code className="token property">.initialism</code> to an abbreviation for a slightly smaller font-size.</p>
            <div className="showcase-panel">
                <AbbrCode />
            </div>
            <RenderCodeFigure Component={AbbrCode} language="html" removeOuterTag={true} />
            <p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr" target="_blank" rel="noopener noreferrer">Read more</a> about abbreviations.</p>
        </div>
    );
};

const Blockquotes = () => {
    const BlockquoteCode = () => (
        <blockquote className="blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        </blockquote>
    );

    const BlockquotesText = () => (
        <div>
            <h2 className="doc-section-heading" id="blockquotes">Blockquotes</h2>
            <p>For quoting blocks of content from another source within your document. Wrap <PrismCode className="language-html">{"<blockquote>"}</PrismCode> or <code className="token property">.blockquote</code> around any HTML as the quote.</p>
            <div className="showcase-panel">
                <BlockquoteCode />
            </div>
            <RenderCodeFigure Component={BlockquoteCode} language="html" removeOuterTag={false} />
        </div>
    );

    const BlockquoteWithSourceCode = () => (
        <blockquote className="blockquote">
            <p>
                Better learn balance. Balance is key. Balance good, karate good. Everything good. Balance bad, better pack up, go home. Understand?
            </p>
            <footer><cite title="The Karate Kid (1984)">Mr. Miyagi</cite></footer>
        </blockquote>
    );

    const BlockquoteWithSourceText = () => (
        <div>
            <h3>Naming a source</h3>
            <p>Add a <PrismCode className="language-html">{"<footer>"}</PrismCode> for identifying the source. Wrap the name of the source work in <PrismCode className="language-html">{"<cite>"}</PrismCode>.</p>
            <div className="showcase-panel">
                <BlockquoteWithSourceCode />
            </div>
            <RenderCodeFigure Component={BlockquoteWithSourceCode} language="html" removeOuterTag={false} />
        </div>
    );

    const BlockquotesAlignmentCode = () => (
        <blockquote className="blockquote text-center">
            <p>
                It’s the ship that made the Kessel run in less than twelve parsecs. I’ve outrun Imperial starships. Not the local bulk cruisers, mind you. I’m talking about the big Corellian ships, now. She’s fast enough for you, old man.
            </p>
            <footer><cite title="Star Wars: Episode IV - A New Hope (1977)">Han Solo</cite></footer>
        </blockquote>
    );

    const BlockquotesAlignmentText = () => (
        <div>
            <h3>Alignment</h3>
            <p>Use <Link to="/docs/utilities/text">text utilities</Link> <b>(NOT YET IMPLEMENTED)</b> as needed to change the alignment of your blockquote.</p>
            <div className="showcase-panel">
                <BlockquotesAlignmentCode />
            </div>
            <RenderCodeFigure Component={BlockquotesAlignmentCode} language="html" removeOuterTag={false} />
        </div>
    );


    return (
        <div>
            <BlockquotesText />
            <BlockquoteWithSourceText />
            <BlockquotesAlignmentText />
        </div>
    );
};

const TypographyText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Documentation and examples for PayEx DesignGuide typography.</p>
        <Fonts />
        <Headings />
        <Small />
        <Lead />
        <Inline />
        <TextUtilities />
        <Abbreviations />
        <Blockquotes />
    </div>
);

const Typography = () => {
    return (
        <div className="doc-container">
            <div className="row">
                <TypographyText />
                <DocToc component={TypographyText} />
            </div>
        </div>
    );
};

export default Typography;
