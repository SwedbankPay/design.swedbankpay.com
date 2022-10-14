import React from "react";
import DropdownComponent from "@components/Dropdown";
import ButtonComponent from "@components/Button";

const Dropdown = ({ label, isIconButton, fullWidth, position, dropdownType, actionItems, formItems, icon, iconAfter, errorMessage }) => (
    <DropdownComponent
        label={label}
        isIconButton={isIconButton}
        fullWidth={fullWidth}
        position={position}
        dropdownType={dropdownType}
        classNames=""
        actionItems={actionItems}
        formItems={formItems}
        icon={icon}
        iconAfter={iconAfter}
        errorMessage={errorMessage}
    />
);

const contentGuidelinesItems = {
    overviewExample: {
        actionItems: [
            {
                name: "Edit",
                icon: "bookmark"
            },
            {
                name: "Delete",
                icon: "delete_outline"
            }
        ],
        formItems: [
            {
                id: "dropdown-form-inputs-example-1",
                label: "Option 1"
            },
            {
                id: "dropdown-form-inputs-example-2",
                label: "Option with a longer text 2"
            },
            {
                id: "dropdown-form-inputs-example-3",
                label: "Option 3"
            }
        ]
    },
    doDontExamples: {
        example1: [
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
        ],
        example2: [
            {
                id: "dropdown-dodont-example-1-test",
                label: "Successful"
            }
        ]
    },
    contentGuidelinesExamples: {
        example1: [
            {
                name: "Rename",
                icon: ""
            },
            {
                name: "Edit HTML",
                icon: ""
            }
        ],
        example2: [
            {
                name: "HTML editing options",
                icon: ""
            },
            {
                name: "File name changes",
                icon: ""
            }
        ],
        example3: [
            {
                name: "Add items",
                icon: ""
            },
            {
                name: "Edit list",
                icon: ""
            }
        ],
        example4: [
            {
                name: "Add an item",
                icon: ""
            },
            {
                name: "Edit the list",
                icon: ""
            }
        ]
    }
};

export const dropdownOverview = {
    id: "no-tabs",
    elements: [
        {
            component: <Dropdown actionItems={contentGuidelinesItems.overviewExample.actionItems} formItems={contentGuidelinesItems.overviewExample.formItems} />,
            options: {
                radio: [
                    {
                        id: "toggle_examples",
                        title: "Toggle, examples",
                        values: [
                            {
                                name: "Secondary button",
                                value: {
                                    isIconButton: false,
                                    label: "Actions"
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
                        title: "Modal width",
                        values: [
                            {
                                name: "default",
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
                        id: "container_examples",
                        title: "Container, examples",
                        values: [
                            {
                                name: "Action list",
                                value: {
                                    dropdownType: "action-list"
                                }
                            },
                            {
                                name: "Checkbox group",
                                value: {
                                    dropdownType: "checkbox-group"
                                }
                            },
                            {
                                name: "Radiobutton group",
                                value: {
                                    dropdownType: "radiobutton-group"
                                }
                            },
                            {
                                name: "Form-group",
                                value: {
                                    dropdownType: "form-group"
                                }
                            }
                        ]
                    },
                    {
                        id: "preffered_position",
                        title: "Position",
                        values: [
                            {
                                name: "Align left",
                                value: {
                                    position: "anchor-top-left"
                                }
                            },
                            {
                                name: "Align right",
                                value: {
                                    position: "anchor-top-right"
                                }
                            }
                        ]
                    }

                ],
                checkbox: [
                    {
                        title: "State modifiers",
                        inputs: [
                            {
                                id: "state-modifier-error",
                                name: "Error",
                                value: {
                                    errorMessage: "Descriptive helpful error message."
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Dropdown menu",
            description: `A dropdown consist of a dropdown toggle and a dropdown container.
            Any button component can be used as a dropdown toggle. The dropdown container usually contain
            a list of actions or options, but it can also contain other controls or content like Input fields
            and Buttons. You can set the preffered position of the dropdown container in relation to it’s toggle,
            by default the position will be top left. The container will make sure it is positioned
            within the viewport, this means that sometimes it flips or move slightly to the left or right.`
        }
    ]
};

export const contentGuidelines = [
    {
        heading: "How to use Dropdown menus",
        examples: [
            {
                slabType: "success",
                content: <><Dropdown id="howto-dropdown-example-1" dropdownType="checkbox-group" label="Filter" formItems={contentGuidelinesItems.doDontExamples.example1} isIconButton={false} icon="filter_list" iconAfter={false} /><ButtonComponent type="secondary" label="Edit" className="ml-2" icon="edit" /></>
            },
            {
                slabType: "error",
                content: <Dropdown id="howto-dropdown-example-2" dropdownType="form-group" label="Action" formItems={contentGuidelinesItems.doDontExamples.example2} isIconButton={false} />,
                rowDescription: "The Dropdown should contain actions, options or other elements that share a relationships to each other."
            }
        ]

    },
    {
        heading: "Content guidelines for container",
        examples: [
            {
                slabType: "success",
                content: <Dropdown id="guidelines-dropdown-example-1" dropdownType="action-list" actionItems={contentGuidelinesItems.contentGuidelinesExamples.example1} isIconButton={true} />
            },
            {
                slabType: "error",
                content: <Dropdown id="guidelines-dropdown-example-2" dropdownType="action-list" actionItems={contentGuidelinesItems.contentGuidelinesExamples.example2} isIconButton={true} />,
                rowDescription: "If a Dropdown container contains actions, they should be action-led, menaing led by a strong verb that encourages action."
            },
            {
                slabType: "success",
                content: <Dropdown id="guidelines-dropdown-example-3" dropdownType="action-list" actionItems={contentGuidelinesItems.contentGuidelinesExamples.example3} isIconButton={true} />
            },
            {
                slabType: "error",
                content: <Dropdown id="guidelines-dropdown-example-4" dropdownType="action-list" actionItems={contentGuidelinesItems.contentGuidelinesExamples.example4} isIconButton={true} />,
                rowDescription: "If a Dropdown container contains list of actions or options, they should be scannable. Avoid unnecessary words such as “the”, “an”, or “a”."
            }
        ]

    }];
