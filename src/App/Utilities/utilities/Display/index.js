import React from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer } from "@docutils";
import Tag from "@components/Tag";

const HowItWorks = () => (
    <>
        <h2 id="how-it-works">How it works</h2>
        <p>
            Change the value of the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/display">display property</a> with our responsive display utility classes. We purposely support only a subset of all possible values for <Tag code type="secondary" text="display" />. Classes can be combined for various effects as you need.
        </p>
    </>
);

const Notation = () => (
    <>
        <h2 id="notation">Notation</h2>
        <p>
            Display utility classes that apply to all <Link to="/identity/breakpoints">breakpoints</Link>, from <Tag code type="secondary" text="xs" /> to <Tag code type="secondary" text="xxl" />, have no breakpoint abbreviation in them. This is because those classes are applied from <Tag code type="secondary" text="min-width: 0;" /> and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.
        </p>
        <p>As such, the classes are named using the format:</p>
        <ul>
            <li>
                <Tag code type="secondary" text=".d-{value}" /> for <Tag code type="secondary" text="xs" />
            </li>
            <li>
                <Tag code type="secondary" text=".d-{breakpoint}-{value}" /> for <Tag code type="secondary" text="sm" />, <Tag code type="secondary" text="md" />, <Tag code type="secondary" text="lg" />, <Tag code type="secondary" text="xl" /> and <Tag code type="secondary" text="xxl" />.
            </li>
        </ul>
        <p>Where <i>value</i> is one of:</p>
        <ul>
            <li><Tag code type="secondary" text="none" /></li>
            <li><Tag code type="secondary" text="inline" /></li>
            <li><Tag code type="secondary" text="inline-block" /></li>
            <li><Tag code type="secondary" text="block" /></li>
            <li><Tag code type="secondary" text="table" /></li>
            <li><Tag code type="secondary" text="table-cell" /></li>
            <li><Tag code type="secondary" text="table-row" /></li>
            <li><Tag code type="secondary" text="flex" /></li>
            <li><Tag code type="secondary" text="inline-flex" /></li>
        </ul>
        <p>The media queries effect screen widths with the given breakpoint <i>or larger</i>. For example, <Tag code type="secondary" text=".d-xl-none" /> sets <Tag code type="secondary" text="display: none;" /> on both <Tag code type="secondary" text="xl" /> and <Tag code type="secondary" text="xxl" /> screens.</p>
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
            To hide elements simply use the <Tag code type="secondary" text=".d-none" /> class or one of the <Tag code type="secondary" text=".d-{sm,md,lg,xl}-none" /> classes for any responsive screen variation.
        </p>
        <p>
            To show an element only on a given interval of screen sizes you can combine one <Tag code type="secondary" text=".d-*-none" /> class with a <Tag code type="secondary" text=".d-*-*" /> class, for example <Tag code type="secondary" text=".d-none .d-md-block .d-xl-none" /> will hide the element for all screen sizes except on medium and large devices.
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
                    <td><Tag code type="secondary" text=".d-none" /></td>
                </tr>
                <tr>
                    <td>Hidden only on xs</td>
                    <td><Tag code type="secondary" text=".d-none .d-sm-block" /></td>
                </tr>
                <tr>
                    <td>Hidden only on sm</td>
                    <td><Tag code type="secondary" text=".d-sm-none .d-md-block" /></td>
                </tr>
                <tr>
                    <td>Hidden only on md</td>
                    <td><Tag code type="secondary" text=".d-md-none .d-lg-block" /></td>
                </tr>
                <tr>
                    <td>Hidden only on lg</td>
                    <td><Tag code type="secondary" text=".d-lg-none .d-xl-block" /></td>
                </tr>
                <tr>
                    <td>Hidden only on xl</td>
                    <td><Tag code type="secondary" text=".d-xl-none .d-xxl-block" /></td>
                </tr>
                <tr>
                    <td>Hidden only on xxl</td>
                    <td><Tag code type="secondary" text=".d-xxl-none" /></td>
                </tr>
                <tr>
                    <td>Visible on all</td>
                    <td><Tag code type="secondary" text=".d-block" /></td>
                </tr>
                <tr>
                    <td>Visible only on xs</td>
                    <td><Tag code type="secondary" text=".d-block .d-sm-none" /></td>
                </tr>
                <tr>
                    <td>Visible only on sm</td>
                    <td><Tag code type="secondary" text=".d-sm-block .d-md-none" /></td>
                </tr>
                <tr>
                    <td>Visible only on md</td>
                    <td><Tag code type="secondary" text=".d-md-block .d-lg-none" /></td>
                </tr>
                <tr>
                    <td>Visible only on lg</td>
                    <td><Tag code type="secondary" text=".d-lg-block .d-xl-none" /></td>
                </tr>
                <tr>
                    <td>Visible only on xl</td>
                    <td><Tag code type="secondary" text=".d-xl-block .d-xxl-none" /></td>
                </tr>
                <tr>
                    <td>Visible only on xxl</td>
                    <td><Tag code type="secondary" text=".d-xxl-block" /></td>
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
