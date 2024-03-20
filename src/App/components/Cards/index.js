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
					<i className={`cards-icon ${iconClasses}`} aria-hidden="true"></i>
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
					<div className="cards-content">
						{textContent}
						{children && children}
					</div>
				</>
			)}
			{"\n"}
			<div className="cards-cta">
				{"\n"}
				{hasCTAText && (!isWide || imgSrc) && <span>Continue</span>}
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
	imgRatio: PropTypes.string,
	hasTextContent: PropTypes.bool,
	isWide: PropTypes.bool,
	isButton: PropTypes.bool,
	hasCTAText: PropTypes.bool,
};

export default Cards;
