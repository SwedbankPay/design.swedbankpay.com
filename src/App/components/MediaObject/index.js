import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const MediaObject = ({ size, imgUrl, icon, heading, text, textSmall, mediaRight, muted }) => {
    const mediaHeading = () => {
        const headingClasses = classnames(muted ? "text-muted" : null);

        switch (size) {
            case "sm":
                return <h4 className={headingClasses}>{heading}</h4>;
            case "lg":
                return <h2 className={headingClasses}>{heading}</h2>;
            default:
                return <h3 className={headingClasses}>{heading}</h3>;
        }
    };

    const mediaClasses = classnames(
        "media",
        mediaRight ? "media-right" : null,
        size ? `media-${size}` : null
    );

    const iconClasses = classnames(
        "material-icons",
        muted ? "text-muted" : null
    );

    return (
        <div className={mediaClasses}>
            {(imgUrl || icon) ?
                <div className="media-img">{"\n"}
                    {imgUrl ? <> <img src={imgUrl} /> {"\n"} </> : null}
                    {icon ? <> <i className={iconClasses} aria-hidden="true">{icon}</i> {"\n"} </> : null}
                </div>
                : null}
            <div className="media-body">
                {mediaHeading()}
                <p>{textSmall ? <small>{text}</small> : text}</p>
            </div>
        </div>
    );
};

MediaObject.propTypes = {
    size: PropTypes.oneOf(["sm", "lg"]),
    imgUrl: PropTypes.string,
    icon: PropTypes.string,
    heading: PropTypes.string.isRequired,
    text: PropTypes.string,
    textSmall: PropTypes.bool,
    mediaRight: PropTypes.bool,
    muted: PropTypes.bool
};

export default MediaObject;
