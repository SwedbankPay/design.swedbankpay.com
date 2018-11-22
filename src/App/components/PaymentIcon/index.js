import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const PaymentIcon = ({ name, preview, previewSize, size, className }) => {
    const classNames = className ? className.split(" ") : [];
    const iconClasses = classnames("payment-icon", name, size, ...classNames);

    return preview || previewSize ? (
        <div className="icon-preview">
            <i className={iconClasses}></i>
            <span>{preview ? name : size}</span>
        </div>
    ) : <i className={iconClasses}></i>;
};

PaymentIcon.propTypes = {
    name: PropTypes.oneOf([
        "amex",
        "diners",
        "mastercard",
        "mobilepay",
        "paypal",
        "swish",
        "vipps",
        "visa"
    ]).isRequired,
    preview: PropTypes.bool,
    size: PropTypes.oneOf([
        "small",
        "medium",
        "large",
        "huge"
    ]),
    className: PropTypes.string
};

export default PaymentIcon;
