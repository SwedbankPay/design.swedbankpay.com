import React from "react";
import InputGroup from "@components/InputGroup";

const InputOptions = () => (
    {
        checkbox: [
            {
                title: "Label add on",
                inputs: [
                    {
                        id: "optional",
                        name: "Is optional",
                        value: {
                            optional: true
                        }
                    },
                    {
                        id: "hint_text",
                        name: "Hint text",
                        value: {
                            helpBlock: "Hint text",
                            hintTextId: "hintTextExampleId"
                        }
                    },
                    {
                        id: "expander_hint_text",
                        name: "Expander hint",
                        value: {
                            expandingHintTitle: "Expanding hint text",
                            expandingHintId: "expandingHintExampleId"
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
    }
);

export const inputShowCase = {
    id: "no-tabs",
    tabsId: "overviewInputFieldTabs",
    elements: [
        {
            tab: "Input field",
            component: <InputGroup type="text" label="Label" id="input-showcase-example"/>,
            options: InputOptions(),
            title: "Input field",
            description: <>
            <p>Use an input field when the expected user input is a single line of text. The default input type is text but it can also be specified as for example Email which will make it automatically validated when submitted or Password which will mask the characters submitted.</p>
            <p>Input fields can have prefixes or suffixes which can help the user more quickly understand what kind of information that is requested. These can be icons as well as text symbols or currency abbreviations like %, € or kr.</p>


            </>
        },
        {
            tab: "Text area",
            component: <InputGroup type="textarea" label="Label" />,
            options: {
                checkbox: [
                    {
                        title: "Label add on",
                        inputs: [
                            {
                                id: "optional_textarea",
                                name: "Is optional",
                                value: {
                                    optional: true
                                }
                            },
                            {
                                id: "hint_text_textarea",
                                name: "Hint text",
                                value: {
                                    helpBlock: "Hint text",
                                    hintTextId: "hintTextTextAreaExample"
                                }
                            },
                            {
                                id: "expander_hint_textarea",
                                name: "Expander hint",
                                value: {
                                    expandingHintTitle: "Expanding hint text",
                                    expandingHintId: "expandingHintTextAreaExample"
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
            title: "Text area",
            description: "Use a Text area when the expected user input is more than one sentence."
        }
    ]
};

export const contentGuidelines = [
    {
        heading: "Hint text",
        lead: <>
                <p>A hint text should complement the label and provide clarifying details. It can be used to:</p>
                <ul className="list list-bullet">
                    <li>Provide an example of what to enter</li>
                    <li>Explain why you are asking a certain question</li>
                    <li>Inform the user about where to find the requested information</li>
                </ul>
                <p>Primarily use the visible by default hint text and secondarily a hint expander. Try to avoid using both a visible hint text and expander.</p>
            </>,
        examples: [
            {
                slabType: "success",
                content: <InputGroup id="do-example-expanding" type="text" label="Personal identification number" helpBlock="YYYYMMDDNNNN" hintTextId="birthnumberExample"/>,
                hintText: "YYYYMMDDNNNN",
                description: "If the information is fairly important and many users will need it, provide a hint text that is visible by default."
            },
            {
                slabType: "success",
                content: <InputGroup id="do-example-expanding" type="text" label="Security code (CVC)" expandingHintTitle="Where to find the code?" expandingHintId="whereToFindExample" expandingHintContent="Three to four digits on the back or the front of your card."/>,
                expandingHintTitle: "Where to find the code?",
                description: "Use a hint expander if the information is long and won’t be needed by the majority of users. Write the hint expander to help users understand what they will see before they click."
            }
        ]
    },
    {
        heading: "Prefix and postfix",
        lead: "Prefixes and postfixes are useful when there’s a commonly understood icon, symbol or abbreviation for the type of information the user needs to enter since it can reduce mental load.",
        examples: [
            {
                slabType: "success",
                content: <InputGroup id="guidelines-input-example-1" type="text" label="Username" prefixType="icon" prefixValue="account_circle"/>,
                description: "Use a prefix icon to help convey the meaning of the label."
            },
            {
                slabType: "error",
                content: <InputGroup id="guidelines-input-example-2" type="email" label="Username" prefixType="icon" prefixValue="email"/>,
                description: "Don’t use a prefix icon that doesn’t help to convey the meaning of the label. There shouldn’t be any confusion between what type of information an icon represents."
            },
            {
                slabType: "success",
                content: <InputGroup id="guidelines-input-example-3" type="text" label="Fixed transaction fee, in SEK" postfix postfixValue="kr"/>,
                description: "The label in itself should clearly indicate what type of data to enter, since prefixes and postfixes are hidden from screen readers."
            },
            {
                slabType: "error",
                content: <InputGroup id="guidelines-input-example-4" type="text" label="Fixed transaction fee, in SEK" postfix postfixValue="kronor"/>,
                description: "Use commonly understood abbreviations for text prefix or postfix, don’t use full words."
            }
        ]

    },
    {
        heading: "Error message",
        lead: "When input isn’t accepted, input fields should display a short and concise error message, it should be no more than a single sentence.",
        examples: [
            {
                slabType: "success",
                content: <InputGroup type="text" validationState="error" errorMessage='The email address must include "@"' label="Email address" defaultValue="Name.com" id="guidelines-input-example-7"/>,
                description: "Do explain what went wrong and how to fix it."
            },
            {
                slabType: "error",
                content: <InputGroup type="text" validationState="error" errorMessage="Invalid input" label="Email address" defaultValue="Name.com" id="guidelines-input-example-8"/>,
                description: "Don't use technical jargon."
            }
        ]

    }
];
