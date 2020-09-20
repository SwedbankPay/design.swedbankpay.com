import React from "react";

const BASENAME = process.env.basename;

export const logoBlack = {
    id: "logoBlack",
    tabsId: "logoBlackTabs",
    elements: [
        {
            tab: "Vertical",
            component: <img src={`${BASENAME}img/swedbankpay-logo-v.svg`} alt="Swedbank Pay horizontal logo"/>,
            options: {
                radio: [
                    {
                        id: "size_radio",
                        title: "Sizes",
                        values: [
                            {
                                name: "Small (24px)",
                                value: {
                                    size: "sm"
                                },
                                description: <>
                                    <h4>Small</h4>
                                    Hello
                                </>
                            },
                            {
                                name: "Medium (32px)",
                                value: {
                                    size: "md"
                                },
                                description: <>
                                    <h4>Medium</h4>
                                    Hello
                                </>
                            },
                            {
                                name: "Large (40px)",
                                value: {
                                    size: "lg"
                                },
                                description: <>
                                    <h4>Large</h4>
                                    Hello
                                </>
                            }
                        ]
                    }
                ]
            },
            activeOptions: [
                {
                    id: "size_radio",
                    value: {
                        size: "sm"
                    },
                    description: <>
                        <h4>Small</h4>
                        Hello
                    </>
                }
            ],
            title: "Vertical logo",
            description: "The vertical logo (with black text) is the primary logo is the primary logo and should always be considered before moving on to another version"
        },
        {
            tab: "Horizontal",
            component: <img src={`${BASENAME}img/swedbankpay-logo.svg`} alt="Swedbank Pay vertical logo"/>,
            options: {
                radio: [
                    {
                        id: "size_radio",
                        title: "Sizes",
                        values: [
                            {
                                name: "Small (24px)",
                                value: {
                                    size: "sm"
                                }
                            },
                            {
                                name: "Medium (32px)",
                                value: {
                                    size: "md"
                                }
                            },
                            {
                                name: "Large (40px)",
                                value: {
                                    size: "lg"
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Horizontal logo",
            description: "Use a primary button as the main call to action on a page. Avoid using multiple default buttons on a single page. Having more than one main call to action reduces their impact, and makes it harder for users to know what to do next."
        }
    ]
};
