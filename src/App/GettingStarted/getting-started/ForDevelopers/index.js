import React from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer } from "@docutils";
import CodeTags from "@components/CodeTags";

const basename = process.env.basename;

const Installation = () => (
    <section>
        <h2 id="installation">Installation</h2>
        <p>To quickly add the Swedbank Pay Design Guide to your project, include the snippets below in your project.</p>
        <h3>Include in the header</h3>
        <p>Copy-paste the following CSS code into <CodeTags type="secondary" code="<head>"/> before all the other stylesheets in order to load our CSS.</p>
        <ComponentPreview language="html" codeFigure>
            <link rel="stylesheet" href="https://design.swedbankpay.com/v/4.7.0/styles" />
        </ComponentPreview>

        <h3>Include at the bottom</h3>
        <p>Many of our components requires the use of JavaScript in order to function. Place the following <CodeTags type="secondary" code="<Script>"/> tag near the end of your pages, right before the closing <CodeTags type="secondary" code="</body>"/> tag to enable them.</p>
        <ComponentPreview language="html" codeFigure>
            <script src="https://design.swedbankpay.com/v/4.7.0/scripts/dg.js"></script>
        </ComponentPreview>
        <h3>How to initialize our JavaScript components</h3>
        <p>Our script runs <CodeTags type="secondary" code="dg.script.initAll();"/> on DOMContentLoaded making it so you have to run <CodeTags type="secondary" code="dg.<component_name>.init();"/> manually when a component is rendered after the event has fired.</p>

        <p>To initialize components use <CodeTags type="secondary" code="dg.<component_name>.init();"/>. If the function is called without arguments it will target all components with class <CodeTags type="secondary" code="<component_name>"/> on the page. Initializing only one component can be done by passing an ID, it must match an existing components ID and will print a warning message if the value is invalid.</p>

        <p>If only one component is initialized then the init function will return one object. If several components are initialized it will return an array of objects.</p>
        <ComponentPreview language="html" codeFigure>
            {"dg.component.init();\n"}
            {"dg.component.init(\"demo-component-id\");"}
        </ComponentPreview>

        <h3>Browser Support</h3>
        <div className="browser-support">
            <div>
                <img src={`${basename}img/documentation/forDevelopers/chrome.png`} alt="Image of Chrome"/>
                <p>Yes</p>
            </div>
            <div>
                <img src={`${basename}img/documentation/forDevelopers/edge.png`} alt="Image of Edge"/>
                <p>Yes</p>
            </div>
            <div>
                <img src={`${basename}img/documentation/forDevelopers/internet-explorer.png`} alt="Image of Internet explorer"/>
                <p>11</p>
            </div>
            <div>
                <img src={`${basename}img/documentation/forDevelopers/firefox.png`} alt="Image of Firefox"/>
                <p>Yes</p>
            </div>
            <div>
                <img src={`${basename}img/documentation/forDevelopers/opera.png`} alt="Image of Opera"/>
                <p>Yes</p>
            </div>
            <div>
                <img src={`${basename}img/documentation/forDevelopers/safari.png`} alt="Image of Safari"/>
                <p>Yes</p>
            </div>
        </div>
    </section>
);
const GridAndBreakpoints = () => (
    <section>
        <h2 id="grid-and-breakpoints">Grid and breakpoints</h2>
        <p>Our grid system is a customized version of the bootstrap grid and functions almost the same, with most of the Bootstrap grid system classes available. To learn more about how to use <Link to="/core/grid">our 12 column grid system.</Link></p>
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
                    <td>767-1023 px</td>
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

        <h3>8-point spacing system</h3>
        <p>In addition to the Grid, we also use a 8-point spacing system for spacing between different UI elements. In practice this means we use multiples of 8 in order to define dimensions, padding and margins between the elements. Read more about how it is used in our <Link to="/core/spacing">Spacing section</Link>.</p>
    </section>
);
const Contributing = () => (
    <section>
        <h2 id="contributing">Contributing</h2>
        <p>Our project is fully open source and we would love to have you contribute to make the design guide better! You can create a ticket directly in <a href="https://github.com/SwedbankPay/design.swedbankpay.com" className="icon-link m-0" target="_blank" rel="noopener noreferrer"><span className="mr-2">our Git Repository</span><i className="material-icons" aria-hidden="true">open_in_new</i></a> or create a feature request here.</p>
        <p>Please make sure to check out our <a href="https://github.com/SwedbankPay/design.swedbankpay.com#contributing" className="icon-link m-0" target="_blank" rel="noopener noreferrer"><span className="mr-2">Contribution Guide</span><i className="material-icons" aria-hidden="true">open_in_new</i></a>, it includes guidelines for how to contribute with new components and develop for the project.</p>
    </section>
);
const Feedback = () => (
    <section>
        <h2 id="feedback">Feedback</h2>
        <p>We want to do our best to provide top quality components for you to use, but this is only possible with the help from you! If you have any suggestions for how we could potentially improve a component, please don’t hesitate to reach out, you can find us in the <strong>#design-guide-feedback</strong> Slack channel.</p>
    </section>
);
const DiscoverMore = () => (
    <section>
        <h2 id="discover-more">Discover more</h2>
        <div className="component-overview">
            <Link to="/components/components" className="cards cards-primary cards-wide">
                <div className="cards-content">
                    <span className="h4">Components</span><span>See all available components</span>
                </div>
                <i className="material-icons">arrow_forward</i>
            </Link>
            <Link to="/utilities/utilities" className="cards cards-primary cards-wide">
                <div className="cards-content">
                    <span className="h4">Utilities</span><span>See all available components</span>
                </div>
                <i className="material-icons">arrow_forward</i>
            </Link>
            <Link to="/core/iconography" className="cards cards-primary cards-wide">
                <div className="cards-content">
                    <span className="h4">Iconography</span><span>Our icon library and how to use it</span>
                </div>
                <i className="material-icons">arrow_forward</i>
            </Link>
        </div>
    </section>
);

const ForDevelopers = () => (
    <DocContainer>
        <p className="lead mb-5">To get you up and running with the Swedbank Pay Design Guide as quickly as possible, we have prepared this section showing you how to install it and what you will need to know in order to contribute to the project!</p>
        <Installation/>
        <GridAndBreakpoints />
        <Contributing />
        <Feedback />
        <DiscoverMore />
    </DocContainer>
);

export default ForDevelopers;

export { Installation, GridAndBreakpoints, Contributing, Feedback, DiscoverMore };
