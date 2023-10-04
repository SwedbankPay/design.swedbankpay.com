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
						poster={`${basename}img/documentation/playbook/playbook-showroom-1.avif`}
					>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-1.av1`}
							type="video/av1"
						/>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-1.mp4`}
							type="video/mp4"
						/>
					</video>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-sm">
					<video
						playsInline
						autoPlay
						muted
						loop
						height={149}
						width={230}
						poster={`${basename}img/documentation/playbook/playbook-showroom-2.avif`}
					>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-2.av1`}
							type="video/av1"
						/>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-2.mp4`}
							type="video/mp4"
						/>
					</video>
				</div>
				<div className="col-sm">
					<video
						playsInline
						autoPlay
						muted
						loop
						height={149}
						width={230}
						poster={`${basename}img/documentation/playbook/playbook-showroom-3.avif`}
					>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-3.av1`}
							type="video/av1"
						/>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-3.mp4`}
							type="video/mp4"
						/>
					</video>
				</div>
				<div className="col-sm">
					<video
						playsInline
						autoPlay
						muted
						loop
						height={149}
						width={230}
						poster={`${basename}img/documentation/playbook/playbook-showroom-4.avif`}
					>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-4.av1`}
							type="video/av1"
						/>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-4.mp4`}
							type="video/mp4"
						/>
					</video>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-sm">
					<picture>
						<source
							type="image/avif"
							srcSet={`${basename}img/documentation/playbook/playbook-showroom-5.avif`}
						/>
						<img
							className=""
							src={`${basename}img/documentation/playbook/playbook-showroom-5.png`}
							alt="illustration swedbankpay playbook showroom"
							style={{ "aspect-ratio": "710 / 351" }}
						/>
					</picture>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-sm">
					<video
						playsInline
						autoPlay
						muted
						loop
						height={399}
						width={710}
						poster={`${basename}img/documentation/playbook/playbook-showroom-6.avif`}
					>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-6.av1`}
							type="video/av1"
						/>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-6.mp4`}
							type="video/mp4"
						/>
					</video>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-sm">
					<video
						playsInline
						autoPlay
						muted
						loop
						height={196}
						width={350}
						poster={`${basename}img/documentation/playbook/playbook-showroom-7.avif`}
					>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-7.av1`}
							type="video/av1"
						/>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-7.mp4`}
							type="video/mp4"
						/>
					</video>
				</div>
				<div className="col-sm">
					<video
						playsInline
						autoPlay
						muted
						loop
						height={196}
						width={350}
						poster={`${basename}img/documentation/playbook/playbook-showroom-8.avif`}
					>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-8.av1`}
							type="video/av1"
						/>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-8.mp4`}
							type="video/mp4"
						/>
					</video>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-sm">
					<picture>
						<source
							type="image/avif"
							srcSet={`${basename}img/documentation/playbook/playbook-showroom-9.avif`}
						/>
						<img
							className=""
							src={`${basename}img/documentation/playbook/playbook-showroom-9.png`}
							alt="illustration swedbankpay playbook showroom"
							loading="lazy"
						/>
					</picture>
				</div>
				<div className="col-sm">
					<picture>
						<source
							type="image/avif"
							srcSet={`${basename}img/documentation/playbook/playbook-showroom-10.avif`}
						/>
						<img
							className=""
							src={`${basename}img/documentation/playbook/playbook-showroom-10.png`}
							alt="illustration swedbankpay playbook showroom"
							loading="lazy"
						/>
					</picture>
				</div>
				<div className="col-sm">
					<picture>
						<source
							type="image/avif"
							srcSet={`${basename}img/documentation/playbook/playbook-showroom-11.avif`}
						/>
						<img
							className=""
							src={`${basename}img/documentation/playbook/playbook-showroom-11.png`}
							alt="illustration swedbankpay playbook showroom"
							loading="lazy"
						/>
					</picture>
				</div>
				<div className="col-sm">
					<picture>
						<source
							type="image/avif"
							srcSet={`${basename}img/documentation/playbook/playbook-showroom-12.avif`}
						/>
						<img
							className=""
							src={`${basename}img/documentation/playbook/playbook-showroom-12.png`}
							alt="illustration swedbankpay playbook showroom"
							loading="lazy"
						/>
					</picture>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-sm">
					<picture>
						<source
							type="image/avif"
							srcSet={`${basename}img/documentation/playbook/playbook-showroom-13.avif`}
						/>
						<img
							className=""
							src={`${basename}img/documentation/playbook/playbook-showroom-13.png`}
							alt="illustration swedbankpay playbook showroom"
							loading="lazy"
							style={{ "aspect-ratio": "16 / 9" }}
						/>
					</picture>
				</div>
				<div className="col-sm">
					<picture>
						<source
							type="image/avif"
							srcSet={`${basename}img/documentation/playbook/playbook-showroom-14.avif`}
						/>
						<img
							className=""
							src={`${basename}img/documentation/playbook/playbook-showroom-14.png`}
							alt="illustration swedbankpay playbook showroom"
							loading="lazy"
							style={{ "aspect-ratio": "16 / 9" }}
						/>
					</picture>
				</div>
				<div className="col-sm">
					<picture>
						<source
							type="image/avif"
							srcSet={`${basename}img/documentation/playbook/playbook-showroom-15.avif`}
						/>
						<img
							className=""
							src={`${basename}img/documentation/playbook/playbook-showroom-15.png`}
							alt="illustration swedbankpay playbook showroom"
							loading="lazy"
							style={{ "aspect-ratio": "16 / 9" }}
						/>
					</picture>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-sm">
					<video
						playsInline
						autoPlay
						muted
						loop
						height={399}
						width={710}
						poster={`${basename}img/documentation/playbook/playbook-showroom-16.avif`}
					>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-16.av1`}
							type="video/av1"
						/>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-16.mp4`}
							type="video/mp4"
						/>
					</video>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-sm-4">
					<picture>
						<source
							type="image/avif"
							srcSet={`${basename}img/documentation/playbook/playbook-showroom-17.avif`}
						/>
						<img
							className=""
							src={`${basename}img/documentation/playbook/playbook-showroom-17.png`}
							alt="illustration swedbankpay playbook showroom"
							loading="lazy"
						/>
					</picture>
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
					<picture>
						<source
							type="image/avif"
							srcSet={`${basename}img/documentation/playbook/playbook-showroom-19.avif`}
						/>
						<img
							className=""
							src={`${basename}img/documentation/playbook/playbook-showroom-19.png`}
							alt="illustration swedbankpay playbook showroom"
							style={{ "aspect-ratio": "710 / 351" }}
							loading="lazy"
						/>
					</picture>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-sm">
					<picture>
						<source
							type="image/avif"
							srcSet={`${basename}img/documentation/playbook/playbook-showroom-20.avif`}
						/>
						<img
							className=""
							src={`${basename}img/documentation/playbook/playbook-showroom-20.png`}
							alt="illustration swedbankpay playbook showroom"
							style={{ "aspect-ratio": "350 / 196" }}
							loading="lazy"
						/>
					</picture>
				</div>
				<div className="col-sm">
					<video
						playsInline
						autoPlay
						muted
						loop
						height={196}
						width={350}
						style={{ "aspect-ratio": "350 / 196" }}
						poster={`${basename}img/documentation/playbook/playbook-showroom-21.avif`}
					>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-21.av1`}
							type="video/av1"
						/>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-21.mp4`}
							type="video/mp4"
						/>
					</video>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-sm">
					<picture>
						<source
							type="image/avif"
							srcSet={`${basename}img/documentation/playbook/playbook-showroom-22.avif`}
						/>
						<img
							className=""
							src={`${basename}img/documentation/playbook/playbook-showroom-22.png`}
							alt="illustration swedbankpay playbook showroom"
							loading="lazy"
							style={{ "aspect-ratio": "350 / 196" }}
						/>
					</picture>
				</div>
				<div className="col-sm">
					<picture>
						<source
							type="image/avif"
							srcSet={`${basename}img/documentation/playbook/playbook-showroom-23.avif`}
						/>
						<img
							className=""
							src={`${basename}img/documentation/playbook/playbook-showroom-23.png`}
							alt="illustration swedbankpay playbook showroom"
							loading="lazy"
							style={{ "aspect-ratio": "350 / 196" }}
						/>
					</picture>
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
