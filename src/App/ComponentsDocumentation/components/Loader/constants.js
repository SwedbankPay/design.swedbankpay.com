import React from "react";
import { Link } from "react-router-dom";

const Loader = ({ inverted, size, backgroundDark }) => (
    <div className={`loader-preview-container${backgroundDark ? " dark" : ""} d-flex justify-content-center align-items-center`}>
        <div className={`loader${inverted ? " loader-inverted" : ""}${size ? ` ${size}` : ""}`}></div>
    </div>
);

export const loaderShowCase = {
    id: "no-tabs",
    elements: [
        {
            component: <Loader />,
            options: {
                radio: [
                    {
                        id: "color_radio",
                        title: "Color",
                        values: [
                            {
                                name: "Default"
                            },
                            {
                                name: "Inverted",
                                value: {
                                    inverted: true,
                                    backgroundDark: true
                                }
                            }
                        ]
                    },
                    {
                        id: "size_radio",
                        title: "Size",
                        values: [
                            {
                                name: "Default",
                                value: {
                                    size: ""
                                }
                            },
                            {
                                name: "Small",
                                value: {
                                    size: "loader-sm"
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Loader",
            description: "Loading spinners should be used when the wait time is anticipated to extend over one second."
        }
    ]
};

export const howToUse = [
    {
        contents: [
            {
                type: "success",
                maxWidth: true,
                content:
                <div className="d-flex flex-column align-items-center col-5">
                    <p className="text-align-center"><b>Opening BankID app on your mobile device, please don&apos;t close this window</b></p>
                    <div className="loader"></div>
                </div>
            }
        ],
        description: "If the anticipated waiting time is long, it’s recommended to show a text explaining what is happening to the user."
    },
    {
        contents: [
            {
                type: "success",
                content:
                <button className="btn btn-primary disabled">ID authentication
                    <div className="loader loader-sm"></div>
                </button>
            },
            {
                type: "error",
                content:
                    <div className="d-flex">
                        <button disabled className="btn btn-primary btn-bank-id">
                            ID authentication
                            <i className="bank-id bank-id-se" aria-hidden="true"></i>
                        </button>
                        <div className="loader loader-sm align-self-center"></div>
                    </div>
            }
        ],
        description: <>If the loading is contextual to a certain button on the page, the <Link to="/components/buttons">button</Link> loading state can be used instead of the loader component.</>
    }
];
