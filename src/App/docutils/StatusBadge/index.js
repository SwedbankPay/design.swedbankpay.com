import React from "react";
import PropTypes from "prop-types";

const statusBadgeContent = {
	new: {
		icon: (
			<i className="material-icons" aria-hidden="true">
				child_care
			</i>
		),
		text: "New",
	},
	updated: {
		icon: (
			<i className="material-icons" aria-hidden="true">
				mood
			</i>
		),
		text: "Newly updated",
	},
	remove: {
		icon: (
			<i className="material-icons" aria-hidden="true">
				sentiment_very_dissatisfied
			</i>
		),
		text: "Being removed",
	},
	javascript: {
		icon: <i className="javascript-icon" aria-hidden="true" />,
		text: "Uses JavaScript",
	},
	deprecated: {
		icon: (
			<i className="material-icons" aria-hidden="true">
				delete_forever
			</i>
		),
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
