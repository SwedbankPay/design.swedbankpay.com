import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Alert = ({ id, type, icon = "", close, text, className }) => {
	const alertClasses = classnames(
		"alert",
		`alert-${type}`,
		className ? className : null,
	);

	return (
		<div id={id} className={alertClasses}>
			{"\n"}
			<i className={`at-${icon} alert-icon`} aria-hidden="true"></i>
			{text}
			{"\n"}
			{close ? (
				<>
					<button
						className="alert-close"
						aria-label="Close alert"
						data-alert-close=""
						onClick={(e) => e.preventDefault()}
					>
						{"\n\t\t"}
						<i className="material-icons">close</i>
						{"\n\t"}
					</button>
					{"\n"}
				</>
			) : null}
		</div>
	);
};

Alert.propTypes = {
	id: PropTypes.string,
	type: PropTypes.oneOf(["success", "warning", "danger", "informative"])
		.isRequired,
	icon: PropTypes.string,
	close: PropTypes.bool,
	text: PropTypes.object,
	className: PropTypes.string,
};

export default Alert;
