import React from "react";
import PropTypes from "prop-types";

const Rangeslider = ({ name, min, max, step, color, value, valueLabel, valueLabelPrefix, valueLabelPostfix, valueLabelPosition }) => {
    const attrs = {
        type: "range",
        name: name,
        min: min,
        max: max,
        step: step,
        defaultValue: value
    };

    const ValueLabel = () => (
        <output className={`value-label${valueLabelPosition ? ` value-label-position-${valueLabelPosition}` : " value-label-position-right" }`} >{"\n"}
            <p>{"\n"}
                {valueLabelPrefix ? <span>{valueLabelPrefix}</span> : null}{valueLabelPrefix ? "\n" : null}
                <span data-px-rangeslider-value>{value}</span>{"\n"}
                {valueLabelPostfix ? <span>{valueLabelPostfix}</span> : null}{valueLabelPostfix ? "\n" : null}
            </p>{"\n"}
        </output>
    );

    return (
        <div className={`rangeslider rangeslider-${color ? color : "brand"}`}>{"\n"}
            <input {...attrs}/>{"\n"}
            {valueLabel ? <ValueLabel /> : null}
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
    valueLabel: PropTypes.bool,
    valueLabelPrefix: PropTypes.string,
    valueLabelPostfix: PropTypes.string,
    valueLabelPosition: PropTypes.string
};

export default Rangeslider;
