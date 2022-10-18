import React from "react";
import DropdownComponent from "@components/Dropdown";
import ButtonComponent from "@components/Button";
import { Icon } from "@docutils";
import CheckboxComponent from "@components/FormComponents/Checkbox";
import Radio from "@components/FormComponents/Radio";
import InputGroup from "@components/InputGroup";

const Dropdown = ({ label, isIconButton, fullWidth, position, icon, iconAfter, errorMessage, content, largePadding }) => (
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
    />
);

const contentGuidelinesItems = {
    overviewExample: {
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
        ],
        formGroup: <>
            <div className="d-flex">
                <InputGroup type="text" label="From, in SEK" postfixValue="kr" postfix={true} id="form-group-input-1-example" className="mr-2" />
                <InputGroup type="text" label="To, in SEK" postfixValue="kr" postfix={true} id="form-group-input-2-example" />
            </div>
            <ButtonComponent type="primary" label="Apply filter" className="mr-2" />
            <ButtonComponent type="link" label="Clear filters" />
        </>
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

export const dropdownOverview = {
    id: "no-tabs",
    elements: [
        {
            component: <Dropdown />,
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
                                    content: contentGuidelinesItems.overviewExample.actionsListItems,
                                    largePadding: false
                                }
                            },
                            {
                                name: "Checkbox group",
                                value: {
                                    content: <CheckboxComponent groupTitle="" name="dropdown-checkboxes-examples" options={contentGuidelinesItems.overviewExample.formItems} group />,
                                    largePadding: true
                                }
                            },
                            {
                                name: "Radiobutton group",
                                value: {
                                    content: <Radio groupTitle="" name="dropdown-radio-examples" options={contentGuidelinesItems.overviewExample.formItems} group />,
                                    largePadding: true
                                }
                            },
                            {
                                name: "Form-group",
                                value: {
                                    content: contentGuidelinesItems.overviewExample.formGroup,
                                    largePadding: true
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
