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
						Look at the examples provided below and in our{" "}
						<Link to={`./showroom}`}>showroom</Link> and become inspired. Think
						of the profiles like moodboards if you like.
					</li>
				</ul>
			</li>
		</ol>
	</section>
);

const DesignProfiles = () => (
	<section className="mt-5">
		<h2 id="design-profiles">The design profiles:</h2>
		<div className="container px-sm-0">
			<div className="row">
				<div className="col">
					<img
						className="w-100"
						src={`${basename}img/documentation/playbook/playbook-profiles-profile-1.png`}
						alt="content"
						loading="lazy"
					/>
				</div>
				<div className="col">
					<img
						className="w-100"
						src={`${basename}img/documentation/playbook/playbook-profiles-profile-2.png`}
						alt="Light UI"
						loading="lazy"
					/>
				</div>
				<div className="col">
					<img
						className="w-100"
						src={`${basename}img/documentation/playbook/playbook-profiles-profile-3.png`}
						alt="Expert UI"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	</section>
);

const Content = () => (
	<section className="mt-5">
		<h2 id="content">Content</h2>
		<p>
			Here, our focus is on sparking curiosity and engagement. We aim to inspire
			users to explore and discover through communication jam-packed with
			expressive design and delightful motion, making every interaction an
			adventure.
			<br />
			<strong>User persona:</strong> Curious explorers, seeking inspiration.
			<br />
			<strong>UI objective:</strong> Spark curiosity, engage users, and invite
			exploration.
			<br />
			<strong>Design approach:</strong> Expressive and visually engaging UI with
			a focus on personality. Utilize delightful motion design elements to
			surprise and captivate users.
		</p>
		<div className="container px-5">
			<figure>
				<div
					className="row mt-5 playbook-mozaic align-items-stretch"
					style={{ radius: "2px" }}
				>
					<div className="col-sm-6 px-0">
						<img
							className="w-100 shift-right-1 h-100 object-fit-cover"
							src={`${basename}img/documentation/playbook/playbook-profiles-content-1.png`}
							alt="illustration swedbankpay playbook profiles"
							loading="lazy"
						/>
					</div>
					<div className="col-sm-6 px-0 d-flex flex-column">
						<video
							playsInline
							autoPlay
							muted
							loop
							width={278}
							height={152}
							poster={`${basename}img/documentation/playbook/playbook-profiles-content-2.avif`}
							className="w-100 h-100 object-fit-cover"
						>
							<source
								src={`${basename}img/documentation/playbook/playbook-profiles-content-2-av1.mp4`}
								type="video/mp4; codecs=av01.0.05M.08,opus"
							/>
							<source
								src={`${basename}img/documentation/playbook/playbook-profiles-content-2.mp4`}
								type="video/mp4"
							/>
						</video>
					</div>
				</div>
				<figcaption className="text-center mt-2">
					An exploration of marketing material for the terminal, summer 2023.
				</figcaption>
			</figure>
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
			<figure>
				<div className="row mt-5">
					<div className="col-6 col-sm-3">
						<picture>
							<source
								type="image/avif"
								srcSet={`${basename}img/documentation/playbook/playbook-profiles-lightui-1.avif`}
							/>
							<img
								className="w-100"
								src={`${basename}img/documentation/playbook/playbook-profiles-lightui-1.png`}
								alt="illustration swedbankpay playbook profiles"
								loading="lazy"
							/>
						</picture>
					</div>
					<div className="col-6 col-sm-3">
						<picture>
							<source
								type="image/avif"
								srcSet={`${basename}img/documentation/playbook/playbook-profiles-lightui-2.avif`}
							/>
							<img
								className="w-100"
								src={`${basename}img/documentation/playbook/playbook-profiles-lightui-2.png`}
								alt="illustration swedbankpay playbook profiles"
								loading="lazy"
							/>
						</picture>
					</div>
					<div className="col-6 col-sm-3 mt-4 mt-sm-0">
						<picture>
							<source
								type="image/avif"
								srcSet={`${basename}img/documentation/playbook/playbook-profiles-lightui-3.avif`}
							/>
							<img
								className="w-100"
								src={`${basename}img/documentation/playbook/playbook-profiles-lightui-3.png`}
								alt="illustration swedbankpay playbook profiles"
								loading="lazy"
							/>
						</picture>
					</div>
					<div className="col-6 col-sm-3 mt-4 mt-sm-0">
						<picture>
							<source
								type="image/avif"
								srcSet={`${basename}img/documentation/playbook/playbook-profiles-lightui-4.avif`}
							/>
							<img
								className="w-100"
								src={`${basename}img/documentation/playbook/playbook-profiles-lightui-4.png`}
								alt="illustration swedbankpay playbook profiles"
								loading="lazy"
							/>
						</picture>
					</div>
				</div>
				<figcaption className="text-center mt-2">
					A new day is a ‘pocket app’ for business owners on-the-go, providing
					glanceable data and insights.
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
		<div className="container px-5">
			<figure>
				<div
					className="row mt-5 justify-content-center"
					style={{ "--row": "10px" }}
				>
					<div className="col-6 col-sm-3">
						<img
							className="w-100"
							src={`${basename}img/documentation/playbook/playbook-profiles-paybylink-1.png`}
							alt="illustration swedbankpay playbook profiles"
							loading="lazy"
						/>
					</div>
					<div className="col-6 col-sm-3">
						<img
							className="w-100"
							src={`${basename}img/documentation/playbook/playbook-profiles-paybylink-2.png`}
							alt="illustration swedbankpay playbook profiles"
							loading="lazy"
						/>
					</div>
					<div className="col-6 col-sm-3 mt-4 mt-sm-0">
						<img
							className="w-100"
							src={`${basename}img/documentation/playbook/playbook-profiles-paybylink-3.png`}
							alt="illustration swedbankpay playbook profiles"
							loading="lazy"
						/>
					</div>
					<div className="col-6 col-sm-3 mt-4 mt-sm-0">
						<img
							className="w-100"
							src={`${basename}img/documentation/playbook/playbook-profiles-paybylink-4.png`}
							alt="illustration swedbankpay playbook profiles"
							loading="lazy"
						/>
					</div>
				</div>
				<figcaption className="text-center mt-2">PaybyLink</figcaption>
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
		<img
			className=""
			src={`${basename}img/documentation/playbook/playbook-profiles-intro.png`}
			alt="illustration swedbankpay playbook profiles"
		/>
		<HowToUse />
		<DesignProfiles />
		<Content />
		<LightUI />
		<ExpertUI />
	</DocContainer>
);

export default Profiles;

export {};
