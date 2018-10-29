import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const MediaObject = ({ size, imgUrl, icon, heading, text, textsm, mediaRight }) => {
    const mediaHeading = () => {
        switch (size) {
            case "sm":
                return <h4>{heading}</h4>;
            case "lg":
                return <h2>{heading}</h2>;
            default:
                return <h3>{heading}</h3>;
        }
    };

    const mediaClasses = classnames(
        "media",
        mediaRight ? "media-right" : null,
        size ? `media-${size}` : null
    );

    return (
        <div className={mediaClasses}>
            {(imgUrl || icon) ?
                <div className="media-img">{"\n"}
                    {imgUrl ? <img src={imgUrl} /> : null}{imgUrl ? "\n" : null}
                    {icon ? <i className="material-icons">{icon}</i> : null}{icon ? "\n" : null}
                </div>
                : null}
            <div className="media-body">
                {mediaHeading()}
                <p>{textsm ?
                    <small>{textsm}</small>
                    : text}</p>
            </div>
        </div>
    );
};

MediaObject.propTypes = {
    size: PropTypes.oneOf(["sm", "lg"]),
    imgUrl: PropTypes.string,
    icon: PropTypes.string,
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    mediaRight: PropTypes.bool
};

export default MediaObject;
