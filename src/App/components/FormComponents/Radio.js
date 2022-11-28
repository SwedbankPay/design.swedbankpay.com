import React from "react";
import PropTypes from "prop-types";

const Radio = ({ id, checked, disabled, label, group, groupTitle, options, optional, name, required, className, style, helpBlock, expanderId, expandingHintTitle, errorMessage }) => {
    const attrs = {
        type: "radio",
        id: id || null,
        name: name || null,
        disabled: disabled || null,
        defaultChecked: checked || null,
        required,
        "aria-describedby": helpBlock || expandingHintTitle ? `${helpBlock ? helpBlock : ""}${expandingHintTitle ? ` ${expanderId}` : ""}` : null
    };

    return (
        <>
            {group ?
                <form>
                    <fieldset className={`radio-group${errorMessage ? " has-error" : ""}${className ? ` ${className}` : ""}`} disabled={disabled}>{"\n"}
                        <legend>
                            {groupTitle} {optional && <span>(optional)</span>}
                        </legend>{"\n"}
                        {options.map(({ label, id, checked }, i) => <div className={`radio${style ? ` ${style}` : ""}`} key={i}>{"\n"}
                            <input {...attrs} id={id} defaultChecked={checked}/>{"\n"}
                            <label htmlFor={id}>{(style=="checkmark") && <i class="material-icons">check_circle</i>} {label}</label>{"\n"}
                        </div>)}
                        {errorMessage && <><div className="help-block"><i className="material-icons">warning</i>{errorMessage}</div>{"\n"}</>}
                        {helpBlock && <><p id="hint-text" className="hint-text">{helpBlock}</p>{"\n"}</>}
                        {expandingHintTitle &&
                        <div id={expanderId && "hint-text-expander"} className="hint-text-expander">{"\n"}
                            <button type="button" aria-controls={expanderId} aria-expanded={false}>{"\n"}
                                <span className="material-icons arrow">keyboard_arrow_down</span>{expandingHintTitle}{"\n"}
                            </button>{"\n"}
                            <p id={expanderId} className="content" aria-hidden={true}>This information is less important and only a minority of users will need it or the text is very long. In this case; both.</p>{"\n"}
                        </div>
                        }
                    </fieldset>
                </form>
                : <>
                    <div className={`radio${style ? ` ${style}` : ""}`}>{"\n"}
                        <input {...attrs} />{"\n"}
                        {label ? <label htmlFor={id}>{(style=="checkmark") && <i class="material-icons">check_circle</i>} {label}</label> : null}{label ? "\n" : null}
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
    className: PropTypes.string,
    style: PropTypes.string,
    helpBlock: PropTypes.string,
    expandingHintTitle: PropTypes.string,
    optional: PropTypes.bool
};

export default Radio;
