import React from "react";
import PropTypes from "prop-types";

const Accordion = ({ items, className }) =>
	items.map(({ title, content, id }, i) => (
		<div key={title + i} className={`accordion ${className ? className : ""}`}>
			{"\n"}
			<button
				type="button"
				className="accordion-header"
				aria-expanded="false"
				aria-controls={id}
			>
				{"\n"}
				{title}
				{"\n"}
			</button>
			<div className="accordion-body" id={id}>
				{content}
			</div>
		</div>
	));

Accordion.propTypes = {
	className: PropTypes.string,
	items: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		})
	).isRequired,
};

export default Accordion;
