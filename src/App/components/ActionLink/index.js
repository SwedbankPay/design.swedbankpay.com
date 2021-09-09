import React from "react";
import PropTypes from "prop-types";

const ActionLink = props => {
    const { link, ...otherProps } = props;

    return (
        <>
            {otherProps.newTab ?
                <a className={`action-link ${otherProps.multiline ? "multiline" : ""} action-link-new-tab ${otherProps.disabled ? "disabled" : ""}`} href={link ? link : "#"} rel="noopener noreferrer" target="_blank">{"\n"}
                    <ActionLinkContent {...otherProps} />
                </a>
                :
                <a className={`action-link ${otherProps.multiline ? "multiline" : ""} ${otherProps.disabled ? "disabled" : ""}`} href="#" >{"\n"}
                    <ActionLinkContent {...otherProps} />
                </a>
            }
        </>
    );
};

const ActionLinkContent = ({ linkText, badge, smallText, multiline }) => (
    <>
        {multiline ?
            <span className="action-link-multiline">{"\n"}
                <div>
                    <div className="d-flex flex-row">
                        <h4 className="mb-0 mr-1">{linkText}</h4>{"\n"}
                        {badge ? <><span className={`badge ${badge.type}`}>{badge.text}</span>{"\n"}</> : null}
                    </div>
                    <div>
                        {smallText ? <span className="small-text">{smallText}</span> : null }{"\n"}
                    </div>
                </div>
            </span>
            :
            <>
                <h4 className="mb-0 mr-1">{linkText}</h4>{"\n"}
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
