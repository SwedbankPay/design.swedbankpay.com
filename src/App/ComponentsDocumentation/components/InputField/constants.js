import React from "react";
import InputGroup from "@components/InputGroup";

export const inputShowCase = {
    id: "no-tabs",
    elements: [
        {
            component: <InputGroup type="text" label="Input label" id="input-showcase-example" placeholder="Placeholder text" />,
            options: {
                checkbox: [
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
                        id: "fix_radio",
                        title: "Prefix/Postfix",
                        values: [
                            {
                                name: "None",
                                value: {
                                    type: "text"
                                }
                            },
                            {
                                name: "Prefix - Icon",
                                value: {
                                    type: "email",
                                    prefixType: "icon",
                                    prefixValue: "email"
                                }
                            },
                            {
                                name: "Prefix - Text",
                                value: {
                                    prefixType: "text",
                                    prefixValue: "€",
                                    feedbackIcon: "kr"
                                }
                            },
                            {
                                name: "Postfix - Text",
                                value: {
                                    type: "text",
                                    postfixValue: "kr",
                                    postfix: true
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
                <p>Input fields can have prefixes or postfixes which can help the user more quickly understand what kind of information that ius requested. These can be icons as well as text symbols or currency abbreviations like %, $ or kr.</p>
            </>
        }
    ]
};

export const textareaShowCase = {
    id: "no-tabs-2",
    elements: [
        {
            component: <InputGroup type="textarea" label="Input label" placeholder="Placeholder text" />,
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
