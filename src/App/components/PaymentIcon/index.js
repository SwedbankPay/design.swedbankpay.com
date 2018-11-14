import React from "react";
import PropTypes from "prop-types";

const PaymentIcon = ({ name }) => <i className={`payment-icon ${name}`}></i>;

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
    ]).isRequired
};

export default PaymentIcon;
