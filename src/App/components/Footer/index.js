import React from "react";
import PropTypes from "prop-types";

const Footer = ({ className, children }) => (
    <div className={`page-footer${className ? ` ${className}` : ""}`}>
        {children || <p>© Swedbank Pay (publ)</p>}
    </div>
);

Footer.propTypes = {
    className: PropTypes.string
};

export default Footer;
