import React from "react";

const Loader = ({ light, size, backgroundDark }) => (
    <div className={`loader-preview-container${backgroundDark ? " dark" : ""} d-flex justify-content-center align-items-center`}>
        <div className={`loader${light ? " loader-light" : ""}${size ? ` ${size}` : ""}`}></div>
    </div>
);

export const loaderShowCase = {
    id: "no-tabs",
    elements: [
        {
            component: <Loader size="loader-sm"/>,
            options: {
                radio: [
                    {
                        id: "color_radio",
                        title: "Color",
                        values: [
                            {
                                name: "Dark", // default?
                                value: {
                                    light: false
                                }
                            },
                            {
                                name: "Light",
                                value: {
                                    light: true,
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
                                name: "Small",
                                value: {
                                    size: "loader-sm"
                                }
                            },
                            {
                                name: "Medium",
                                value: {
                                    size: ""
                                }
                            },
                            {
                                name: "Large",
                                value: {
                                    size: "loader-lg"
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Loader",
            description: "Loading spinners should be used when the wait time is anticipated extend over three seconds."
        }
    ]
};

export const howToUse = [
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
                        <button className="btn btn-primary">ID authentication</button>
                        <div className="loader"></div>
                    </div>
            }
        ],
        description: "The loader component should always be contextual and scaled down when needed to provide a clear indication of element being loaded"
    },
    {
        contents: [
            {
                type: "success",
                content:
                <div className="d-flex flex-column align-items-center">
                    <p className="text-align-center"><b>Opening BankID app on your mobile device, please don&apos;t close this window</b></p>
                    <div className="loader loader-sm"></div>
                </div>
            },
            {
                type: "error",
                content: <div className="loader loader-center"></div>
            }
        ],
        description: "Make sure to provide sufficient context whenever the loader component is being displayed in a separate page or on its own in a longer duration. It is not enough to only showcase loader, rather it is always better explaining what is happening in order to keep the user aware of the situation."
    }
];
