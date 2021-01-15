import React from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer } from "@docutils";
import CodeTags from "@components/CodeTags";

const basename = process.env.basename;

const Intro = () => (
    <section>
        <p className="lead">Use our Bootstrap-inspired grid to build layouts of all shapes and sizes. Our twelve column system has six default responsive tiers, and dozens of predefined classes.</p>
        <p>Our grid system is a modified version of the Bootstrap grid-system, learn more about how it works in the <a href="https://getbootstrap.com/docs/4.1/layout/grid/" target="_blank" rel="noopener noreferrer"className="icon-link m-0"><span className="mr-2">Bootstrap documentation</span><i className="material-icons" aria-hidden="true">open_in_new</i></a>. If you are curious about how the grid is being used in design, head over to the <a href="https://www.figma.com/file/GkRbjhReTaX3vr2wwKCsGx/?node-id=493%3A3" target="_blank" rel="noopener noreferrer"className="icon-link m-0"><span className="mr-2">Grid file in Figma</span><i className="material-icons" aria-hidden="true">open_in_new</i></a>.</p>
    </section>
);

const GridSystem = () => (
    <section>
        <h2 id="grid-system">Grid system</h2>
        <div className="grid-guide">
            <article>
                <img src={`${basename}img/documentation/grid/columns.png`} className="img-fluid" alt="Illustration of Columns" />
                <h3>Columns</h3>
                <p>We use a <span className="font-weight-bold">12 column</span> grid system where the width of the column changes depending on the size of the grid.</p>
            </article>
            <article>
                <img src={`${basename}img/documentation/grid/column-span.png`} className="img-fluid" alt="Illustration of column spans" />
                <h3>Column spans</h3>
                <p>Within the 12 column grid system, there are also <span className="font-weight-bold">6 tiers</span> of responsive column spans. </p>
            </article>
            <article>
                <img src={`${basename}img/documentation/grid/gutters.png`} className="img-fluid" alt="Illustration of Gutters" />
                <h3>Gutters</h3>
                <p>Gutters are the gap between columns, these values (16 px, 24 px etc.) are <span className="font-weight-bold">fixed</span> and depends on our breakpoints. </p>
            </article>
            <article>
                <img src={`${basename}img/documentation/grid/margins.png`} className="img-fluid" alt="Illustration of margins" />
                <h3>Margins</h3>
                <p>Margins are the outer space between the columns and the edge of the grid. The values can be <span className="font-weight-bold">the same as gutters or larger</span>.</p>
            </article>
        </div>
    </section>
);

const GridTypes = () => (
    <section>
        <h2 id="grid-types">Grid types</h2>
        <div className="grid-guide">
            <article>
                <img src={`${basename}img/documentation/grid/fluid.png`} className="img-fluid" alt="Illustration of fluid" />
                <h3>Fluid</h3>
                <p>A fluid grid takes up 100% of the viewport and scales dynamically as the sizing of the grid changes.</p>
            </article>
            <article>
                <img src={`${basename}img/documentation/grid/fixed.png`} className="img-fluid" alt="Illustration of fixed" />
                <h3>Fixed</h3>
                <p>A fixed grid has a fixed size on its maximum width, meaning the grid will not scale as the grid changes.</p>
            </article>
        </div>
    </section>
);

const OffsettingGrid = () => (
    <section>
        <h2 id="offsetting-grid">Offsetting grid</h2>
        <p>A standard 12 column grid typically fills 100% of the viewport. When there is a side menu present in the design we must offset the grid in order to align the elements. In this case, the width of the menu is removed from the calculation and the grid takes 100% of the remaining space.</p>
        <div className="grid-guide">
            <article>
                <img src={`${basename}img/documentation/grid/grid-offset-left.png`} className="mb-3 img-fluid" alt="Grid offset with left side menu" />
                <p>Grid offset with left side menu</p>
            </article>
            <article>
                <img src={`${basename}img/documentation/grid/grid-offset-both-sides.png`} className="mb-3 img-fluid" alt="Grid offset with menu on each side" />
                <p>Grid offset with menu on each side</p>
            </article>
        </div>
    </section>
);

const Breakpoints = () => (
    <section>
        <h2 id="breakpoints">Breakpoints</h2>
        <p>As shown in previous examples our grid system has 12 columns in desktop view. As the width decreases to tablet and mobile breakpoints the amount of columns used changes as well. Within the tablet breakpoints we use 8 columns and within mobile breakpoints 4 columns.</p>
        <table className="table table-plain">
            <thead>
                <tr>
                    <th>Size</th>
                    <th>Breakpoint Range</th>
                    <th>Columns</th>
                    <th>Margins & Gutter</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Mobile</td>
                    <td>320-767 px</td>
                    <td>4</td>
                    <td>16 px</td>
                </tr>
                <tr>
                    <td>Tablet</td>
                    <td>768-1023 px</td>
                    <td>8</td>
                    <td>24 px</td>
                </tr>
                <tr>
                    <td>Small Desktop</td>
                    <td>1024-1439 px</td>
                    <td>12</td>
                    <td>24 px</td>
                </tr>
                <tr>
                    <td>Large Desktop</td>
                    <td>≥ 1440 px</td>
                    <td>12</td>
                    <td>24 px</td>
                </tr>
            </tbody>
        </table>
    </section>
);

const HowItWorks = () => (
    <>
        <h2 id="how-it-works">How it works in code</h2>
        <p>The grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together.</p>
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
        <p>The above example creates three equal-width columns on small, medium, large, extra large, and extra extra large devices using our predefined grid classes. Those columns are centered in the page with the parent <CodeTags type="secondary" code=".container" />.</p>
        <p>Breaking it down, here’s how it works:</p>
        <ul>
            <li>
                {/* Use <CodeTags type="secondary" code=".container" /> for a responsive pixel width or <CodeTags type="secondary" code=".container-fluid" /> for <CodeTags type="secondary" code="width: 100%" /> across all viewport and device sizes. */}
                Containers provide a means to center and horizontally pad your site’s contents. We have 4 different container sizes available:
                <ul>
                    <li>
                        <CodeTags type="secondary" code=".container-sm" />
                        <p>Max-width: 992px.</p>
                    </li>
                    <li>
                        <CodeTags type="secondary" code=".container" />
                        <p>Max-width: 1200px.</p>
                    </li>
                    <li>
                        <CodeTags type="secondary" code=".container-lg" />
                        <p>Max-width: 1600px.</p>
                    </li>
                    <li>
                        <CodeTags type="secondary" code=".container-fluid" />
                        <p>Max-width: none, takes up the entire page.</p>
                    </li>
                </ul>
            </li>
            <li>
                Rows are wrappers for columns. Each column has horizontal <CodeTags type="secondary" code="padding" /> (called a gutter) for controlling the space between them. This <CodeTags type="secondary" code="padding" /> is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side.
            </li>
            <li>
                In a grid layout, content must be placed within columns and only columns may be immediate children of rows.
            </li>
            <li>
                Thanks to flexbox, grid columns without a specified <CodeTags type="secondary" code="width" /> will automatically layout as equal width columns. For example, four instances of <CodeTags type="secondary" code=".col-sm" /> will each automatically be 25% wide from the small breakpoint and up. See the <a href="#auto-layout-columns">auto-layout</a> columns section for more examples.
            </li>
            <li>
                Column classes indicate the number of columns you’d like to use out of the possible 12 per row. So, if you want three equal-width columns across, you can use <CodeTags type="secondary" code=".col-4" />.
            </li>
            <li>
                Column <CodeTags type="secondary" code="width" />s are set in percentages, so they’re always fluid and sized relative to their parent element.
            </li>
            <li>
                Columns have horizontal <CodeTags type="secondary" code="padding" /> to create the gutters between individual columns, however, you can remove the <CodeTags type="secondary" code="margin" /> from rows and <CodeTags type="secondary" code="padding" /> from columns with <CodeTags type="secondary" code=".no-gutters" /> on the <CodeTags type="secondary" code=".row" />.
            </li>
            <li>
                To make the grid responsive, there are six grid breakpoints, one for each <Link to="/utilities/breakpoints">responsive breakpoint</Link>: all breakpoints (extra small), small, medium, large, extra large, and extra extra large.
            </li>
            <li>
                Grid breakpoints are based on minimum width media queries, meaning they <b>apply to that one breakpoint and all those above it</b> (e.g., <CodeTags type="secondary" code=".col-sm-4" /> applies to small, medium, large, extra large and extra extra large devices, but not the first <CodeTags type="secondary" code="xs" /> breakpoint).
            </li>
        </ul>
    </>
);

const GridOptions = () => (
    <>
        <h2 id="grid-options">Grid options</h2>
        <p>Most sizes in the Swedbank Pay DesignGuide is defined using <CodeTags type="secondary" code="rem" />s, <CodeTags type="secondary" code="px" />s are used for grid breakpoints and container widths. This is because the viewport width is in pixels and does not change with the font size.</p>
        <p>Use this table to see how aspects of the grid system work across multiple devices.</p>
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
                    <td><CodeTags type="secondary" code=".col-" /></td>
                    <td><CodeTags type="secondary" code=".col-sm-" /></td>
                    <td><CodeTags type="secondary" code=".col-md-" /></td>
                    <td><CodeTags type="secondary" code=".col-lg-" /></td>
                    <td><CodeTags type="secondary" code=".col-xl-" /></td>
                    <td><CodeTags type="secondary" code=".col-xxl-" /></td>
                </tr>
                <tr>
                    <th scope="row">Gutter width</th>
                    <td colSpan="6">32px (16px on each side of a column)</td>
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
        <p>Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like <CodeTags type="secondary" code=".col-sm-6" />.</p>
        <h3>Equal-width</h3>
        <p>For example, here are two grid layouts that apply to every device and viewport, from <CodeTags type="secondary" code="xs" /> to <CodeTags type="secondary" code="xxl" />. Add any number of unit-less classes for each breakpoint you need and every column will be the same width.</p>
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

        <h3>Setting one column width</h3>
        <p>Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            1 of 3
                        </div>
                        <div className="col-6">
                            2 of 3 (wider)
                        </div>
                        <div className="col">
                            3 of 3
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            1 of 3
                        </div>
                        <div className="col-5">
                            2 of 3 (wider)
                        </div>
                        <div className="col">
                            3 of 3
                        </div>
                    </div>
                </div>
            </div>
        </ComponentPreview>

        <h3>Variable width content</h3>
        <p>Use <CodeTags type="secondary" code="col-{breakpoint}-auto" /> classes to size columns based on the natural width of their content.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-2">
                            1 of 3
                        </div>
                        <div className="col-md-auto">
                            Variable width content
                        </div>
                        <div className="col col-lg-2">
                            3 of 3
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            1 of 3
                        </div>
                        <div className="col-md-auto">
                            Variable width content
                        </div>
                        <div className="col col-lg-2">
                            3 of 3
                        </div>
                    </div>
                </div>
            </div>
        </ComponentPreview>

        <h3>Equal-width multi-row</h3>
        <p>Create equal-width columns that span multiple rows by inserting a <CodeTags type="secondary" code=".w-100" /> where you want the columns to break to a new line. Make the breaks responsive by mixing the <CodeTags type="secondary" code=".w-100" /> with some <Link to="/utilities/display">responsive display utilities</Link>.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row">
                        <div className="col">col</div>
                        <div className="col">col</div>
                        <div className="w-100"></div>
                        <div className="col">col</div>
                        <div className="col">col</div>
                    </div>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const ResponsiveClasses = () => (
    <>
        <h2 id="responsive-classes">Responsive classes</h2>
        <p>Our grid includes six tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, extra large, or extra extra large devices however you see fit.</p>

        <h3>All breakpoints</h3>
        <p>For grids that are the same from the smallest of devices to the largest, use the <CodeTags type="secondary" code=".col" /> and <CodeTags type="secondary" code=".col-*" /> classes. Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to <CodeTags type="secondary" code=".col" />.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row">
                        <div className="col">col</div>
                        <div className="col">col</div>
                        <div className="col">col</div>
                        <div className="col">col</div>
                    </div>
                    <div className="row">
                        <div className="col-8">col-8</div>
                        <div className="col-4">col-4</div>
                    </div>
                </div>
            </div>
        </ComponentPreview>

        <h3>Stacked to horizontal</h3>
        <p>Using a single set of <CodeTags type="secondary" code=".col-sm-*" /> classes, you can create a basic grid system that starts out stacked and becomes horizontal at the small breakpoint (<CodeTags type="secondary" code="sm" />).</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">col-sm-8</div>
                        <div className="col-sm-4">col-sm-4</div>
                    </div>
                    <div className="row">
                        <div className="col-sm">col-sm</div>
                        <div className="col-sm">col-sm</div>
                        <div className="col-sm">col-sm</div>
                    </div>
                </div>
            </div>
        </ComponentPreview>

        <h3>Mix and match</h3>
        <p>Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8">.col-12 .col-md-8</div>
                        <div className="col-6 col-md-4">.col-6 .col-md-4</div>
                    </div>

                    <div className="row">
                        <div className="col-6 col-md-4">.col-6 .col-md-4</div>
                        <div className="col-6 col-md-4">.col-6 .col-md-4</div>
                        <div className="col-6 col-md-4">.col-6 .col-md-4</div>
                    </div>

                    <div className="row">
                        <div className="col-6">.col-6</div>
                        <div className="col-6">.col-6</div>
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

        <h3>Column wrapping</h3>
        <p>If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row">
                        <div className="col-9">.col-9</div>
                        <div className="col-4">.col-4<br/>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
                        <div className="col-6">.col-6<br/>Subsequent columns continue along the new line.</div>
                    </div>
                </div>
            </div>
        </ComponentPreview>

        <h3>Column breaks</h3>
        <p>Breaking columns to a new line in flexbox requires a small hack: add an element with <CodeTags type="secondary" code="width: 100%" /> wherever you want to wrap your columns to a new line. Normally this is accomplished with multiple <CodeTags type="secondary" code=".row" />s, but not every implementation method can account for this.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
                        <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>

                        <div className="w-100"></div>

                        <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
                        <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
                    </div>
                </div>
            </div>
        </ComponentPreview>
        <p>You may also apply this break at specific breakpoints with our <Link to="/utilities/display">responsive display utilities</Link>.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-sm-4">.col-6 .col-sm-4</div>
                        <div className="col-6 col-sm-4">.col-6 .col-sm-4</div>

                        <div className="w-100 d-none d-md-block"></div>

                        <div className="col-6 col-sm-4">.col-6 .col-sm-4</div>
                        <div className="col-6 col-sm-4">.col-6 .col-sm-4</div>
                    </div>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const Reordering = () => (
    <>
        <h2 id="reordering">Reordering</h2>
        <h3>Order classes</h3>
        <p>Use <CodeTags type="secondary" code=".order-" /> classes for controlling the <b>visual</b> order of your content. These classes are responsive, so you can set the <CodeTags type="secondary" code="order" /> by breakpoint (e.g., <CodeTags type="secondary" code=".order-1.order-md-2" />). Includes support for <CodeTags type="secondary" code="1" /> through <CodeTags type="secondary" code="12" /> across all five grid tiers.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            First, but unordered
                        </div>
                        <div className="col order-12">
                            Second, but last
                        </div>
                        <div className="col order-1">
                            Third, but first
                        </div>
                    </div>
                </div>
            </div>
        </ComponentPreview>
        <p>There are also responsive <CodeTags type="secondary" code=".order-first" /> and <CodeTags type="secondary" code=".order-last" /> classes that change the <CodeTags type="secondary" code="order" /> of an element by applying <CodeTags type="secondary" code="order: -1" /> and <CodeTags type="secondary" code="order: 13" />, respectively. These classes can also be intermixed with the numbered <CodeTags type="secondary" code=".order-*" /> classes as needed.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row">
                        <div className="col order-last">
                            First, but last
                        </div>
                        <div className="col">
                            Second, but unordered
                        </div>
                        <div className="col order-first">
                            Third, but first
                        </div>
                    </div>
                </div>
            </div>
        </ComponentPreview>

        <h3>Offsetting columns</h3>
        <p>You can offset grid columns in two ways: our responsive <CodeTags type="secondary" code=".offset-" /> grid classes and our <Link to="/utilities/display">margin utilities</Link>. Grid classes are sized to match columns while margins are more useful for quick layouts where the width of the offset is variable.</p>

        <h4>Offset classes</h4>
        <p>Move columns to the right using <CodeTags type="secondary" code=".offset-md-*" /> classes. These classes increase the left margin of a column by <CodeTags type="secondary" code="*" /> columns. For example, <CodeTags type="secondary" code=".offset-md-4" /> moves <CodeTags type="secondary" code=".col-md-4" /> over four columns.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">.col-md-4</div>
                        <div className="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
                        <div className="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
                    </div>
                </div>
            </div>
        </ComponentPreview>
        <p>In addition to column clearing at responsive breakpoints, you may need to reset offsets.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
                        <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
                        <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</div>
                    </div>
                </div>
            </div>
        </ComponentPreview>

        <h4>Margin utilities</h4>
        <p>You can also use margin utilities like <CodeTags type="secondary" code=".mr-auto" /> to force sibling columns away from one another.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">.col-md-4</div>
                        <div className="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 ml-md-auto">.col-md-3 .ml-md-auto</div>
                        <div className="col-md-3 ml-md-auto">.col-md-3 .ml-md-auto</div>
                    </div>
                    <div className="row">
                        <div className="col-auto mr-auto">.col-auto .mr-auto</div>
                        <div className="col-auto">.col-auto</div>
                    </div>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const Nesting = () => (
    <>
        <h2 id="nesting">Nesting</h2>
        <p>To nest your content with the default grid, add a new <CodeTags type="secondary" code=".row" /> and set of <CodeTags type="secondary" code=".col-sm-*" /> columns within an existing <CodeTags type="secondary" code=".col-sm-*" /> column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="showcase-grid">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            Level 1: .col-sm-9
                            <div className="row">
                                <div className="col-8 col-sm-6">
                                    Level 2: .col-8 .col-sm-6
                                </div>
                                <div className="col-4 col-sm-6">
                                    Level 2: .col-4 .col-sm-6
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ComponentPreview>
    </>
);

const Grid = () => (
    <DocContainer doctoc>
        <Intro />
        <GridSystem />
        <GridTypes />
        <OffsettingGrid />
        <Breakpoints />
        <HowItWorks />
        <GridOptions />
        <AutoLayoutColumns />
        <ResponsiveClasses />
        <Alignment />
        <Reordering />
        <Nesting />
    </DocContainer>
);

export default Grid;

/* For testing */
export { Intro, GridSystem, GridTypes, OffsettingGrid, Breakpoints, HowItWorks, GridOptions, AutoLayoutColumns, ResponsiveClasses, Alignment, Reordering, Nesting };
