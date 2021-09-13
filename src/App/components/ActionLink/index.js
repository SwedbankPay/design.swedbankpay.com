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
            <span className="action-link-multiline">{"\n"}
                <div>
                    <div className="d-flex flex-row">
                        <span className="action-link-label">{linkText}</span>{"\n"}
                        {badge ? <><span className={`badge ${badge.type}`}>{badge.text}</span>{"\n"}</> : null}
                    </div>
                    <div>
                        {smallText ? <span className="small-text">{smallText}</span> : null }{"\n"}
                    </div>
                </div>
            </span>
            :
            <>
                <span className="mb-0 mr-1 action-link-label">{linkText}</span>{"\n"}
                {badge ? <><span className={`badge ${badge.type}`}>{badge.text}</span>{"\n"}</> : null}
                <div>
                    {smallText ? <span className="small-text">{smallText}</span> : null }{"\n"}
                </div>
            </>
        }{"\n"}
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
