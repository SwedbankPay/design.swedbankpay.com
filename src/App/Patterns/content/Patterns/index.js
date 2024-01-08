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
						className="cards cards-primary cards-wide"
					>
						<div className="cards-content flex-row align-items-center m-0 ">
							<i className={`${card.icon} small mr-3`}></i>
							<span className="h3 m-0">{card.title}</span>
						</div>
						<i className="at-arrow-right small" aria-hidden="true"></i>
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
