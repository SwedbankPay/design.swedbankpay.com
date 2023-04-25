import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ComponentPreview, DocContainer } from "@docutils";
import { overviewDropdown, contentGuidelines, howToUse } from "./constants";
import CodeTags from "@components/CodeTags";

const Overview = () => (
	<section>
		<h2 id="overview">Overview</h2>
		<p>
			Consider using the <Link to="/components/select">select</Link> component
			if you are creating a form.
		</p>
		<ComponentPreview
			language="html"
			showCasePanel
			codeFigure
			showCasePanelAdvanced={overviewDropdown}
		/>
		<h3>When to consider something else</h3>
		<ul className="list list-bullet">
			<li key="when-else-1">
				For important actions and information, consider displaying them{" "}
				<b>directly on the page</b> instead of hiding them in a Dropdown menu
			</li>
			<li key="when-else-2">
				To display a brief explanation when a cursor hovers over an interactive
				element, use the <Link to="/components/tooltips">Tooltip</Link>{" "}
				component
			</li>
		</ul>
		<h3>How to use dropdowns</h3>
		{howToUse.map((section, i) => (
			<section key={`section-dropdown-${i}`}>
				<div className="row placeholder-guideline">
					{section.examples.map(({ slabType, rowDescription, content }, i) => (
						<Fragment key={`${rowDescription}-${i}`}>
							<div
								key={rowDescription}
								data-i={rowDescription}
								className="col-lg-6 col-sm-12"
							>
								<div className={`slab slab-plain slab-border-${slabType} pb-5`}>
									<span className="h3 d-block mb-4">
										Do{slabType === "error" && "n't"}
									</span>
									{content}
								</div>
							</div>
							{i % 2 !== 0 && rowDescription && (
								<p className="col-12 mt-2 mb-4">{rowDescription}</p>
							)}
						</Fragment>
					))}
				</div>
			</section>
		))}
	</section>
);

const ContentGuidelines = () => (
	<section>
		<h2 id="content-guidelines">Content guidelines</h2>
		{contentGuidelines.map((section, i) => (
			<section key={`section-dropdown-${i}`}>
				<h3>{section.heading}</h3>
				<div className="row placeholder-guideline">
					{section.examples.map(({ slabType, rowDescription, content }, i) => (
						<Fragment key={`${rowDescription}-${i}`}>
							<div
								key={rowDescription}
								data-i={rowDescription}
								className="col-lg-6 col-sm-12"
							>
								<div className={`slab slab-plain slab-border-${slabType} pb-5`}>
									<span className="h3 d-block mb-4">
										Do{slabType === "error" && "n't"}
									</span>
									{content}
								</div>
							</div>
							{i % 2 !== 0 && rowDescription && (
								<p className="col-12 mt-2 mb-4">{rowDescription}</p>
							)}
						</Fragment>
					))}
				</div>
			</section>
		))}
	</section>
);

const DeveloperDocumentation = () => (
	<section>
		<h2 id="developer-documentation">Developer Documentation</h2>
		<h3>JavaScript methods</h3>
		<p>
			Use <CodeTags type="secondary" code="dg.dropdown.init()" /> to initialize
			all dropdowns. This will open and close the dropdowns automatically.
		</p>
		<h3>Accessibility considerations</h3>
		<p>
			By default, keyboard navigation is implemented in the script. If your
			dropdown includes solely buttons or anchor-tags, you can use arrow
			naivigation between elements. If your{" "}
			<CodeTags type="primary" code=".dropdown-menu" /> consist of other
			components, arrow down will give focus to the first element of the menu.
		</p>
	</section>
);

const Dropdown = () => (
	<DocContainer>
		<section id="dropdown-doc">
			<p className="lead">
				Dropdown’s are toggleable overlays that open on demand. They let users
				access additional content and actions without cluttering the page.
			</p>
			<Overview />
			<ContentGuidelines />
			<DeveloperDocumentation />
		</section>
	</DocContainer>
);

export default Dropdown;

/* For testing */
export { Overview, ContentGuidelines, DeveloperDocumentation };
