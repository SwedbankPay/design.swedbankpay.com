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

export const logoPayex = {
    id: "logoPayex",
    tabsId: "logoPayexTabs",
    elements: [
        {
            tab: "Green",
            component: <LogotypeComponent src={`${basename}img/logo/payex-logo.svg`} alt="PayEx logo" type="horizontal" />,
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
            title: "Green logo",
            description: "The green logo is the primary logo and should always be considered before moving on to another version."
        },
        {
            tab: "White",
            component: <LogotypeComponent src={`${basename}img/logo/payex-logo-neg.svg`} alt="PayEx logo" type="horizontal" />,
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
            title: "White logo",
            description: <p>
                Should only be used on PayEx primary color (green) and on dark backgrounds.
                The green logo is the primary logo and should always be considered before moving on to another version.
            </p>
        }
    ]
};

export const logotypeMisuses = [
    {
        src: "img/documentation/logotype/old_logo.png",
        height: "h-100",
        title: "Use old version",
        description: "Do not use the old version of the logo – darker and more detailed coin."
    },
    {
        src: "img/documentation/logotype/resize_logo.png",
        height: "h-100",
        title: "Resize",
        description: "Do not distort or wrap the logo in any way."
    },
    {
        src: "img/documentation/logotype/pay_text.png",
        height: "h-50",
        title: "Demount",
        description: "Do not use the wordmark without the icon (the coin)."
    },
    {
        src: "img/documentation/logotype/swedbank_logo.png",
        height: "h-75",
        title: "Use Swedbank logo",
        description: "Do not use the Swedbank logo instead or in combination with the Swedbank Pay logo."
    },
    {
        src: "img/documentation/logotype/rotated_logo.png",
        height: "h-100",
        title: "Rotate",
        description: "Do not rotate the logo"
    },
    {
        src: "img/documentation/logotype/green_logo.png",
        height: "h-100",
        title: "Alter color",
        description: "Do not change the logo colour or tone in any way."
    },
    {
        src: "img/documentation/logotype/black_and_white_logo.png",
        height: "h-100",
        title: "Make B/W",
        description: "Do not change the hue of the logo"
    },
    {
        src: "img/documentation/logotype/shadowed_logo.png",
        height: "h-100",
        title: "Add effect",
        description: "Do not add any shadows or other effects to the logo."
    },
    {
        src: "img/documentation/logotype/changed_wordmark.png",
        height: "h-100",
        title: "Change wordmark",
        description: "Do not manipulate or replace the wordmark"
    },
    {
        src: "img/documentation/logotype/moved_wordmark.png",
        height: "h-50",
        title: "Move wordmark",
        description: "Do not move the workmark from its original position"
    }
];
