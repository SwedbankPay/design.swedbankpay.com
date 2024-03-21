import React from "react";
import { DocContainer } from "@docutils";
import { Link } from "react-router-dom";
import patternsRoutes from "@src/App/routes/patterns";

const Overview = () => (
	<section className="component-overview hide-arrow-icon">
		{patternsRoutes[0].routes.map(
			(card) =>
				card.icon && (
					<Link
						key={card.title}
						to={`../${card.path}`}
						className="cards cards-wide min-w-initial"
					>
						<i className={`${card.icon} cards-icon`} aria-hidden="true"></i>
						<span className="h4">{card.title}</span>
						<div className="cards-cta">
							<span className="arrow"></span>
						</div>
					</Link>
				),
		)}
	</section>
);

const Patterns = () => (
	<DocContainer>
		<p className="lead">
			Patterns are best practice solutions for common product features built up
			by combinations of various components.{" "}
		</p>
		<Overview />
	</DocContainer>
);

export default Patterns;

export { Overview };
