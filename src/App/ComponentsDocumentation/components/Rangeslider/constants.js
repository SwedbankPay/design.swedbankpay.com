import React from "react";
import Rangeslider from "@components/FormComponents/Rangeslider";

export const howToUse = [
    {
        type: "success",
        component: <Rangeslider label="Label" min={0} max={200} value={100}/>,
        text: <p>Do use <b>sliders</b> for content with numeric values.</p>
    },
    {
        type: "success",
        component: <Rangeslider label="Label" min={0} max={100} value={50} valueLabelPostfix="%"/>,
        text: <p>The <b>sliders</b> component also have a post label for special symbols to help the user easier understand the slider value. It could be shown as above with the percentage symbol.</p>
    },
    {
        type: "success",
        component: <Rangeslider label="Label" min={0} max={200} value={100} valueLabelPrefix="$" />,
        text: <p>It also have a pre label for other symbols such as currency e.g. €, $ and £.</p>
    },
    {
        type: "error",
        component: <Rangeslider label="Label" value={50} />,
        text: <p>Don’t modify and remove label and maximum/minimum indicators as this makes it harder for user to grasp the content and context of use.</p>
    },
    {
        type: "error",
        component:
            <div>
                <div className="rangeslider">
                    <p className="rangeslider-label">Label</p>
                    <input type="range"/>
                    <output className="value-label">
                    Average
                    </output>
                    <div className="value-range">
                        <small>Poor</small>
                        <small>Great</small>
                    </div>
                </div>
            </div>,
        text: <p>Don’t use sliders for content without numeric values.</p>
    }
];

export const sliderShowCase = {
    id: "no-tabs",
    elements: [
        {
            component: <Rangeslider label="Label" min={0} max={100} value={50}/>,
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
                        id: "unit_radio",
                        title: "Unit value",
                        values: [
                            {
                                name: "Default",
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
                    }
                ]
            },
            title: "Slider",
            description: "The slider component has a label which decribes the intent of the slider. It also has a minimum and maximum range which displays the range which user can pick inbetween. By holding and draging the circle indicator along the line, the user can see the value change and update in real time."
        }
    ]
};
