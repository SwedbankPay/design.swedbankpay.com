import React from "react";
import PropTypes from "prop-types";

const OuterTagElement = ({ isButton = false, isWide = false, children }) => {
	return isButton ? (
		<button className={`cards ${isWide ? "cards-wide" : ""}`}>
			{children}
		</button>
	) : (
		<a href="#" className={`cards ${isWide ? "cards-wide" : ""}`}>
			{children}
		</a>
	);
};

const Cards = ({
	titleTxt,
	imgSrc,
	iconClasses,
	hasTextContent,
	textContent,
	children,
	isWide,
	isButton,
	hasTitle,
	hasCTAText,
	imgRatio,
}) => (
	<>
		{/* TODO: set conditional <a> || <button> */}
		<OuterTagElement isButton={isButton} isWide={isWide}>
			{imgSrc && (
				<>
					{"\n"}
					<img
						className={imgRatio ?? ""}
						src={imgSrc}
						alt="alt text to be set"
					/>
				</>
			)}
			{/* no icon displayed if an image used as illustration */}
			{iconClasses && !imgSrc && (
				<>
					{"\n"}
					<i className={`title-icon ${iconClasses}`} aria-hidden="true"></i>
				</>
			)}
			{hasTitle && (
				<>
					{"\n"}
					<span className="h4">{titleTxt}</span>
				</>
			)}
			{(hasTextContent || children) && (
				<>
					{"\n"}
					<div className="card-content">
						{textContent}
						{children && children}
					</div>
				</>
			)}
			{"\n"}
			<div className="card-cta">
				{"\n"}
				{hasCTAText && <span>Continue</span>}
				<span className="arrow"></span>
			</div>
		</OuterTagElement>
	</>
);

Cards.propTypes = {
	titleTxt: PropTypes.string,
	hasTitle: PropTypes.bool,
	imgSrc: PropTypes.string,
	iconClasses: PropTypes.string,
	textContent: PropTypes.string,
	children: PropTypes.object,
	wide: PropTypes.bool,
	imgRatio: PropTypes.string,
};

export default Cards;
