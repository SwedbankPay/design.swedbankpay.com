import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ id, checked, name, disabled, groupTitle, label, errorMessage, helpBlock, optional, required, group, options, className }) => {
    const attrs = {
        type: "checkbox",
        id: id || null,
        name,
        disabled: disabled || null,
        defaultChecked: checked || null,
        required,
        "aria-describedby": helpBlock || null
    };

    return (
        <>
            {group ? <form>
                <fieldset className={`checkbox-group${errorMessage ? " has-error" : ""}`} disabled={disabled}>
                    <legend>
                        {groupTitle}
                        {optional && <>{"\n"}
                            <span>(optional)</span>
                        </>}
                    </legend>
                    {options.map(({ label, id }, i) => <div className="checkbox" key={i}>{"\n"}
                        <input {...attrs} id={id} />{"\n"}
                        <label htmlFor={id}>{label}</label>{"\n"}
                    </div>)}
                    {errorMessage && <><div className="help-block"><i className="material-icons">warning</i>{errorMessage}</div>{"\n"}</>}
                    {helpBlock && <><p id="hint-text" className="hint-text">{helpBlock}</p>{"\n"}</>}
                </fieldset>
            </form>
                : <>
                    <div className={`checkbox${className ? ` ${className}` : ""}${errorMessage ? " has-error" : ""}`}>{"\n"}
                        <input {...attrs} />{"\n"}
                        <label htmlFor={id} className="d-block">{label}</label>{"\n"}
                    </div>
                </>
            }
        </>
    );
};

Checkbox.propTypes = {
    id: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    name: PropTypes.string,
    errorMessage: PropTypes.string,
    require: PropTypes.bool,
    group: PropTypes.bool,
    groupTitle: PropTypes.string,
    options: PropTypes.array,
    optional: PropTypes.bool,
    helpBlock: PropTypes.string,
};

export default Checkbox;
