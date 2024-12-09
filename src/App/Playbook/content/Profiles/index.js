import React from "react";
import { DocContainer } from "@docutils";
import { Link } from "react-router-dom";

const basename = process.env.basename;

const HowToUse = () => (
	<section className="mt-5">
		<h2 id="how-to-use">How to use the design profiles</h2>
		<ol>
			<li className="py-3">
				<h3>Reflect:</h3>
				<ul>
					<li>
						Who is the user? Are they a customer already or are they having
						their first meeting with the brand?
					</li>
					<li>
						In what mode are they when entering the view you’re designing? Are
						they trying to complete a task or just getting to know the service?
					</li>
				</ul>
			</li>
			<li className="py-3">
				<h3>Identify:</h3>
				<ul>
					<li>
						Does the product or message fit just one profile, or different ones
						depending on screen or section?
					</li>
				</ul>
			</li>
			<li className="py-3">
				<h3>Become inspired:</h3>
				<ul>
					<li>
						Look at the examples provided below and become inspired. Think of
						the profiles like moodboards if you like.
					</li>
				</ul>
			</li>
		</ol>
	</section>
);

const DesignProfiles = () => (
	<section className="mt-5">
		<h2 id="design-profiles">The design profiles</h2>
		<div className="container px-sm-0">
			<div className="row">
				<div className="col">Inspiration</div>
				<div className="col">Light UI</div>
				<div className="col">Expert UI</div>
			</div>
		</div>
	</section>
);

const Inspiration = () => (
	<section className="mt-5">
		<h2 id="inspiration">Inspiration</h2>
		<p>
			We want to spark curiosity and engagement. We aim to inspire users to
			explore and discover with expressive design and delightful motion, making
			every interaction an adventure.
		</p>
		<p>
			Conceptual work is important for multiple reasons: it can serve as
			inspiration and as a guiding star for future projects. The concept work
			shown below was done as an exercise to explore what the ultimate merchant
			experience could look like if we didn’t have any restrictions. Much of the
			design was later reused for the new Omni Portal.
		</p>
		<div className="container px-5">
			<figure>
				<div className="row mt-5 justify-content-between">
					<div className="col-8 pl-0">
						<img
							className="w-100"
							src={`${basename}img/documentation/playbook/playbook-profiles-content-3.png`}
							alt="illustration swedbankpay playbook profiles"
							loading="lazy"
						/>
					</div>
					<div className="col-3 pr-0">
						<img
							className="w-100"
							src={`${basename}img/documentation/playbook/playbook-profiles-content-4.png`}
							alt="illustration swedbankpay playbook profiles"
							loading="lazy"
						/>
					</div>
				</div>
				<figcaption className="text-center mt-2">
					Concept work & Presentation MEX
				</figcaption>
			</figure>
		</div>
	</section>
);

const LightUI = () => (
	<section className="mt-5">
		<h2 id="light-ui">Light UI</h2>
		<p>
			Designed to assist and guide novice users with ease. We prioritize
			simplicity, clarity, and user-friendly features to ensure that everyone,
			regardless of their experience level, feels supported.
			<br />
			<strong>User persona:</strong> Novice user or someone with limited time
			and cognitive load.
			<br />
			<strong>UI objective:</strong> Provide clear assistance, support, and
			guidance.
			<br />
			<strong>Design approach:</strong> Present bite-sized information, keeping
			things simple and highly focused. Promote clarity and user-friendly
			features.
		</p>
		<div className="container px-5">
			<figure>
				<div className="row justify-content-center align-items-center">
					<video
						playsInline
						autoPlay
						muted
						loop
						style={{ aspectRatio: "16 / 9" }}
						height={399}
						width={710}
						poster={`${basename}img/documentation/playbook/playbook-showroom-1.avif`}
					>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-1-av1.mp4`}
							type="video/mp4; codecs=av01.0.05M.08,opus"
						/>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-1.mp4`}
							type="video/mp4"
						/>
					</video>
				</div>
				<figcaption className="text-center mt-2">
					The terminal design should be easy and quick to use.
				</figcaption>
			</figure>
		</div>
	</section>
);

const ExpertUI = () => (
	<section className="mt-5">
		<h2 id="expert-ui">Expert UI</h2>
		<p>
			Made for task-oriented, experienced users. Emphasis is placed on
			efficiency and utility, with streamlined actions and information in good
			order, making it a powerful tool for experts to get things done.
			<br />
			<strong>User persona:</strong> Experts who are task-oriented and focused.
			<br />
			<strong>UI objective:</strong> Enable efficient task completion and
			utility.
			<br />
			<strong>Design approach:</strong> Prioritize clear and actionable
			interfaces with an emphasis on efficient information density. Streamline
			actions and workflows for experienced users.
		</p>
		<div className="container px-5">
			<figure>
				<div className="row mt-5 justify-content-center">
					<div className="col d-flex justify-content-center">
						<img
							className="w-100"
							src={`${basename}img/documentation/playbook/playbook-profiles-expert-1.png`}
							alt="illustration swedbankpay playbook profiles"
							loading="lazy"
						/>
					</div>
				</div>
				<figcaption className="text-center mt-2">Merchant portal</figcaption>
			</figure>
		</div>
	</section>
);

const Profiles = () => (
	<DocContainer>
		<p className="lead">
			To help navigate our diverse product ecosystem, we’ve created three design
			profiles. Catering to different personas and needs, these profiles ensure
			consistency while also allowing flexibility. They are key to improving
			usability, efficiency, and scalability. Lastly, they make sure that each
			product speaks the language of its users while still keeping with the
			Swedbank Pay identity.
		</p>
		<div
			className="container px-sm-0 playbook playbook-mozaic"
			style={{ radius: "2px" }}
		>
			<div className="row d-flex px-3">
				<div className="col-sm">
					<img
						src={`${basename}img/documentation/playbook/playbook-profiles-intro-1.jpg`}
						alt="Playbook illustration"
					/>
				</div>
				<div className="col-sm">
					<img
						src={`${basename}img/documentation/playbook/playbook-profiles-intro-2.jpg`}
						alt="Playbook illustration"
					/>
				</div>
				<div className="col-sm">
					<img
						src={`${basename}img/documentation/playbook/playbook-profiles-intro-3.jpg`}
						alt="Playbook illustration"
					/>
				</div>
			</div>
		</div>
		<HowToUse />
		<DesignProfiles />
		<Inspiration />
		<LightUI />
		<ExpertUI />
	</DocContainer>
);

export default Profiles;
