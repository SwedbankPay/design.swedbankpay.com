import React from "react";
import { Link } from "react-router-dom";

import { DocContainer } from "@docutils";
import ColorDisplay from "@components/ColorDisplay";
import { EMLINK } from "constants";
import * as sbColors from "./swedbankpay-colors";
import * as pxColors from "./payex-colors";

/* sbColorDisplayList and pxColorDisplayList is due to swedbankpay and payex not only having different colors but also different amount of color groups/scales. */
const sbColorDisplayList = [
    {
        id: "main-colors",
        colorList: sbColors.mainText,
        head: "Main colors",
        description: <p>Our main color pallete.</p>
    },
    {
        id: "alert-colors",
        colorList: sbColors.alertText,
        head: "Alert colors",
        description: <p>These colors are used to visualize state, see <Link to="/docs/components/alerts/">Alert</Link> for an example.</p>
    },
    {
        id: "grayscale",
        colorList: sbColors.grayScaleText,
        head: "Grayscale",
        description: null
    },
    {
        id: "brownscale",
        colorList: sbColors.brownScaleText,
        head: "Brownscale",
        description: null
    }
];

const pxColorDisplayList = [
    {
        id: "main-colors",
        colorList: pxColors.mainText,
        head: "Main colors",
        description: <p>Our main color pallete.</p>
    }
];

const colorDisplayList = process.env.brand === "swedbankpay" ? sbColorDisplayList : pxColorDisplayList;

const Color = () => (
    <DocContainer>
        <p className="lead">Color palette</p>
        {colorDisplayList.map((elem, i) => (
            <ColorDisplay key={i} {...elem} />
        ))}
    </DocContainer>
);

export default Color;
