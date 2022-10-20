import React from "react";
import DropdownComponent from "@components/Dropdown";
import ButtonComponent from "@components/Button";
import { Icon } from "@docutils";
import CheckboxComponent from "@components/FormComponents/Checkbox";
import Radio from "@components/FormComponents/Radio";
import InputGroup from "@components/InputGroup";

const Dropdown = ({ label, isIconButton, fullWidth, position, icon, iconAfter, errorMessage, content, largePadding, dropdownSelect, disabled }) => (
    <DropdownComponent
        label={label}
        isIconButton={isIconButton}
        fullWidth={fullWidth}
        position={position}
        classNames=""
        icon={icon}
        iconAfter={iconAfter}
        errorMessage={errorMessage}
        content={content}
        largePadding={largePadding}
        dropdownSelect={dropdownSelect}
        disabled = {disabled}
    />
);

const contentGuidelinesItems = {
    overviewExample: {
        checkboxFormItems: [
            {
                id: "dropdown-checkbox-overview-form-inputs-example-1",
                label: "Card"
            },
            {
                id: "dropdown-checkbox-overview-form-inputs-example-2",
                label: "Credit"
            },
            {
                id: "dropdown-checkbox-overview-form-inputs-example-3",
                label: "Invoice"
            }
        ],
        radiobuttonsFormItems: [
            {
                id: "dropdown-radiobuttons-overview-form-inputs-example-1",
                label: "Date"
            },
            {
                id: "dropdown-radiobuttons-overview-form-inputs-example-2",
                label: "Name"
            },
            {
                id: "dropdown-radiobuttons-overview-form-inputs-example-3",
                label: "Price"
            }
        ]
    },
    doDontExamples: {
        example1:
            <CheckboxComponent
                groupTitle=""
                name="dropdown-checkboxes-dodont-examples-1"
                options={[
                    {
                        id: "dropdown-dodont-example-1",
                        label: "Successful"
                    },
                    {
                        id: "dropdown-dodont-example-2",
                        label: "Failed"
                    },
                    {
                        id: "dropdown-dodont-example-3",
                        label: "Cancelled"
                    }
                ]}
                group
            />,
        example2:
            <>
                <CheckboxComponent
                    groupTitle="Filter by"
                    name="dropdown-checkboxes-dodont-examples-2"
                    options={[
                        {
                            id: "dropdown-dodont-example-2-test-item-1",
                            label: "Card"
                        },
                        {
                            id: "dropdown-dodont-example-2-test-item-2",
                            label: "Credit"
                        },
                        {
                            id: "dropdown-dodont-example-2-test-item-3",
                            label: "Invoice"
                        }
                    ]}
                    group
                />
                <p className="pt-4">Actions</p>
                <a href="#" onClick={e => e.preventDefault()} key="item-dodont-example2-action-1" >
                        Edit
                </a>
                <a href="#" onClick={e => e.preventDefault()} key="item-dodont-example2-action-2" >
                        Delete
                </a>
            </>
    },
    contentGuidelinesExamples: {
        example1: <>
            <a href="#" onClick={e => e.preventDefault()} key="item-dodont-example1-action-1" >
                Rename
            </a>
            <a href="#" onClick={e => e.preventDefault()} key="item-dodont-example1-action-2" >
                Edit HTML
            </a>
        </>,
        example2: <>
            <a href="#" onClick={e => e.preventDefault()} key="item-dodont-example2-action-1" >
            HTML editing options
            </a>
            <a href="#" onClick={e => e.preventDefault()} key="item-dodont-example2-action-2" >
            File name changes
            </a>
        </>,
        example3: <>
            <a href="#" onClick={e => e.preventDefault()} key="item-dodont-example3-action-1" >
            Add item
            </a>
            <a href="#" onClick={e => e.preventDefault()} key="item-dodont-example3-action-2" >
            Edit list
            </a>
        </>,
        example4: <>
            <a href="#" onClick={e => e.preventDefault()} key="item-dodont-example4-action-1" >
            Add an item
            </a>
            <a href="#" onClick={e => e.preventDefault()} key="item-dodont-example4-action-2" >
            Edit the list
            </a>
        </>
    }
};

const tabsContent = {
    actionsListItems: <>
        <a href="#" onClick={e => e.preventDefault()} key="item-overview-action-1" >
            <Icon type="bookmark"/>
            Edit
        </a>
        <a href="#" onClick={e => e.preventDefault()} key="item-overview-action-2" >
            <Icon type="delete_outline"/>
            Delete
        </a>
    </>,
    checkboxes: <CheckboxComponent groupTitle="" name="dropdown-checkboxes-examples" options={contentGuidelinesItems.overviewExample.checkboxFormItems} group />,
    radiobuttons: <Radio groupTitle="" name="dropdown-radio-examples" options={contentGuidelinesItems.overviewExample.radiobuttonsFormItems} group />,
    formGroup: <>
        <div className="d-flex">
            <InputGroup type="text" label="From, in SEK" postfixValue="kr" postfix={true} id="form-group-input-1-example" className="mr-2" />
            <InputGroup type="text" label="To, in SEK" postfixValue="kr" postfix={true} id="form-group-input-2-example" />
        </div>
        <ButtonComponent type="primary" label="Apply filter" className="mr-2" />
        <ButtonComponent type="link" label="Clear filters" />
    </>
};

const selectSidebarOptions = {
    radio: [
        {
            id: "select_example",
            title: "Select variants",
            values: [
                {
                    name: "Select",
                    value: {
                        dropdownSelect: true
                    }
                },
                {
                    name: "Radiobuttons",
                    value: {
                        dropdownSelect: false,
                        label: "Payment method",
                        content: tabsContent.radiobuttons,
                        largePadding: true
                    }
                }
            ]
        },
        {
            id: "modal_width",
            title: "Menu width",
            values: [
                {
                    name: "Default",
                    value: {
                        fullWidth: false
                    }
                },
                {
                    name: "Full width",
                    value: {
                        fullWidth: true
                    }
                }
            ]
        },
        {
            id: "preffered_position",
            title: "Position",
            values: [
                {
                    name: "Left",
                    value: {
                        position: "anchor-top-left"
                    }
                },
                {
                    name: "Right",
                    value: {
                        position: "anchor-top-right"
                    }
                }
            ]
        },
        {
            id: "state-modifiers",
            title: "State modifiers",
            values: [
                {
                    name: "Default"
                },
                {
                    name: "Error",
                    value: {
                        errorMessage: "Descriptive helpful error message."
                    }
                },
                {
                    name: "Disabled",
                    value: {
                        disabled: true
                    }
                }

            ]
        }
    ]
};

const dropdownSidebarOptions = {
    radio: [
        {
            id: "toggle_examples",
            title: "Toggle types",
            values: [
                {
                    name: "Button",
                    value: {
                        isIconButton: false
                    }
                },
                {
                    name: "Icon button",
                    value: {
                        isIconButton: true
                    }
                }
            ]
        },
        {
            id: "modal_width",
            title: "Menu width",
            values: [
                {
                    name: "Default",
                    value: {
                        fullWidth: false
                    }
                },
                {
                    name: "Full width",
                    value: {
                        fullWidth: true
                    }
                }
            ]
        },
        {
            id: "preffered_position",
            title: "Position",
            values: [
                {
                    name: "Left",
                    value: {
                        position: "anchor-top-left"
                    }
                },
                {
                    name: "Right",
                    value: {
                        position: "anchor-top-right"
                    }
                }
            ]
        },
        {
            id: "state-modifiers",
            title: "State modifiers",
            values: [
                {
                    name: "Default"
                },
                {
                    name: "Error",
                    value: {
                        errorMessage: "Descriptive helpful error message."
                    }
                },
                {
                    name: "Disabled",
                    value: {
                        disabled: true
                    }
                }
            ]
        }
    ]
};

export const dropdownOverview = {
    id: "overviewDropdown",
    tabsId: "overviewDropdownTabs",
    elements: [
        {
            tab: "Actions",
            component: <Dropdown label="Actions" content={tabsContent.actionsListItems} largePadding={false} />,
            options: dropdownSidebarOptions,
            title: "Dropdown menu",
            description: "The popover is a container for various content. It usually contains a list of actions or options but it can also contain other type of controls or content like input fields and buttons. Popovers are usually triggered by a button component but they can also be triggerd by other elements. You can set the preffered position of the Popover in relation to it’s trigger, by default the position will be bottom left. It will make sure it is positioned within the viewport, this means that sometimes the Popover flips or move slightly to the left or right."
        },
        {
            tab: "Checkbox",
            component: <Dropdown label="Payment method" content={tabsContent.checkboxes} largePadding={true} />,
            options: dropdownSidebarOptions,
            title: "Checkbox list",
            description: "Use a checkbox list if you have a small to a medium number of options, and want the user to select one or more of the options. When using a checkbox list drop-down menu, could be combined with the tag component to indicate the chosen options from the drop-down menu."
        },
        {
            tab: "Select",
            component: <Dropdown dropdownSelect/>,
            options: selectSidebarOptions,
            title: "Select list",
            description: "The select options are used when you want the user to choose one element. It can be implemented as a customized select or a radio button list."
        },
        {
            tab: "Form Group",
            component: <Dropdown label="Amount" content={tabsContent.formGroup} largePadding={true} />,
            options: dropdownSidebarOptions,
            title: "Form-group",
            description: "Form-group can use different type of components ex. date pickers, rannge sliders etc."
        }
    ]
};

export const contentGuidelines = [
    {
        heading: "How to use Dropdown menus",
        examples: [
            {
                slabType: "success",
                content: <><Dropdown id="howto-dropdown-example-1" label="Filter" content={contentGuidelinesItems.doDontExamples.example1} isIconButton={false} icon="filter_list" iconAfter={false} largePadding={true} /><ButtonComponent type="secondary" label="Edit" className="ml-2" icon="edit" /></>
            },
            {
                slabType: "error",
                content: <Dropdown id="howto-dropdown-example-2" label="Actions" content={contentGuidelinesItems.doDontExamples.example2} isIconButton={false} largePadding={true} />,
                rowDescription: "The Dropdown should contain actions, options or other elements that share a relationships to each other."
            }
        ]

    },
    {
        heading: "Content guidelines for container",
        examples: [
            {
                slabType: "success",
                content: <Dropdown id="guidelines-dropdown-example-1" content={contentGuidelinesItems.contentGuidelinesExamples.example1} isIconButton={true} />
            },
            {
                slabType: "error",
                content: <Dropdown id="guidelines-dropdown-example-2" content={contentGuidelinesItems.contentGuidelinesExamples.example2} isIconButton={true} />,
                rowDescription: "If a Dropdown container contains actions, they should be action-led, menaing led by a strong verb that encourages action."
            },
            {
                slabType: "success",
                content: <Dropdown id="guidelines-dropdown-example-3" content={contentGuidelinesItems.contentGuidelinesExamples.example3} isIconButton={true} />
            },
            {
                slabType: "error",
                content: <Dropdown id="guidelines-dropdown-example-4" content={contentGuidelinesItems.contentGuidelinesExamples.example4} isIconButton={true} />,
                rowDescription: "If a Dropdown container contains list of actions or options, they should be scannable. Avoid unnecessary words such as “the”, “an”, or “a”."
            }
        ]

    }];
