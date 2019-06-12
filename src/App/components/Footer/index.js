import React from "react";
import PropTypes from "prop-types";

const Footer = ({ className, children }) => (
    <footer className={`page-footer${className ? ` ${className}` : ""}`}>
        {children || <p>© Swedbank Pay (publ)</p>}
    </footer>
);

Footer.propTypes = {
    className: PropTypes.string
};

export default Footer;
