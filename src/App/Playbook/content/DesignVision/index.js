import React from "react";
import { DocContainer } from "@docutils";

const basename = process.env.basename;

const VisionStatement = () => (
	<section>
		<h2 id="vision-statement">Vision statement</h2>
		<p>
			To create simple, intuitive design that wows you with an unbeatable
			experience.
		</p>
		<div className="container px-sm-0 mt-4">
			<div className="row">
				<div className="col-md-4">
					<h3>Contextual</h3>
					<p>
						Relevant and guiding experience for each visitor, on every platform.
					</p>
				</div>
				<div className="col-md-4">
					<h3>Easy</h3>
					<p>Easy to use, administrate, navigate and convert.</p>
				</div>
				<div className="col-md-4">
					<h3>Fast</h3>
					<p>Designed and built for optimal experience and performance.</p>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-md-4">
					<h3>Impactful</h3>
					<p>Generating business breakthroughs and strong brand presence.</p>
				</div>
				<div className="col-md-4">
					<h3>Scalable</h3>
					<p>Growing the product portfolio of Swedbank Pay.</p>
				</div>
			</div>
		</div>
	</section>
);

const Snapshot = () => (
	<section>
		<h2 id="snapshot">Snapshot</h2>
		<p>Scalable Growing the product portfolio of Swedbank Pay.</p>

		<div className="d-flex">
			<img
				className="w-100"
				src={`${basename}img/documentation/playbook/playbook-design-vision-vision-board.png`}
				alt="illustration swedbankpay playbook principles"
			/>
		</div>
	</section>
);

const ChunkyFriendly = () => (
	<section>
		<h2 id="chunky-and-friendly">Chunky and friendly</h2>
		<p>
			By turning up the size on elements in the design as well as increasing
			white space and padding, we allow for a more visually prominent and easily
			tappable or clickable interface. It conveys a sense of space in the
			design, enhancing usability and readability.
		</p>

		<div
			className="container px-sm-0 playbook playbook-mozaic"
			style={{ radius: "2px" }}
		>
			<div className="row d-flex px-3">
				<div className="col-sm">
					<img
						src={`${basename}img/documentation/playbook/playbook-design-vision-chunky-friendly-1.png`}
						alt="Playbook illustration"
						loading="lazy"
					/>
				</div>
				<div className="col-sm">
					<img
						src={`${basename}img/documentation/playbook/playbook-design-vision-chunky-friendly-2.png`}
						alt="Playbook illustration"
						loading="lazy"
					/>
				</div>
				<div className="col-sm">
					<img
						src={`${basename}img/documentation/playbook/playbook-design-vision-chunky-friendly-3.png`}
						alt="Playbook illustration"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	</section>
);

const BoldTypography = () => (
	<section id="bold-typography">
		<h2 id="bold-typography-with-personality">
			Bold typography with personality
		</h2>
		<p>
			We like to play with the size and placement of a headline or main message
			to create a more engaging expression, making the user more likely to read
			the text. It creates a visual anchor to the page when we have this large
			and highly contrasting title.
		</p>

		<div
			className="container px-sm-0 playbook playbook-mozaic"
			style={{ radius: "2px" }}
		>
			<div className="row d-flex px-3">
				<div className="col-sm">
					<img
						src={`${basename}img/documentation/playbook/playbook-design-vision-bold-typo-1.png`}
						className="w-100"
						alt="Playbook illustration"
						loading="lazy"
					/>
				</div>
				<div className="col-sm">
					<img
						src={`${basename}img/documentation/playbook/playbook-design-vision-bold-typo-2.png`}
						className="w-100"
						alt="Playbook illustration"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	</section>
);

const Rounded = () => (
	<section>
		<h2 id="rounded">Rounded</h2>
		<p>
			Swedbank Pay is your best friend in handling finances, curating
			information and serving you what you need. The UI should reflect this
			friendliness, and does so with rounded corners and soft shapes.
		</p>

		<div
			className="container px-sm-0 playbook playbook-mozaic"
			style={{ radius: "2px" }}
		>
			<div className="row d-flex px-3">
				<div className="col-sm">
					<img
						className="w-100"
						src={`${basename}img/documentation/playbook/playbook-design-vision-rounded-1.png`}
						alt="illustration swedbankpay playbook rounded"
						loading="lazy"
					/>
				</div>
				<div className="col-sm">
					<img
						className="w-100"
						src={`${basename}img/documentation/playbook/playbook-design-vision-rounded-2.png`}
						alt="illustration swedbankpay playbook rounded"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	</section>
);

const Colors = () => (
	<section>
		<h2 id="colors">Colors</h2>
		<p>
			<strong>Primary brand and brand accent colors:</strong> The primary color
			of Swedbank Pay is yellow, which is used to create a unified appearance
			and visual recognition. Yellow is an energetic and vibrant color and this
			matches the brand of Swedbank Pay. In addition, we use a selection of
			colors from Swedbank&apos;s color palette.
		</p>
		<p>
			<strong>Functional, text, background and system colors:</strong> These are
			supplementary colors that contrast or complement the primary ones. We aim
			to stay monochromatic, keeping a view within one hue. But on occasion we
			combine the hues by bringing in a yellow or orange item to hint at the
			Swedbank Pay brand.
		</p>
		<p>
			<strong>Color pool:</strong> Pick from this pool when more colors are
			needed, rather than making up new ones.
		</p>
		<div
			className="container playbook-mozaic playbook-glued-grid"
			style={{ "--gap": "0" }}
		>
			<div className="row">
				<div className="col-sm px-0">
					<img
						className="w-100 shift-right-1"
						src={`${basename}img/documentation/playbook/playbook-design-vision-colors-1.png`}
						alt="illustration swedbankpay playbook colors"
						loading="lazy"
					/>
				</div>
				<div className="col-sm px-0">
					<img
						className="w-100"
						src={`${basename}img/documentation/playbook/playbook-design-vision-colors-2.png`}
						alt="illustration swedbankpay playbook colors"
						loading="lazy"
					/>
				</div>
				<div className="col-sm px-0">
					<img
						className="w-100"
						src={`${basename}img/documentation/playbook/playbook-design-vision-colors-3.png`}
						alt="illustration swedbankpay playbook colors"
						loading="lazy"
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-sm px-0">
					<img
						className="w-100"
						src={`${basename}img/documentation/playbook/playbook-design-vision-colors-4.png`}
						alt="illustration swedbankpay playbook colors"
						loading="lazy"
					/>
				</div>
				<div className="col-sm px-0">
					<img
						className="w-100"
						src={`${basename}img/documentation/playbook/playbook-design-vision-colors-5.png`}
						alt="illustration swedbankpay playbook colors"
						loading="lazy"
					/>
				</div>
				<div className="col-sm px-0">
					<img
						className="w-100"
						src={`${basename}img/documentation/playbook/playbook-design-vision-colors-6.png`}
						alt="illustration swedbankpay playbook colors"
						loading="lazy"
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-sm px-0">
					<img
						className="w-100"
						src={`${basename}img/documentation/playbook/playbook-design-vision-colors-7.png`}
						alt="illustration swedbankpay playbook colors"
						loading="lazy"
					/>
				</div>
				<div className="col-sm px-0">
					<img
						className="w-100"
						src={`${basename}img/documentation/playbook/playbook-design-vision-colors-8.png`}
						alt="illustration swedbankpay playbook colors"
						loading="lazy"
					/>
				</div>
				<div className="col-sm px-0">
					<img
						className="w-100"
						src={`${basename}img/documentation/playbook/playbook-design-vision-colors-9.png`}
						alt="illustration swedbankpay playbook colors"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	</section>
);

const DesignVision = () => (
	<DocContainer>
		<p className="lead">
			Design is more than just looks – it&apos;s our shared language of
			experience and function. Every piece matters, and together, they form our
			product&apos;s story. We&apos;re here to make design clear and relatable
			for everyone in our team. By understanding and embracing it, we all
			contribute to a unified and standout product journey.
		</p>
		<VisionStatement />
		<Snapshot />
		<ChunkyFriendly />
		<BoldTypography />
		<Rounded />
		<Colors />
	</DocContainer>
);

export default DesignVision;
