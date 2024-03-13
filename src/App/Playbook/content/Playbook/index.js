import React from "react";
import { DocContainer } from "@docutils";
import { Link } from "react-router-dom";
import overviewList from "@src/App/routes/playbook";

const basename = process.env.basename;
const brandTitle = process.env.brandTitle;

const WhyNeedPlaybook = () => (
	<section>
		<h2 id="why-need-playbook">Why do we need a Playbook?</h2>
		<p>
			We’ve created this playbook so that every interface and element will tell
			a part of our story. Whether you’re designing a new interface or crafting
			a digital campaign, let it be your guide to creating experiences that
			resonate.
		</p>
		<div className="container px-0 mt-5">
			<div className="row">
				<div className="col-md">
					<h3>A north star for visual design</h3>
					<p>
						When new products are created and new designers onboarded, we want a
						natural evolution while staying true to our spirit. By creating a
						vision board with the look and feel of Swedbank Pay, we always have
						a source of truth and consistency.
					</p>
				</div>
				<div className="col-md">
					<h3>Principles that inspire content</h3>
					<p>
						Our design principles are rooted in understanding human behavior,
						evoking emotions and guiding actions. As such, they can be used as a
						fresh lens through which to view campaigns, content and strategy.
					</p>
				</div>
			</div>

			<div className="row">
				<div className="col-md">
					<h3>Dynamic design</h3>
					<p>
						A static design system can be limiting when creating a branch of
						products. By making certain aspects of the system dynamic, we allow
						for a broader spectrum of products while still monitoring the
						“geist” – our spirit.
					</p>
				</div>
				<div className="col-md">
					<h3>Fostering the evolution of creativity</h3>
					<p>
						By defining and locking in the spirit of the company, we make it
						easier to comfortably push our ideas forward. When you know the
						outer frame, it’s easier to design and be creative within that
						frame.
					</p>
				</div>
			</div>
		</div>
	</section>
);

const Index = () => (
	<section>
		<h2 id="index">Index</h2>
		<div className="playbook-overview">
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

const Playbook = () => (
	<DocContainer>
		<p className="lead">
			Every touchpoint, every interaction and visual element plays a role in
			shaping our narrative and relationship with our customers. Welcome to our
			Playbook – a guide that demystifies the world of design and UI.
		</p>
		<div className="d-flex flex-column align-items-center my-5">
			<img
				src={`${basename}img/documentation/playbook/playbook-illustration-intro-swedbankpay.jpg`}
				className="w-100"
				alt="Playbook illustration with the Swedbankpay branding"
			/>
		</div>
		<WhyNeedPlaybook />
		<Index />
	</DocContainer>
);

export default Playbook;
