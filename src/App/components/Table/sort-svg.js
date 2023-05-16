import React from "react";

const SortSvg = ({ id }) => (
	<button id={id} className="svg-container">
		<svg
			aria-hidden="true"
			className="sort-svg"
			viewBox="0 0 100 150"
			width="100%"
		>
			<rect width="100%" height="100%" x="0" y="0" fill="none" stroke="none" />
			<g>
				<path
					className="sort sort-down"
					d="M14.532583675302659,111.38865158861287 L14.532583675302659,44.40074494634466 L82.65465743819536,111.38865158861287 L14.532583675302659,111.38865158861287 z"
					transform="rotate(-45 48.59361267089846,77.8946990966797)"
				/>
				<path
					className="sort sort-up"
					d="M14.64011075250069,82.46391938036092 L14.64011075250069,15.476012738092706 L82.76218451539339,82.46391938036092 L14.64011075250069,82.46391938036092 z"
					transform="rotate(135.10440063476562 48.70114517211913,48.96996307373047)"
				/>
			</g>
		</svg>
	</button>
);

export default SortSvg;
