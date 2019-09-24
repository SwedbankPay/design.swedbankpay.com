import React from "react";
import PropTypes from "prop-types";

const ActionLink = ({ linkText, badge, smallText, multiline }) => (
    <a className="action-link" href="#">{"\n"}
        {badge ? <span className={`badge ${badge.type}`}>{badge.text}</span> : null}{"\n"}
        {multiline ?
            <span className={multiline ? "action-link-multiline" : null}>{"\n"}
                {linkText}{"\n"}
                {smallText ? <span className="small-text">{smallText}</span> : null }{"\n"}
            </span>
            :
            <>
                {linkText}{"\n"}
                {smallText ? <span className="small-text">{smallText}</span> : null }{"\n"}
            </>
        }{"\n"}
    </a>
);

ActionLink.propTypes = {
    linkText: PropTypes.string.isRequired,
    badge: PropTypes.shape({
        type: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }),
    smallText: PropTypes.string,
    multiline: PropTypes.bool
};

export default ActionLink;
