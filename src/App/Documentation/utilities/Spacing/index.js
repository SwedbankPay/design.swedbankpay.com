import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import CodeTags from "@components/CodeTags";

const HowItWorks = () => (
    <>
        <h2 id="how-it-works">How it works</h2>
        <p>
            Assign responsive-friendly <CodeTags type="secondary" code="margin" /> or <CodeTags type="secondary" code="padding" /> values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are ranging from <CodeTags type="secondary" code="0.25rem" /> to <CodeTags type="secondary" code="3rem" />.
        </p>
    </>
);

const Notation = () => (
    <>
        <h2 id="notation">Notation</h2>
        <p>
            Spacing utilities that apply to all breakpoints, from <CodeTags type="secondary" code="xs" /> to <CodeTags type="secondary" code="xxl" />, have no breakpoint abbreviation in them. This is because those classes are applied from <CodeTags type="secondary" code="min-width: 0" /> and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.
        </p>
        <p>
            The classes are named using the format <CodeTags type="secondary" code="{property}{sides}-{size}" /> for <CodeTags type="secondary" code="xs" /> and <CodeTags type="secondary" code="{property}{sides}-{breakpoint}-{size}" /> for <CodeTags type="secondary" code="sm" />, <CodeTags type="secondary" code="md" />, <CodeTags type="secondary" code="lg" />, <CodeTags type="secondary" code="xl" />, and <CodeTags type="secondary" code="xxl" />.
        </p>

        <p>Where <i>property</i> is one of:</p>
        <ul>
            <li><CodeTags type="secondary" code="m" /> - for classes that set <CodeTags type="secondary" code="margin" /></li>
            <li><CodeTags type="secondary" code="p" /> - for classes that set <CodeTags type="secondary" code="padding" /></li>
        </ul>

        <p>Where <i>sides</i> is one of:</p>
        <ul>
            <li><CodeTags type="secondary" code="t" /> - for classes that set <CodeTags type="secondary" code="margin-top" /> or <CodeTags type="secondary" code="padding-top" /></li>
            <li><CodeTags type="secondary" code="b" /> - for classes that set <CodeTags type="secondary" code="margin-bottom" /> or <CodeTags type="secondary" code="padding-bottom" /></li>
            <li><CodeTags type="secondary" code="l" /> - for classes that set <CodeTags type="secondary" code="margin-left" /> or <CodeTags type="secondary" code="padding-left" /></li>
            <li><CodeTags type="secondary" code="r" /> - for classes that set <CodeTags type="secondary" code="margin-right" /> or <CodeTags type="secondary" code="padding-right" /></li>
            <li><CodeTags type="secondary" code="x" /> - for classes that set both <CodeTags type="secondary" code="*-left" /> or <CodeTags type="secondary" code="*-right" /></li>
            <li><CodeTags type="secondary" code="y" /> - for classes that set both <CodeTags type="secondary" code="*-top" /> or <CodeTags type="secondary" code="*-bottom" /></li>
        </ul>

        <p>Where <i>size</i> is one of:</p>
        <ul>
            <li><CodeTags type="secondary" code="0" /> - for classes that eliminate the <CodeTags type="secondary" code="margin" /> or <CodeTags type="secondary" code="padding" /> by setting it to <CodeTags type="secondary" code="0" /></li>
            <li><CodeTags type="secondary" code="1" /> - for classes that set the <CodeTags type="secondary" code="margin" /> or <CodeTags type="secondary" code="padding" /> to <CodeTags type="secondary" code="@spacer * 0.25" /></li>
            <li><CodeTags type="secondary" code="2" /> - for classes that set the <CodeTags type="secondary" code="margin" /> or <CodeTags type="secondary" code="padding" /> to <CodeTags type="secondary" code="@spacer * 0.5" /></li>
            <li><CodeTags type="secondary" code="3" /> - for classes that set the <CodeTags type="secondary" code="margin" /> or <CodeTags type="secondary" code="padding" /> to <CodeTags type="secondary" code="@spacer" /></li>
            <li><CodeTags type="secondary" code="4" /> - for classes that set the <CodeTags type="secondary" code="margin" /> or <CodeTags type="secondary" code="padding" /> to <CodeTags type="secondary" code="@spacer * 1.5" /></li>
            <li><CodeTags type="secondary" code="5" /> - for classes that set the <CodeTags type="secondary" code="margin" /> or <CodeTags type="secondary" code="padding" /> to <CodeTags type="secondary" code="@spacer * 3" /></li>
            <li><CodeTags type="secondary" code="auto" /> - for classes that set <CodeTags type="secondary" code="margin" /> to <CodeTags type="secondary" code="auto" /></li>
        </ul>

        <p>For margin you can also set negative <i>size</i> (excluding <CodeTags type="secondary" code="0" />):</p>
        <ul>
            <li><CodeTags type="secondary" code="n1" /> - for classes that set the <CodeTags type="secondary" code="margin" /> to <CodeTags type="secondary" code="-@spacer * 0.25" /></li>
            <li><CodeTags type="secondary" code="n2" /> - for classes that set the <CodeTags type="secondary" code="margin" /> to <CodeTags type="secondary" code="-@spacer * 0.5" /></li>
            <li><CodeTags type="secondary" code="n3" /> - for classes that set the <CodeTags type="secondary" code="margin" /> to <CodeTags type="secondary" code="-@spacer" /></li>
            <li><CodeTags type="secondary" code="n4" /> - for classes that set the <CodeTags type="secondary" code="margin" /> to <CodeTags type="secondary" code="-@spacer * 1.5" /></li>
            <li><CodeTags type="secondary" code="n5" /> - for classes that set the <CodeTags type="secondary" code="margin" /> to <CodeTags type="secondary" code="-@spacer * 3" /></li>
        </ul>

        <p>(<CodeTags type="secondary" code="@spacer" /> is set to <CodeTags type="secondary" code="1rem (16px)" />)</p>
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
            Additionally, DesignGuide also includes an <CodeTags type="secondary" code=".mx-auto" /> class for horizontally centering fixed-width block level content—that is, content that has <CodeTags type="secondary" code="display: block" /> and a <CodeTags type="secondary" code="width" /> set—by setting the horizontal margins to auto.
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

const Spacing = () => (
    <DocContainer docToc>
        <p className="lead">The DesignGuide includes a wide range of shorthand responsive margin and padding utility classes to modify an element’s appearance.</p>
        <HowItWorks />
        <Notation />
        <Examples />
    </DocContainer>
);

export default Spacing;

/* For testing */
export { HowItWorks, Notation, Examples };
