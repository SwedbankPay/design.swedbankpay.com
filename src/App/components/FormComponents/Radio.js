import React from "react";
import PropTypes from "prop-types";

const Radio = ({ id, checked, disabled, label, group, groupTitle, options, optional, name, required, className, hintText, hintTextExpanded, errorMessage }) => {
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
                    <fieldset className={`radio-group${className ? ` ${className}` : ""}`} disabled={disabled}>{"\n"}
                        <label>
                            {groupTitle} {optional && <span>(optional)</span>}
                        </label>{"\n"}
                        {options.map(({ label, id, checked }, i) => <div className="radio" key={i}>{"\n"}
                            <input {...attrs} id={id} defaultChecked={checked}/>{"\n"}
                            <label htmlFor={id}>{label}</label>{"\n"}
                        </div>)}
                        {errorMessage ? <div className="help-block-error">{errorMessage}</div> : null}
                        {hintText && <div className="help-block">{hintText}</div>}
                        {hintTextExpanded && 
                        <div className="help-block-expander">
                            <input type="checkbox" id="expanding-hint-text" className="hide-content"/>
                            <label tabindex="0" htmlFor="expanding-hint-text"><i className="material-icons">keyboard_arrow_down</i>{hintTextExpanded}</label>
                            <div className="content hide-content">
                            This information is less important and only a minority of users will need it or the text is very long. In this case; both.
                            </div>
                    </div>}
                    </fieldset>
                </form>
                : <>
                    <div className="radio">{"\n"}
                        <input {...attrs} />{"\n"}
                        {label ? <label htmlFor={id}>{label}</label> : null}{label ? "\n" : null}
                    </div>
                    {errorMessage ? <div className="help-block-error">{errorMessage}</div> : null}
                    {hintText && <div className="help-block">{hintText}</div>}
                    {hintTextExpanded && 
                    <div className="help-block-expander">
                        <input type="checkbox" id="expanding-hint-text" className="hide-content"/>
                        <label tabIndex="0" htmlFor="expanding-hint-text"><i className="material-icons">keyboard_arrow_down</i>{hintTextExpanded}</label>
                        <div className="content hide-content">
                        This information is less important and only a minority of users will need it or the text is very long. In this case; both.
                        </div>
                    </div>}
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
    hintTextExpanded: PropTypes.string,
    optional: PropTypes.bool
};

export default Radio;
