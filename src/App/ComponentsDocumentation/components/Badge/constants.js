import React from "react";

const BadgeOptions = ({ number }) => (
	<>
		{number ? (
			<div className="badge-showcase">
				<p>
					{" "}
					<span className="badge badge-default badge-number">1</span>
				</p>
				<p>
					{" "}
					<span className="badge badge-inactive badge-number">2</span>
				</p>
				<p>
					{" "}
					<span className="badge badge-warning badge-number">3</span>
				</p>
				<p>
					{" "}
					<span className="badge badge-yellow badge-number">4</span>
				</p>
				<p>
					{" "}
					<span className="badge badge-gray badge-number">5</span>
				</p>
				<p>
					{" "}
					<span className="badge badge-red badge-number">6</span>
				</p>
				<p>
					{" "}
					<span className="badge badge-blue badge-number">7</span>
				</p>
				<p>
					{" "}
					<span className="badge badge-pink badge-number">8</span>
				</p>
				<p>
					{" "}
					<span className="badge badge-green badge-number">9</span>
				</p>
				<p>
					{" "}
					<span className="badge badge-orange badge-number">10</span>
				</p>
				<p>
					{" "}
					<span className="badge badge-turqouise badge-number">11</span>
				</p>
				<p>
					{" "}
					<span className="badge badge-brown badge-number">12</span>
				</p>
			</div>
		) : (
			<div className="badge-showcase">
				<p>
					{" "}
					<span className="badge badge-default">Document</span>
				</p>
				<p>
					{" "}
					<span className="badge badge-inactive">Document</span>
				</p>
				<p>
					{" "}
					<span className="badge badge-warning">Document</span>
				</p>
				<p>
					{" "}
					<span className="badge badge-yellow-light">Document</span>
				</p>
				<p>
					{" "}
					<span className="badge badge-yellow-lighter">Document</span>
				</p>
				<p>
					{" "}
					<span className="badge badge-gray">Document</span>
				</p>
				<p>
					{" "}
					<span className="badge badge-gray-light">Document</span>
				</p>
				<p>
					{" "}
					<span className="badge badge-brown">Document</span>
				</p>
				<p>
					{" "}
					<span className="badge badge-brown-soft">Document</span>
				</p>
				<p>
					{" "}
					<span className="badge badge-pink">Document</span>
				</p>
				<p>
					{" "}
					<span className="badge badge-red-light">Document</span>
				</p>
			</div>
		)}
	</>
);

export const badgeShowcase = {
	id: "no-tabs",
	elements: [
		{
			component: <BadgeOptions id="badge-showcase" />,
			options: {
				radio: [
					{
						id: "badge_type_radio",
						title: "Badge Type",
						values: [
							{
								id: "radio-text",
								name: "Text",
								value: {
									number: false,
								},
							},
							{
								id: "radio-numbers",
								name: "Number",
								value: {
									number: true,
								},
							},
						],
					},
				],
			},
			title: "Badge",
			description:
				"Use the Badge Component Symbol to draw attention to another interface element or to display a notification. It enhances the component to which it is attached with additional information, disclosed to the user upon interacting with it.",
		},
	],
};
