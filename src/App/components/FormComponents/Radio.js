import React from "react";
import PropTypes from "prop-types";

const Radio = ({ id, checked, disabled, label, group, groupTitle, options, name, tooltip, required, className }) => {
    const attrs = {
        type: "radio",
        id: id || null,
        name: name || null,
        disabled: disabled || null,
        defaultChecked: checked || null,
        required
    };

    return (
        <>
            {group ?
                <fieldset className={`radio-group${className ? ` ${className}` : ""}`} disabled={disabled}>
                    <legend>
                        {groupTitle}
                        {tooltip && <>
                            {"\n"}<i className="material-icons help-icon" data-tooltip="Some informative text" data-tooltip-position="top">{"\n"}
                                help_outline{"\n"}</i>
                        </>}{"\n"}
                    </legend>
                    {options.map(({ label, id, checked }, i) => <div className="radio" key={i}>{"\n"}
                        <input {...attrs} id={id} defaultChecked={checked}/>{"\n"}
                        <label htmlFor={id}>{label}</label>{"\n"}
                    </div>)}
                </fieldset>
                : <>
                    <div className="radio">{"\n"}
                        <input {...attrs} />{"\n"}
                        {label ? <label htmlFor={id}>{label}</label> : null}{label ? "\n" : null}
                    </div>
                </>
            }
        </>
    );
};

Radio.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    group: PropTypes.bool,
    groupTitle: PropTypes.string,
    options: PropTypes.array,
    require: PropTypes.bool,
    tooltip: PropTypes.bool,
    className: PropTypes.string
};

export default Radio;
