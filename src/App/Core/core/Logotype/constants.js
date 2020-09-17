import React from "react";

const BASENAME = process.env.basename;

export const logoBlack = {
    id: "overviewButtons",
    tabsId: "overviewButtonsTabs",
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
            title: "Vertical logo",
            description: "Use a primary button as the main call to action on a page. Avoid using multiple default buttons on a single page. Having more than one main call to action reduces their impact, and makes it harder for users to know what to do next."
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
