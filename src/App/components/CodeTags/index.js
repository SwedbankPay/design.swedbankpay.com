import React from "react";
import PropTypes from "prop-types";

const CodeTags = ({ className, type, code, text, removable }) => (
	<>
		{code ? (
			<code className={`code-tags code-tags-${type}`}>{code}</code>
		) : (
			<span
				className={`tag tag-${type}${removable ? " removable" : ""}${
					className ? ` ${className}` : ""
				}`}
			>
				{text}
				{removable && (
					<button type="button" className="close-button">
						<i className="material-icons m-auto" aria-label="remove tag">
							close
						</i>
					</button>
				)}
			</span>
		)}
	</>
);

CodeTags.propTypes = {
	type: PropTypes.string.isRequired,
	code: PropTypes.string,
	text: PropTypes.string,
	removable: PropTypes.bool,
	className: PropTypes.string,
};

export default CodeTags;
