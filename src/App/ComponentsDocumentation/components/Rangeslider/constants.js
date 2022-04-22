import React from "react";
import Rangeslider from "@components/Rangeslider";

export const howToUse = [
    {
        type: "success",
        component: <Rangeslider id="example-1" label="Label" min={0} max={200} value={100}/>,
        text: <p>Do use <b>sliders</b> for content with numeric values.</p>
    },
    {
        type: "success",
        component: <Rangeslider id="example-2" label="Label" min={0} max={100} value={50} valueLabelPostfix="%"/>,
        text: <p>The <b>sliders</b> component also have a post label for special symbols to help the user easier understand the slider value. It could be shown as above with the percentage symbol.</p>
    },
    {
        type: "success",
        component: <Rangeslider id="example-3" label="Label" min={0} max={200} value={100} valueLabelPrefix="$" />,
        text: <p>It also have a pre label for other symbols such as currency e.g. €, $ and £.</p>
    },
    {
        type: "error",
        component: <Rangeslider id="example-4" label="Label" value={50} />,
        text: <p>Don’t modify and remove label and maximum/minimum indicators as this makes it harder for user to grasp the content and context of use.</p>
    },
    {
        type: "error",
        component:
            <div>
                <div className="rangeslider">
                    <input id="example-5" type="range"/>
                    <div className="d-flex justify-content-between">
                        <label htmlFor="example-5">Label</label>
                        <output className="value-label px-2 align-items-center">
                            Average
                        </output>
                    </div>
                    <div className="value-range">
                        <small>Poor</small>
                        <small>Great</small>
                    </div>
                </div>
            </div>,
        text: <p>Don&apos;t use sliders for content without numeric values.</p>
    }
];

export const sliderShowCase = {
    id: "no-tabs",
    elements: [
        {
            component: <Rangeslider id="rangeslider-showcase-example" label="Label" min={0} max={100} value={50}/>,
            options: {
                radio: [
                    {
                        id: "unit_radio",
                        title: "Unit value",
                        values: [
                            {
                                name: "None",
                                value: {
                                    valueLabelPrefix: "",
                                    valueLabelPostfix: ""
                                }
                            },
                            {
                                name: "Currency",
                                value: {
                                    valueLabelPrefix: "$"
                                }
                            },
                            {
                                name: "Percent",
                                value: {
                                    valueLabelPostfix: "%"
                                }
                            }
                        ]
                    },
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
            title: "Slider",
            description: "The rangeslider has a label which indicates what value the slider is changing. It also has a minimum and maximum range which displays the range which user can select within. By holding and dragging the circle indicator along the line, the user can see the value change in real time."
        }
    ]
};
