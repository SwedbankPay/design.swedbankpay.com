import React from "react";
import PropTypes from "prop-types";
import { ToggleLightbox } from "@src/App/utils";

const Lightbox = ({ imgSrc, alt }) => (
    <>
        <div>
            <div className="lightbox" onClick={e => ToggleLightbox(e)}>
                <img src={imgSrc} className="img-fluid" alt={alt}/>
            </div>
            <img src={imgSrc} className="img-fluid" alt={alt}/>
        </div>
    </>
);

Lightbox.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    alt: PropTypes.string
};

export default Lightbox;
