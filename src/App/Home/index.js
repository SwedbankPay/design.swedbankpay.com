import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { changeLogs } from "./constants";
import { setTitle, RemoveVscroll } from "../utils";
import routes from "@src/App/routes/all";
import packageJson from "~/package";
import Alert from "../components/Alert";

const basename = process.env.basename;
const brandTitle = process.env.brandTitle;
const isSwedbankPay = process.env.isSwedbankPay;

const Home = () => {
	useEffect(() => {
		RemoveVscroll();
		setTitle("Home");
	});

	const FrontPage = () => (
		<section className="dg-front-page-container m-auto d-flex flex-column">
			<div className="my-auto">
				<img
					src={`${basename}img/background/cluster-bubbles.svg`}
					className="background-img cluster-bubble d-none d-xl-block mt-n5"
					alt=""
				/>
				<header>
					<span className="dg-title-small d-block m-0">Welcome to the</span>
					<span className="dg-title-big my-0">{brandTitle} Design Guide</span>
				</header>

				<div className="dg-version-indicator">
					<span>Ver. {packageJson.version}</span>
				</div>

				<p className="front-page-lead">
					Here you can find components and guidelines to help you and your team
					work more efficiently and create a cohesive user experience through
					all our products and touch points.
				</p>

				<div className="row dg-cards-container mt-4">
					{routes
						.filter((route) =>
							isSwedbankPay
								? !route.title.toLowerCase().includes("patterns")
								: !route.title.toLowerCase().includes("playbook"),
						)
						.map((route) => (
							<React.Fragment key={route.title}>
								<div
									key={route.title}
									className={
										route.wideCard
											? "w-100 order-5"
											: "col-12 col-sm-6 col-lg-3 d-flex"
									}
								>
									<Link
										to={route.path}
										className={`cards ${
											route.wideCard ? " cards-wide max-w-initial m-3" : "w-100"
										}`}
									>
										<div className="cards-icon">
											<i
												className={`${route.icon.name} mr-3`}
												aria-hidden="true"
											></i>
										</div>
										<span className="h4">
											{!route.wideCard ? route.title : route.entryCardText}
										</span>
										{!route.wideCard && (
											<div className="cards-content">
												<span>{route.entryCardText}</span>
											</div>
										)}
										<div className="cards-cta">
											<span className="arrow"></span>
										</div>
									</Link>
								</div>
							</React.Fragment>
						))}
					<div className="col-12 col-sm-6 col-lg-3 d-flex">
						<Link to={"/utilities"} className="cards w-100">
							<div className="cards-icon">
								<i className="at-build-wall" aria-hidden="true"></i>
							</div>
							<span className="h4">Utilities</span>
							<div className="cards-content">
								<span>Utility cheat sheet</span>
							</div>
							<div className="cards-cta">
								<span className="arrow"></span>
							</div>
						</Link>
					</div>
				</div>
			</div>
			<div className="mt-auto d-none d-md-inline-flex mb-3">
				<a
					className="dg-next-page-content mx-auto"
					onClick={() => window.scrollTo(0, document.body.scrollHeight)}
				>
					<span>Click here to see changelog</span>
					<i className="swepay-icon-chevron-down small" aria-hidden="true"></i>
				</a>
			</div>
			<img
				src={`${basename}img/background/large-bubble.svg`}
				className="background-img large-bubble d-none d-xl-block"
				alt=""
			/>
		</section>
	);

	const Changelog = () => (
		<section className="dg-changelog-container d-flex flex-column mb-0">
			<div className="container dg-changelog-content my-auto">
				<div className="row mt-3">
					<span className="dg-changlelog-title">
						What’s new in the design guide
						<div className="dg-changelog-divider my-2"></div>
					</span>
					<Alert
						type="informative"
						icon="swepay-icon-info-circle-filled"
						text={
							<p>
								<b>Versioning:</b>
								<br />
								In some cases, the patch releases will only affect the
								website&apos;s (design.swedbankpay.com) documentation. Please
								read through the changelog, and you will be notified if the
								release <b>doesn&apos;t</b> affect our NPM package.
							</p>
						}
					/>
				</div>

				{changeLogs.slice(0, 4).map((log) => (
					<div key={log.version} className="row border-bottom pb-2 mt-4">
						<div className="px-0 pb-2">Version {log.version}</div>
						<div className="dg-changelog-description px-0">
							<span className="h4">{log.title}</span>
							<p className="mt-2">{log.text}</p>
						</div>
					</div>
				))}

				<div className="row">
					<a
						href="https://github.com/SwedbankPay/design.swedbankpay.com/releases"
						target="_blank"
						rel="noopener noreferrer"
						className="icon-link mt-4 px-0"
					>
						<i
							className="at-arrow-up-from-square small align-self-baseline mr-2"
							aria-hidden="true"
						></i>
						<span>Github - Detailed changelog</span>
					</a>
				</div>
			</div>
		</section>
	);

	return (
		<div className="doc-container dg-front-page py-0">
			<FrontPage />
			<Changelog />
			<img
				src={`${basename}img/background/two-bubbles.svg`}
				className="background-img two-bubbles d-none d-xl-block"
				alt=""
			/>
			<img
				src={`${basename}img/background/single-bubble.svg`}
				className="background-img single-bubble d-none d-xl-block"
				alt=""
			/>
		</div>
	);
};

export default Home;
