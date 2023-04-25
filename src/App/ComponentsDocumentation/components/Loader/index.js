import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import { loaderShowCase, howToUse } from "./constants";

const Overview = () => (
	<section id="loader-page-overview">
		<h2 id="overview">Overview</h2>
		<ComponentPreview
			language="html"
			showCasePanel
			showCasePanelAdvanced={loaderShowCase}
			codeFigure
			removeOuterTag
		/>

		<section id="loaders-how-to-use">
			<h3>How to use loader in context</h3>
			<div className="row">
				{howToUse.map(({ contents, description }, i) => (
					<React.Fragment key={i}>
						{contents.map(({ type, content, maxWidth }, i) => (
							<div key={i} className={`col-${maxWidth ? "12" : "6"}`}>
								<div key={i} className={`slab slab-plain slab-border-${type}`}>
									<span className="h3">
										{type === "success" ? "Do" : "Don't"}
									</span>
									<div className="d-flex justify-content-center px-3 h-100 align-items-center pb-5">
										{content}
									</div>
								</div>
							</div>
						))}
						<p className="m-3">{description}</p>
					</React.Fragment>
				))}
			</div>
		</section>
	</section>
);

const Loader = () => (
	<DocContainer>
		<p className="lead">
			The loader component should be used when the site or application is
			performing computation, notifying the user that their action is being
			processed.
		</p>
		<Overview />
	</DocContainer>
);

export default Loader;

/* For testing */
export { Overview };
