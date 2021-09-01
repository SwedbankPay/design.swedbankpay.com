import React from "react";
import Radio from "@components/FormComponents/Radio";

const options = [
    {
        id: "radio-example-1",
        label: "Radio button label",
        checked: true
    },
    {
        id: "radio-example-2",
        label: "Radio button label"
    },
    {
        id: "radio-example-3",
        label: "Radio button label"
    }
];

export const radiobuttonShowCase = {
    id: "no-tabs",
    elements: [
        {
            component: <Radio groupTitle="Group heading" name="radio-group-example" options={options} group/>,
            options: {
                checkbox: [
                    {
                        title: "Label add on",
                        inputs: [
                            {
                                id: "with_help_icon",
                                name: "With help icon",
                                value: {
                                    tooltip: true
                                }
                            }
                        ]
                    }
                ],
                radio: [
                    {
                        id: "state_radio",
                        title: "State modifiers",
                        values: [
                            {
                                name: "Enabled",
                                value: {
                                    disabled: false
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
            title: "Radio button group",
            description: "The default setup of the radio button group always has a label on top which describes the checkbox group and each individual radio button is then followed by a label which clearly describes what the options and what selecting an option entails. In a radio button group one choice is always selected by default"
        }
    ]
};

export const doOptions = [
    {
        id: "radio-do-example-1",
        label: "Debit card",
        checked: true
    },
    {
        id: "radio-do-example-2",
        label: "Credit card"
    },
    {
        id: "radio-do-example-3",
        label: "Gift card"
    }
];

export const dontOptions = [
    {
        id: "radio-dont-example-1",
        label: "Choose a later date for delivery"
    },
    {
        id: "radio-dont-example-2",
        label: "Instant delivery"
    },
    {
        id: "radio-dont-example-3",
        label: "4-7days delivery"
    }
];
