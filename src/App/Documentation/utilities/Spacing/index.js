import React from "react";

import { ComponentPreview, DocToc, Property } from "#";

const HowItWorks = () => (
    <>
        <h2 id="how-it-works">How it works</h2>
        <p>
            Assign responsive-friendly <Property value="margin" /> or <Property value="padding" /> values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are ranging from <Property value="0.25rem" /> to <Property value="3rem" />.
        </p>
    </>
);

const Notation = () => (
    <>
        <h2 id="notation">Notation</h2>
        <p>
            Spacing utilities that apply to all breakpoints, from <Property value="xs" /> to <Property value="xxl" />, have no breakpoint abbreviation in them. This is because those classes are applied from <Property value="min-width: 0" /> and up, and thus are not bound by a media query. <s>The remaining breakpoints, however, do include a breakpoint abbreviation.</s> <b>(Spacing utilities with breakpoint abbreviations will be included later)</b>
        </p>
        <p>
            The classes are named using the format <Property value="{property}{sides}-{size}" /> for <Property value="xs" /> <s>and <Property value="{property}{sides}-{breakpoint}-{size}" /> for <Property value="sm" />, <Property value="md" />, <Property value="lg" />, <Property value="xl" />, and <Property value="xxl" />.</s>
        </p>

        <p>Where <i>property</i> is one of:</p>
        <ul>
            <li><Property value="m" /> - for classes that set <Property value="margin" /></li>
            <li><Property value="p" /> - for classes that set <Property value="padding" /></li>
        </ul>

        <p>Where <i>sides</i> is one of:</p>
        <ul>
            <li><Property value="t" /> - for classes that set <Property value="margin-top" /> or <Property value="padding-top" /></li>
            <li><Property value="b" /> - for classes that set <Property value="margin-bottom" /> or <Property value="padding-bottom" /></li>
            <li><Property value="l" /> - for classes that set <Property value="margin-left" /> or <Property value="padding-left" /></li>
            <li><Property value="r" /> - for classes that set <Property value="margin-right" /> or <Property value="padding-right" /></li>
            <li><Property value="x" /> - for classes that set both <Property value="*-left" /> or <Property value="*-right" /></li>
            <li><Property value="y" /> - for classes that set both <Property value="*-top" /> or <Property value="*-bottom" /></li>
        </ul>

        <p>Where <i>size</i> is one of:</p>
        <ul>
            <li><Property value="0" /> - for classes that eliminate the <Property value="margin" /> or <Property value="padding" /> by setting it to <Property value="0" /></li>
            <li><Property value="1" /> - for classes that set the <Property value="margin" /> or <Property value="padding" /> to <Property value="@spacer * 0.25" /></li>
            <li><Property value="2" /> - for classes that set the <Property value="margin" /> or <Property value="padding" /> to <Property value="@spacer * 0.5" /></li>
            <li><Property value="3" /> - for classes that set the <Property value="margin" /> or <Property value="padding" /> to <Property value="@spacer" /></li>
            <li><Property value="4" /> - for classes that set the <Property value="margin" /> or <Property value="padding" /> to <Property value="@spacer * 1.5" /></li>
            <li><Property value="5" /> - for classes that set the <Property value="margin" /> or <Property value="padding" /> to <Property value="@spacer * 3" /></li>
            <li><Property value="auto" /> - for classes that set <Property value="margin" /> to <Property value="auto" /></li>
        </ul>

        <p>(<Property value="@spacer" /> is set to <Property value="1rem (16px)" />)</p>
    </>
);

const Examples = () => (
    <>
        <h2 id="examples">Examples</h2>
        <p>Here are some representative examples of these classes:</p>
        <ComponentPreview language="css" codeFigure>
            {`
                .mt-0 {
                    margin-top: 0 !important;
                }
                
                .ml-1 {
                    margin-left: (@spacer * 0.25) !important;
                }
                
                .px-2 {
                    padding-left: (@spacer * 0.5) !important;
                    padding-right: (@spacer * 0.5) !important;
                }
                
                .p-3 {
                    padding: @spacer !important;
                }
            `}
        </ComponentPreview>

        <h3>Horizontal centering</h3>
        <p>
            Additionally, DesignGuide also includes an <Property value=".mx-auto" /> class for horizontally centering fixed-width block level content—that is, content that has <Property value="display: block" /> and a <Property value="width" /> set—by setting the horizontal margins to auto.
        </p>
        <ComponentPreview language="html" codeFigure showCasePanel removeOuterTag>
            <div className="row">
                <div className="mx-auto p-2 bg-default">{"\n"}
                    Centered element{"\n"}
                </div>
            </div>
        </ComponentPreview>
    </>
);

const SpacingText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">The DesignGuide includes a wide range of shorthand responsive margin and padding utility classes to modify an element’s appearance.</p>
        <HowItWorks />
        <Notation />
        <Examples />
    </div>
);

const Spacing = () => (
    <>
        <div className="doc-container">
            <div className="row">
                <SpacingText />
                <DocToc component={SpacingText} />
            </div>
        </div>
    </>
);

export default Spacing;

/* For testing */
export { HowItWorks, Notation, Examples, SpacingText };
