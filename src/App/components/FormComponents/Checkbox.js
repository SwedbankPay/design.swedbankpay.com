import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ id, checked, name, disabled, groupTitle, label, errorMessage, required, group, options }) => {
    const attrs = {
        type: "checkbox",
        id: id || null,
        name,
        disabled: disabled || null,
        defaultChecked: checked || null,
        required
    };

    return (
        <>
            {group ? <form>
                <fieldset className={`checkbox-group${errorMessage ? " has-error" : ""}`} disabled={disabled}>
                    <legend>{groupTitle}</legend>
                    {options.map(({label, id}, i) => <div className="checkbox" key={i}>{"\n"}
                        <input {...attrs} id={id} />{"\n"}
                        <label htmlFor={id}>{label}</label>{"\n"}
                    </div>)}
                    {errorMessage ? <div className="help-block" data-error={errorMessage || null}></div> : null}
                </fieldset>
            </form>
                : <>
                    <div className={`checkbox${errorMessage ? " has-error" : ""}`}>{"\n"}
                        <input {...attrs} />{"\n"}
                        <label htmlFor={id}>{label}</label>{"\n"}
                    </div>
                    {errorMessage ? <div className="help-block" data-error={errorMessage || null}></div> : null}
                </>
            }
        </>
    );
};

Checkbox.propTypes = {
    id: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    errorMessage: PropTypes.string,
    require: PropTypes.bool,
    group: PropTypes.bool,
    groupTitle: PropTypes.string,
    options: PropTypes.array
};

export default Checkbox;
