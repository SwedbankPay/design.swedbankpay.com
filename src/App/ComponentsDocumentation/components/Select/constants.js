import React from "react";
import InputGroup from "@components/InputGroup";
import Radio from "@components/FormComponents/Radio";
import { Datepicker } from "@components/FormComponents";
import { Link } from "react-router-dom";

export const selectOverview = {
    id: "no-tabs",
    elements: [
        {
            component: <InputGroup type="select" label="Label" placeholder={"Select option"} selectOptions={["Blueberry", "Blackberry", "Berryberry"]} />,
            options: {
                checkbox: [
                    {
                        title: "Label add on",
                        inputs: [
                            {
                                id: "help_icon",
                                name: "Help icon",
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
                                    errorMessage: "Descriptive helpful error message.",
                                    validationState: "error",
                                    helpBlock: true,
                                    required: true
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
            title: "Select",
            description: "The select component looks similar to an input field in terms of structure, both with a label and placeholder text. But it does function differently and when activated expands and displays a list of options."
        }
    ]
};

export const whenToUse = {
    lead: "The select component should be used sparsely, often times there are better and more intuitive ways to present choices for the user.",
    content: [
        {
            correct:
                <div className="m-auto pb-3">
                    <p>Background color</p>
                    <Radio id="radio-example-1" label="Blue" name="radio-example" checked/>
                    <Radio id="radio-example-2" label="Red" name="radio-example"/>
                </div>,
            selectOptions: ["Blue", "Red"],
            placeholder: "Select option",
            label: "Background color",
            text: <p>In the example above, when there are very few choices, they should not be hidden inside a select list as this makes it harder for user to get an overview. Use <Link to="/components/radio-button">radio buttons</Link> instead.</p>
        },
        {
            correct: <Datepicker label="Birthday" prefixType="icon" prefixValue="event" placeholder="DD/MM/YYY" />,
            selectOptions: [...Array(32).keys()].slice(1),
            placeholder: "Select day",
            label: "Day",
            text: <p>Instead of using a dropdown input for selecting a day of the month. It is better to use a <Link to="/components/datepickers">datepicker</Link> to let user select the right date faster.</p>
        },
        {
            correct: <InputGroup type="text" label="Number of drinks" placeholder="4"/>,
            selectOptions: [1, 2, 3, 4],
            placeholder: "Select number",
            label: "Number of drinks",
            text: <p>Instead of using a dropdown input that will force the user to choose from a set of predefined options it is sometimes better to use an <Link to="/components/forms">input field</Link> where the user can type their answer .</p>
        }
    ]
};
