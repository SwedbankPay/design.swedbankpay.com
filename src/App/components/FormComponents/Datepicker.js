import React from "react";
import PropTypes from "prop-types";
import { Addon } from "@/InputGroup";

const Datepicker = ({ format, time, min, max, months, value, label, required, prefixValue, prefixType, id }) => {
    const attrs = {
        className: "form-control",
        type: "text",
        "data-datepicker": "",
        "data-datepicker-format": format || null,
        "data-datepicker-time": time || null,
        "data-datepicker-min": min || null,
        "data-datepicker-max": max || null,
        "data-datepicker-value": value || null,
        "data-datepicker-months": months || null,
        "data-required": required || null,
        id
    };

    return (
        label ? (
            <div className="form-group">{"\n"}
                <label htmlFor={id || null}>{label}</label>{"\n"}
                <div className="input-group">{"\n"}
                    {prefixValue ? <Addon type={ prefixType } value={ prefixValue } /> : null}{"\n"}
                    <input {...attrs} />{"\n"}
                </div>
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
    id: PropTypes.string,
    required: PropTypes.bool
};

export default Datepicker;
