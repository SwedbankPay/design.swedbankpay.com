import React from "react";
import Checkbox from "@components/FormComponents/Checkbox";

const options = [
    {
        id: "radio-example-1",
        label: "Checkbox label"
    },
    {
        id: "radio-example-2",
        label: "Checkbox label"
    },
    {
        id: "radio-example-3",
        label: "Checkbox label"
    }
];

export const checkboxShowCase = {
    id: "no-tabs",
    elements: [
        {
            component: <Checkbox groupTitle="Group heading" name="checkbox-group-example" options={options} group />,
            options: {
                checkbox: [
                    {
                        title: "Label add on",
                        inputs: [
                            {
                                id: "checkbox_labels",
                                name: "Optional",
                                value: {
                                    optional: true
                                }
                            },
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
            description: "The default setup of the checkbox group always has a label on top which describes the checkbox group and each individual checkbox is then followed by a label which clearly describes what the options and what checking the box represents"
        }
    ]
};

export const guidelineOptions = [
    {
        id: "radio-guidelines-example-1",
        label: "Checkbox label"
    },
    {
        id: "radio-guidelines-example-2",
        label: "Checkbox label"
    },
    {
        id: "radio-guidelines-example-3",
        label: "Checkbox label"
    }
];

export const developerDocOptions = [
    {
        id: "error-example-1",
        label: "Checkbox label"
    },
    {
        id: "error-example-2",
        label: "Checkbox label"
    },
    {
        id: "error-example-3",
        label: "Checkbox label"
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
