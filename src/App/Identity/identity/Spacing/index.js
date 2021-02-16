import React from "react";
import { ComponentPreview, DocContainer } from "@docutils";
import { diveDeeper } from "./constants";

import CodeTags from "@components/CodeTags";

const basename = process.env.basename;

const EightPointSystem = () => (
    <section>
        <h2 id="eight-point-system">8-point spacing system</h2>
        <p>We follow a 8-point spacing system – multiples of 8 to define the different dimensions, margins and paddings of our elements. The reason for this is to streamline the process, saving time by minimize the amount of choices and create consistent usage of space across all our product. </p>

        <div className="d-flex flex-column align-items-center mb-4">
            <img src={`${basename}img/documentation/spacing/horizontal-spacing-example.svg`} className="w-100" alt="Example on multiples of 8px horizontal spacing between elements"/>
            <span className="caption-text"><span className="font-weight-bold">Figure 1.</span> Example on multiples of 8px horizontal spacing between elements.</span>
        </div>

        <p>If you are interested in learning more about the 8-point spacing system, you can read more about it in this <a href="https://builttoadapt.io/intro-to-the-8-point-grid-system-d2573cde8632" target="_blank" rel="noopener noreferrer"className="icon-link m-0"><span className="mr-2">Introduction article</span><i className="material-icons" aria-hidden="true">open_in_new</i></a>, which provides a brief explanation of the reasons why to use the 8-point spacing system. To dive even deeper into the nitty gritty, please refer to this <a href="https://spec.fm/specifics/8-pt-grid" target="_blank" rel="noopener noreferrer"className="icon-link m-0"><span className="mr-2">in-depth explanation</span><i className="material-icons" aria-hidden="true">open_in_new</i></a> of the 8-point spacing system.</p>

        <h3>What if I need something in between?</h3>
        <p>Even though we try to adhere to the 8-point spacing system as much as possible, we also know that sometimes you need to use something in between. Especially when it comes to building certain components which requires smaller space in between in order to show grouping and simply produces a better result visually. In those cases, it is allowed to use values from the multiples of 4, but this should be kept to <span className="font-weight-bold">4 px</span> and <span className="font-weight-bold">12 px</span> as we try to keep the larger increments for a consistent vertical spacing alignment between sections.</p>
    </section>
);

const VerticalSpacing = () => (
    <section>
        <h2 id="vertical-spacing">Vertical spacing</h2>
        <p>Similar to horizontal spacing, we also use spacing vertically in order to create good vertical structure. While we don’t have strict usage definitions for each size, it is important to always evaluate what fits best in your context and what type of devices you are designing for. Make sure to group items relevant to each other close and separate sections with good amount of spacing to provide a clear separation.</p>
        <div className="d-flex flex-column align-items-center">
            <img src={`${basename}img/documentation/spacing/vertical-spacing-example.svg`} className="w-100" alt="Example on multiples of 8 px vertical spacing between elements"/>
            <span className="caption-text"><span className="font-weight-bold">Figure 2.</span> Example on multiples of 8 px vertical spacing between elements</span>
        </div>
    </section>
);

const TouchTarget = () => (
    <section>
        <h2 id="touch-target">Touch target</h2>
        <p>On mobile devices, we have to consider the size of the different components to make sure that there is enough space in between interactive components such as: Links, buttons and other input actions to avoid miss clicks and errors. </p>
        <p>A touch target area needs to be a certain size: 48*48 dp (distribution point) according to Android and 44 px minimum size according to iOS. Keep in mind this does not mean your component has to fill these area, even smaller components can work as long as the touch target area fulfills the size requirement.</p>
    </section>
);

const BaseIncrementOfRem = () => (
    <section>
        <h2 id="base-increment-of-rem">Base increment of rem</h2>
        <p>In our system the base size of a  <CodeTags type="secondary" code="rem"/>  unit is <span className="font-weight-bold">16px</span>, this means you can easily use 0.5 rem increments to create layouts in code on a 8-point spacing system. See example below for reference: </p>

        <table className="table table-plain spacing-table">
            <thead>
                <tr>
                    <th scope="col">Pixel</th>
                    <th scope="col">Rem</th>
                    <th scope="col">CSS Class</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">8px</th>
                    <th>0.5 rem</th>
                    <th>@spacer * 0.5</th>
                </tr>
                <tr>
                    <th>16px</th>
                    <th>1 rem</th>
                    <th>@spacer</th>
                </tr>
                <tr>
                    <th>24px</th>
                    <th>1.5 rem</th>
                    <th>@spacer * 1.5</th>
                </tr>
                <tr>
                    <th>32px</th>
                    <th>2 rem</th>
                    <th>@spacer * 2.5</th>
                </tr>
            </tbody>
        </table>
    </section>
);

const DiveDeeper = () => (
    <section>
        <h2 id="dive-deeper">Dive deeper into spacing</h2>
        <p>There are a lot more to learn about best practices when it comes to spacing, it involves much more than just spacing in between elements. Even though, we can’t explain all these concepts here in our spacing section. We would like to provide you with links to learn more about what other factors should be considered when designing layouts and what to think about in order to create the best experience for our users.</p>

        { diveDeeper.map(link => (
            <a key={link.path} href={link.path} target="_blank" rel="noopener noreferrer" className="icon-link d-flex">
                <i className="material-icons mr-2" aria-hidden="true">open_in_new</i>
                <span className="mr-2">{link.text}</span>
            </a>
        )) }
    </section>
);

const HowItWorks = () => (
    <section>
        <h2 id="how-it-works">How it works in code</h2>
        <p>Assign responsive-friendly margin or padding values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are ranging from 0.25 rem to 3 rem.</p>
    </section>
);

const Notation = () => (
    <section>
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
    </section>
);

const Examples = () => (
    <section>
        <h2 id="example">Examples</h2>
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
    </section>
);

const Spacing = () => (
    <DocContainer>
        <p className="lead">
        Spacing helps us to align different components both vertically and horizontally. We follow a 8-point spacing system based on simple mathematical principles in order to create visual consistency and distinction between our elements.
        </p>
        <EightPointSystem />
        <VerticalSpacing />
        <TouchTarget />
        <BaseIncrementOfRem />
        <DiveDeeper />
        <HowItWorks />
        <Notation />
        <Examples />
    </DocContainer>
);

export default Spacing;

export { EightPointSystem, VerticalSpacing, TouchTarget, BaseIncrementOfRem, DiveDeeper, HowItWorks, Notation, Examples };
