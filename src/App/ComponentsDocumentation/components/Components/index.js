import React from "react";
import { Link } from "react-router-dom";
import overviewList from "@src/App/routes/components";

import { DocContainer } from "@docutils";

const MenuOverview = () => (
	<section
		className="component-overview hide-arrow-icon"
		aria-label="components overview"
	>
		{overviewList[0].routes.slice(1).map(
			(card) =>
				card.icon && (
					<Link
						key={card.title}
						to={`../${card.path}`}
						className="cards cards-wide min-w-initial"
					>
						<i
							className={`${card.icon} cards-icon align-self-center mb-1`}
							aria-hidden="true"
						></i>
						<span
							className={`h4 align-self-center ${card.deprecated ? "d-flex align-items-center" : ""}`}
						>
							{card.title}
							{card.deprecated && (
								<span className="badge badge-deprecated ml-auto">
									Deprecated
								</span>
							)}
						</span>
						<div className="cards-cta">
							<span className="arrow"></span>
						</div>
					</Link>
				),
		)}
	</section>
);

const Components = () => (
	<DocContainer>
		<p className="lead">
			This is our component library where we have listed all the components in
			our design system. Feel free to look around!
		</p>
		<MenuOverview />
	</DocContainer>
);

export default Components;

export { MenuOverview };
