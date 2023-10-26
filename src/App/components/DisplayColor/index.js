import React from "react";
import PropTypes from "prop-types";

const DisplayColor = ({
	title,
	subTitle,
	hex,
	hasBorderOverWhiteBG = false,
	isSizeLarge = true,
	isVertical = true,
}) => {
	if (isSizeLarge) {
		return (
			<div className={`d-flex ${isVertical ? "flex-column" : ""} mb-2`}>
				<div className={`color-box ${hasBorderOverWhiteBG ? "border" : ""}`}>
					<svg>
						<rect fill={hex} />
					</svg>
				</div>
				<div className="text-box d-flex flex-column">
					<p className="font-weight-bold mb-0">{title}</p>
					<small className="small mb-0">{subTitle}</small>
					<small className="small mb-0 text-uppercase">{hex}</small>
				</div>
			</div>
		);
	} else if (!isSizeLarge) {
		return (
			<li
				className={`d-flex ${isVertical ? "flex-column" : ""} py-1 px-0`}
				key={`functional-color-${title}`}
			>
				<div
					className={`color-swatch color-box-small ${
						hasBorderOverWhiteBG ? "border" : ""
					}`}
					style={{
						"--bg-color": `var(--${subTitle}, ${hex})`,
					}}
				></div>
				<div className="d-flex flex-column">
					<small>
						<span className="font-weight-bold">{title}</span>
					</small>
					<small>
						<span className="text-muted">{subTitle}</span>
					</small>
					<small>
						<span className="text-muted">{hex}</span>
					</small>
				</div>
			</li>
		);
	}
};

DisplayColor.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string,
	hex: PropTypes.string.isRequired,
	hasBorderOverWhiteBG: PropTypes.bool,
	isSizeLarge: PropTypes.bool,
	isVertical: PropTypes.bool,
};

export default DisplayColor;
