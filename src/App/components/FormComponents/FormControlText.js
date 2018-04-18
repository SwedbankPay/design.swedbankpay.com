import React from "react";
import PropTypes from "prop-types";

const FormControlText = ({ text, label }) => {
    return (
        <div className="form-group">{"\n"}
            {label ? <label>{label}</label> : null}{label ? "\n" : null}
            <span className="form-control-text">{text}</span>{"\n"}
        </div>
    );
};

FormControlText.propTypes = {
    text: PropTypes.string.isRequired,
    label: PropTypes.string
};

export default FormControlText;
