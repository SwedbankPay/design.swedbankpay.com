import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const ActionLink = props => {
    const { link, ...otherProps } = props;
    const actionLinkClasses = classnames(
        "action-link",
        otherProps.newTab ? "action-link-new-tab" : null,
        otherProps.multiline ? "multiline" : null,
        otherProps.disabled ? "disabled" : null
    );

    const attrs = {
        href: link ? link : "#",
        rel: otherProps.newTab ? "noopener noreferrer" : null,
        target: otherProps.newTab ? "_blank" : null
    };

    return (
        <>
            <a className={actionLinkClasses} {...attrs}>{"\n"}
                <ActionLinkContent {...otherProps}/>
            </a>
        </>
    );
};

const ActionLinkContent = ({ linkText, badge, smallText, multiline }) => (
    <>
        {multiline ?
            <>
                <div className="d-flex flex-column"> {"\n"}
                    <span className="action-link-multiline"> {"\n"}
                        <span>{"\n"}<span className="action-link-label">{linkText}</span>{"\n"} {badge ? <span className={`badge ${badge.type}`}>{badge.text}</span> : <></>}{"\n"}</span>
                        <span className="small-text">{smallText}</span>{"\n"}
                    </span>
                </div>
            </>
            :
            <div className="d-flex flex-column">
                <span className="action-link-content"><span className={`action-link-label ${badge ? "" : "no-badge"}`}>{linkText}</span> {badge ? <span className={`badge ${badge.type}`}>{badge.text}</span> : <></>}</span>
            </div>
        }
    </>
);

ActionLink.propTypes = {
    props: PropTypes.shape({
        linkText: PropTypes.string.isRequired,
        badge: PropTypes.shape({
            type: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }),
        smallText: PropTypes.string,
        multiline: PropTypes.bool,
        newTab: PropTypes.bool,
        link: PropTypes.string
    })
};

ActionLinkContent.propTypes = {
    linkText: PropTypes.string.isRequired,
    badge: PropTypes.shape({
        type: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }),
    smallText: PropTypes.string,
    multiline: PropTypes.bool,
    newTab: PropTypes.bool
};

export default ActionLink;

export { ActionLinkContent };
