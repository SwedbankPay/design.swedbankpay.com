import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export const Addon = ({ type, value, postfix, success, error }) => (
    <>
        { success || error ?
            <>
                {(success) && <><span className="input-group-addon postfix"><i className="material-icons" aria-hidden="true">check_circle</i></span></>}
                {(error) && <span className="input-group-addon postfix"><i className="material-icons material-icons-outlined" aria-hidden="true">warning</i></span>}
            </>
            :
            <span className={`input-group-addon ${postfix ? "postfix" : ""}`}>{(type === "icon") ? <i className="material-icons material-icons-outlined" aria-hidden="true">{value}</i> : value}</span>
        }
    </>
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
    addOnType,
    postfixValue,
    helpBlock,
    errorMessage,
    postfix,
    boxSize,
    placeholder,
    success,
    error
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
        placeholder: placeholder || null
    };

    const inputGrpClasses = classnames(
        "input-group",
        validationState ? `has-${validationState}` : null
    );

    const selectAttrs = {
        className: "form-control",
        defaultValue: "",
        disabled: disabled || null,
        readOnly: readOnly || null,
        required: required || null,
        id: id || null
    };

    const formGroupClasses = classnames(
        "form-group",
        disabled ? "disabled" : null,
        boxSize ? boxSize : null,
        error ? "has-error" : null,
        success ? "has-success" : null,
        className ? className : null
    );

    return (
        <div className={formGroupClasses}>{"\n"}
            {label ? <label htmlFor={id}>{label}</label> : null}{label ? "\n" : null}
            {prefixValue || postfixValue || error || success ?
                <div className={inputGrpClasses}>{"\n"}
                    {prefixValue ? <Addon type={addOnType} value={prefixValue} disabled={disabled} /> : null }{prefixValue ? "\n" : null}
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
                            <>
                                <input {...attrs} />{"\n\t"}
                                {postfix || error || success ? <Addon error={error} success={success} type={addOnType} value={postfixValue} disabled={disabled} postfix={postfix} /> : null }{postfix ? "\n" : null}
                            </>}
                    {"\n"}
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
    selectOptions: PropTypes.array,
    prefixValue: PropTypes.string,
    addOnType: PropTypes.oneOf(["text", "icon", ""]),
    postfix: PropTypes.bool,
    postfixValue: PropTypes.string,
    helpBlock: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    errorMessage: PropTypes.string,
    className: PropTypes.string,
    boxSize: PropTypes.oneOf(["medium", "small", ""]),
    expandingHintTitle: PropTypes.string,
    expandingHintContent: PropTypes.string,
    expanderId: PropTypes.string
};

export default InputGroup;
