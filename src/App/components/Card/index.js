import React from "react";
import PropTypes from "prop-types";

// FIXME: is this component actually used ? why is there both Card && CardS components existing in parallel. It is at best confusing. At worst one is completely deprecated and I converted the test for nothing 😜 ahahhaha
const Card = ({
	type,
	titleTxt,
	titleMarkup,
	imgSrc,
	text,
	textSection,
	smallText,
	btn,
	btnClass,
	btnText,
	bodyClass,
	footerTxt,
	footerLink,
	footerLinkTxt,
	children,
}) => (
	<div className={`card${type ? ` card-${type}` : ""}`}>
		{imgSrc ? (
			<div className="card-img">
				{"\n"}
				<img src={imgSrc} alt="" />
				{"\n"}
			</div>
		) : null}
		{titleTxt ? (
			<header className="card-header">
				<h3>{titleTxt}</h3>
			</header>
		) : titleMarkup ? (
			<header className="card-header">{titleMarkup}</header>
		) : null}
		<div className={`card-body${bodyClass ? ` ${bodyClass}` : ""}`}>
			{children ? children : null}
			{text ? <p>{text}</p> : null}
			{"\n"}
			{textSection
				? textSection.map((secText, i) => <p key={`card-p-${i}`}>{secText}</p>)
				: null}
			{btn ? (
				<button
					type="button"
					className={`btn btn-primary${btnClass ? ` ${btnClass}` : ""}`}
				>
					{"\n"}
					{btnText}
					{"\n"}
				</button>
			) : null}
		</div>
		{footerTxt || footerLinkTxt ? (
			<footer className="card-footer">
				{smallText ? <small>{smallText}</small> : null}
				{footerTxt ? footerTxt : null}
				{footerLinkTxt ? (
					<div className="footer-link">
						<a href={footerLink || "#"}>{footerLinkTxt}</a>
					</div>
				) : null}
			</footer>
		) : null}
	</div>
);

Card.propTypes = {
	type: PropTypes.oneOf(["primary", "secondary", "plain"]),
	imgSrc: PropTypes.string,
	titleTxt: PropTypes.string,
	titleMarkup: PropTypes.object,
	icon: PropTypes.string,
	text: PropTypes.string,
	smallText: PropTypes.string,
	textSection: PropTypes.array,
	btn: PropTypes.bool,
	btnText: PropTypes.string,
	footerLink: PropTypes.string,
	footerLinkTxt: PropTypes.string,
};

export default Card;
