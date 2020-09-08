import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export const Addon = ({ type, value, color, disabled }) => (
    (type === "button") ?
        <button type="button" className={`btn btn-${color}`} disabled={disabled}>
            {value}
        </button>
        : <span className="input-group-addon">{(type === "icon") ? <i className="material-icons" aria-hidden="true">{value}</i> : value}</span>
);

const Feedback = ({ icon }) => (
    <span className="form-control-feedback">{"\n\t\t"}
        <i className="material-icons" aria-hidden="true">{icon}</i>{"\n\t"}
    </span>
);

const InputGroup = ({
    id,
    type,
    placeholder,
    pattern,
    validate,
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
    successMessage
}) => {
    const attrs = {
        type: type || null,
        className: "form-control",
        id: id || null,
        placeholder: placeholder || null,
        defaultValue: defaultValue || "",
        disabled: disabled || null,
        readOnly: readOnly || null,
        autoComplete: autoComplete || null,
        required: required || null,
        pattern: pattern ? "" : null,
        "data-validate": validate ? "" : null
    };

    const inputGrpClasses = classnames(
        "input-group",
        validationState ? `has-${validationState}` : null,
        feedbackIcon ? "has-feedback" : null
    );

    return (
        <div className={`form-group${disabled ? " disabled" : ""}`}>{"\n"}
            {label ? <label htmlFor={id}>{label}</label> : null}{label ? "\n" : null}
            {prefixValue || postfixValue || feedbackIcon ?
                <div className={inputGrpClasses}>{"\n"}
                    {prefixValue ? <Addon type={prefixType} value={prefixValue} color={prefixBtnColor} disabled={disabled} /> : null }{prefixValue ? "\n" : null}
                    {type === "textarea" ?
                        <textarea {...attrs}></textarea>
                        : type === "select" ?
                            <select className="form-control" disabled={disabled} readOnly={readOnly}>{"\n\t\t"}
                                {selectOptions.map((opt, i) => (
                                    <Fragment key={opt + i}>
                                        <option>{opt}</option>{(i !== selectOptions.length - 1) ? "\n\t\t" : ""}
                                    </Fragment>
                                ))}{"\n\t"}
                            </select>
                            :
                            <input {...attrs} />}
                    {"\n"}
                    {feedbackIcon ? <Feedback icon={feedbackIcon} /> : null} {feedbackIcon ? "\n" : null}
                    {postfixValue ? <Addon type={postfixType} value={postfixValue} color={postfixBtnColor} disabled={disabled} /> : null }{postfixValue ? "\n" : null}
                </div>
                :
                <>
                    {type === "textarea" ?
                        <textarea {...attrs}></textarea>
                        : type === "select" ?
                            <select className="form-control" disabled={disabled} readOnly={readOnly}>{"\n\t\t"}
                                {selectOptions.map((opt, i) => (
                                    <Fragment key={opt + i}>
                                        <option>{opt}</option>{(i !== selectOptions.length - 1) ? "\n\t\t" : ""}
                                    </Fragment>
                                ))}{"\n\t"}
                            </select>
                            :
                            <input {...attrs} />}
                </>
            }
            {helpBlock ? <div className="help-block" data-success={successMessage || null} data-error={errorMessage || null}>{helpBlock}</div> : null}
        </div>
    );
};

InputGroup.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string,
    placeholder: PropTypes.string,
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
    successMessage: PropTypes.string
};

export default InputGroup;
