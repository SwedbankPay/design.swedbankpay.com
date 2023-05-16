import React from "react";
import PropTypes from "prop-types";

const JavascriptDocElement = ({ code, description }) => (
	<>
		<li>
			<div>
				<h3 scope="row">{code}</h3>
				<p className="javascript-doc-element-description">{description}</p>
			</div>
		</li>
	</>
);

JavascriptDocElement.propTypes = {
	code: PropTypes.object.isRequired,
	description: PropTypes.object.isRequired,
};

export default JavascriptDocElement;
