import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ id, checked, name, disabled, groupTitle, label, errorMessage, hintText, optional, required, group, options, className, expandingHintText }) => {
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
                    <label className="checkbox-label">
                        {groupTitle}
                        {optional && <>{"\n"}
                            <span>(optional)</span>
                        </>}
                    </label>
                    {options.map(({ label, id }, i) => <div className="checkbox" key={i}>{"\n"}
                        <input {...attrs} id={id} />{"\n"}
                        <label htmlFor={id}>{label}

                        </label>{"\n"}
                    </div>)}
                    {errorMessage ? <div className="help-block">{errorMessage}</div> : null}
                    {hintText && <div className="hint-text">{hintText}</div>}
                    {expandingHintText && 
                    <label className="help-block-expander">
                        <input disabled={disabled} type="checkbox"/>
                        <span className="header"><span className="material-icons arrow">keyboard_arrow_down</span>{expandingHintText}</span>
                        <div className="content">This information is less important and only a minority of users will need it or the text is very long. In this case; both.</div>
                    </label>}
                </fieldset>
            </form>
                : <>
                    <div className={`checkbox${className ? ` ${className}` : ""}${errorMessage ? " has-error" : ""}`}>{"\n"}
                        <input {...attrs} />{"\n"}
                        <label htmlFor={id} className="d-block">{label}</label>{"\n"}
                    </div>
                    {errorMessage ? <div className="help-block">{errorMessage}</div> : null}
                    {hintText && <div className="hint-text">{hintText}</div>}
                    {expandingHintText && 
                    <label className="help-block-expander">
                        <input disabled={disabled} type="checkbox"/>
                        <span className="header"><span className="material-icons arrow">keyboard_arrow_down</span>{expandingHintText}</span>
                        <div className="content">This information is less important and only a minority of users will need it or the text is very long. In this case; both.</div>
                    </label>}
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
    hintText: PropTypes.string,
    expandingHintText: PropTypes.string,
};

export default Checkbox;
