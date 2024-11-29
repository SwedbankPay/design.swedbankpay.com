import React from "react";
import CardsComponent from "@components/Cards";

const defaultOptionsValues = {
	isButton: false,
	isWide: false,
	iconClasses: "at-document",
	hasTitle: true,
	imgSrc: null,
	imgRatio: null,
	hasTextContent: true,
	hasCTAText: true,
};

// Happy Woman image

export const overviewCards = {
	id: "overviewCards",
	tabsId: "overviewButtonsTabs",
	elements: [
		{
			tab: "Standard",
			component: (
				<CardsComponent
					titleTxt="Title"
					textContent="Write the supportive paragraph here."
					hasCTAText={defaultOptionsValues.hasCTAText}
					isButton={defaultOptionsValues.isButton}
					isWide={false}
					hasTitle={defaultOptionsValues.hasTitle}
					imgSrc={defaultOptionsValues.imgSrc}
					iconClasses={defaultOptionsValues.iconClasses}
					hasTextContent={defaultOptionsValues.hasTextContent}
					imgRatio={defaultOptionsValues.imgRatio}
				/>
			),
			options: {
				radio: [
					{
						id: "title",
						title: "Title",
						values: [
							{
								name: "Text only",
								value: {
									iconClasses: null,
									hasTitle: true,
								},
							},
							{
								name: "Text + icon",
								default: true,
								value: {
									iconClasses: "at-shop-cart",
									hasTitle: true,
								},
							},
							{
								name: "Icon only",
								value: {
									iconClasses: "at-shop-cart",
									hasTitle: false,
								},
							},
						],
					},
					{
						id: "has_image",
						title: "Image illustration",
						values: [
							{
								name: "No image",
								default: true,
								value: {
									imgSrc: null,
								},
							},
							{
								name: "With image - 16/9 ratio",
								value: {
									imgSrc:
										"https://design.swedbankpay.com/v/10.10.1/img/documentation/imagery/women-on-bus.svg",
									icon: null,
									imgRatio: "ratio-16-9",
								},
							},
							{
								name: "With image - 4/3 ratio",
								value: {
									imgSrc:
										"https://design.swedbankpay.com/v/10.10.1/img/documentation/imagery/women-on-bus.svg",
									icon: null,
									imgRatio: "ratio-4-3",
								},
							},
							{
								name: "With image - 1/1 ratio",
								value: {
									imgSrc:
										"https://design.swedbankpay.com/v/10.10.1/img/documentation/imagery/women-on-bus.svg",
									icon: null,
									imgRatio: "ratio-1-1",
								},
							},
						],
					},
					{
						id: "text_content",
						title: "Text content",
						values: [
							{
								name: "With text content",
								default: true,
								value: {
									hasTextContent: true,
								},
							},
							{
								name: "No text content",
								value: {
									hasTextContent: false,
								},
							},
						],
					},
					{
						id: "has_cta_text",
						title: "CTA text",
						values: [
							{
								name: "With CTA text",
								default: true,
								value: {
									hasCTAText: true,
								},
							},
							{
								name: "Only arrow",
								value: {
									hasCTAText: false,
								},
							},
						],
					},
					{
						id: "card_element_tag",
						title: "Card purpose",
						values: [
							{
								name: "action <button>",
								value: {
									isButton: true,
								},
							},
							{
								name: "navigation link <a>",
								default: true,
								value: {
									isButton: false,
								},
							},
						],
					},
				],
			},
			title: "Standard cards",
			description:
				"The standard card component can be customized either icon or picture in order to make it easier for users to scan the content. Mixing simple card without icon should mostly be done when seperating the cards functionality such as when there are more cards to be displayed or when approperiate icons can not be found.",
		},

		{
			tab: "Wide",
			component: (
				<CardsComponent
					titleTxt="Title"
					textContent="Write the supportive paragraph here."
					hasCTAText={defaultOptionsValues.hasCTAText}
					isButton={defaultOptionsValues.isButton}
					isWide={true}
					hasTitle={defaultOptionsValues.hasTitle}
					imgSrc={defaultOptionsValues.imgSrc}
					iconClasses={defaultOptionsValues.iconClasses}
					hasTextContent={defaultOptionsValues.hasTextContent}
					imgRatio={defaultOptionsValues.imgRatio}
				/>
			),
			options: {
				radio: [
					{
						id: "title",
						title: "Title",
						values: [
							{
								name: "Text only",
								value: {
									iconClasses: null,
									hasTitle: true,
								},
							},
							{
								name: "Text + icon",
								default: true,
								value: {
									iconClasses: "at-shop-cart",
									hasTitle: true,
								},
							},
							{
								name: "Icon only",
								value: {
									iconClasses: "at-shop-cart",
									hasTitle: false,
									hasCTAText: true,
								},
							},
						],
					},
					{
						id: "has_image",
						title: "Image illustration",
						values: [
							{
								name: "No image",
								default: true,
								value: {
									imgSrc: null,
								},
							},
							{
								name: "With image",
								value: {
									imgSrc:
										"https://design.swedbankpay.com/v/10.10.1/img/documentation/imagery/women-on-bus.svg",
									icon: null,
									imgRatio: null,
								},
							},
						],
					},
					{
						id: "text_content",
						title: "Text content",
						values: [
							{
								name: "With text content",
								default: true,
								value: {
									hasTextContent: true,
								},
							},
							{
								name: "No text content",
								value: {
									hasTextContent: false,
								},
							},
						],
					},
					{
						id: "has_cta_text",
						title: "CTA text",
						values: [
							{
								name: "With CTA text",
								default: true,
								value: {
									hasCTAText: true,
								},
							},
							{
								name: "Only arrow",
								value: {
									hasCTAText: false,
								},
							},
						],
					},
					{
						id: "card_element_tag",
						title: "Card purpose",
						values: [
							{
								name: "action <button>",
								value: {
									isButton: true,
								},
							},
							{
								name: "navigation link <a>",
								default: true,
								value: {
									isButton: false,
								},
							},
						],
					},
				],
			},
			title: "Wide cards",
			description:
				"The wide card component can be customized either icon or picture in order to make it easier for users to scan the content. Try to avoid mixing different card setups with each other as it could be confusing for the users to understand. Try to keep the title concise and to the point, to make it simple to understand and the design aligned with the cards as a group.",
		},
	],
};


// DO and DONT'S image 


const Overview = () => (
	<>
		<h2 id="overview">Overview</h2>
		<p>
			The card component should be used to direct to pages on our site and not
			to external sites, in that case use{" "}
			<Link to="/components/links">Links</Link> instead.
		</p>
		<ComponentPreview
			language="html"
			showCasePanel
			showCasePanelAdvanced={overviewCards}
			codeFigure
		/>

		<h3>{"Dos and dont's"}</h3>
		<div className="row">
			<div className="col-xl-6 mb-4">
				<div className="slab slab-plain slab-border-success h-100">
					<h4>Do</h4>
					When presenting a group of cards, make sure their color match and have
					the same size and text length
					<img
						alt="Three cards in a horizontal line that all have the same icon color and text length."
						src={`${basename}img/documentation/cards/Do-Cards.png`}
						className="w-100 mt-4 mb-4"
					/>
				</div>
			</div>
			<div className="col-xl-6 mb-4">
				<div className="slab slab-plain slab-border-error h-100">
					<h4>{"Don't"}</h4>
					Avoid miss-match colors, different sizes and length on text in order
					to present a clean view
					<img
						alt="Three cards in a horizontal line that have different icon colors and text lengths."
						src={`${basename}img/documentation/cards/Dont-Cards.png`}
						className="w-100 mt-4 mb-4"
					/>
				</div>
			</div>
		</div>
		<div className="row">
			<div className="col-xl-6 mb-4">
				<div className="slab slab-plain slab-border-success h-100">
					<h4>Do</h4>
					When presenting a group of cards, make sure they match visually. Try
					keeping it the same text length and to one row when possible.
					<img
						alt="Three wide cards in a vertical line that have the same icon color and text length."
						src={`${basename}img/documentation/cards/Do-wide-cards.png`}
						className="w-100 mt-4 mb-4"
					/>
				</div>
			</div>
			<div className="col-xl-6 mb-4">
				<div className="slab slab-plain slab-border-error h-100">
					<h4>{"Don't"}</h4>
					Avoid miss-match colors, different sizes and length on text in order
					to present a clean view. When using numbers make sure the numbering is
					sequenced and follows the correct order.
					<img
						alt="Three wide cards in a vertical line that have inconsistent iconography, different colors and varied text lengths."
						src={`${basename}img/documentation/cards/Dont-wide-cards.png`}
						className="w-100 mt-4 mb-4"
					/>
				</div>
			</div>
		</div>
	</>
);
