import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer } from "@docutils";
import { Overview, Download, Guidelines } from "../../../Resources/resources/typography";
import Button from "@components/Button";
import CodeTags from "@components/CodeTags";

const basename = process.env.basename;
const { expandable } = window.dg;

const ResourcesTypography = () => (
    <div className="expandable">
        <button type="button" className="expandable-header" aria-expanded="false" aria-controls="resources-typograpy-body">
            <span className="expandable-headline">Typography guidelines</span>
            <small className="expandable-subtitle">From <Link to="/res/resources/typography">typography in Resources</Link></small>
        </button>
        <div className="expandable-body" id="resources-typography-body">
            <Overview />
            <Download />
            <Guidelines />
        </div>
    </div>
);

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
        <p>The classes <CodeTags type="secondary" code=".h1" /> through <CodeTags type="secondary" code=".h6" /> are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.</p>
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

const HeroTitle = () => (
    <>
        <h2 id="hero-title">Hero title</h2>
        <p>The class <CodeTags type="secondary" code=".hero" /> can be used to achieve the big and bold hero title styling.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <h1 className="hero">Hero title</h1>
            <p className="hero">Hero title</p>
        </ComponentPreview>
    </>
);

const Lead = () => (
    <>
        <h2 id="lead">Lead</h2>
        <p>Make a paragraph stand out by using <CodeTags type="secondary" code=".lead" />.</p>
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
            The <CodeTags type="secondary" code=".mark" /> and <CodeTags type="secondary" code=".small" /> classes are also available to apply the same styles
            as <CodeTags type="primary" code={"<mark>"} /> and <CodeTags type="primary" code={"<small>"} /> while
            avoiding any unwanted semantic implications that the tags would bring.
        </p>
        <p>
        While not shown above, feel free to use <CodeTags type="primary" code={"<b>"} /> and <CodeTags type="primary" code={"<i>"} /> in
        HTML5. <CodeTags type="primary" code={"<b>"} /> is meant to highlight words or phrases without conveying additional importance
        while <CodeTags type="primary" code={"<i>"} /> is mostly for voice, technical terms, etc.
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
        <p>Stylized implementation of HTML’s <CodeTags type="primary" code={"<abbr>"} /> element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies.</p>
        <p>Add <CodeTags type="secondary" code=".initialism" /> to an abbreviation for a slightly smaller font-size.</p>
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
            <p>For quoting blocks of content from another source within your document. Wrap <CodeTags type="primary" code={"<blockquote>"} /> or <CodeTags type="secondary" code=".blockquote" /> around any HTML as the quote.</p>
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
            <p>Add a <CodeTags type="primary" code={"<footer>"} /> for identifying the source. Wrap the name of the source work in <CodeTags type="primary" code={"<cite>"} />.</p>
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

const AkkuratMono = () => (
    <>
        <h2 id="akkurat-mono">Akkurat Mono</h2>
        <p>The Akkurat Mono font should be used when code is to be presented, for instance with code tags.</p>

        <h3>Download</h3>
        <div className="slab slab-default slab-elevated">
            <p>Before downloading the Akkurat Mono font, make sure to understand the correct usages of Akkurat Mono.</p>
            <Button type="executive" icon="file_download" href={`${basename}release/fonts/AkkuratMono.zip`} label="Akkurat Mono" />
        </div>
    </>
);

const Typography = () => {

    useEffect(() => { expandable.init(); });

    return (
        <DocContainer docToc>
            <p className="lead">Documentation and examples for Swedbank Pay DesignGuide typography.</p>
            <ResourcesTypography />
            <Fonts />
            <Headings />
            <HeroTitle />
            <Lead />
            <Inline />
            <TextUtilities />
            <Abbreviations />
            <Blockquotes />
            <AkkuratMono />
        </DocContainer>
    );
};

export default Typography;

/* For testing */
export { ResourcesTypography, Fonts, Headings, HeroTitle, Lead, Inline, TextUtilities, Abbreviations, Blockquotes, AkkuratMono };
