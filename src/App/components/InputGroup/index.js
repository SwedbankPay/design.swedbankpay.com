import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export const Addon = ({ type, value, color, disabled, postfix }) => (
    (type === "button") ?
        <button type="button" className={`btn btn-${color}`} disabled={disabled}>
            {value}
        </button>
        : <span className={`input-group-addon ${postfix ? "postfix" : ""}`}>{(type === "icon") ? <i className="material-icons material-icons-outlined" aria-hidden="true">{value}</i> : value}</span>
);

const InputGroup = ({
    id,
    type,
    pattern,
    validate,
    className,
    required,
    defaultValue,
    autoComplete,
    disabled,
    readOnly,
    label,
    validationState,
    selectOptions,
    prefixValue,
    prefixType,
    prefixBtnColor,
    postfixValue,
    postfixType,
    postfixBtnColor,
    feedbackIcon,
    helpBlock,
    errorMessage,
    expandingHintTitle,
    expandingHintContent,
    expanderId,
    optional,
    postfix,
    boxSize,
    hintTextId,
    expandingHintId
}) => {
    const attrs = {
        type: type || null,
        className: "form-control",
        id: id || null,
        defaultValue: defaultValue || "",
        disabled: disabled || null,
        readOnly: readOnly || null,
        autoComplete: autoComplete || null,
        required: required || null,
        pattern: pattern ? "" : null,
        "data-validate": validate ? "" : null,
        "aria-describedby": `${helpBlock ? hintTextId : ""}${expandingHintTitle ? ` ${expandingHintId}` : ""}`
    };

    const inputGrpClasses = classnames(
        "input-group",
        validationState ? `has-${validationState}` : null,
        feedbackIcon ? "has-feedback" : null
    );

    const selectAttrs = {
        className: "form-control",
        defaultValue: "",
        disabled: disabled || null,
        readOnly: readOnly || null,
        required: required || null,
        id: id || null,
        "aria-describedby": `${helpBlock ? hintTextId : ""}${expandingHintTitle ? ` ${expandingHintId}` : ""}`
    };

    const formGroupClasses = classnames(
        "form-group",
        disabled ? "disabled" : null,
        boxSize ? boxSize : null,
        errorMessage ? "has-error" : null,
        className ? className : null
    );

    return (
        <div className={formGroupClasses}>{"\n"}
            {label ? <label htmlFor={id}>{label}{optional && " (optional)"}
            </label> : null}{label ? "\n" : null}
            {prefixValue || postfixValue || feedbackIcon ?
                <div className={inputGrpClasses}>{"\n"}
                    {prefixValue ? <Addon type={prefixType} value={prefixValue} color={prefixBtnColor} disabled={disabled} postfix={postfix} /> : null }{prefixValue ? "\n" : null}
                    {type === "textarea" ?
                        <textarea {...attrs}></textarea>
                        : type === "select" ?
                            <select className="form-control" id={id} disabled={disabled} readOnly={readOnly}>{"\n\t\t"}
                                {selectOptions.map((opt, i) => (
                                    <Fragment key={opt + i}>
                                        <option>{opt}</option>{(i !== selectOptions.length - 1) ? "\n\t\t" : ""}
                                    </Fragment>
                                ))}{"\n\t"}
                            </select>
                            :
                            <input {...attrs} />}
                    {"\n"}
                    {errorMessage ? null : <>{postfixValue ? <Addon type={postfixType} value={postfixValue} color={postfixBtnColor} disabled={disabled} postfix={postfix} /> : null }{postfixValue ? "\n" : null}</>}
                </div>
                :
                <>
                    {type === "textarea" ?
                        <textarea {...attrs}></textarea>
                        : type === "select" ?
                            <select {...selectAttrs}>{"\n\t\t"}
                                {selectOptions.map((opt, i) => (
                                    <Fragment key={opt + i}>
                                        <option value={opt}>{opt}</option>{(i !== selectOptions.length - 1) ? "\n\t\t" : ""}
                                    </Fragment>
                                ))}{"\n\t"}
                            </select>
                            :
                            <input {...attrs} />}{"\n"}
                </>
            }
            {errorMessage && <><div className="help-block">{errorMessage}</div>{"\n"}</>}
            {helpBlock && <><p id="hint-text" className="hint-text">{helpBlock}</p>{"\n"}</>}
            {expandingHintTitle &&
            <div id={expanderId && "hint-text-expander"} className="hint-text-expander">{"\n"}
                <button aria-controls={expanderId} aria-expanded={false}>{"\n"}
                    <span className="material-icons arrow">keyboard_arrow_down</span>{expandingHintTitle}{"\n"}
                </button>{"\n"}
                <p id={expanderId} className="content" aria-hidden={true}>{expandingHintContent
                    ? expandingHintContent
                    : "This information is less important and only a minority of users will need it or the text is very long. In this case; both."}</p>{"\n"}
            </div>}
        </div>
    );
};

InputGroup.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string,
    pattern: PropTypes.string,
    validate: PropTypes.bool,
    required: PropTypes.bool,
    defaultValue: PropTypes.string,
    autoComplete: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    label: PropTypes.string,
    validationState: PropTypes.oneOf(["error", ""]),
    selectOptions: PropTypes.array,
    prefixValue: PropTypes.string,
    prefixType: PropTypes.oneOf(["button", "icon", ""]),
    prefixBtnColor: PropTypes.oneOf(["primary", "secondary"]),
    postfixValue: PropTypes.string,
    postfixType: PropTypes.oneOf(["button", "icon", ""]),
    postfixBtnColor: PropTypes.oneOf(["primary", "secondary"]),
    feedbackIcon: PropTypes.string,
    helpBlock: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    errorMessage: PropTypes.string,
    successMessage: PropTypes.string,
    className: PropTypes.string,
    boxSize: PropTypes.oneOf(["medium", "small", ""]),
    expandingHintTitle: PropTypes.string,
    expandingHintContent: PropTypes.string,
    expanderId: PropTypes.string
};

export default InputGroup;
