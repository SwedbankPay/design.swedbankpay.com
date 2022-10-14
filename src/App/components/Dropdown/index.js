import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Icon } from "@docutils";
import { dropdown } from "@src/scripts/main";

import CheckboxComponent from "@components/FormComponents/Checkbox";
import Radio from "@components/FormComponents/Radio";
import InputGroup from "@components/InputGroup";
import ButtonComponent from "@components/Button";

const DropdownToggle = ({ isIconButton = false, label = "Default label", icon, iconAfter }) => {

    useEffect(() => {
        dropdown.init();
    });

    return (
        <>
            <button
                className={`dropdown-toggle ${isIconButton ? " dropdown-toggle-icon " : " btn btn-secondary"}`}
                id="DropdownToggle"
                type="button"
                aria-label="dropdown button"
            >{"\n"}
                {isIconButton ?
                    <>
                        <i className="material-icons">more_vert</i>{"\n"}
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

const ContentType = ({ dropdownType, item, formInputsOptions }, i) => {
    if (dropdownType === "action-list") {
        return (
            <>
                <a href="#" onClick={e => e.preventDefault()} key={`item-${i}`} >
                    {item.icon ? <Icon type={item.icon}/> : null}{item.name}
                </a>{"\n"}
            </>
        );
    } else if (dropdownType === "checkbox-group") {
        return <CheckboxComponent groupTitle="" name="dropdown-checkboxes-examples" options={formInputsOptions} group />;
    } else if (dropdownType === "radiobutton-group") {
        return <Radio groupTitle="" name="dropdown-radio-examples" options={formInputsOptions} group/>;
    } else if (dropdownType === "form-group") {
        return (
            <>
                <div className="d-flex">
                    <InputGroup type="text" label="From, in SEK" postfixValue="kr" postfix={true} id="form-group-input-1-example" className="mr-2" />
                    <InputGroup type="text" label="To, in SEK" postfixValue="kr" postfix={true} id="form-group-input-2-example" />
                </div>
                <ButtonComponent type="primary" label="Apply filter" className="mr-2" />
                <ButtonComponent type="link" label="Clear filters" />
            </>);
    }
};

const Dropdown = ({ id,
    classNames,
    actionItems,
    label,
    icon = "keyboard_arrow_down",
    iconAfter = true,
    isIconButton,
    fullWidth,
    position = "anchor-top-left",
    dropdownType = "action-list",
    formItems,
    errorMessage }) => (
    <>
        <div id={id} className={`dropdown-list ${position} ${classNames ? ` ${classNames}` : ""} ${errorMessage ? "has-error" : ""}`}>{"\n"}
            <div className="toggle-menu-container">
                <DropdownToggle isIconButton={isIconButton} label={label} icon={icon} iconAfter={iconAfter} />
                <div className={`dropdown-menu ${fullWidth ? "full-width" : ""} ${dropdownType} `} aria-labelledby="dropdownToggle">{"\n"}
                    {
                        dropdownType === "action-list" ?
                            Array.isArray(actionItems) && actionItems.map((item, i) => (
                                <Fragment key={`dropdown-${item.name}-${i}`}>
                                    <ContentType dropdownType={dropdownType} item={item} />
                                </Fragment>
                            )) :
                            Array.isArray(formItems) && <ContentType dropdownType={dropdownType} item={null} formInputsOptions={formItems} />
                    }
                </div>
            </div>
            {errorMessage && <><div className="help-block"><i className="material-icons">error</i>{errorMessage}</div>{"\n"}</>}        </div>
    </>
);

Dropdown.propTypes = {
    id: PropTypes.string,
    classNames: PropTypes.string,
    actionItems: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.string
    })),
    formItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    })),
    dropdownType: PropTypes.oneOf(["action-list", "checkbox-group", "radiobutton-group", "form-group", "empty-shell"]),
    label: PropTypes.string,
    icon: PropTypes.string,
    iconAfter: PropTypes.bool,
    isIconButton: PropTypes.bool,
    fullWidth: PropTypes.bool,
    position: PropTypes.oneOf(["anchor-top-left", "anchor-top-right"]),
    errorMessage: PropTypes.string
};

export default Dropdown;
