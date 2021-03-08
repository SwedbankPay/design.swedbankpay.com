import React from "react";
import PropTypes from "prop-types";

const Rangeslider = ({ name, min, max, step, value, disabled, valueLabel, valueLabelPrefix, valueLabelPostfix }) => {
    const attrs = {
        type: "range",
        name,
        min,
        max,
        step,
        defaultValue: value,
        disabled
    };

    const ValueLabel = () => (
        <output className="value-label" >{"\n\t\t"}
            <p>{"\n\t\t\t"}
                {valueLabelPrefix ? <span>{valueLabelPrefix}</span> : null}{valueLabelPrefix ? "\n\t\t\t" : null}
                <span data-rs-value>{value}</span>{"\n\t\t\t"}
                {valueLabelPostfix ? <span>{valueLabelPostfix}</span> : null}{valueLabelPostfix ? "\n\t\t" : null}
            </p>{"\n\t"}
        </output>
    );

    return (
        <div>
            <div className="rangeslider">{"\n"}
                <input {...attrs}/>{valueLabel ? "\n" : null}
                {valueLabel ? <ValueLabel /> : null}{valueLabel ? "\n" : null}
            </div>
            <div className={`value-range ${disabled ? "disabled" : ""}`}>
                <small>{min}</small>
                <small>{max}</small>
            </div>
        </div>
    );
};

Rangeslider.propTypes = {
    name: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    color: PropTypes.oneOf(["brand", "neutral", "default"]),
    value: PropTypes.number,
    disabled: PropTypes.bool,
    valueLabel: PropTypes.bool,
    valueLabelPrefix: PropTypes.string,
    valueLabelPostfix: PropTypes.string,
    valueLabelPosition: PropTypes.string
};

export default Rangeslider;
