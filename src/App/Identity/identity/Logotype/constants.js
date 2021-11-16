import React from "react";

import LogotypeComponent from "@components/Logotype";
import Alert from "@components/Alert";

const basename = process.env.basename;

export const logoBlack = {
    id: "logoBlack",
    tabsId: "logoBlackTabs",
    elements: [
        {
            tab: "Vertical",
            component: <LogotypeComponent src={`${basename}img/logo/swedbankpay-logo-v.svg`} alt="Swedbank Pay vertical logo" type="vertical" />,
            options: {
                radio: [
                    {
                        id: "size_radio",
                        title: "Sizes",
                        values: [
                            {
                                name: "Extra small",
                                value: {
                                    size: "xs"
                                },
                                description: <Alert type="warning" icon="warning" className="mb-0 mt-4" text={
                                    <p><b>Important. </b>
                                        This is the smallest version of the logotype that can be used! Never alter this logotype to fit smaller spaces.
                                    </p>
                                } />
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
            description: "The vertical logo with black text is primary – the one that will build recognition. Always consider the vertical logo first before before the horizontal logo."
        },
        {
            tab: "Horizontal",
            component: <LogotypeComponent src={`${basename}img/logo/swedbankpay-logo-h.svg`} alt="Swedbank Pay horizontal logo" type="horizontal" />,
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
                                description: <Alert type="warning" icon="warning" className="mb-0 mt-4" text={
                                    <p><b>Important. </b>
                                        This is the smallest version of the logotype that can be used! Never alter this logotype to fit smaller spaces.
                                    </p>
                                } />
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
                The horizontal logo is only used if the vertical primary logotype can not be used. Reasons for using the horizontal logo might be:
                <ul className="list list-bullet mt-3">
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
            component: <LogotypeComponent src={`${basename}img/logo/swedbankpay-logo-v-neg.svg`} alt="Swedbank Pay vertical logo" type="vertical" />,
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
                                description: <Alert type="warning" icon="warning" className="mb-0 mt-4" text={
                                    <p><b>Important. </b>
                                        This is the smallest version of the logotype that can be used! Never alter this logotype to fit smaller spaces.
                                    </p>
                                } />
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
            description: <p>The vertical logo should always be considered before the horizontal logo.</p>
        },
        {
            tab: "Horizontal",
            component: <LogotypeComponent src={`${basename}img/logo/swedbankpay-logo-h-neg.svg`} alt="Swedbank Pay horizontal logo" type="horizontal" />,
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
                                description: <Alert type="warning" icon="warning" className="mb-0 mt-4" text={
                                    <p><b>Important. </b>
                                        This is the smallest version of the logotype that can be used! Never alter this logotype to fit smaller spaces.
                                    </p>
                                } />
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
            description: <p>The horizontal logo is only used if the vertical logotype can not be used.</p>
        }
    ]
};
