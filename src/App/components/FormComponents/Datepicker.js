import React from "react";
import PropTypes from "prop-types";

const Datepicker = ({ format, value, time, min, max }) => {
    const attrs = {
        defaultValue: value || null,
        "data-datepicker": true,
        "data-datepicker-format": format || null,
        "data-datepicker-time": time || null,
        "data-datepicker-min": min || null,
        "data-datepicker-max": max || null
    };

    return (
        <input className="form-control" type="text" {...attrs} />
    );
};

Datepicker.propTypes = {
    value: PropTypes.string,
    format: PropTypes.string,
    time: PropTypes.bool
};

export default Datepicker;
