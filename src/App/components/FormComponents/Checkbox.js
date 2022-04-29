import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ id, checked, name, disabled, groupTitle, label, errorMessage, hintText, optional, required, group, options, className, expandingHintTitle, hintTextId, expandingHintId }) => {
    const attrs = {
        type: "checkbox",
        id: id || null,
        name,
        disabled: disabled || null,
        defaultChecked: checked || null,
        required,
        "aria-describedby": hintText || expandingHintTitle ? `${hintText ? hintTextId : ""}${expandingHintTitle ? ` ${expandingHintId}` : ""}` : null
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
                        <label htmlFor={id}>{label}

                        </label>{"\n"}
                    </div>)}
                    {errorMessage ? <div className="help-block">{errorMessage}</div> : null}
                    {hintText && <div className="hint-text" id={hintTextId}>{hintText}</div>}
                    {expandingHintTitle && 
                    <label className="help-block-expander">
                        <input disabled={disabled} type="checkbox"/>
                        <span className="header"><span aria-hidden="true" className="material-icons arrow">keyboard_arrow_down</span>{expandingHintTitle}</span>
                        <div className="content" id={expandingHintId}>This information is less important and only a minority of users will need it or the text is very long. In this case; both.</div>
                    </label>}
                </fieldset>
            </form>
                : <>
                    <div className={`checkbox${className ? ` ${className}` : ""}${errorMessage ? " has-error" : ""}`}>{"\n"}
                        <input {...attrs} />{"\n"}
                        <label htmlFor={id} className="d-block">{label}</label>{"\n"}
                    </div>
                    {errorMessage ? <div className="help-block" id={hintTextId}>{errorMessage}</div> : null}
                    {hintText && <div className="hint-text">{hintText}</div>}
                    {expandingHintTitle && 
                    <label className="help-block-expander">
                        <input disabled={disabled} type="checkbox"/>
                        <span className="header"><span aria-hidden="true" className="material-icons arrow">keyboard_arrow_down</span>{expandingHintTitle}</span>
                        <div className="content" id={expandingHintId}>This information is less important and only a minority of users will need it or the text is very long. In this case; both.</div>
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
    expandingHintTitle: PropTypes.string,
};

export default Checkbox;
