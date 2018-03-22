import React from "react";
import PropTypes from "prop-types";

const Addon = ({ type, value, color }) => (
    (type === "button") ?
        <div className="input-group-btn">{"\n"}
            <button type="button" className={`btn btn-${color}`}>{value}</button>{"\n"}
        </div>
        : <span className="input-group-addon">{(type === "icon") ? <i className="material-icons">{value}</i> : value}</span>
);

const Feedback = ({ icon }) => {
    return (
        <span className="form-control-feedback">{"\n\t\t"}
            <i className="material-icons">{icon}</i>{"\n\t"}
        </span>
    );
};

const InputGroup = ({
    id,
    type,
    placeholder,
    pattern,
    required,
    value,
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
    helpBlock
}) => {
    return (
        <div className="form-group">{"\n"}
            {label ? <label htmlFor={id}>{label}</label> : null}{label ? "\n" : null}
            <div className={`input-group${validationState ? ` has-${validationState}` : ""}${feedbackIcon ? " has-feedback" : ""}`}>{"\n"}
                {prefixValue ? <Addon type={prefixType} value={prefixValue} color={prefixBtnColor} /> : null }{prefixValue ? "\n" : null}
                {type === "textarea" ?
                    <textarea
                        id={id}
                        className="form-control"
                        placeholder={placeholder}
                        pattern={pattern}
                        required={required}
                        value={value}
                        disabled={disabled}
                        readOnly={readOnly}
                        data-px-validate={pattern ? true : null}
                        data-px-required={required ? true : null}>
                    </textarea>
                    : type === "select" ?
                        <select className="form-control" disabled={disabled} readOnly={readOnly}>{"\n\t\t"}
                            {selectOptions.map((opt, i) => <option key={opt + i}>{opt}</option>)}{"\n\t"}
                        </select>
                        :
                        <input
                            type={type}
                            id={id}
                            className="form-control"
                            placeholder={placeholder}
                            pattern={pattern}
                            required={required}
                            value={value}
                            defaultValue={defaultValue}
                            autoComplete={autoComplete || null}
                            disabled={disabled}
                            readOnly={readOnly}
                            data-px-validate={pattern ? true : null}
                            data-px-required={required ? true : null}
                        />}
                {"\n"}
                {feedbackIcon ? <Feedback icon={feedbackIcon} /> : null} {feedbackIcon ? "\n" : null}
                {postfixValue ? <Addon type={postfixType} value={postfixValue} color={postfixBtnColor} /> : null }{postfixValue ? "\n" : null}
            </div>
            {helpBlock ? <div className="help-block">{helpBlock}</div> : null}
        </div>
    );
};

InputGroup.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    pattern: PropTypes.string,
    required: PropTypes.bool,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    autoComplete: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    label: PropTypes.string,
    validationState: PropTypes.oneOf(["success", "error", ""]),
    selectOptions: PropTypes.array,
    prefixValue: PropTypes.string,
    prefixType: PropTypes.oneOf(["button", "icon", ""]),
    prefixBtnColor: PropTypes.string,
    postfixValue: PropTypes.string,
    postfixType: PropTypes.oneOf(["button", "icon", ""]),
    postfixBtnColor: PropTypes.string,
    feedbackIcon: PropTypes.string,
    helpBlock: PropTypes.string
};

export default InputGroup;
