import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { dropdown } from "@src/scripts/main";

const DropdownSelect = ({ disabled, errorMessage, fullWidth, position }) => {
    const [buttonLabel, setButtonLabel] = useState("Card type");
    const cardTypes = ["VISA", "Mastercard", "AMEX", "Maestro card", "Stripe", "Vipps", "Swish"];

    useEffect(() => {
        dropdown.init();
    });

    return (
        <>
            <div className={`dropdown ${position}${errorMessage ? " has-error" : ""}${disabled ? " disabled" : ""}`}>
                <div className="toggle-menu-container">{"\n"}
                    <button
                        className="dropdown-toggle btn btn-secondary"
                        id="dropdownSelect"
                        type="button"
                        aria-label="dropdown button"
                        disabled={disabled}
                    >{buttonLabel}
                        <i className="material-icons ml-2" aria-hidden="true">keyboard_arrow_down</i>
                    </button>{"\n"}
                    <div className={`dropdown-menu ${fullWidth ? "full-width" : ""}`}>{"\n"}
                        {cardTypes.map(card => (<>
                            <button className="btn-elem" onClick={() => setButtonLabel(card)}key={card}>{card}</button>{"\n"}</>
                        ))}
                    </div>
                </div>
                {errorMessage && <><div className="help-block"><i className="material-icons">error</i>{errorMessage}</div>{"\n"}</>}
            </div>
        </>
    );
};

const DropdownToggle = ({ disabled, isIconButton = false, label = "Default label", icon = isIconButton && !icon ? "more_vert" : "keyboard_arrow_down", iconAfter }) => {

    useEffect(() => {
        dropdown.init();
    });

    return (
        <>
            <button
                className={`dropdown-toggle${isIconButton ? " dropdown-toggle-icon" : " btn btn-secondary"}`}
                type="button"
                aria-label="dropdown button"
                disabled={disabled}
            >{"\n"}
                {isIconButton ?
                    <>
                        <i className="material-icons">{icon}</i>{"\n"}
                    </> :
                    <>
                        {!iconAfter && <><i className="material-icons" aria-hidden="true">{icon}</i>{"\n"}</>}
                        <span>{label}</span>{"\n"}
                        {iconAfter && <><i className="material-icons" aria-hidden="true">{icon}</i>{"\n"}</>}

                    </>
                }
            </button>{"\n"}
        </>
    );
};

const Dropdown = ({ id,
    classNames,
    label,
    icon,
    iconAfter = true,
    isIconButton,
    fullWidth,
    position = "anchor-top-left",
    errorMessage,
    content,
    largePadding,
    disabled,
    dropdownSelect,
    disableDefaultKeyboardNavigation = false }) => (
    <>
        {dropdownSelect ? <DropdownSelect disabled={disabled} errorMessage={errorMessage} fullWidth={fullWidth} position={position}/> :
            <div
                id={id ? id : null}
                className={`dropdown ${position} ${classNames ? ` ${classNames}` : ""}${errorMessage ? " has-error" : ""}${disabled ? " disabled" : ""}`}
                data-disable-default-keyboard-nav={disableDefaultKeyboardNavigation ? "true" : null}
            >{"\n"}
                <div className="toggle-menu-container">{"\n"}
                    <DropdownToggle disabled={disabled} isIconButton={isIconButton} label={label} icon={icon} iconAfter={iconAfter} />
                    <div className={`dropdown-menu${fullWidth ? " full-width" : ""}${largePadding ? " p-3" : ""}`} aria-labelledby="dropdownToggle">{"\n"}
                        {content}
                    </div>
                </div>
                {errorMessage && <><div className="help-block"><i className="material-icons">error</i>{errorMessage}</div>{"\n"}</>}
            </div>
        }
    </>
);

Dropdown.propTypes = {
    classNames: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    iconAfter: PropTypes.bool,
    isIconButton: PropTypes.bool,
    fullWidth: PropTypes.bool,
    position: PropTypes.oneOf(["anchor-top-left", "anchor-top-right"]),
    errorMessage: PropTypes.string,
    largePadding: PropTypes.bool,
    dropdownSelect: PropTypes.bool,
    disableDefaultKeyboardNavigation: PropTypes.bool
};

export default Dropdown;
