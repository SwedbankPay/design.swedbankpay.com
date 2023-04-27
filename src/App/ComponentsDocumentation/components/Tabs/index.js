import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ComponentPreview, DocContainer } from "@docutils";
import TabsComponent from "@components/Tabs";
import CodeTags from "@components/CodeTags";
import { tabsShowCasePanel } from "./constants";

import { tabs } from "@src/scripts/main";
import NpmInformation from "@docutils/NpmInformation";

const tabItems = [
	"Selected",
	"Unselected",
	"Unselected",
	"Unselected",
	"Unselected",
	"Unselected",
];

const Overview = () => (
	<section id="tabs-overview">
		<h2 id="overview">Overview</h2>
		<ComponentPreview
			language="html"
			codeFigure
			showCasePanel
			showCasePanelAdvanced={tabsShowCasePanel}
			removeOuterTag
		/>

		<section>
			<h3>When to consider something else</h3>
			<ul className="list list-bullet">
				<li>
					It is important to consider whether or not dividing the content into
					sub-views is helpful for the user. Using Tabs isn’t always the best
					solution and can create more fragmented experience and leading to
					issues where the user might miss out on content. Consider presenting
					the content on a page with proper headlines and structure.
				</li>
			</ul>
		</section>

		<section id="how-to-use-tabs">
			<h3>How to use tabs</h3>
			<div className="slab slab-plain slab-border-success px-4">
				<h3 className="mb-5">Do</h3>
				<TabsComponent
					id="tabs-scroll-example"
					ulId="tabs-scroll-example-ul"
					items={[...tabItems.slice(0, 3)]}
				/>
				<div className="slab slab-edges flat p-5"></div>
			</div>
			<div className="slab slab-plain slab-border-error px-4">
				<h3 className="mb-5">Don&apos;t</h3>
				<TabsComponent
					id="tabs-scroll-example-dont"
					ulId="tabs-scroll-example-ul"
					items={[...tabItems.slice(0, 3)]}
					scroll
				/>
				<div className="slab slab-edges flat p-5"></div>
			</div>
			<p>
				The tab component should always fill the full container of the content
				it governs. As seen on the examples above, the length of the underline
				for tab isn’t determined by the amount of tabs/length of the text. But
				should instead indicate the content that it anchors to and contains.
			</p>
		</section>
	</section>
);

const ContentGuidelines = () => (
	<section>
		<h2 id="content-guidelines">Content guidelines</h2>
		<div className="slab slab-plain px-5">
			<div className="m-auto">
				<TabsComponent
					id="tabs-scroll-example"
					ulId="tabs-scroll-example-ul"
					items={["Selected Label", "Unselected Label", "Unselected Label"]}
					scroll
				/>
			</div>
		</div>
		<ul className="list list-bullet">
			<li>
				The <b>Label</b> should be short and descriptive making is for the user
				to understand where to find their desired content.
			</li>
			<li>
				The <b>order of labels</b> should be arranged according to relevance.
				However, in cases where there is not a preferred order, the tabs should
				be arranged in alphabetical order.
			</li>
		</ul>
	</section>
);

const DeveloperDocumentation = () => (
	<>
		<h2 id="developer-documentation">Developer documentation</h2>
		<span className="h3">Javascript methods</span>
		<p className="my-3">
			Use <CodeTags type="secondary" code="dg.tabs.init()" /> to{" "}
			<Link to="/get-started/for-developers">initialize</Link> all rangesliders.
		</p>
		<p>
			Or <CodeTags type="secondary" code='dg.tabs.init("component-id")' /> to
			initialize one specific component.
		</p>
		<h4>Move scroll position</h4>
		<p>
			Moves the scroll position of the tabs to the user specified position. The
			value to be passed to <CodeTags type="secondary" code="scrollState" /> is
			the object{" "}
			<CodeTags type="secondary" code="{ scrollStart, scrollTotalAmount }" />.{" "}
			<CodeTags type="secondary" code="scrollStart" /> is the current scroll
			position, <CodeTags type="secondary" code="scrollTotalAmount" /> is the
			amount to be scrolled from the current scroll position (negative values
			for left scroll, positive values for right scroll). Note:{" "}
			<CodeTags type="primary" code={"<ul>"} /> is the scrollable element.
		</p>
		<h4>
			🎨 Styling support for <CodeTags type="secondary" code=".active" /> class
		</h4>
		<p>
			The same styling will be applied whether the{" "}
			<CodeTags type="secondary" code=".active" /> class is applied on the{" "}
			<CodeTags type="secondary" code="<li>" /> element or the{" "}
			<CodeTags type="secondary" code="<a>" /> element. This way it supports out
			of the box Nuxt router&apos;s behavior.
		</p>
	</>
);

const Tabs = () => {
	useEffect(() => {
		tabs.init();
	});

	return (
		<DocContainer>
			<section id="tabs-doc">
				<p className="lead">
					Tabs are a local navigation component that separates content into
					views and lets the user navigate easily between views within the same
					context.
				</p>
				<Overview />
				<ContentGuidelines />
				<DeveloperDocumentation />
				<NpmInformation componentName={"tabs"} />
			</section>
		</DocContainer>
	);
};

export default Tabs;

/* For testing */
export { Overview, ContentGuidelines, DeveloperDocumentation };
