import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { dropdown } from "@src/scripts/main";

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
    largePadding }) => (
    <>
        <div id={id} className={`dropdown-list ${position} ${classNames ? ` ${classNames}` : ""} ${errorMessage ? "has-error" : ""}`}>{"\n"}
            <div className="toggle-menu-container">
                <DropdownToggle isIconButton={isIconButton} label={label} icon={icon} iconAfter={iconAfter} />
                <div className={`dropdown-menu ${fullWidth ? "full-width" : ""} ${largePadding ? "p-3" : ""} `} aria-labelledby="dropdownToggle">{"\n"}
                    {content}
                </div>
            </div>
            {errorMessage && <><div className="help-block"><i className="material-icons">error</i>{errorMessage}</div>{"\n"}</>}        </div>
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
    content: PropTypes.oneOfType(PropTypes.string, PropTypes.object).isRequired,
    largePadding: PropTypes.bool
};

export default Dropdown;
