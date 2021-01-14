import React from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer } from "@docutils";
import CodeTags from "@components/CodeTags";

const HowItWorks = () => (
    <>
        <h2 id="how-it-works">How it works</h2>
        <p>
            Change the value of the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/display">display property</a> with our responsive display utility classes. We purposely support only a subset of all possible values for <CodeTags type="secondary" code="display" />. Classes can be combined for various effects as you need.
        </p>
    </>
);

const Notation = () => (
    <>
        <h2 id="notation">Notation</h2>
        <p>
            Display utility classes that apply to all <Link to="/identity/breakpoints">breakpoints</Link>, from <CodeTags type="secondary" code="xs" /> to <CodeTags type="secondary" code="xxl" />, have no breakpoint abbreviation in them. This is because those classes are applied from <CodeTags type="secondary" code="min-width: 0;" /> and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.
        </p>
        <p>As such, the classes are named using the format:</p>
        <ul>
            <li>
                <CodeTags type="secondary" code=".d-{value}" /> for <CodeTags type="secondary" code="xs" />
            </li>
            <li>
                <CodeTags type="secondary" code=".d-{breakpoint}-{value}" /> for <CodeTags type="secondary" code="sm" />, <CodeTags type="secondary" code="md" />, <CodeTags type="secondary" code="lg" />, <CodeTags type="secondary" code="xl" /> and <CodeTags type="secondary" code="xxl" />.
            </li>
        </ul>
        <p>Where <i>value</i> is one of:</p>
        <ul>
            <li><CodeTags type="secondary" code="none" /></li>
            <li><CodeTags type="secondary" code="inline" /></li>
            <li><CodeTags type="secondary" code="inline-block" /></li>
            <li><CodeTags type="secondary" code="block" /></li>
            <li><CodeTags type="secondary" code="table" /></li>
            <li><CodeTags type="secondary" code="table-cell" /></li>
            <li><CodeTags type="secondary" code="table-row" /></li>
            <li><CodeTags type="secondary" code="flex" /></li>
            <li><CodeTags type="secondary" code="inline-flex" /></li>
        </ul>
        <p>The media queries effect screen widths with the given breakpoint <i>or larger</i>. For example, <CodeTags type="secondary" code=".d-xl-none" /> sets <CodeTags type="secondary" code="display: none;" /> on both <CodeTags type="secondary" code="xl" /> and <CodeTags type="secondary" code="xxl" /> screens.</p>
    </>
);

const Examples = () => (
    <>
        <h2 id="examples">Examples</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="d-inline p-2 bg-brand">d-inline</div>
            <div className="d-inline p-2 bg-default">d-inline</div>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="d-block p-2 bg-brand">d-block</div>
            <div className="d-block p-2 bg-default">d-block</div>
        </ComponentPreview>
    </>
);

const HidingElements = () => (
    <>
        <h2 id="hiding-elements">Hiding elements</h2>
        <p>
            For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device. Avoid creating entirely different versions of the same site, instead hide element responsively for each screen size.
        </p>
        <p>
            To hide elements simply use the <CodeTags type="secondary" code=".d-none" /> class or one of the <CodeTags type="secondary" code=".d-{sm,md,lg,xl}-none" /> classes for any responsive screen variation.
        </p>
        <p>
            To show an element only on a given interval of screen sizes you can combine one <CodeTags type="secondary" code=".d-*-none" /> class with a <CodeTags type="secondary" code=".d-*-*" /> class, for example <CodeTags type="secondary" code=".d-none .d-md-block .d-xl-none" /> will hide the element for all screen sizes except on medium and large devices.
        </p>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Screen Size</th>
                    <th>Class</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Hidden on all</td>
                    <td><CodeTags type="secondary" code=".d-none" /></td>
                </tr>
                <tr>
                    <td>Hidden only on xs</td>
                    <td><CodeTags type="secondary" code=".d-none .d-sm-block" /></td>
                </tr>
                <tr>
                    <td>Hidden only on sm</td>
                    <td><CodeTags type="secondary" code=".d-sm-none .d-md-block" /></td>
                </tr>
                <tr>
                    <td>Hidden only on md</td>
                    <td><CodeTags type="secondary" code=".d-md-none .d-lg-block" /></td>
                </tr>
                <tr>
                    <td>Hidden only on lg</td>
                    <td><CodeTags type="secondary" code=".d-lg-none .d-xl-block" /></td>
                </tr>
                <tr>
                    <td>Hidden only on xl</td>
                    <td><CodeTags type="secondary" code=".d-xl-none .d-xxl-block" /></td>
                </tr>
                <tr>
                    <td>Hidden only on xxl</td>
                    <td><CodeTags type="secondary" code=".d-xxl-none" /></td>
                </tr>
                <tr>
                    <td>Visible on all</td>
                    <td><CodeTags type="secondary" code=".d-block" /></td>
                </tr>
                <tr>
                    <td>Visible only on xs</td>
                    <td><CodeTags type="secondary" code=".d-block .d-sm-none" /></td>
                </tr>
                <tr>
                    <td>Visible only on sm</td>
                    <td><CodeTags type="secondary" code=".d-sm-block .d-md-none" /></td>
                </tr>
                <tr>
                    <td>Visible only on md</td>
                    <td><CodeTags type="secondary" code=".d-md-block .d-lg-none" /></td>
                </tr>
                <tr>
                    <td>Visible only on lg</td>
                    <td><CodeTags type="secondary" code=".d-lg-block .d-xl-none" /></td>
                </tr>
                <tr>
                    <td>Visible only on xl</td>
                    <td><CodeTags type="secondary" code=".d-xl-block .d-xxl-none" /></td>
                </tr>
                <tr>
                    <td>Visible only on xxl</td>
                    <td><CodeTags type="secondary" code=".d-xxl-block" /></td>
                </tr>
            </tbody>
        </table>

        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="d-lg-none">Hidden on screens wider than lg</div>
            <div className="d-none d-lg-block">Hidden on screens smaller than lg</div>
        </ComponentPreview>
    </>
);

const Display = () => (
    <DocContainer docToc>
        <p className="lead">Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.</p>
        <HowItWorks />
        <Notation />
        <Examples />
        <HidingElements />
    </DocContainer>
);

export default Display;

/* For testing */
export { HowItWorks, Notation, Examples, HidingElements };
