import React from "react";
import Togglebox from "@components/FormComponents/Togglebox";
import Checkbox from "@components/FormComponents/Checkbox";
import Radio from "@components/FormComponents/Radio";
import Button from "@components/Button";

export const toggleboxShowCase = {
    id: "no-tabs",
    elements: [
        {
            component: <Togglebox label="Label" id="togglebox-example"/>,
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
                    },
                    {
                        id: "label_position",
                        title: "Label position",
                        values: [
                            {
                                name: "Left",
                                value: {
                                    labelTop: false
                                }
                            },
                            {
                                name: "Top",
                                value: {
                                    labelTop: true
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Togglebox",
            description: "Toggleboxes have two states: on and off. Each of these have default, hover, focus and disabled states. A togglebox must always be accompanied by a label, on the left side or on the top, that clearly conveys what option a user will turn on or off. If there is a need for a more detailed description, a help icon can be added after the label."
        }
    ]
};

export const howToUse = [
    {
        type: "success",
        component: <>
            <span className="h4 d-inline-block mb-3">Do you have any credit cards</span>
            <Radio type="radio" label="Yes" id="do-example" name="do-example" checked/>
            <Radio type="radio" label="No" id="do-example-1" name="do-example" />
        </>,
        text: <p>Use <b>radiobuttons</b> for yes/no questions</p>
    },
    {
        type: "error",
        heading: "Do you have any credit cards",
        component: <Togglebox id="ex2" label="Yes"/>,
        text: <p>Don’t use a <b>togglebox</b> for yes/no questions</p>
    },
    {
        type: "success",
        component: <>
            <Checkbox label="I accept the terms and conditions" id="example-3"/>
            <div className="d-flex justify-content-end mt-4">
                <Button type="link" label="Cancel"/>
                <Button type="primary" label="Submit"/>
            </div>
        </>,
        text: <p>Use a <b>checkbox</b> for actions that won’t happen immediately.</p>
    },
    {
        type: "error",
        component: <>
            <Togglebox label="I accept the terms and conditions" id="example-4"/>
            <div className="d-flex justify-content-end mt-4">
                <Button type="link" label="Cancel"/>
                <Button type="primary" label="Submit"/>
            </div>
        </>,
        text: <p>Don’t use <b>togglebox</b> for actions that won’t happen immediately.</p>
    },
    {
        type: "success",
        component: <>
            <span className="h4 d-inline-block mb-2">Preferences</span>
            <Togglebox label="Show pending payments" id="example-5" checked/>
            <Togglebox label="Show completed payments" id="example-6"/>
        </>,
        text: <p>Use <b>togglebox</b> for preferences of features or behaviour</p>
    },
    {
        type: "error",
        component: <>
            <span className="h4 d-inline-block mb-2">Preferences</span>
            <Checkbox label="Show pending payments" id="example-7" checked/>
            <Checkbox label="Show completed payments" id="example-8"/>
        </>,
        text: <p>Don’t use a <b>checkbox</b> for preferences of features or behaviour</p>
    }
];
