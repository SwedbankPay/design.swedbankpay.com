import React from "react";
import { Link } from "react-router-dom";

import { DocContainer } from "@docutils";
import ColorPreview from "./ColorPreview";

const mainText = [
    {
        name: "Yellow",
        hex: "#FDC129"
    },
    {
        name: "Brown",
        hex: "#512B2B"
    },
    {
        name: "Orange Main",
        hex: "#EE7023"
    },
    {
        name: "Info Turquoise",
        hex: "#8ACDC3"
    },
    {
        name: "Info pink",
        hex: "#EFB7B6"
    },
    {
        name: "Apricot",
        hex: "#FBF2EA"
    },
    {
        name: "Light Turquoise",
        hex: "#EBF8F2"
    },
    {
        name: "Turquoise",
        hex: "#31A3AE"
    },
    {
        name: "Turquoise Links",
        hex: "#257886"
    }
];

const alertText = [
    {
        name: "Brand success",
        hex: "#51971B"
    },
    {
        name: "Brand success light",
        hex: "#F2F7EB"
    },
    {
        name: "Brand warning",
        hex: "#FF9900"
    },
    {
        name: "Brand warning light",
        hex: "#FFF3D5"
    },
    {
        name: "Brand error",
        hex: "#C5131C"
    },
    {
        name: "Brand error light",
        hex: "#F9DED3"
    },
    {
        name: "Brand info",
        hex: "#4572C0"
    },
    {
        name: "Brand info light",
        hex: "#E8EFF9"
    }
];

const grayScaleText = [
    {
        name: "Black",
        hex: "#000000"
    },
    {
        name: "Near black",
        hex: "#111111"
    },
    {
        name: "Gray dark",
        hex: "#262626"
    },
    {
        name: "Gray medium dark",
        hex: "#363636"
    },
    {
        name: "Gray medium",
        hex: "#404040"
    },
    {
        name: "Gray medium light",
        hex: "#545454"
    },
    {
        name: "Gray light",
        hex: "#666666"
    },
    {
        name: "Gray light alt",
        hex: "#999999"
    },
    {
        name: "Gray bright",
        hex: "#EAEAEA"
    },
    {
        name: "Gray bright alt",
        hex: "#BCBCBC"
    },
    {
        name: "Near gray",
        hex: "#F9F9F9"
    },
    {
        name: "Off white",
        hex: "#F4F4F4"
    },
    {
        name: "Near white",
        hex: "#F0F0F0"
    },
    {
        name: "White",
        hex: "#FFFFFF"
    }
];

const MainColors = () => (

    <>
        <h2 id="main-colors">Main colors</h2>
        <p>
            Our main color pallete.
        </p>
        <ul className="list color-preview">
            {mainText.map((elem, i) => (
                <li key={i} >
                    <ColorPreview name={elem.name} hex={elem.hex} />
                </li>
            ))}
        </ul>
    </>
);

const AlertColors = () => (
    <>
        <h2 id="alert-colors">Alert colors</h2>
        <p>
            These colors are used to visualize state,
            see <Link to="/docs/components/alerts/">Alert</Link> for an example.
        </p>
        <ul className="list color-preview">
            {alertText.map((elem, i) => (
                <li key={i} >
                    <ColorPreview name={elem.name} hex={elem.hex} />
                </li>
            ))}
        </ul>
    </>
);

const Grayscale = () => (
    <>
        <h2 id="grayscale">Grayscale</h2>
        <ul className="list color-preview">
            {grayScaleText.map((elem, i) => (
                <li key={i} >
                    <ColorPreview name={elem.name} hex={elem.hex} />
                </li>
            ))}
        </ul>
    </>
);

const Color = () => (
    <DocContainer>
        <p className="lead">Color palette</p>
        <MainColors />
        <AlertColors />
        <Grayscale />
    </DocContainer>
);

export default Color;

/* For testing */
export { MainColors, AlertColors, Grayscale };
