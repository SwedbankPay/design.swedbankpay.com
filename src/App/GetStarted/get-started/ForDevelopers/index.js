import React from "react";
import { Link } from "react-router-dom";
import { browsers, gridAndBreakpoints, discoverMore } from "./constants";

import { ComponentPreview, DocContainer } from "@docutils";
import CodeTags from "@components/CodeTags";

const basename = process.env.basename;
const brand = process.env.brand;
const brandTitle = process.env.brandTitle;

const Installation = () => (
    <section>
        <h2 id="installation">Installation with CDN</h2>
        <p>To quickly add the {brandTitle} Design Guide to your project, include the snippets below in your project.</p>
        <h3>Include in the header</h3>
        <p>Copy-paste the following CSS code into <CodeTags type="secondary" code="<head>"/> before all the other stylesheets in order to load our CSS.</p>
        <ComponentPreview language="html" codeFigure>
            <link rel="stylesheet" href={`${window.location.origin + basename}styles/${brand}.css`} />
        </ComponentPreview>

        <h3>Include at the bottom</h3>
        <p>Many of our components requires the use of JavaScript in order to function. Place the following <CodeTags type="secondary" code="<Script>"/> tag near the end of your pages, right before the closing <CodeTags type="secondary" code="</body>"/> tag to enable them.</p>
        <ComponentPreview language="html" codeFigure>
            <script src={`${window.location.origin + basename}scripts/dg.js`} global="true" autoload="true"></script>
        </ComponentPreview>
        <p>The <CodeTags type="secondary" code="global"/> attribute adds the script to the global scope. The <CodeTags type="secondary" code="autoload"/> attribute automatically initiates all components when loaded. Great for plug and play.</p>
        <h2 id="installation-npm">Installation with NPM</h2>
        <p>If you want to host the Design Guide files in your own app, run the following command.</p>
        <ComponentPreview language="terminal" codeFigure>
            npm install @swedbankpay/design-guide
        </ComponentPreview>
        <h3>Usage with NPM</h3>
        <p>When importing the Design Guide javascript, you can choose to either import the whole thing or only the components you want to use.</p>
        <ComponentPreview language="javascript" codeFigure>
            import dg from &quot;@swedbankpay/design-guide&quot;; {"\n"}
            dg.script.initAll();
        </ComponentPreview>
        <ComponentPreview language="javascript" codeFigure>
            import &#123; sheet &#125; from &quot;@swedbankpay/design-guide&quot;;  {"\n"}
            sheet.init();
        </ComponentPreview>
        <p>For our CSS you can choose to import it from a <CodeTags type="secondary" code="css/less/scss"/> file, from a <CodeTags type="secondary" code="js"/> file if your bundler supports it, or point to the file directly from your bundler.</p>
        <p>Example from a <CodeTags type="secondary" code=".less"/> file</p>
        <ComponentPreview language="css" codeFigure>
            @import url(&quot;@swedbankpay/design-guide/src/less/{brand}.less&quot;);
        </ComponentPreview>
        <p>Example from <CodeTags type="secondary" code="angular.json"/></p>
        <ComponentPreview language="json" codeFigure>
        &quot;styles&quot;: [ {"\n"}
            &nbsp; &quot;src/app.less&quot;, {"\n"}
            &nbsp; &quot;./node_modules/@swedbankpay/design-guide/src/less/{brand}.less&quot; {"\n"}
        ],
        </ComponentPreview>
        <p>Example from <CodeTags type="secondary" code="nuxt.config.js"/></p>
        <ComponentPreview language="javascript" codeFigure>
        &quot;css&quot;: [ {"\n"}
            &nbsp; &quot;./node_modules/@swedbankpay/design-guide/src/less/{brand}.less&quot; {"\n"}
        ],
        </ComponentPreview>
        <h3>How to initialize our JavaScript components</h3>
        <p>Our script runs <CodeTags type="secondary" code="dg.script.initAll();"/> on DOMContentLoaded making it so you have to run <CodeTags type="secondary" code="dg.<component_name>.init();"/> manually when a component is rendered after the event has fired.</p>

        <p>To initialize components use <CodeTags type="secondary" code="dg.<component_name>.init();"/>. If the function is called without arguments it will target all components with class <CodeTags type="secondary" code="<component_name>"/> on the page. Initializing only one component can be done by passing an ID, it must match an existing components ID and will print a warning message if the value is invalid.</p>

        <p>If only one component is initialized then the init function will return one object. If several components are initialized it will return an array of objects.</p>
        <ComponentPreview language="html" codeFigure removeOuterTag>
                dg.component.init();{"\n"}
                dg.component.init(&quot;demo-component-id&quot;);
        </ComponentPreview>

        <h3>Browser Support</h3>
        <p>The design guide is tested and currently supported by these browsers.</p>
        <div className="browser-support">
            {browsers.map(browser => (
                <div key={browser.url}>
                    <img src={basename + browser.url} alt={browser.alt}/>
                    <p>{browser.text}</p>
                </div>
            ))}
        </div>
        <h4>Browser support for products using the Design Guide</h4>
        <p>It is up to every Project manager and development team to decide which browsers their product should support. If you want to support other browsers than the ones supported by the Design Guide you need to maintain and test the component code in in your project. </p>
    </section>
);
const GridAndBreakpoints = () => (
    <section>
        <h2 id="grid-and-breakpoints">Grid and breakpoints</h2>
        <p>Our grid system is a customized version of the bootstrap grid and functions almost the same, with most of the Bootstrap grid system classes available. To learn more about how to use <Link to="/identity/grid">our 12 column grid system.</Link></p>
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
                {gridAndBreakpoints.map(element => (
                    <tr key={element.size}>
                        <td>{element.size}</td>
                        <td>{element.breakpoints}</td>
                        <td>{element.columns}</td>
                        <td>{element.margins}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        <h3>8-point spacing system</h3>
        <p>In addition to the Grid, we also use a 8-point spacing system for spacing between different UI elements. In practice this means we use multiples of 8 in order to define dimensions, padding and margins between the elements. Read more about how it is used in our <Link to="/identity/spacing">Spacing section</Link>.</p>
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
        <div className="component-overview hide-arrow-icon">
            {discoverMore.map(card => (
                <Link key={card.url} to={card.url} className="cards cards-primary cards-wide">
                    <div className="cards-content m-0">
                        <span className="h3">{card.title}</span><span>{card.text}</span>
                    </div>
                    <i className="material-icons">arrow_forward</i>
                </Link>
            ))}
        </div>
    </section>
);

const ForDevelopers = () => (
    <DocContainer>
        <p className="lead mb-5">To get you up and running with the {brandTitle} Design Guide as quickly as possible, we have prepared this section showing you how to install it and what you will need to know in order to contribute to the project!</p>
        <Installation/>
        <GridAndBreakpoints />
        <Contributing />
        <Feedback />
        <DiscoverMore />
    </DocContainer>
);

export default ForDevelopers;

export { Installation, GridAndBreakpoints, Contributing, Feedback, DiscoverMore };
