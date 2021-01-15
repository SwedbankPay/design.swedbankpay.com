import React from "react";
import PropTypes from "prop-types";

const statusBadgeContent = {
    new: {
        icon: <i className="material-icons">child_care</i>,
        text: "New"
    },
    updated: {
        icon: <i className="material-icons">mood</i>,
        text: "Newly updated"
    },
    remove: {
        icon: <i className="material-icons">sentiment_very_dissatisfied</i>,
        text: "Being removed"
    },
    javascript: {
        icon: <i className="javascript-icon"/>,
        text: "Uses JavaScript"
    }

};

const StatusBadge = ({ type }) => (
    <>
        {type && <span className={`status-badge status-badge-${type}`}>{statusBadgeContent[type].icon}{statusBadgeContent[type].text}</span>}
    </>
);

StatusBadge.propTypes = {
    type: PropTypes.oneOf(["new", "updated", "remove", "javascript"]).isRequired
};

export default StatusBadge;
