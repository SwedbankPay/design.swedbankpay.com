import React from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocToc, Property } from "#";

const HowItWorks = () => (
    <>
        <h2 id="how-it-works">How it works</h2>
        <p>
            Change the value of the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/display">display property</a> with our responsive display utility classes. We purposely support only a subset of all possible values for <Property value="display" />. Classes can be combined for various effects as you need.
        </p>
    </>
);

const Notation = () => (
    <>
        <h2 id="notation">Notation</h2>
        <p>
            Display utility classes that apply to all <Link to="/docs/core/breakpoints">breakpoints</Link>, from <Property value="xs" /> to <Property value="xxl" />, have no breakpoint abbreviation in them. This is because those classes are applied from <Property value="min-width: 0;" /> and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.
        </p>
        <p>As such, the classes are named using the format:</p>
        <ul>
            <li>
                <Property value=".d-{value}" /> for <Property value="xs" />
            </li>
            <li>
                <Property value=".d-{breakpoint}-{value}" /> for <Property value="sm" />, <Property value="md" />, <Property value="lg" />, <Property value="xl" /> and <Property value="xxl" />.
            </li>
        </ul>
        <p>Where <i>value</i> is one of:</p>
        <ul>
            <li><Property value="none" /></li>
            <li><Property value="inline" /></li>
            <li><Property value="inline-block" /></li>
            <li><Property value="block" /></li>
            <li><Property value="table" /></li>
            <li><Property value="table-cell" /></li>
            <li><Property value="table-row" /></li>
            <li><Property value="flex" /></li>
            <li><Property value="inline-flex" /></li>
        </ul>
        <p>The media queries effect screen widths with the given breakpoint <i>or larger</i>. For example, <Property value=".d-xl-none" /> sets <Property value="display: none;" /> on both <Property value="xl" /> and <Property value="xxl" /> screens.</p>
    </>
);

const Examples = () => (
    <>
        <h2 id="examples">Examples</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="d-inline bg-brand">d-inline</div>
            <div className="d-inline bg-default">d-inline</div>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="d-block bg-brand">d-block</div>
            <div className="d-block bg-default">d-block</div>
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
            To hide elements simply use the <Property value=".d-none" /> class or one of the <Property value=".d-{sm,md,lg,xl}-none" /> classes for any responsive screen variation.
        </p>
        <p>
            To show an element only on a given interval of screen sizes you can combine one <Property value=".d-*-none" /> class with a <Property value=".d-*-*" /> class, for example <Property value=".d-none .d-md-block .d-xl-none" /> will hide the element for all screen sizes except on medium and large devices.
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
                    <td><Property value=".d-none" /></td>
                </tr>
                <tr>
                    <td>Hidden only on xs</td>
                    <td><Property value=".d-none .d-sm-block" /></td>
                </tr>
                <tr>
                    <td>Hidden only on sm</td>
                    <td><Property value=".d-sm-none .d-md-block" /></td>
                </tr>
                <tr>
                    <td>Hidden only on md</td>
                    <td><Property value=".d-md-none .d-lg-block" /></td>
                </tr>
                <tr>
                    <td>Hidden only on lg</td>
                    <td><Property value=".d-lg-none .d-xl-block" /></td>
                </tr>
                <tr>
                    <td>Hidden only on xl</td>
                    <td><Property value=".d-xl-none .d-xxl-block" /></td>
                </tr>
                <tr>
                    <td>Hidden only on xxl</td>
                    <td><Property value=".d-xxl-none" /></td>
                </tr>
                <tr>
                    <td>Visible on all</td>
                    <td><Property value=".d-block" /></td>
                </tr>
                <tr>
                    <td>Visible only on xs</td>
                    <td><Property value=".d-block .d-sm-none" /></td>
                </tr>
                <tr>
                    <td>Visible only on sm</td>
                    <td><Property value=".d-sm-block .d-md-none" /></td>
                </tr>
                <tr>
                    <td>Visible only on md</td>
                    <td><Property value=".d-md-block .d-lg-none" /></td>
                </tr>
                <tr>
                    <td>Visible only on lg</td>
                    <td><Property value=".d-lg-block .d-xl-none" /></td>
                </tr>
                <tr>
                    <td>Visible only on xl</td>
                    <td><Property value=".d-xl-block .d-xxl-none" /></td>
                </tr>
                <tr>
                    <td>Visible only on xxl</td>
                    <td><Property value=".d-xxl-block" /></td>
                </tr>
            </tbody>
        </table>

        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="d-lg-none">Hidden on screens wider than lg</div>
            <div className="d-none d-lg-block">Hidden on screens smaller than lg</div>
        </ComponentPreview>
    </>
);

const DisplayText = () => (
    <div className="col-12 col-lg-10 doc-body">
        <p className="lead">Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.</p>
        <HowItWorks />
        <Notation />
        <Examples />
        <HidingElements />
    </div>
);

const Display = () => (
    <>
        <div className="doc-container">
            <div className="row">
                <DisplayText />
                <DocToc component={DisplayText} />
            </div>
        </div>
    </>
);

export default Display;

/* For testing */
export { HowItWorks, Notation, Examples, HidingElements, DisplayText };
