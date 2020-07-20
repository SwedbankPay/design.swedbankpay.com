import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const IconPreview = ({ name, squaredFlag, preview, previewSize, size, className, type }) => {
    const classNames = className ? className.split(" ") : [];
    const iconClasses = classnames(
        type,
        size ? `${type}-${size}` : "",
        type === "material-icons" ? "" : `${type}-${name}`,
        squaredFlag ? "flag-icon-squared" : "",
        ...classNames
    );

    return preview || previewSize ? (
        <div className="icon-preview">
            <i className={iconClasses} aria-hidden="true">{iconClasses.includes("material-icons") ? name : null}</i>
            <code className="code-tags code-tags-secondary mt-2">
                {previewSize ? size : name}
            </code>
        </div>
    ) : <i className={iconClasses} aria-hidden="true">{iconClasses.includes("material-icons") ? name : null}</i>;
};

IconPreview.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf([
        "material-icons",
        "payment-icon",
        "flag-icon"
    ]),
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
