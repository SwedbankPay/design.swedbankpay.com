import React from "react";
import PropTypes from "prop-types";

const Rangeslider = ({ name, min, max, step, value, valueLabel, valueLabelPrefix, valueLabelPostfix }) => {
    const attrs = {
        type: "range",
        name: name,
        min: min,
        max: max,
        step: step,
        defaultValue: value
    };

    const ValueLabel = () => (
        <div className="value-label">{"\n"}
            <p>{"\n"}
                {valueLabelPrefix ? <span>{valueLabelPrefix}</span> : null}{valueLabelPrefix ? "\n" : null}
                <span data-px-rangeslider-value>{value}</span>{"\n"}
                {valueLabelPostfix ? <span>{valueLabelPostfix}</span> : null}{valueLabelPostfix ? "\n" : null}
            </p>{"\n"}
        </div>
    );

    return (
        <div className="rangeslider">{"\n"}
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
    value: PropTypes.number,
    valueLabel: PropTypes.bool,
    valueLabelPrefix: PropTypes.string,
    valueLabelPostfix: PropTypes.string
};

export default Rangeslider;
