import React from "react";
import PropTypes from "prop-types";

const Radio = ({ id, checked, disabled, label, group, groupTitle, options, optional, name, required, className, hintText, expandingHintText, errorMessage }) => {
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
                <form>
                    <fieldset className={`radio-group${errorMessage ? " has-error" : ""}${className ? ` ${className}` : ""}`} disabled={disabled}>{"\n"}
                        <label className="radio-label">
                            {groupTitle} {optional && <span>(optional)</span>}
                        </label>{"\n"}
                        {options.map(({ label, id, checked }, i) => <div className="radio" key={i}>{"\n"}
                            <input {...attrs} id={id} defaultChecked={checked}/>{"\n"}
                            <label htmlFor={id}>{label}</label>{"\n"}
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
                    <div className="radio">{"\n"}
                        <input {...attrs} />{"\n"}
                        {label ? <label htmlFor={id}>{label}</label> : null}{label ? "\n" : null}
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
    className: PropTypes.string,
    hintText: PropTypes.string,
    expandingHintText: PropTypes.string,
    optional: PropTypes.bool
};

export default Radio;
