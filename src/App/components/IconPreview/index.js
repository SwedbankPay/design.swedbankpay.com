import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const IconPreview = ({ name, squaredFlag, preview, previewSize, size, className, type }) => {
    const classNames = className ? className.split(" ") : [];
    const iconClasses = classnames(
        type,
        type === "payment-icon" ? name : "",
        type === "flag-icon" ? `flag-icon-${name}` : "",
        squaredFlag ? "flag-icon-squared" : "",
        size,
        ...classNames
    );

    return preview || previewSize ? (
        <div className="icon-preview">
            <i className={iconClasses}>{iconClasses.includes("material-icons") ? name : null}</i>
            <code className="token property p-0 mt-2">{preview ? name : `.${size}`}</code>
        </div>
    ) : <i className={iconClasses}>{iconClasses.includes("material-icons") ? name : null}</i>;
};

IconPreview.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    squaredFlag: PropTypes.bool,
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
