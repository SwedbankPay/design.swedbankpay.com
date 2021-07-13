import React from "react";
import InputGroup from "@components/InputGroup";
import CodeTags from "@components/CodeTags";

export const inputShowCase = {
    id: "no-tabs",
    elements: [
        {
            component: <InputGroup type="text" label="Input label" placeholder="Placeholder text" />,
            options: {
                checkbox: [
                    {
                        inputs: [
                            {
                                id: "input_icon",
                                name: "With icon",
                                value: {
                                    prefixType: "icon",
                                    prefixValue: "email"
                                }
                            }
                        ]
                    },
                    {
                        title: "Label add on",
                        inputs: [
                            {
                                id: "help_icon",
                                name: "With help icon",
                                value: {
                                    tooltip: true
                                }
                            },
                            {
                                id: "optional",
                                name: "Is optional",
                                value: {
                                    optional: true
                                }
                            }
                        ]
                    }
                ],
                radio: [
                    {
                        id: "unit_radio",
                        title: "Input type examples",
                        values: [
                            {
                                name: "Text",
                                value: {
                                    type: "text"
                                }
                            },
                            {
                                name: "E-mail",
                                value: {
                                    type: "email"
                                }
                            },
                            {
                                name: "Tel",
                                value: {
                                    type: "tel"
                                }
                            },
                            {
                                name: "Password",
                                value: {
                                    type: "password"
                                }
                            }
                        ]
                    },
                    {
                        id: "state_radio",
                        title: "State modifiers",
                        values: [
                            {
                                name: "Default",
                                value: {
                                    disabled: false
                                }
                            },
                            {
                                name: "Error",
                                value: {
                                    helpBlock: true,
                                    validationState: "error",
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
            },
            title: "Input field",
            description: <>
                <p>Inputs fields have a few different states which includes the default state, focus state, disabled state and error state.</p>
                <p>The default input type is text but it can also be specified as for example Email which will make it automatically validated when submitted or Password which will mask the characters submitted.</p>
                <div className="alert alert-informative mt-3">
                    <i className="material-icons alert-icon align-self-start" aria-hidden="true">info</i>
                    <p><b>Usage with icon.</b> Remember to wrap your inputfield within an <CodeTags type="secondary" code=".input-group"/></p>
                </div>
            </>
        }
    ]
};

export const textareaShowCase = {
    id: "no-tabs",
    elements: [
        {
            component: <InputGroup type="textarea" label="Input label" placeholder="Placeholdet text" />,
            options: {
                checkbox: [
                    {
                        title: "Label add on",
                        inputs: [
                            {
                                id: "help_icon_textarea",
                                name: "With help icon",
                                value: {
                                    tooltip: true
                                }
                            },
                            {
                                id: "optional_textarea",
                                name: "Is optional",
                                value: {
                                    optional: true
                                }
                            }
                        ]
                    }
                ],
                radio: [
                    {
                        id: "state_radio_textarea",
                        title: "State modifiers",
                        values: [
                            {
                                name: "Default",
                                value: {
                                    disabled: false
                                }
                            },
                            {
                                name: "Error",
                                value: {
                                    helpBlock: true,
                                    validationState: "error",
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
            },
            title: "Textarea",
            description: "Textareas have a few different sates which includes the default state, focus state, disabled state and error state. "
        }
    ]
};
