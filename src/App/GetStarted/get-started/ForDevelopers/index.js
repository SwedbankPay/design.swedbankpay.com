import React from "react";
import { Link, NavLink } from "react-router-dom";
import { browsers, gridAndBreakpoints, discoverMore } from "./constants";

import { ComponentPreview, DocContainer } from "@docutils";
import CodeTags from "@components/CodeTags";
import DGLightVideo from "./dgLightVideo";

const basename = process.env.basename;
const brand = process.env.brand;
const brandTitle = process.env.brandTitle;

const Installation = () => (
	<section>
		<InstallNPM />
		<InstallationWithCDN />
		<InitializeJSComponents />
		<BrowserSupport />
	</section>
);

const InstallNPM = () => (
	<section>
		<h2 id="installation-npm">Installation with NPM</h2>
		<p>
			If you want to host the Design Guide files in your own app, run the
			following command.
		</p>
		<ComponentPreview language="terminal" codeFigure>
			npm install @swedbankpay/design-guide
		</ComponentPreview>
		<IntroMethodsNPM />
		<InstallJS />
		<InstallCSSLESS />
		<InstallIndividualComponents />
		<DesignGuideLightDemo />
	</section>
);

const InstallJS = () => (
	<section>
		<h3>JavaScript</h3>
		<p>
			Some of the Design System components require javascript (not all of them).
			To achieve this:
			<ul>
				<li>Import the scripts of each component used</li>
				<li>
					Once imported, to initialize each component we need to call its
					`init()`method.
				</li>
			</ul>
		</p>
		<div className="alert alert-informative">
			<i className="at-info-circle" aria-hidden="true"></i>
			<p>
				<b>Recommended way:</b> Importing component per component means you do
				not end up importing the javascript for components you are not using.
				This way your js served to the user is smaller, thus enhancing a faster
				experience for the users.
			</p>
		</div>
		<p>Importing component per component:</p>
		<ComponentPreview language="javascript" codeFigure>
			import &#123; expandable, sheet &#125; from
			&quot;@swedbankpay/design-guide&quot;; {"\n"}
			expandable.init(); {"\n"}
			sheet.init();
		</ComponentPreview>
		<p>You can also import the whole bundle:</p>
		<ComponentPreview language="javascript" codeFigure>
			import dg from &quot;@swedbankpay/design-guide&quot;; {"\n"}
			dg.script.initAll();
		</ComponentPreview>
		<div className="alert alert-informative">
			<i className="at-info-circle" aria-hidden="true"></i>
			<p>
				<b>Standards:</b> Our JS uses modern features such as optional-chaining.
				If you&apos;re experiencing issues you might want to look at our browser
				support. In the case our browser support is not enough for your project
				you might want to use polyfills and/or Babel transpiling to fix it.
				<br></br>Also, some build tools such as Webpack 4 do not support some of
				those features. You can then use Babel to transpile the code from the
				Design System package.
			</p>
		</div>
	</section>
);

const InstallCSSLESS = () => (
	<section>
		<h3>CSS/Less</h3>
		<p>
			For our CSS you can choose to import it from a{" "}
			<CodeTags type="secondary" code="css/less/scss" /> file, from a{" "}
			<CodeTags type="secondary" code="js" /> file if your bundler supports it,{" "}
			<em>or</em> point to the file directly from your bundler.
		</p>
		<p>
			We do not have a recommended way so far. This being said, importing from
			the style file might be easier and can leverage the CSS layers ({" "}
			<CodeTags type="secondary" code="@layer" /> ).
		</p>
		<h4>Importing from a style file</h4>
		<p>
			Example from a <CodeTags type="secondary" code=".less" /> file
		</p>
		<ComponentPreview language="css" codeFigure>
			@import url(&quot;@swedbankpay/design-guide/src/less/{brand}
			.less&quot;);
		</ComponentPreview>
		<h4>Importing through the build tool</h4>
		<p>
			Example from <CodeTags type="secondary" code="angular.json" />
		</p>
		<ComponentPreview language="json" codeFigure>
			&quot;styles&quot;: [ {"\n"}
			&nbsp; &quot;src/app.less&quot;, {"\n"}
			&nbsp; &quot;./node_modules/@swedbankpay/design-guide/src/less/{brand}
			.less&quot; {"\n"}
			],
		</ComponentPreview>
		<p>
			Example from <CodeTags type="secondary" code="nuxt.config.js" />
		</p>
		<ComponentPreview language="javascript" codeFigure>
			&quot;css&quot;: [ {"\n"}
			&nbsp; &quot;./node_modules/@swedbankpay/design-guide/src/less/{brand}
			.less&quot; {"\n"}
			],
		</ComponentPreview>
		<div className="alert alert-informative">
			<i className="at-info-circle" aria-hidden="true"></i>
			<p>
				<b>Import only once:</b> Either import from the style file <em>OR</em>{" "}
				from the build tool. If you import through both you will end up loading
				twice the styles on the client, which has a negative impact on the
				web-performance.
			</p>
		</div>
	</section>
);

const InstallIndividualComponents = () => (
	<section>
		<h3>Installing individual components</h3>
		<p>
			Import <CodeTags type="primary" code={`variables-${brand}.less`} /> and
			the desired component, i.e. Expandable:
		</p>
		<ComponentPreview language="css" codeFigure>
			@import url(&quot;@swedbankpay/design-guide/src/less/variables-{brand}
			.less&quot;); {"\n"}
			@import
			url(&quot;@swedbankpay/design-guide/src/less/components/expandable.less&quot;);
		</ComponentPreview>
		<div className="alert alert-informative">
			<i className="at-info-circle" aria-hidden="true"></i>
			<p>
				<b>Web-perf:</b> Importing the style of individual components means
				fewer css imported, hence smaller file size. If you do not want to
				import them individually then you might want to check about tree-shaking
				(purging dead code).
			</p>
		</div>
	</section>
);

const DesignGuideLightDemo = () => (
	<section>
		<h3>Design guide light demonstration</h3>
		<p>
			In this video we show a real life example on how to use the design guide
			through NPM.
		</p>
		<DGLightVideo />
	</section>
);

const InitializeJSComponents = () => (
	<section>
		<h3>How to initialize our JavaScript components</h3>
		<p>
			Our script runs <CodeTags type="secondary" code="dg.script.initAll();" />{" "}
			on DOMContentLoaded making it so you have to run{" "}
			<CodeTags type="secondary" code="dg.<component_name>.init();" /> manually
			when a component is rendered after the event has fired.
		</p>

		<p>
			To initialize components use{" "}
			<CodeTags type="secondary" code="dg.<component_name>.init();" />. If the
			function is called without arguments it will target all components with
			class <CodeTags type="secondary" code="<component_name>" /> on the page.
			Initializing only one component can be done by passing an ID, it must
			match an existing components ID and will print a warning message if the
			value is invalid.
		</p>

		<p>
			If only one component is initialized then the init function will return
			one object. If several components are initialized it will return an array
			of objects.
		</p>
		<ComponentPreview language="html" codeFigure removeOuterTag>
			dg.component.init();{"\n"}
			dg.component.init(&quot;demo-component-id&quot;);
		</ComponentPreview>
	</section>
);
const InstallationWithCDN = () => (
	<section>
		<h2 id="installation">Installation with CDN</h2>
		<p>
			To quickly add the {brandTitle} Design Guide to your project, include the
			snippets below in your project.
		</p>
		<section>
			<h3>Include in the header</h3>
			<p>
				Copy-paste the following CSS code into{" "}
				<CodeTags type="secondary" code="<head>" /> before all the other
				stylesheets in order to load our CSS.
			</p>
			<ComponentPreview language="html" codeFigure>
				<link
					rel="stylesheet"
					href={`${window.location.origin + basename}styles/${brand}.css`}
				/>
			</ComponentPreview>
		</section>
		<section>
			<h3>Include at the bottom</h3>
			<p>
				Many of our components requires the use of JavaScript in order to
				function. Place the following{" "}
				<CodeTags type="secondary" code="<Script>" /> tag near the end of your
				pages, right before the closing{" "}
				<CodeTags type="secondary" code="</body>" /> tag to enable them.
			</p>
			<ComponentPreview language="html" codeFigure>
				<script
					src={`${window.location.origin + basename}scripts/dg.js`}
					global="true"
					autoload="true"
				></script>
			</ComponentPreview>
			<p>
				The <CodeTags type="secondary" code="global" /> attribute adds the
				script to the global scope. The{" "}
				<CodeTags type="secondary" code="autoload" /> attribute automatically
				initiates all components when loaded. Great for plug and play.
			</p>
		</section>
	</section>
);

const IntroMethodsNPM = () => (
	<section>
		<h3>Import methods comparisons</h3>
		<p>
			The Design-System NPM package offers 2 possibilities:
			<ul>
				<li>
					original unprocessed source files
					<ul>
						<li>
							<CodeTags
								type="secondary"
								code="@swedbankpay/design-guide/src/..."
							/>
						</li>
						<li>
							<CodeTags type="secondary" code=".js" /> &{" "}
							<CodeTags type="secondary" code=".less" />
						</li>
						<li>individual components files + globals, utils & variables</li>
						<li>
							unprocessed for browser support, each project is responsible for
							ensuring the browser support they need & processing the style
							files from <CodeTags type="secondary" code=".less" /> to{" "}
							<CodeTags type="secondary" code=".css" />
						</li>
						<li>
							e.g.
							<CodeTags
								type="secondary"
								code="@swedbankpay/design-guide/src/less/components/topbar.less"
							/>{" "}
							or{" "}
							<CodeTags
								type="secondary"
								code="@swedbankpay/design-guide/src/scripts/main/topbar.js"
							/>
						</li>
					</ul>
				</li>
				<li>
					bundled prefixed transpiled files
					<ul>
						<li>
							<CodeTags
								type="secondary"
								code="@swedbankpay/design-guide/dist/..."
							/>
						</li>
						<li>bundled</li>
						<li>
							<CodeTags type="secondary" code=".js" /> &{" "}
							<CodeTags type="secondary" code=".css" />
						</li>
						<li>
							processed for browser support (CSS is auto-prefixed, JS is
							transpiled)
						</li>
						<li>
							e.g.
							<CodeTags
								type="secondary"
								code="@swedbankpay/design-guide/dist/designguide/styles/swedbankpay.css"
							/>{" "}
							or{" "}
							<CodeTags
								type="secondary"
								code="@swedbankpay/design-guide/dist/designguide/scripts/dg.js"
							/>
						</li>
					</ul>
				</li>
			</ul>
		</p>
	</section>
);
const BrowserSupport = () => (
	<section>
		<h2 id="browser-support">Browser Support</h2>
		<p>
			The design guide is tested and currently supported by these browsers on
			the bundled files ( i.e. when importing from
			<CodeTags type="secondary" code="@swedbankpay/design-guide/dist/..." /> ).
		</p>
		<div className="browser-support">
			{browsers.map((browser) => (
				<div key={browser.url}>
					<img src={basename + browser.url} alt={browser.alt} />
					<p>{browser.text}</p>
				</div>
			))}
		</div>
		<div className="alert alert-informative mt-4">
			<i className="at-info-circle" aria-hidden="true"></i>
			<p>
				<b>Target Browser:</b> &quot;Last 3 versions, &gt; 1%, not dead&quot;
			</p>
		</div>
		<h4>Browser support for products using the Design Guide</h4>
		<p>
			It is up to every Project manager and development team to decide which
			browsers their product should support. If you want to support other
			browsers than the ones supported by the Design Guide you need to maintain
			and test the component code in in your project.{" "}
		</p>
	</section>
);
const GridAndBreakpoints = () => (
	<section>
		<h2 id="grid-and-breakpoints">Grid and breakpoints</h2>
		<p>
			Our grid system is a customized version of the bootstrap grid and
			functions almost the same, with most of the Bootstrap grid system classes
			available. To learn more about how to use{" "}
			<Link to="/identity/grid">our 12 column grid system.</Link>
		</p>
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
				{gridAndBreakpoints.map((element) => (
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
		<p>
			In addition to the Grid, we also use a 8-point spacing system for spacing
			between different UI elements. In practice this means we use multiples of
			8 in order to define dimensions, padding and margins between the elements.
			Read more about how it is used in our{" "}
			<Link to="/identity/spacing">Spacing section</Link>.
		</p>
	</section>
);
const Contributing = () => (
	<section>
		<h2 id="contributing">Contributing</h2>
		<p>
			Our project is fully open source and we would love to have you contribute
			to make the design guide better! You can create a ticket directly in{" "}
			<a
				href="https://github.com/SwedbankPay/design.swedbankpay.com"
				className="icon-link m-0"
				target="_blank"
				rel="noopener noreferrer"
			>
				<span className="mr-2">our Git Repository</span>
				<i
					className="at-arrow-up-from-square small align-self-baseline"
					aria-hidden="true"
				></i>
			</a>{" "}
			or create a feature request here.
		</p>
		<p>
			Please make sure to check out our{" "}
			<a
				href="https://github.com/SwedbankPay/design.swedbankpay.com#contributing"
				className="icon-link m-0"
				target="_blank"
				rel="noopener noreferrer"
			>
				<span className="mr-2">Contribution Guide</span>
				<i
					className="at-arrow-up-from-square small align-self-baseline"
					aria-hidden="true"
				></i>
			</a>
			, it includes guidelines for how to contribute with new components and
			develop for the project.
		</p>
	</section>
);
const Feedback = () => (
	<section>
		<h2 id="feedback">Feedback</h2>
		<p>
			We want to do our best to provide top quality components for you to use,
			but this is only possible with the help from you! If you have any
			suggestions for how we could potentially improve a component, please don’t
			hesitate to reach out, you can find us in the{" "}
			<strong>#design-guide-feedback</strong> Slack channel.
		</p>
	</section>
);
const DiscoverMore = () => (
	<section>
		<h2 id="discover-more">Discover more</h2>
		<div className="component-overview hide-arrow-icon">
			{discoverMore.map((card) => (
				<NavLink
					key={card.url}
					to={card.url}
					className="cards cards-wide min-w-initial"
				>
					<span className="h4">{card.title}</span>
					<div className="cards-content">
						<span>{card.text}</span>
					</div>
					<div className="cards-cta">
						<span className="arrow"></span>
					</div>
				</NavLink>
			))}
		</div>
	</section>
);

const ForDevelopers = () => (
	<DocContainer>
		<p className="lead mb-5">
			To get you up and running with the {brandTitle} Design Guide as quickly as
			possible, we have prepared this section showing you how to install it and
			what you will need to know in order to contribute to the project!
		</p>
		<Installation />
		<GridAndBreakpoints />
		<Contributing />
		<Feedback />
		<DiscoverMore />
	</DocContainer>
);

export default ForDevelopers;

export {
	Installation,
	GridAndBreakpoints,
	Contributing,
	Feedback,
	DiscoverMore,
	DGLightVideo,
};
