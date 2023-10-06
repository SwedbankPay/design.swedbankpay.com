import React from "react";
import { DocContainer } from "@docutils";

const basename = process.env.basename;

const Showroom = () => (
	<section>
		<div
			className="container px-sm-0 playbook-mozaic"
			style={{ radius: "2px" }}
		>
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
							src={`${basename}img/documentation/playbook/playbook-showroom-1-av1.mp4`}
							type="video/mp4; codecs=av01.0.05M.08,opus"
						/>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-1.mp4`}
							type="video/mp4"
						/>
					</video>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-sm">
					<picture>
						<source
							type="image/avif"
							media="(min-width: 576px)"
							srcSet={`${basename}img/documentation/playbook/playbook-showroom-2.avif`}
						/>
						<img
							className=""
							src={`${basename}img/documentation/playbook/playbook-showroom-2.png`}
							alt="illustration swedbankpay playbook showroom"
							style={{ "aspect-ratio": "230 / 149" }}
						/>
					</picture>
				</div>
				<div className="col-sm">
					<picture>
						<source
							type="image/avif"
							media="(min-width: 576px)"
							srcSet={`${basename}img/documentation/playbook/playbook-showroom-3.avif`}
						/>
						<img
							className=""
							src={`${basename}img/documentation/playbook/playbook-showroom-3.png`}
							alt="illustration swedbankpay playbook showroom"
							style={{ "aspect-ratio": "230 / 149" }}
						/>
					</picture>
				</div>
				<div className="col-sm">
					<picture>
						<source
							type="image/avif"
							media="(min-width: 576px)"
							srcSet={`${basename}img/documentation/playbook/playbook-showroom-4.avif`}
						/>
						<img
							className=""
							src={`${basename}img/documentation/playbook/playbook-showroom-4.png`}
							alt="illustration swedbankpay playbook showroom"
							style={{ "aspect-ratio": "230 / 149" }}
						/>
					</picture>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-sm">
					<picture>
						<source
							type="image/avif"
							media="(min-width: 576px)"
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
			<div className="row mt-3">
				<div className="col-sm">
					<video
						playsInline
						autoPlay
						muted
						loop
						width={710}
						height={399}
						poster={`${basename}img/documentation/playbook/playbook-showroom-6.avif`}
					>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-6-av1.mp4`}
							type="video/mp4; codecs=av01.0.05M.08,opus"
						/>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-6.mp4`}
							type="video/mp4"
						/>
					</video>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-sm">
					<video
						playsInline
						autoPlay
						muted
						loop
						width={350}
						height={196}
						poster={`${basename}img/documentation/playbook/playbook-showroom-7.avif`}
					>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-7-av1.mp4`}
							type="video/mp4; codecs=av01.0.05M.08,opus"
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
						width={350}
						height={196}
						poster={`${basename}img/documentation/playbook/playbook-showroom-8.avif`}
					>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-8-av1.mp4`}
							type="video/mp4; codecs=av01.0.05M.08,opus"
						/>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-8.mp4`}
							type="video/mp4"
						/>
					</video>
				</div>
			</div>
			<div className="row mt-3 justify-content-evenly" style={{ "--gap": "0" }}>
				<div className="col-5 col-sm-3">
					<video
						playsInline
						autoPlay
						muted
						loop
						style={{ "aspect-ratio": "178 / 318" }}
						poster={`${basename}img/documentation/playbook/playbook-showroom-9.avif`}
						className="h-100"
					>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-9-av1.mp4`}
							type="video/mp4; codecs=av01.0.05M.08,opus"
						/>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-9.mp4`}
							type="video/mp4"
						/>
					</video>
				</div>
				<div className="col-5 col-sm-3">
					<video
						playsInline
						autoPlay
						muted
						loop
						style={{ "aspect-ratio": "145 / 318" }}
						poster={`${basename}img/documentation/playbook/playbook-showroom-10.avif`}
						className="h-100"
					>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-10-av1.mp4`}
							type="video/mp4; codecs=av01.0.05M.08,opus"
						/>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-10.mp4`}
							type="video/mp4"
						/>
					</video>
				</div>
				<div className="col-5 col-sm-3 mt-4 mt-sm-0">
					<picture>
						<source
							type="image/avif"
							media="(min-width: 576px)"
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
				<div className="col-5 col-sm-3 mt-4 mt-sm-0">
					<picture>
						<source
							type="image/avif"
							media="(min-width: 576px)"
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
			<div className="row mt-3">
				<div className="col-sm">
					<picture>
						<source
							type="image/avif"
							media="(min-width: 576px)"
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
							media="(min-width: 576px)"
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
							media="(min-width: 576px)"
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
			<div className="row mt-3">
				<div className="col-sm">
					<video
						playsInline
						autoPlay
						muted
						loop
						width={710}
						height={399}
						poster={`${basename}img/documentation/playbook/playbook-showroom-16.avif`}
					>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-16-av1.mp4`}
							type="video/mp4; codecs=av01.0.05M.08,opus"
						/>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-16.mp4`}
							type="video/mp4"
						/>
					</video>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-sm-4">
					<picture>
						<source
							type="image/avif"
							media="(min-width: 576px)"
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
				<div className="col-sm">
					<picture>
						<source
							type="image/avif"
							media="(min-width: 576px)"
							srcSet={`${basename}img/documentation/playbook/playbook-showroom-18.avif`}
						/>
						<img
							src={`${basename}img/documentation/playbook/playbook-showroom-18.png`}
							alt="illustration swedbankpay playbook showroom"
							loading="lazy"
						/>
					</picture>
				</div>
			</div>
			<div className="row mt-3 playbook-showroom-portrait-phones-19 p-4 justify-content-evenly">
				<div className="col-5 col-sm-2">
					<picture>
						<source
							type="image/avif"
							media="(min-width: 576px)"
							srcSet={`${basename}img/documentation/playbook/playbook-showroom-19-1.avif`}
						/>
						<img
							className=""
							src={`${basename}img/documentation/playbook/playbook-showroom-19-1.png`}
							alt="illustration swedbankpay playbook showroom"
							style={{ "aspect-ratio": "138 / 300" }}
							loading="lazy"
						/>
					</picture>
				</div>
				<div className="col-5 col-sm-2">
					<video
						playsInline
						autoPlay
						muted
						loop
						width={138}
						height={300}
						style={{ "aspect-ratio": "138 / 300", "border-radius": "10px" }}
						poster={`${basename}img/documentation/playbook/playbook-showroom-19-2.avif`}
						className="h-100"
					>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-19-2-av1.mp4`}
							type="video/mp4; codecs=av01.0.05M.08,opus"
						/>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-19-2.mp4`}
							type="video/mp4"
						/>
					</video>
				</div>
				<div className="col-5 mt-4 mt-sm-0 col-sm-2">
					<picture>
						<source
							type="image/avif"
							media="(min-width: 576px)"
							srcSet={`${basename}img/documentation/playbook/playbook-showroom-19-3.avif`}
						/>
						<img
							className=""
							src={`${basename}img/documentation/playbook/playbook-showroom-19-3.png`}
							alt="illustration swedbankpay playbook showroom"
							style={{ "aspect-ratio": "138 / 300" }}
							loading="lazy"
						/>
					</picture>
				</div>
				<div className="col-5 mt-4 mt-sm-0 col-sm-2">
					<picture>
						<source
							type="image/avif"
							media="(min-width: 576px)"
							srcSet={`${basename}img/documentation/playbook/playbook-showroom-19-4.avif`}
						/>
						<img
							className=""
							src={`${basename}img/documentation/playbook/playbook-showroom-19-4.png`}
							alt="illustration swedbankpay playbook showroom"
							style={{ "aspect-ratio": "138 / 300" }}
							loading="lazy"
						/>
					</picture>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-sm">
					<picture>
						<source
							type="image/avif"
							media="(min-width: 576px)"
							srcSet={`${basename}img/documentation/playbook/playbook-showroom-20.avif`}
						/>
						<img
							className="h-auto"
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
						width={350}
						height={196}
						style={{ "aspect-ratio": "350 / 196" }}
						poster={`${basename}img/documentation/playbook/playbook-showroom-21.avif`}
						className="h-auto"
					>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-21-av1.mp4`}
							type="video/mp4; codecs=av01.0.05M.08,opus"
						/>
						<source
							src={`${basename}img/documentation/playbook/playbook-showroom-21.mp4`}
							type="video/mp4"
						/>
					</video>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-sm">
					<picture>
						<source
							type="image/avif"
							media="(min-width: 576px)"
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
							media="(min-width: 576px)"
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
