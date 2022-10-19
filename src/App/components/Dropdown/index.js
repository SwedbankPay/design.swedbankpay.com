import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { dropdown } from "@src/scripts/main";

const DropdownSelect = () => {
    const [buttonLabel, setButtonLabel] = useState("Card type");
    const cardTypes = ["VISA", "Mastercard", "AMEX", "Maestro card", "Stripe", "Vipps", "Swish"];

    useEffect(() => {
        dropdown.init();
    });

    return (
        <>
            <div className="dropdown-list anchor-top-left">
                <div className="toggle-menu-container">
                    <button
                        className="dropdown-toggle btn btn-secondary"
                        id="dropdownSelect"
                        type="button"
                        aria-label="dropdown button"
                    >{buttonLabel}
                        <i className="material-icons ml-2" aria-hidden="true">keyboard_arrow_down</i>
                    </button>{"\n"}
                    <div className="dropdown-menu">
                        {cardTypes.map(card => (
                            <button className="btn-elem" onClick={() => setButtonLabel(card)}key={card}>{card}</button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

const DropdownToggle = ({ isIconButton = false, label = "Default label", icon = isIconButton && !icon ? "more_vert" : "keyboard_arrow_down", iconAfter }) => {

    useEffect(() => {
        dropdown.init();
    });

    return (
        <>
            <button
                className={`dropdown-toggle ${isIconButton ? " dropdown-toggle-icon " : " btn btn-secondary"}`}
                type="button"
                aria-label="dropdown button"
            >{"\n"}
                {isIconButton ?
                    <>
                        <i className="material-icons">{icon}</i>{"\n"}
                    </> :
                    <>
                        {!iconAfter && <><i className={`material-icons ${iconAfter ? "ml-2" : "mr-2"}`} aria-hidden="true">{icon}</i>{"\n"}</>}
                        <span>{label}</span>{"\n"}
                        {iconAfter && <><i className={`material-icons ${iconAfter ? "ml-2" : "mr-2"}`} aria-hidden="true">{icon}</i>{"\n"}</>}

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
    dropdownSelect }) => (
    <>
        {dropdownSelect ? <DropdownSelect/> :
            <div id={id} className={`dropdown-list ${position} ${classNames ? ` ${classNames}` : ""} ${errorMessage ? "has-error" : ""}`}>{"\n"}
                <div className="toggle-menu-container">
                    <DropdownToggle isIconButton={isIconButton} label={label} icon={icon} iconAfter={iconAfter} />
                    <div className={`dropdown-menu ${fullWidth ? "full-width" : ""} ${largePadding ? "p-3" : ""} `} aria-labelledby="dropdownToggle">{"\n"}
                        {content}
                    </div>
                </div>
                {errorMessage && <><div className="help-block"><i className="material-icons">error</i>{errorMessage}</div>{"\n"}</>}        </div>
        }
    </>
);

Dropdown.propTypes = {
    id: PropTypes.string,
    classNames: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    iconAfter: PropTypes.bool,
    isIconButton: PropTypes.bool,
    fullWidth: PropTypes.bool,
    position: PropTypes.oneOf(["anchor-top-left", "anchor-top-right"]),
    errorMessage: PropTypes.string,
    largePadding: PropTypes.bool,
    dropdownSelect: PropTypes.bool
};

export default Dropdown;
