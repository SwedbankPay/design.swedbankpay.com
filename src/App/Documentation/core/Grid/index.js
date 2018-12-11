import React from "react";

import { ComponentPreview, DocContainer, Property } from "#";

const HowItWorks = () => (
    <>
        <h2 id="how-it-works">How it works</h2>
        <p>The grid system is heavily based on Bootstrap{"'"}s grid from v.4.</p>
        <p>Most classes from Bootstrap is available. Click <a href="http://getbootstrap.com/docs/4.1/layout/grid/" target="_blank" rel="noopener noreferrer">here</a> to read more about it.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            One of three columns
                        </div>
                        <div className="col-sm">
                            One of three columns
                        </div>
                        <div className="col-sm">
                            One of three columns
                        </div>
                    </div>
                </div>
            </div>
        </ComponentPreview>
        <p>The above example creates three equal-width columns on small, medium, large, extra large, and extra extra large devices using our predefined grid classes. Those columns are centered in the page with the parent <Property value=".container" />.</p>
    </>
);

const GridOptions = () => (
    <>
        <h2 id="grid-options">Grid options</h2>
        <p>Most sizes in the PayEx DesignGuide is defined using <Property value="em" />s or <Property value="rem" />s, <Property value="px" />s are used for grid breakpoints and container widths. This is because the viewport width is in pixels and does not change with the font size.</p>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th></th>
                    <th scope="col">
                        Extra small
                        <p><small>{"<"}576px</small></p>
                    </th>
                    <th scope="col">
                        Small
                        <p><small>{"≥"}576px</small></p>
                    </th>
                    <th scope="col">
                        Medium
                        <p><small>{"≥"}768px</small></p>
                    </th>
                    <th scope="col">
                        Large
                        <p><small>{"≥"}992px</small></p>
                    </th>
                    <th scope="col">
                        Extra large
                        <p><small>{"≥"}1200px</small></p>
                    </th>
                    <th scope="col">
                        Extra extra large
                        <p><small>{"≥"}1600px</small></p>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Max container width</th>
                    <td>None (auto)</td>
                    <td>540px</td>
                    <td>720px</td>
                    <td>960px</td>
                    <td>1140px</td>
                    <td>1460px</td>
                </tr>
                <tr>
                    <th scope="row">Class prefix</th>
                    <td><Property value=".col-" /></td>
                    <td><Property value=".col-sm-" /></td>
                    <td><Property value=".col-md-" /></td>
                    <td><Property value=".col-lg-" /></td>
                    <td><Property value=".col-xl-" /></td>
                    <td><Property value=".col-xxl-" /></td>
                </tr>
                <tr>
                    <th scope="row"># of columns</th>
                    <td colSpan="6">12</td>
                </tr>
                <tr>
                    <th scope="row">Gutter width</th>
                    <td colSpan="6">30px (15px on each side of a column)</td>
                </tr>
                <tr>
                    <th scope="row">Nestable</th>
                    <td colSpan="6">Yes</td>
                </tr>
                <tr>
                    <th scope="row">Column ordering</th>
                    <td colSpan="6">Yes</td>
                </tr>
            </tbody>
        </table>
    </>
);

const AutoLayoutColumns = () => (
    <>
        <h2 id="auto-layout-columns">Auto-layout columns</h2>
        <p>Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like <Property value=".col-sm-6" />.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            1 of 2
                        </div>
                        <div className="col">
                            2 of 2
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            1 of 3
                        </div>
                        <div className="col">
                            2 of 3
                        </div>
                        <div className="col">
                            3 of 3
                        </div>
                    </div>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const Alignment = () => (
    <>
        <h2 id="alignment">Alignment</h2>
        <p>Use flexbox alignment utilities to vertically and horizontally align columns.</p>
        <h3>Vertical alignment</h3>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid showcase-vertical-space">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col">
                        1 of 3
                        </div>
                        <div className="col">
                        2 of 3
                        </div>
                        <div className="col">
                        3 of 3
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col">
                        1 of 3
                        </div>
                        <div className="col">
                        2 of 3
                        </div>
                        <div className="col">
                        3 of 3
                        </div>
                    </div>
                    <div className="row align-items-end">
                        <div className="col">
                        1 of 3
                        </div>
                        <div className="col">
                        2 of 3
                        </div>
                        <div className="col">
                        3 of 3
                        </div>
                    </div>
                </div>
            </div>
        </ComponentPreview>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid showcase-vertical-space">
                <div className="container">
                    <div className="row">
                        <div className="col align-self-start">
                            1 of 3
                        </div>
                        <div className="col align-self-center">
                            1 of 3
                        </div>
                        <div className="col align-self-end">
                            1 of 3
                        </div>
                    </div>
                </div>
            </div>
        </ComponentPreview>
        <h3>Horizontal alignment</h3>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row justify-content-start">
                        <div className="col-4">
                            One of two columns
                        </div>
                        <div className="col-4">
                            One of two columns
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-4">
                            One of two columns
                        </div>
                        <div className="col-4">
                            One of two columns
                        </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className="col-4">
                            One of two columns
                        </div>
                        <div className="col-4">
                            One of two columns
                        </div>
                    </div>
                    <div className="row justify-content-around">
                        <div className="col-4">
                            One of two columns
                        </div>
                        <div className="col-4">
                            One of two columns
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-4">
                            One of two columns
                        </div>
                        <div className="col-4">
                            One of two columns
                        </div>
                    </div>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const Grid = () => (
    <DocContainer docToc>
        <p className="lead">Use our grid system...</p>
        <HowItWorks />
        <GridOptions />
        <AutoLayoutColumns />
        <Alignment />
    </DocContainer>
);

export default Grid;

/* For testing */
export { HowItWorks, GridOptions, AutoLayoutColumns, Alignment };
