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

const brand = process.env.brand;

const imgSrcURL =
	brand === "payex"
		? "https://design.payex.com/v/10.10.1/img/payex/documentation/cards/happy-woman.png"
		: "https://design.swedbankpay.com/v/10.10.1/img/documentation/imagery/women-on-bus.svg";

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