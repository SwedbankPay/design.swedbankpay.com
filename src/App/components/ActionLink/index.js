import React from "react";
import PropTypes from "prop-types";

const ActionLink = ({ linkText, badge }) => (
    <a className="action-link" href="#">{"\n"}
        {badge ? <span className={`badge ${badge.type}`}>{badge.text}</span> : null}{"\n"}
        {linkText}{"\n"}
    </a>
);

ActionLink.propTypes = {
    linkText: PropTypes.string.isRequired,
    badge: PropTypes.shape({
        type: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
};

export default ActionLink;
