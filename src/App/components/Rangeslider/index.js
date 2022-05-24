import React from "react";
import PropTypes from "prop-types";

const Rangeslider = ({ id, label, name, min, max, step, value, disabled, valueLabelPrefix, valueLabelPostfix }) => {
    const attrs = {
        type: "range",
        id,
        name,
        min,
        max,
        step,
        defaultValue: value,
        disabled
    };

    return (
        <div className="rangeslider">{"\n"}
            <input {...attrs}/>{"\n"}
            <div className="information-container">{"\n"}
                <label htmlFor={id} className="rangeslider-label">{"\n"}
                    {label}{"\n"}
                </label>{"\n"}
                <output className="value-label" >{"\n\t\t"}
                    {valueLabelPrefix ? <span>{valueLabelPrefix}</span> : null}{valueLabelPrefix ? "\n\t\t\t" : null}
                    <span data-rs-value>{value}</span>{"\n\t\t\t"}
                    {valueLabelPostfix ? <span>{valueLabelPostfix}</span> : null}{valueLabelPostfix ? "\n\t\t" : null}
                </output>
            </div>
            <div className="value-range">{"\n"}
                <small>{valueLabelPrefix ? valueLabelPrefix : null}{min}{valueLabelPostfix ? valueLabelPostfix : null}</small>{"\n"}
                <small>{valueLabelPrefix ? valueLabelPrefix : null}{max}{valueLabelPostfix ? valueLabelPostfix : null}</small>{"\n"}
            </div>
        </div>
    );
};

Rangeslider.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    value: PropTypes.number,
    disabled: PropTypes.bool,
    valueLabelPrefix: PropTypes.string,
    valueLabelPostfix: PropTypes.string
};

export default Rangeslider;
