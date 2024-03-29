import React from "react";
import { Link } from "react-router-dom";
import overviewList from "@src/App/routes/identity";
import { DocContainer } from "@docutils";

const brandTitle = process.env.brandTitle;
const basename = process.env.basename;

const OurBrand = () => (
	<section>
		<h2 id="our-brand">Our brand</h2>
		<p>
			Open, simple and caring. These are our values that we always strive to
			come back to when we design both internal and external experiences.{" "}
		</p>

		<blockquote className="blockquote">
			<p>
				We are warm and welcoming, we guide, we involve users, we ensure access
				for all, we are consistent and we design for trust.
			</p>
		</blockquote>

		<h3>{brandTitle} design principles</h3>
		<p className="m-0">
			We let our design principles reflect our brand values. When designing, we
			try to be warm and welcoming in our tonality. By being consistent with our
			interactions, involving our users, and ensuring access for all, we strive
			to create trust and guide our users to complete their tasks successfully.
		</p>
		{brandTitle === "Swedbank pay" && (
			<a
				href="https://brand-manager.swedbank.com/start/guidelines/swedbank-pay.html"
				target="_blank"
				rel="noopener noreferrer"
				className="icon-link"
			>
				<i
					className="at-arrow-up-from-square small align-self-baseline"
					aria-hidden="true"
				></i>
				<span className="ml-2">
					Swedbank Brand Manager – read more about our brand
				</span>
			</a>
		)}
	</section>
);

const OpenSimpleCaring = () => (
	<section>
		<h2 id="open-simple-caring">Open, simple, caring</h2>
		<p>
			Swedbank Pay is a sub-brand to Swedbank and a part of the “Coin family”.
			That means that Swedbank Pay is built on the same foundation as Swedbank
			and shares the same brand platform and overall guidelines. Swedbank Pay
			express its own identity through the logotype, yellow color, images and
			tonality.
		</p>
		<p>
			To build awareness we display Swedbank Pay’s name and logotype with
			impact. We express a distinguishing attitude through the logotype, yellow
			color, images and tonality – always as simple and uncomplicated as
			possible. Read more about the brand in the{" "}
			<Link to="/identity/identity">Identity overview</Link>.
		</p>
		<img
			src={`${basename}img/documentation/introduction/pyramid.png`}
			className="img-fluid"
			alt="Illustration explaining the Swedbank Pay vision, values and purpose. The vision is to enable people, business and society to grow. The values are open, simple and caring. The purpose is to promote a sound and sustainable financial situation for the many households and businesses."
		/>
	</section>
);

const MenuOverview = () => (
	<section>
		<h2 id="read-more">Read more</h2>
		<div className="component-overview hide-arrow-icon">
			{overviewList[0].routes.slice(1).map((card, i) => (
				<Link
					key={card.title}
					to={`../${card.path}`}
					className="cards cards-wide"
				>
					<span className="h4">{card.title}</span>
					<div className="cards-content">
						<span>{card.text}</span>
					</div>
					<div className="cards-cta">
						<span className="arrow"></span>
					</div>
				</Link>
			))}
		</div>
	</section>
);

const Identity = () => (
	<DocContainer>
		<p className="lead">
			Our identity influences all aspects of the design guide, both in terms of
			how we approach the design and what we follow in order to create the best
			possible user experience.
		</p>
		<OurBrand />
		{brandTitle === "Swedbank Pay" && <OpenSimpleCaring />}
		<MenuOverview />
	</DocContainer>
);

export default Identity;

export { OurBrand, MenuOverview, OpenSimpleCaring };
