import React from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocToc } from "#";

const HowItWorks = () => (
    <>
        <h2 id="how-it-works">How it works</h2>
        <p>
            Change the value of the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/display">display property</a> with our responsive display utility classes. We purposely support only a subset of all possible values for <code className="token property">display</code>. Classes can be combined for various effects as you need.
        </p>
    </>
);

const Notation = () => (
    <>
        <h2 id="notation">Notation</h2>
        <p>
            Display utility classes that apply to all <Link to="/docs/core/breakpoints">breakpoints</Link>, from <code className="token property">xs</code> to <code className="token property">xxl</code>, have no breakpoint abbreviation in them. This is because those classes are applied from <code className="token property">min-width: 0;</code> and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.
        </p>
        <p>As such, the classes are named using the format:</p>
        <ul>
            <li>
                <code className="token property">{".d-{value}"}</code> for <code className="token property">xs</code>
            </li>
            <li>
                <code className="token property">{".d-{breakpoint}-{value}"}</code> for <code className="token property">sm</code>, <code className="token property">md</code>, <code className="token property">lg</code>, <code className="token property">xl</code> and <code className="token property">xxl</code>.
            </li>
        </ul>
        <p>Where <i>value</i> is one of:</p>
        <ul>
            <li><code className="token property">none</code></li>
            <li><code className="token property">inline</code></li>
            <li><code className="token property">inline-block</code></li>
            <li><code className="token property">block</code></li>
            <li><code className="token property">table</code></li>
            <li><code className="token property">table-cell</code></li>
            <li><code className="token property">table-row</code></li>
            <li><code className="token property">flex</code></li>
            <li><code className="token property">inline-flex</code></li>
        </ul>
        <p>The media queries effect screen widths with the given breakpoint <i>or larger</i>. For example, <code className="token property">.d-xl-none</code> sets <code className="token property">display: none;</code> on both <code className="token property">xl</code> and <code className="token property">xxl</code> screens.</p>
    </>
);

const Examples = () => (
    <>
        <h2 id="examples">Examples</h2>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <div className="d-inline background-brand">d-inline</div>
            <div className="d-inline background-default">d-inline</div>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <div className="d-block background-brand">d-block</div>
            <div className="d-block background-default">d-block</div>
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
            To hide elements simply use the <code className="token property">.d-none</code> class or one of the <code className="token property">{".d-{sm,md,lg,xl}-none"}</code> classes for any responsive screen variation.
        </p>
        <p>
            To show an element only on a given interval of screen sizes you can combine one <code className="token property">.d-*-none</code> class with a <code className="token property">.d-*-*</code> class, for example <code className="token property">.d-none .d-md-block .d-xl-none</code> will hide the element for all screen sizes except on medium and large devices.
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
                    <td><code className="token property">.d-none</code></td>
                </tr>
                <tr>
                    <td>Hidden only on xs</td>
                    <td><code className="token property">.d-none .d-sm-block</code></td>
                </tr>
                <tr>
                    <td>Hidden only on sm</td>
                    <td><code className="token property">.d-sm-none .d-md-block</code></td>
                </tr>
                <tr>
                    <td>Hidden only on md</td>
                    <td><code className="token property">.d-md-none .d-lg-block</code></td>
                </tr>
                <tr>
                    <td>Hidden only on lg</td>
                    <td><code className="token property">.d-lg-none .d-xl-block</code></td>
                </tr>
                <tr>
                    <td>Hidden only on xl</td>
                    <td><code className="token property">.d-xl-none .d-xxl-block</code></td>
                </tr>
                <tr>
                    <td>Hidden only on xxl</td>
                    <td><code className="token property">.d-xxl-none</code></td>
                </tr>
                <tr>
                    <td>Visible on all</td>
                    <td><code className="token property">.d-block</code></td>
                </tr>
                <tr>
                    <td>Visible only on xs</td>
                    <td><code className="token property">.d-block .d-sm-none</code></td>
                </tr>
                <tr>
                    <td>Visible only on sm</td>
                    <td><code className="token property">.d-sm-block .d-md-none</code></td>
                </tr>
                <tr>
                    <td>Visible only on md</td>
                    <td><code className="token property">.d-md-block .d-lg-none</code></td>
                </tr>
                <tr>
                    <td>Visible only on lg</td>
                    <td><code className="token property">.d-lg-block .d-xl-none</code></td>
                </tr>
                <tr>
                    <td>Visible only on xl</td>
                    <td><code className="token property">.d-xl-block .d-xxl-none</code></td>
                </tr>
                <tr>
                    <td>Visible only on xxl</td>
                    <td><code className="token property">.d-xxl-block</code></td>
                </tr>
            </tbody>
        </table>


        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
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

/* for testing */
export { HowItWorks, Notation, Examples, HidingElements, DisplayText };
