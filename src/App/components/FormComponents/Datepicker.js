import React from "react";
import PropTypes from "prop-types";

const Datepicker = ({ format, time, min, max, value }) => {
    const attrs = {
        "data-datepicker": true,
        "data-datepicker-format": format || null,
        "data-datepicker-time": time || null,
        "data-datepicker-min": min || null,
        "data-datepicker-max": max || null,
        "data-datepicker-init-value": value || null
    };

    return <input className="form-control" type="text" {...attrs} />;
};

Datepicker.propTypes = {
    format: PropTypes.oneOf(["nb", "sv", "da", "en", "iso8601"]),
    time: PropTypes.bool
};

export default Datepicker;
