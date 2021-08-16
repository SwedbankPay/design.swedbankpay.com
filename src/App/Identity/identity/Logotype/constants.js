import React from "react";

import LogotypeComponent from "@components/Logotype";

const basename = process.env.basename;

export const logoBlack = {
    id: "logoBlack",
    tabsId: "logoBlackTabs",
    elements: [
        {
            tab: "Vertical",
            component: <LogotypeComponent src={`${basename}designguide/assets/swedbankpay-logo-v.svg`} alt="Swedbank Pay vertical logo" type="vertical" />,
            options: {
                radio: [
                    {
                        id: "size_radio",
                        title: "Sizes",
                        values: [
                            {
                                name: "Smallest",
                                value: {
                                    size: "xs"
                                },
                                description: <>
                                    <h4>Important</h4>
                                    <p>This is the smallest version of the logotype that can be used! Never alter this logotype to fit smaller spaces.</p>
                                </>
                            },
                            {
                                name: "Small",
                                default: true,
                                value: {
                                    size: "sm"
                                }
                            },
                            {
                                name: "Medium",
                                value: {
                                    size: "md"
                                }
                            },
                            {
                                name: "Large",
                                value: {
                                    size: "lg"
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Vertical logo",
            description: "The vertical logo (with black text) is the primary logo is the primary logo and should always be considered before moving on to another version."
        },
        {
            tab: "Horizontal",
            component: <LogotypeComponent src={`${basename}designguide/assets/swedbankpay-logo-h.svg`} alt="Swedbank Pay horizontal logo" type="horizontal" />,
            options: {
                radio: [
                    {
                        id: "size_radio",
                        title: "Sizes",
                        values: [
                            {
                                name: "Smallest",
                                value: {
                                    size: "xs"
                                },
                                description: <>
                                    <h4>Important</h4>
                                    <p>This is the smallest version of the logotype that can be used! Never alter this logotype to fit smaller spaces.</p>
                                </>
                            },
                            {
                                name: "Small",
                                default: true,
                                value: {
                                    size: "sm"
                                }
                            },
                            {
                                name: "Medium",
                                value: {
                                    size: "md"
                                }
                            },
                            {
                                name: "Large",
                                value: {
                                    size: "lg"
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Horizontal logo",
            description: <>
                The horizontal logo (with black text) is only used if the vertical primary logotype can’t be used. Reasons for using the horizontal logo might be:
                <ul className="list list-bullet">
                    <li>The primary logo font is too similar in size to other fonts close by</li>
                    <li>The primary logo is too small/wrong format compared to other logotypes in the same context</li>
                </ul>
            </>
        }
    ]
};

export const logoWhite = {
    id: "logoWhite",
    tabsId: "logoWhiteTabs",
    elements: [
        {
            tab: "Vertical",
            component: <LogotypeComponent src={`${basename}designguide/assets/swedbankpay-logo-v-neg.svg`} alt="Swedbank Pay vertical logo" type="vertical" />,
            altBackground: true,
            options: {
                radio: [
                    {
                        id: "size_radio_white",
                        title: "Sizes",
                        values: [
                            {
                                name: "Smallest",
                                value: {
                                    size: "xs"
                                },
                                description: <>
                                    <h4>Important</h4>
                                    <p>This is the smallest version of the logotype that can be used! Never alter this logotype to fit smaller spaces.</p>
                                </>
                            },
                            {
                                name: "Small",
                                default: true,
                                value: {
                                    size: "sm"
                                }
                            },
                            {
                                name: "Medium",
                                value: {
                                    size: "md"
                                }
                            },
                            {
                                name: "Large",
                                value: {
                                    size: "lg"
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Vertical logo",
            description: <p>
                Should only be used on Swedbank Pay’s primary color (Yellow) and on dark backgrounds.
                The vertical logo (with black text) is the primary logo is the primary logo and should always be considered before moving on to another version.
            </p>
        },
        {
            tab: "Horizontal",
            component: <LogotypeComponent src={`${basename}designguide/assets/swedbankpay-logo-h-neg.svg`} alt="Swedbank Pay horizontal logo" type="horizontal" />,
            altBackground: true,
            options: {
                radio: [
                    {
                        id: "size_radio_white",
                        title: "Sizes",
                        values: [
                            {
                                name: "Smallest",
                                value: {
                                    size: "xs"
                                },
                                description: <>
                                    <h4>Important</h4>
                                    <p>This is the smallest version of the logotype that can be used! Never alter this logotype to fit smaller spaces.</p>
                                </>
                            },
                            {
                                name: "Small",
                                default: true,
                                value: {
                                    size: "sm"
                                }
                            },
                            {
                                name: "Medium",
                                value: {
                                    size: "md"
                                }
                            },
                            {
                                name: "Large",
                                value: {
                                    size: "lg"
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Horizontal logo",
            description: <p>
                Should only used on Swedbank Pay’s primary color (Yellow) and on dark backgrounds.
                The vertical logo (with black text) is the primary logo is the primary logo and should always be considered before moving on to another version.
            </p>
        }
    ]
};
