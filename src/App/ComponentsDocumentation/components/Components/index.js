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
						className="cards cards-primary cards-wide"
					>
						<div className="cards-content flex-row align-items-center m-0 ">
							<i className={`${card.icon} mr-3`} aria-hidden="true"></i>
							<span className="h3 m-0">{card.title}</span>
							{card.deprecated && (
								<span className="badge badge-deprecated ml-3">Deprecated</span>
							)}
						</div>
						<i className="at-arrow-right small" aria-hidden="true"></i>
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
