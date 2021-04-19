import React from "react";
import PropTypes from "prop-types";

const Rangeslider = ({ label, name, min, max, step, value, disabled, valueLabelPrefix, valueLabelPostfix, tooltip }) => {
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
        <div className={`rangeslider ${disabled ? "disabled" : ""}`}>{"\n"}
            <label htmlFor="rangeslider" className="rangeslider-label">{"\n"}
                {label}{"\n"}
                {tooltip &&
                <>
                    <i className="material-icons" data-tooltip="Some informational text" data-tooltip-position="top">{"\n"}
                        help_outline{"\n"}
                    </i>{"\n"}
                </>}
            </label>{"\n"}
            <input {...attrs}/>{"\n"}

            <ValueLabel />
            <div className="value-range">{"\n"}
                <small>{min}{valueLabelPostfix ? valueLabelPostfix : null}</small>{"\n"}
                <small>{max}{valueLabelPostfix ? valueLabelPostfix : null}</small>{"\n"}
            </div>
        </div>
    );
};

Rangeslider.propTypes = {
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
