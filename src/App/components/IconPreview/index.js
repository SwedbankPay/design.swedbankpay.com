import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const IconPreview = ({ name, preview, previewSize, size, className, type }) => {
    const classNames = className ? className.split(" ") : [];
    const iconClasses = classnames(type, type === "payment-icon" ? name : "", size, ...classNames);

    return preview || previewSize ? (
        <div className="icon-preview">
            <i className={iconClasses}>{iconClasses.includes("material-icons") ? name : null}</i>
            <span>{preview ? name : size}</span>
        </div>
    ) : <i className={iconClasses}></i>;
};

IconPreview.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    preview: PropTypes.bool,
    size: PropTypes.oneOf([
        "tiny",
        "small",
        "medium",
        "large",
        "huge"
    ]),
    className: PropTypes.string
};

export default IconPreview;
