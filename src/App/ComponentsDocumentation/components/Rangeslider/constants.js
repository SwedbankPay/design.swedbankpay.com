import React from "react";
import RangesliderComponent from "@components/FormComponents/Rangeslider";

export const howToUse = [
    {
        type: "success",
        component: <RangesliderComponent label="Label" min={0} max={200} value={100}/>,
        text: "Do use sliders for content with numeric values."
    },
    {
        type: "success",
        component: <RangesliderComponent label="Label" min={0} max={100} value={50} valueLabelPostfix="%"/>,
        text: "The sliders component also have a post label for special symbols to help the user easier understand the slider value. It could be shown as above with the precentage symbol."
    },
    {
        type: "success",
        component: <RangesliderComponent label="Label" min={0} max={200} value={100} valueLabelPrefix="$" />,
        text: "It also have a pre label for other symbols such as currency e.g. €, $ and £."
    },
    {
        type: "error",
        component: <RangesliderComponent label="Label" value={50} />,
        text: "Don’t modify and remove label and maximum/minimum indicators as this makes it harder for user to grasp the content and context of use."
    },
    {
        type: "error",
        component:
            <div>{/* addlabel */}
                <div className="rangeslider">
                    <input type="range"/>
                    <output className="value-label">
                    Average
                    </output>
                </div>
                <div className="value-range">
                    <small>Poor</small>
                    <small>Great</small>
                </div>
            </div>,
        text: "Do not use sliders for content without numeric values."
    }
];
