import React from "react";
import PropTypes from "prop-types";

const DocViewHeading = ({ title }) => {
    document.title = `${title} | PayEx DesignGuide`;
    return (
        <div className="view-heading">
            <h2>{title}</h2>
        </div>
    );
};

DocViewHeading.propTypes = { title: PropTypes.string.isRequired };

export default DocViewHeading;
