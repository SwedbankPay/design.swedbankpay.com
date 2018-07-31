import React from "react";
import PropTypes from "prop-types";

const MediaObject = ({ imgUrl, icon, heading, text, mediaRight }) => (
    <div className={`media${mediaRight ? " media-right" : ""}`}>
        {(imgUrl || icon) ?
            <div className="media-img">{"\n"}
                {imgUrl ? <img src={imgUrl} /> : null}{imgUrl ? "\n" : null}
                {icon ? <i className="material-icons">{icon}</i> : null}{icon ? "\n" : null}
            </div>
            : null}
        <div className="media-body">
            <h2>{heading}</h2>
            <p>{text}</p>
        </div>
    </div>
);

MediaObject.propTypes = {
    imgUrl: PropTypes.string,
    icon: PropTypes.string,
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    mediaRight: PropTypes.bool
};

export default MediaObject;
