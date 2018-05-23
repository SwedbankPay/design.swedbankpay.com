import React from "react";
import PropTypes from "prop-types";

const Datepicker = ({ format, time, min, max, months, value, label, required }) => {
    const attrs = {
        className: "form-control",
        type: "text",
        "data-datepicker": true,
        "data-datepicker-format": format || null,
        "data-datepicker-time": time || null,
        "data-datepicker-min": min || null,
        "data-datepicker-max": max || null,
        "data-datepicker-value": value || null,
        "data-datepicker-months": months || null,
        "data-required": required || null
    };

    return (
        label ? (
            <div className="form-group">{"\n"}
                <label>{label}</label>{"\n"}
                <input {...attrs} />{"\n"}
            </div>
        ) : <input {...attrs} />);
};

Datepicker.propTypes = {
    format: PropTypes.oneOf(["nb", "sv", "da", "fi", "en", "iso8601"]),
    time: PropTypes.bool,
    min: PropTypes.string,
    max: PropTypes.string,
    months: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    required: PropTypes.bool
};

export default Datepicker;
