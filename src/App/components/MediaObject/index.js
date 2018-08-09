import React from "react";
import PropTypes from "prop-types";

const MediaObject = ({ size, imgUrl, icon, heading, text, mediaRight }) => {
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

    return (
        <div className={`media${mediaRight ? " media-right" : ""}${size ? ` media-${size}` : ""}`}>
            {(imgUrl || icon) ?
                <div className="media-img">{"\n"}
                    {imgUrl ? <img src={imgUrl} /> : null}{imgUrl ? "\n" : null}
                    {icon ? <i className="material-icons">{icon}</i> : null}{icon ? "\n" : null}
                </div>
                : null}
            <div className="media-body">
                {mediaHeading()}
                <p>{text}</p>
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
