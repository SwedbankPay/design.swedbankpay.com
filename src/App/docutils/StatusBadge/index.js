import React from "react";
import PropTypes from "prop-types";

const statusBadgeContent = {
	new: {
		icon: (
			<i className="at-hand-holding-seedling small mr-2" aria-hidden="true"></i>
		),
		text: "New",
	},
	updated: {
		icon: <i className="at-click-select small mr-2" aria-hidden="true"></i>,
		text: "Newly updated",
	},
	remove: {
		icon: <i className="at-axe" aria-hidden="true"></i>,
		text: "Being removed",
	},
	javascript: {
		icon: <i className="javascript-icon" aria-hidden="true" />,
		text: "Uses JavaScript",
	},
	deprecated: {
		icon: <i className="at-trash small mr-2" aria-hidden="true"></i>,
		text: "Deprecated",
	},
};

const StatusBadge = ({ type }) => (
	<>
		{type && (
			<span className={`status-badge status-badge-${type}`}>
				{statusBadgeContent[type].icon}
				{statusBadgeContent[type].text}
			</span>
		)}
	</>
);

StatusBadge.propTypes = {
	type: PropTypes.oneOf([
		"new",
		"updated",
		"remove",
		"javascript",
		"deprecated",
	]).isRequired,
};

export default StatusBadge;
