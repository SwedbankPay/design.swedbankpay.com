import React from "react";

import { DocContainer } from "@docutils";
import DisplayColor from "~/src/App/components/DisplayColor";
import * as sbColors from "./swedbankpay-colors";
import * as pxColors from "./payex-colors";

const brand = process.env.brand;
const basename = process.env.basename;

const Lead = () => (
	<section className="mb-5">
		<p className="lead">
			The primary color of Swedbank Pay is yellow, it is used to give a unified
			appearance and create visual recognition. Yellow is an energetic and
			vibrant color that matches the brand of Swedbank Pay. In complement to
			this, Swedbank Pay uses a selection of colors from Swedbank´s color
			palette.
		</p>
		<div className="d-flex justify-content-center align-items-center mt-5 color-page-introduction">
			<div className="color-circle brown-solid img-circle"></div>
			<div className="color-circle brand-yellow img-circle"></div>
			<div className="color-circle brand-orange img-circle"></div>
			<div className="color-circle brand-pink img-circle"></div>
			<div className="color-circle brand-turquoise-light img-circle"></div>
			<div className="color-circle brand-turquoise img-circle"></div>
		</div>
	</section>
);

const ColorContrast = () => (
	<section className="color-contrast-section my-5 border py-3 px-4">
		<h2 id="color-contrast">Color contrast</h2>
		<p>
			It is important to maintain sufficient color contrast in our products to
			meet accessability requirements. For normal text content this means a
			4.5:1 ratio against background and for graphics and large text (18 px, or
			bold 14 px) a 3:1 ratio against background. To help you to make informed
			color decisions, we showcase the contrast ratio of each color to our
			default text (brown) and background (white) color here.{" "}
		</p>
		<div className="d-flex flex-row justify-content-between ">
			<span className="d-flex">
				<i className="material-icons check mr-1" aria-hidden="true">
					check_circle
				</i>
				<b>Pass (&ge; 4.5:1)</b>
			</span>
			<span className="d-flex">
				<i className="material-icons warning mr-1" aria-hidden="true">
					warning
				</i>
				<b>OK for graphics or large text (&ge; 3:1)</b>
			</span>
			<span className="d-flex">
				<i className="material-icons cancel mr-1" aria-hidden="true">
					error
				</i>
				<b>Fail</b>
			</span>
		</div>
	</section>
);

const SBPrimaryColors = () => (
	<section className="my-5 py-2">
		<h2 id="color-contrast">Primary colors</h2>
		{brand === "swedbankpay" && (
			<p>
				The primary color of Swedbank Pay is yellow, it is used to give a
				unified appearance and create visual recognition.
			</p>
		)}
		<div className="color-group pt-3">
			{sbColors.primaryBrandColors.map((color, i) => (
				<DisplayColor key={i} {...color} setColorViaSubtitle={false} />
			))}
		</div>
		<div className="container mt-5">
			<div className="row">
				<div className="col-sm col-sm-4 px-sm-0">
					<picture>
						<source
							type="image/avif"
							// srcSet={`${basename}img/documentation/colors/identity-color-primary-1.avif`}
							srcSet={`${basename}designguide/assets/colors/identity-color-primary-1.avif`}
						/>
						<img
							className="w-100"
							// src={`${basename}img/documentation/colors/identity-color-primary-1.png`}
							src={`${basename}designguide/assets/colors/identity-color-primary-1.png`}
							alt=""
						/>
					</picture>
				</div>
				<div className="col-sm col-sm-4 px-sm-0">
					<picture>
						<source
							type="image/avif"
							// srcSet={`${basename}img/documentation/colors/identity-color-primary-2.avif`}
							srcSet={`${basename}designguide/assets/colors/identity-color-primary-2.avif`}
						/>
						<img
							className="w-100"
							// src={`${basename}img/documentation/colors/identity-color-primary-2.png`}
							src={`${basename}designguide/assets/colors/identity-color-primary-2.png`}
							alt=""
						/>
					</picture>
				</div>
				<div className="col-sm col-sm-4 px-sm-0">
					<picture>
						<source
							type="image/avif"
							// srcSet={`${basename}img/documentation/colors/identity-color-primary-3.avif`}
							srcSet={`${basename}designguide/assets/colors/identity-color-primary-3.avif`}
						/>
						<img
							className="w-100"
							// src={`${basename}img/documentation/colors/identity-color-primary-3.png`}
							src={`${basename}designguide/assets/colors/identity-color-primary-3.png`}
							alt=""
						/>
					</picture>
				</div>
			</div>
		</div>
	</section>
);

const SBBrandAccentColors = () => (
	<section className="my-5 py-2">
		<h2 id="brand-accent-colors">Brand accent colors</h2>
		<p>
			These accent colors are supplementary colors that contrast or complement
			the primary colors. We aim to stay monochromatic when using colors,
			keeping a view within one hue. But on occasion we combine the hues by
			bringing in a yellow or orange item as a hint to the Swedbank Pay brand.
		</p>
		<div className="color-group">
			{sbColors.accentBrandColors.map((color, i) => (
				<DisplayColor key={i} {...color} setColorViaSubtitle={false} />
			))}
		</div>
		<div className="container mt-5">
			<div className="row">
				<div className="col-sm col-sm-4 px-sm-0">
					<picture>
						<source
							type="image/avif"
							// srcSet={`${basename}img/documentation/colors/identity-color-accent-1.avif`}
							srcSet={`${basename}designguide/assets/colors/identity-color-accent-1.avif`}
						/>
						<img
							className="w-100"
							// src={`${basename}img/documentation/colors/identity-color-accent-1.png`}
							src={`${basename}designguide/assets/colors/identity-color-accent-1.png`}
							alt=""
						/>
					</picture>
				</div>
				<div className="col-sm col-sm-4 px-sm-0">
					<picture>
						<source
							type="image/avif"
							// srcSet={`${basename}img/documentation/colors/identity-color-accent-2.avif`}
							srcSet={`${basename}designguide/assets/colors/identity-color-accent-2.avif`}
						/>
						<img
							className="w-100"
							// src={`${basename}img/documentation/colors/identity-color-accent-2.png`}
							src={`${basename}designguide/assets/colors/identity-color-accent-2.png`}
							alt=""
						/>
					</picture>
				</div>
				<div className="col-sm col-sm-4 px-sm-0">
					<picture>
						<img
							className="w-100"
							// src={`${basename}img/documentation/colors/identity-color-accent-3.png`}
							src={`${basename}designguide/assets/colors/identity-color-accent-3.png`}
							alt=""
						/>
					</picture>
				</div>
			</div>
			<div className="row">
				<div className="col-sm col-sm-4 px-sm-0">
					<picture>
						<img
							className="w-100"
							// src={`${basename}img/documentation/colors/identity-color-accent-4.png`}
							src={`${basename}designguide/assets/colors/identity-color-accent-4.png`}
							alt=""
						/>
					</picture>
				</div>
				<div className="col-sm col-sm-4 px-sm-0">
					<picture>
						<source
							type="image/avif"
							// srcSet={`${basename}img/documentation/colors/identity-color-accent-5.avif`}
							srcSet={`${basename}designguide/assets/colors/identity-color-accent-5.avif`}
						/>
						<img
							className="w-100"
							// src={`${basename}img/documentation/colors/identity-color-accent-5.png`}
							src={`${basename}designguide/assets/colors/identity-color-accent-5.png`}
							alt=""
						/>
					</picture>
				</div>
				<div className="col-sm col-sm-4 px-sm-0">
					<picture>
						<source type="image/avif" />
						<img
							className="w-100"
							// src={`${basename}img/documentation/colors/identity-color-accent-6.png`}
							src={`${basename}designguide/assets/colors/identity-color-accent-6.png`}
							alt=""
						/>
					</picture>
				</div>
			</div>
		</div>
	</section>
);

const SBTextColors = () => (
	<section className="my-5 py-2">
		<h2 id="text-colors">Text colors</h2>
		<div className="container mt-4">
			<div className="row">
				<div className="col-sm-8 pl-sm-0">
					<h3 className="h4">Default mode</h3>
					<p className="mb-3">
						<span className="font-weight-bold text-underline">
							Text Default
						</span>{" "}
						is our default text color on light backgrounds.{" "}
						<span className="font-weight-bold text-underline">Text Muted</span>{" "}
						is used as a muted text color for smaller or less important text
						that shouldn’t be the primary focus.{" "}
					</p>
					<ul className="color-group d-flex flex-column pl-0">
						{sbColors.textColors
							.filter((color) => color.textCategory.includes("default"))
							.map((color, i) => (
								<DisplayColor
									key={i}
									isSizeLarge={false}
									isVertical={false}
									setColorViaSubtitle={true}
									{...color}
								/>
							))}
					</ul>
				</div>
				<div className="col-sm-4 pr-sm-0">
					<img
						className="w-100"
						// src={`${basename}img/documentation/colors/identity-color-text-default.png`}
						src={`${basename}designguide/assets/colors/identity-color-text-default.png`}
						alt=""
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-8 pl-sm-0">
					<h3 className="h4">For dark backgrounds</h3>
					<p className="mb-3">
						<span className="font-weight-bold text-underline">White</span> is
						default color for text on backgrounds, and{" "}
						<span className="font-weight-bold text-underline">
							Text Muted light
						</span>{" "}
						is used for secondary text.
					</p>
					<ul className="color-group d-flex flex-column pl-0">
						{sbColors.textColors
							.filter((color) => color.textCategory.includes("dark-background"))
							.map((color, i) => (
								<DisplayColor
									key={i}
									isSizeLarge={false}
									isVertical={false}
									{...color}
									setColorViaSubtitle={true}
								/>
							))}
					</ul>
				</div>
				<div className="col-sm-4 pr-sm-0">
					<img
						className="w-100"
						// src={`${basename}img/documentation/colors/identity-color-text-dark.png`}
						src={`${basename}designguide/assets/colors/identity-color-text-dark.png`}
						alt=""
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-8 pl-sm-0">
					<h3 className="h4">Disabled</h3>
					<p className="mb-3">
						For disabled black buttons and text we use{" "}
						<span className="font-weight-bold text-underline">
							Text Disabled
						</span>
						.
					</p>
					<ul className="color-group d-flex flex-column pl-0">
						{sbColors.textColors
							.filter((color) => color.textCategory.includes("disabled"))
							.map((color, i) => (
								<DisplayColor
									key={i}
									isSizeLarge={false}
									isVertical={false}
									setColorViaSubtitle={true}
									{...color}
								/>
							))}
					</ul>
				</div>
				<div className="col-sm-4 pr-sm-0">
					<img
						className="w-100"
						// src={`${basename}img/documentation/colors/identity-color-text-disabled.png`}
						src={`${basename}designguide/assets/colors/identity-color-text-disabled.png`}
						alt=""
					/>
				</div>
			</div>
		</div>
	</section>
);

const SBBackgroundColors = () => (
	<section className="my-5 py-2">
		<h2 id="background-colors">Background colors</h2>
		<p>
			To maintain an open and welcoming experience we mostly use no background
			color, that is white. Our background colors have a functional role and are
			used to organize, structure or highlight a section. Apricot is our primary
			background color, gray and light turquoise are complementary.{" "}
		</p>
		<div className="color-group color-grid">
			{sbColors.backgroundColors.map((color, i) => (
				<DisplayColor
					key={i}
					{...color}
					isSizeLarge={false}
					isVertical={false}
					setColorViaSubtitle={true}
				/>
			))}
		</div>
	</section>
);

const SBSystemColors = () => (
	<section className="my-5 py-2">
		<h2 id="system-colors">System colors</h2>
		<p>
			Our system colors include error, warning, success and info. These are used
			on different types of system messages that needs the users attention.
		</p>
		<div className="container color-group">
			<div className="row w-100">
				<div className="col-sm pl-0">
					{sbColors.systemColors
						.slice(0, Math.ceil(sbColors.systemColors.length / 2))
						.map((color, i) => (
							<DisplayColor
								key={i}
								{...color}
								isSizeLarge={false}
								isVertical={false}
								setColorViaSubtitle={true}
							/>
						))}
				</div>
				<div className="col-sm pl-0">
					{sbColors.systemColors
						.slice(Math.ceil(sbColors.systemColors.length / 2))
						.map((color, i) => (
							<DisplayColor
								key={i}
								{...color}
								isSizeLarge={false}
								isVertical={false}
								setColorViaSubtitle={true}
							/>
						))}
				</div>
			</div>
		</div>
	</section>
);

const SBColorPool = () => (
	<section className="my-5 py-2">
		<h2 id="color-pool">Color pool</h2>
		<p>
			This pool of colors can be picked from when more colors are needed, rather
			than making up new ones.
		</p>
		<div className="container px-0 color-group color-grid grid-columns">
			<div className="containerized-grid">
				{sbColors.colorPool.map((color, i) => (
					<DisplayColor
						key={i}
						{...color}
						isSizeLarge={false}
						isVertical={false}
						setColorViaSubtitle={false}
					/>
				))}
			</div>
		</div>
	</section>
);

const MainColors = () => (
	<section>
		<h2 id="main-colors">Primary and secondary colors</h2>
		<p>
			The primary color in our palette is green. The green color is a strong
			carrier of identity and a means of creating immediate recognition.
		</p>
		<div className="color-group flex-wrap">
			{pxColors.mainText.map((color, i) => (
				<DisplayColor key={i} {...color} setColorViaSubtitle={false} />
			))}
		</div>
	</section>
);

const PayexComplementaryColors = () => (
	<section>
		<h2 id="complementary-colors">Complementary colors</h2>
		<p>
			As a complement to our primary and secondary colors, we have three more
			colors. You can use them when you need to accentuate something eg.,
			splashes, diagrams and tables. They should be used very sparingly and
			should never take over the overall impression.
		</p>
		<div className="color-group">
			{pxColors.complementaryColors.map((color, i) => (
				<DisplayColor key={i} {...color} setColorViaSubtitle={false} />
			))}
		</div>
	</section>
);

const PayexButtonColors = () => (
	<section>
		<h2 id="buttons-colors">Button colors</h2>
		<p>
			Our primary buttons are green and our secondary buttons are dark grey. Go
			to Buttons to see and interact with all buttons.{" "}
		</p>
		<div className="color-group">
			{pxColors.buttonColors.map((color, i) => (
				<DisplayColor key={i} {...color} setColorViaSubtitle={false} />
			))}
		</div>
	</section>
);

const PayexBackgroundColors = () => (
	<section>
		<h2 id="background-colors">Background colors</h2>
		<p>
			Used primarily as background when we communicate the PayEx Ledger &
			Factoring brand. When the light green color is to be printed with PMS
			color, use 12% hue of PayEx green (PMS 354 U / C)
		</p>
		<div className="color-group">
			{pxColors.backgroundColors.map((color, i) => (
				<DisplayColor key={i} {...color} setColorViaSubtitle={false} />
			))}
		</div>
	</section>
);

const PayexSystemColors = () => (
	<section>
		<h2 id="system-colors">System Colors</h2>
		<p>
			We have four primary system colors (red, blue, green, and orange) which
			all have a lighter complementary version as well.{" "}
		</p>
		<div className="color-group">
			{pxColors.systemColors.map((color, i) => (
				<DisplayColor key={i} {...color} setColorViaSubtitle={false} />
			))}
		</div>
	</section>
);

const SBFunctionalColors = () => (
	<>
		<h2 id="functional-colors">Functional colors</h2>
		<p>
			Our functional brand colors can be used in graphical elements to separate
			and emphasise multiple interactions. E.g. primary, secondary and tertiary
			buttons.
		</p>
		<div className="color-group color-group-table">
			<div className="table-header-row border-top pt-3">
				<small>Color</small>
				<small>Base tokens</small>
				<small>Specific tokens</small>
				<small>Description</small>
			</div>
			{sbColors.functionalColors.map((color, i) => (
				<li
					className="table-row border-top pt-3"
					key={`functional-color-${color.baseTokenTitle}`}
				>
					<div
						className={`color-swatch color-box-small ${
							color.hasBorderOverWhiteBG ? "border" : ""
						}`}
						style={{ "--bg-color": `var(--${color.baseTokenSubTitle})` }}
					></div>
					<div className="d-flex flex-column">
						<small>
							<span className="font-weight-bold">{color.baseTokenTitle}</span>
						</small>
						<small>
							<span className="text-muted">{color.specificTokenTitle}</span>
						</small>
						<small>
							<span className="text-muted">{color.hex}</span>
						</small>
					</div>
					<div className="d-flex flex-column">
						<small>
							<span className="font-weight-bold">
								{color.specificTokenTitle}
							</span>
						</small>
						<small>
							<span className="text-muted">{color.specificTokenSubTitle}</span>
						</small>
						<small>
							<span className="text-muted">{color.hex}</span>
						</small>
						{color.amountSpecificToken > 1 && (
							<>
								<small className="mt-3">
									<span className="font-weight-bold">
										{color.specificTokenTitle2}
									</span>
								</small>
								<small>
									<span className="text-muted">
										{color.specificTokenSubTitle2}
									</span>
								</small>
								<small>
									<span className="text-muted">{color.hex}</span>
								</small>
							</>
						)}
					</div>
					<div>{color.description}</div>
				</li>
			))}
		</div>
	</>
);

const Color = () => (
	<>
		{brand === "swedbankpay" && (
			<DocContainer classes="identity-colors">
				<Lead />
				<ColorContrast />
				<SBPrimaryColors />
				<SBBrandAccentColors />
				<SBFunctionalColors />
				<SBTextColors />
				<SBBackgroundColors />
				<SBSystemColors />
				<SBColorPool />
			</DocContainer>
		)}
		{brand === "payex" && (
			<DocContainer classes="identity-colors">
				<MainColors />
				<PayexComplementaryColors />
				<PayexButtonColors />
				<PayexBackgroundColors />
				<PayexSystemColors />
			</DocContainer>
		)}
	</>
);

export default Color;

export {
	Lead,
	ColorContrast,
	SBTextColors,
	SBBackgroundColors,
	SBSystemColors,
	MainColors,
};
