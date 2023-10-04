import React from "react";
import { DocContainer } from "@docutils";

const basename = process.env.basename;

const Showroom = () => (
	<section>
		<div className="container px-0 playbook-mozaic">
			<div className="row">
				<div className="col-sm">
					<video
						playsInline
						autoPlay
						muted
						loop
						style={{ aspectRatio: "16 / 9" }}
						height={399}
						width={710}
						poster={`${basename}designguide/assets/playbook/playbook-showroom-1.avif`}
					>
						<source
							src={`${basename}designguide/assets/playbook/playbook-showroom-1.av1`}
							type="video/webm"
						/>
						<source
							src={`${basename}designguide/assets/playbook/playbook-showroom-1.mp4`}
							type="video/mp4"
						/>
					</video>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-sm">
					<img
						className=""
						src={`${basename}img/documentation/playbook/playbook-showroom-2.png`}
						alt="illustration swedbankpay playbook showroom"
						style={{ "aspect-ratio": "16 / 9" }}
					/>
				</div>
				<div className="col-sm">
					<img
						className=""
						src={`${basename}img/documentation/playbook/playbook-showroom-3.png`}
						alt="illustration swedbankpay playbook showroom"
						style={{ "aspect-ratio": "16 / 9" }}
					/>
				</div>
				<div className="col-sm">
					<img
						className=""
						src={`${basename}img/documentation/playbook/playbook-showroom-4.png`}
						alt="illustration swedbankpay playbook showroom"
						style={{ "aspect-ratio": "16 / 9" }}
					/>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-sm">
					<img
						className=""
						src={`${basename}img/documentation/playbook/playbook-showroom-5.png`}
						alt="illustration swedbankpay playbook showroom"
						style={{ "aspect-ratio": "16 / 9" }}
					/>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-sm">
					<img
						className=""
						src={`${basename}img/documentation/playbook/playbook-showroom-6.png`}
						alt="illustration swedbankpay playbook showroom"
						style={{ "aspect-ratio": "16 / 9" }}
					/>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-sm">
					<img
						className=""
						src={`${basename}img/documentation/playbook/playbook-showroom-7.png`}
						alt="illustration swedbankpay playbook showroom"
						loading="lazy"
					/>
				</div>
				<div className="col-sm">
					<img
						className=""
						src={`${basename}img/documentation/playbook/playbook-showroom-8.png`}
						alt="illustration swedbankpay playbook showroom"
						loading="lazy"
						style={{ "aspect-ratio": "16 / 9" }}
					/>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-sm">
					<img
						className=""
						src={`${basename}img/documentation/playbook/playbook-showroom-9.png`}
						alt="illustration swedbankpay playbook showroom"
						loading="lazy"
					/>
				</div>
				<div className="col-sm">
					<img
						className=""
						src={`${basename}img/documentation/playbook/playbook-showroom-10.png`}
						alt="illustration swedbankpay playbook showroom"
						loading="lazy"
					/>
				</div>
				<div className="col-sm">
					<img
						className=""
						src={`${basename}img/documentation/playbook/playbook-showroom-11.png`}
						alt="illustration swedbankpay playbook showroom"
						loading="lazy"
					/>
				</div>
				<div className="col-sm">
					<img
						className=""
						src={`${basename}img/documentation/playbook/playbook-showroom-12.png`}
						alt="illustration swedbankpay playbook showroom"
						loading="lazy"
					/>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-sm">
					<img
						className=""
						src={`${basename}img/documentation/playbook/playbook-showroom-13.png`}
						alt="illustration swedbankpay playbook showroom"
						loading="lazy"
						style={{ "aspect-ratio": "16 / 9" }}
					/>
				</div>
				<div className="col-sm">
					<img
						className=""
						src={`${basename}img/documentation/playbook/playbook-showroom-14.png`}
						alt="illustration swedbankpay playbook showroom"
						loading="lazy"
						style={{ "aspect-ratio": "16 / 9" }}
					/>
				</div>
				<div className="col-sm">
					<img
						className=""
						src={`${basename}img/documentation/playbook/playbook-showroom-15.png`}
						alt="illustration swedbankpay playbook showroom"
						loading="lazy"
						style={{ "aspect-ratio": "16 / 9" }}
					/>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-sm">
					<img
						className=""
						src={`${basename}img/documentation/playbook/playbook-showroom-16.png`}
						alt="illustration swedbankpay playbook showroom"
						loading="lazy"
						style={{ "aspect-ratio": "16 / 9" }}
					/>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-sm-4">
					<img
						className=""
						src={`${basename}img/documentation/playbook/playbook-showroom-17.png`}
						alt="illustration swedbankpay playbook showroom"
						loading="lazy"
					/>
				</div>
				<div className="col-sm-8">
					<picture>
						<source
							type="image/avif"
							srcSet={`${basename}img/documentation/playbook/playbook-showroom-18.avif`}
						/>
						<img
							src={`${basename}img/documentation/playbook/playbook-showroom-18.png`}
							alt="illustration swedbankpay playbook showroom"
							style={{ "aspect-ratio": "16 / 9" }}
							loading="lazy"
						/>
					</picture>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-sm">
					<img
						className=""
						src={`${basename}img/documentation/playbook/playbook-showroom-19.png`}
						alt="illustration swedbankpay playbook showroom"
						style={{ "aspect-ratio": "16 / 9" }}
						loading="lazy"
					/>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-sm">
					<img
						className=""
						src={`${basename}img/documentation/playbook/playbook-showroom-20.png`}
						alt="illustration swedbankpay playbook showroom"
						style={{ "aspect-ratio": "16 / 9" }}
						loading="lazy"
					/>
				</div>
				<div className="col-sm">
					<img
						className=""
						src={`${basename}img/documentation/playbook/playbook-showroom-21.png`}
						alt="illustration swedbankpay playbook showroom"
						style={{ "aspect-ratio": "16 / 9" }}
						loading="lazy"
					/>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-sm">
					<img
						className=""
						src={`${basename}img/documentation/playbook/playbook-showroom-22.png`}
						alt="illustration swedbankpay playbook showroom"
						loading="lazy"
						style={{ "aspect-ratio": "16 / 9" }}
					/>
				</div>
				<div className="col-sm">
					<img
						className=""
						src={`${basename}img/documentation/playbook/playbook-showroom-23.png`}
						alt="illustration swedbankpay playbook showroom"
						loading="lazy"
						style={{ "aspect-ratio": "16 / 9" }}
					/>
				</div>
			</div>
		</div>
	</section>
);

const Profiles = () => (
	<DocContainer>
		<Showroom />
	</DocContainer>
);

export default Profiles;

export {};
