import React from "react";
import { Link } from "react-router-dom";
import PrismCode from "react-prism";

import { ComponentPreview, DocContainer, Property } from "#";

const Fonts = () => (
        <>
            <h2 id="font">Font</h2>
            <p>The standard font Swedbank Pay DesignGuide uses is Arial. The included font weights you can use are: 400, 600 & 800. Both normal and italicized is available.</p>
        </>
);

const Headings = () => (
    <>
        <h2 id="headings">Headings</h2>
        <p>Swedbank Pay DesignGuide provides basic styling on all headings (h1-h6).</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <h1>Heading h1</h1>
            <h2>Heading h2</h2>
            <h3>Heading h3</h3>
            <h4>Heading h4</h4>
            <h5>Heading h5</h5>
            <h6>Heading h6</h6>
        </ComponentPreview>
        <p>The classes <Property value=".h1" /> through <Property value=".h6" /> are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <p className="h1">.h1 heading</p>
            <p className="h2">.h2 heading</p>
            <p className="h3">.h3 heading</p>
            <p className="h4">.h4 heading</p>
            <p className="h5">.h5 heading</p>
            <p className="h6">.h6 heading</p>
        </ComponentPreview>
    </>
);

const Small = () => (
    <>
        <h2 id="small">Small</h2>
        <p>Use the <PrismCode className="language-html">{"<small></small>"}</PrismCode> tags to create a secondary heading within a heading tag or class.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <h2>Main heading <small>with a faded secondary heading</small></h2>
        </ComponentPreview>
    </>
);

const Lead = () => (
    <>
        <h2 id="lead">Lead</h2>
        <p>Make a paragraph stand out by using <Property value=".lead" />.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <p className="lead">This is a leading paragraph which for instance can be used as an introduction.</p>
        </ComponentPreview>
    </>
);

const Inline = () => (
    <>
        <h2 id="inline-text-elements">Inline text elements</h2>
        <p>Styling for common inline HTML5 elements.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
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
        </ComponentPreview>
        <p>
            The <Property value=".mark" /> and <Property value=".small" /> classes are also available to apply the same styles as <PrismCode className="language-html">{"<mark>"}</PrismCode> and <PrismCode className="language-html">{"<small>"}</PrismCode> while avoiding any unwanted semantic implications that the tags would bring.
        </p>
        <p>
        While not shown above, feel free to use <PrismCode className="language-html">{"<b>"}</PrismCode> and <PrismCode className="language-html">{"<i>"}</PrismCode> in HTML5. <PrismCode className="language-html">{"<b>"}</PrismCode> is meant to highlight words or phrases without conveying additional importance while <PrismCode className="language-html">{"<i>"}</PrismCode> is mostly for voice, technical terms, etc.
        </p>
    </>
);

const TextUtilities = () => (
    <>
        <h2 id="text-utilities">Text utilities</h2>
        <p>Change text color with our <Link to="/docs/utilities/colors">color utilities</Link>.</p>
    </>
);

const Abbreviations = () => (
    <>
        <h2 id="abbreviations">Abbreviations</h2>
        <p>Stylized implementation of HTML’s <PrismCode className="language-html">{"<abbr>"}</PrismCode> element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies.</p>
        <p>Add <Property value=".initialism" /> to an abbreviation for a slightly smaller font-size.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <p><abbr title="Laugh Out Loud">LOL</abbr></p>
            <p><abbr title="HyperText Markup Language" className="initialism">HTML</abbr></p>
        </ComponentPreview>
        <p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr" target="_blank" rel="noopener noreferrer">Read more</a> about abbreviations.</p>
    </>
);

const Blockquotes = () => {
    const BlockquotesText = () => (
        <>
            <h2 id="blockquotes">Blockquotes</h2>
            <p>For quoting blocks of content from another source within your document. Wrap <PrismCode className="language-html">{"<blockquote>"}</PrismCode> or <Property value=".blockquote" /> around any HTML as the quote.</p>
            <ComponentPreview language="html" showCasePanel codeFigure>
                <blockquote className="blockquote">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                </blockquote>
            </ComponentPreview>
        </>
    );

    const BlockquoteWithSourceText = () => (
        <>
            <h3>Naming a source</h3>
            <p>Add a <PrismCode className="language-html">{"<footer>"}</PrismCode> for identifying the source. Wrap the name of the source work in <PrismCode className="language-html">{"<cite>"}</PrismCode>.</p>
            <ComponentPreview language="html" showCasePanel codeFigure>
                <blockquote className="blockquote">
                    <p>
                        Better learn balance. Balance is key. Balance good, karate good. Everything good. Balance bad, better pack up, go home. Understand?
                    </p>
                    <footer><cite title="The Karate Kid (1984)">Mr. Miyagi</cite></footer>
                </blockquote>
            </ComponentPreview>
        </>
    );

    return (
        <>
            <BlockquotesText />
            <BlockquoteWithSourceText />
        </>
    );
};

const Typography = () => (
    <DocContainer docToc>
        <p className="lead">Documentation and examples for Swedbank Pay DesignGuide typography.</p>
        <Fonts />
        <Headings />
        <Small />
        <Lead />
        <Inline />
        <TextUtilities />
        <Abbreviations />
        <Blockquotes />
    </DocContainer>
);

export default Typography;

/* For testing */
export { Fonts, Headings, Small, Lead, Inline, TextUtilities, Abbreviations, Blockquotes };
