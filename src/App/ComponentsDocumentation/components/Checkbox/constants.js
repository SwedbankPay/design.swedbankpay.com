import React from "react";
import Checkbox from "@components/FormComponents/Checkbox";

const options = [
    {
        id: "radio-example-1",
        label: "Label"
    },
    {
        id: "radio-example-2",
        label: "Label"
    }
];

export const checkboxShowCase = {
    id: "no-tabs",
    elements: [
        {
            component: <Checkbox groupTitle="Group label" name="checkbox-group-example" options={options} group hintExpander={true} />,
            options: {
                checkbox: [
                    {
                        title: "Label add on",
                        inputs: [
                            {
                                id: "checkbox_labels",
                                name: "Is optional",
                                value: {
                                    optional: true
                                }
                            },
                            {
                                id: "hint_text",
                                name: "Hint text",
                                value: {
                                    hintText: "Hint text",
                                    hintTextId: "hintTextCheckboxExample"
                                }
                            },
                            {
                                id: "hint_expander",
                                name: "Hint expander",
                                value: {
                                    expandingHintTitle: "Expanding hint text",
                                    expanderId: "expander-showcase"
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
                            },
                            {
                                name: "Error",
                                value: {
                                    errorMessage: "Descriptive helpful error message."
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Checkbox group",
            description: "The default setup of the checkbox group has a label on top which describes the checkbox group and each individual checkbox is then followed by a label which clearly describes the option and what checking the box represents."
        }
    ]
};

export const guidelineOptions = [
    {
        id: "radio-guidelines-example-1",
        label: "Label"
    },
    {
        id: "radio-guidelines-example-2",
        label: "Label"
    },
    {
        id: "radio-guidelines-example-3",
        label: "Label"
    }
];

export const developerDocOptions = [
    {
        id: "error-example-1",
        label: "Label"
    },
    {
        id: "error-example-2",
        label: "Label"
    },
    {
        id: "error-example-3",
        label: "Label"
    }
];

export const doOptions = [
    {
        id: "radio-do-example-1",
        label: "Small"
    },
    {
        id: "radio-do-example-2",
        label: "Medium"
    },
    {
        id: "radio-do-example-3",
        label: "Large"
    }
];

export const dontOptions = [
    {
        id: "radio-dont-example-1",
        label: "Super duper tiny small"
    },
    {
        id: "radio-dont-example-2",
        label: "Large"
    },
    {
        id: "radio-dont-example-3",
        label: "Small"
    }
];
