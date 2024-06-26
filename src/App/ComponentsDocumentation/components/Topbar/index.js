import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer } from "@docutils";
import TopbarComponent from "@components/Topbar";
import CodeTags from "@components/CodeTags";
import { menu, menuLegacy, topbarShowcase } from "./constants";
import { topbar, sidebar } from "@src/scripts/main";
import NpmInformation from "@docutils/NpmInformation";

const basename = process.env.basename;

const Overview = () => (
	<section>
		<h2 id="overview">Overview</h2>
		<p>
			The topbar component is one of the most visible and familiar ways of
			helping users navigate a site. It typically consist of links to the top
			levels in the information architecture.{" "}
		</p>
		<ComponentPreview
			language="html"
			showCasePanel
			codeFigure
			showCasePanelAdvanced={topbarShowcase}
			showExpandPreview={true}
		/>
		<h3>When to consider something else</h3>
		<ul className="list list-bullet">
			<li>
				{" "}
				The topbar doesn’t accommodate more then one level hierarchy or a large
				amount of items in the list. If you need more levels or more space,
				consider a <Link to="/components/sidebar">sidebar</Link> component
				instead.{" "}
			</li>
		</ul>
	</section>
);

const DeveloperDocumentation = () => (
	<section>
		<h2 id="developer-documentation">Developer documentation</h2>

		<section>
			<h3>Align with page content</h3>
			<p>
				The content within the desktop topbar,{" "}
				<CodeTags type="secondary" code=".topbar-xl-wide" />, is by default
				fluid to the screen size. If you want to restrict the width of the
				content within the topbar to align with your page container, simply add
				a <CodeTags type="secondary" code=".max-width" /> to the topbar{" "}
				<CodeTags type="secondary" code=".nav-container" /> to match it.
			</p>

			<div className="d-flex flex-column align-items-center">
				<img
					src={`${basename}img/documentation/topbar/topbar-example.png`}
					className="w-100"
					alt="Topbar with fluid width"
				/>
				<span className="caption-text">
					<span className="font-weight-bold">Figure 1. </span>
					Image showing Topbar with fluid width VS width adjusted to the content
					on the page
				</span>
			</div>
		</section>

		<section>
			<h3>Sticky topbar options</h3>
			<p>
				The topbar can be made sticky by adding the class{" "}
				<CodeTags type="secondary" code=".topbar-sticky" />. Use{" "}
				<CodeTags type="secondary" code=".topbar-min-{breakpoint}-sticky" /> to
				specify the minimum width the topbar should be sticky, or{" "}
				<CodeTags type="secondary" code=".topbar-max-{breakpoint}-sticky" /> to
				specify the maximum width the topbar should be sticky (see{" "}
				<Link to="/utilities">utilities</Link> for more information on
				breakpoints).{" "}
			</p>
			<ComponentPreview language="html" showCasePanel codeFigure>
				<div className="container-fluid">
					<TopbarComponent
						id="demo-topbar-sticky"
						topbarContent={menuLegacy}
						wide="xl"
						sticky
					/>
					<main></main>
				</div>
			</ComponentPreview>
		</section>

		<section>
			<h3>Topbar with PNG logo</h3>
			<p>
				A PNG version of the logo can also be used. This is done by appending
				the class <CodeTags type="secondary" code=".topbar-logo-png" /> to the
				anchor with class <CodeTags type="secondary" code=".topbar-logo" />.
				Only consider using the PNG version when there are issues with using the
				SVG version.
			</p>
			<ComponentPreview language="html" showCasePanel codeFigure>
				<TopbarComponent topbarContent={menu} logout id="demo-topbar-png" png />
				<main></main>
			</ComponentPreview>
		</section>

		<section>
			<h3>Migrating to the new Topbar ( ⚠️experimental🧪 )</h3>
			<p>
				A future version of the topbar can be used. It is in experimental state.
				Things can be modified and depending of your use some features might
				still be missing.
				<br />
				This is done by appending the class{" "}
				<CodeTags type="secondary" code=".experimental" /> to the element with
				class <CodeTags type="secondary" code=".topbar" />.
			</p>
			<p>
				There is several breaking changes (details are following lower down)
			</p>
			<ul>
				<li>order of elements in the topbar</li>
				<li>
					container links content is modified (added a header & footer to the
					topbar, and links are grouped in a specific container)
				</li>
				<li>logo used in the topbar is different</li>
				<li>
					links need to have a `.pinned` class to be visible in the topbar
				</li>
			</ul>
			<p>
				To do the migration please follow instructions on{" "}
				<Link to="/components/topbar-migrating-to-v2">the migration page</Link>.
			</p>
		</section>

		<section>
			<h3>Javascript methods</h3>
			<p>
				<CodeTags type="secondary" code="dg.topbar.init()" /> initializes the
				topbar.
			</p>
			<p>
				<CodeTags type="secondary" code="dg.topbar.open(<topbar-id>)" /> opens
				the given topbar.
			</p>
			<p>
				<CodeTags type="secondary" code="dg.topbar.close(<topbar-id>)" /> closes
				the given topbar.
			</p>
		</section>

		<NpmInformation componentName={"topbar"} />
	</section>
);

const Topbar = () => {
	useEffect(() => {
		topbar.init();
		sidebar.init("topbar-sidebar");
		sidebar.init("topbar-sticky-sidebar");
	}, []);

	return (
		<DocContainer>
			<section id="topbar-doc">
				<p className="lead">
					The topbar is used to give users an easily available navigational bar
					at the top of your web application.
				</p>
				<Overview />
				<DeveloperDocumentation />
			</section>
		</DocContainer>
	);
};

export default Topbar;

/* For testing */
export { Overview, DeveloperDocumentation };
