import React from "react";
import PropTypes from "prop-types";

const ActionLink = props => (
    <>
        {props.newTab ?
            <a className="action-link action-link-new-tab" href="#" target="_blank">{"\n"}
                <ActionLinkContent {...props} />
            </a>
            :
            <a className="action-link" href="#" >{"\n"}
                <ActionLinkContent {...props} />
            </a>
        }
    </>
);

const ActionLinkContent = ({ linkText, badge, smallText, multiline, newTab }) => (
    <>
        {newTab ? <><i className="material-icons">open_in_new</i>{"\n"}</> : null}
        {badge ? <><span className={`badge ${badge.type}`}>{badge.text}</span>{"\n"}</> : null}
        {multiline ?
            <span className="action-link-multiline">{"\n"}
                {linkText}{"\n"}
                {smallText ? <span className="small-text">{smallText}</span> : null }{"\n"}
            </span>
            :
            <>
                {linkText}{"\n"}
                {smallText ? <span className="small-text">{smallText}</span> : null }{"\n"}
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
        newTab: PropTypes.bool
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
