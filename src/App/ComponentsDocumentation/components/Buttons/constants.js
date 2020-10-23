import React from "react";
import ButtonComponent from "@components/Button";
import { Link } from "react-router-dom";

export const overviewButtons = {
    id: "overviewButtons",
    tabsId: "overviewButtonsTabs",
    elements: [
        {
            tab: "Primary",
            component: <ButtonComponent type="primary" label="Do something" />,
            options: {
                checkbox: [
                    {
                        id: "icon_check",
                        name: "Icon",
                        value: {
                            icon: "cloud"
                        }
                    },
                    {
                        id: "loader_check",
                        name: "Loader",
                        value: {
                            loader: true,
                            loading: true
                        }
                    }
                ],
                radio: [
                    {
                        id: "size_radio",
                        title: "Sizes",
                        values: [
                            {
                                name: "Large",
                                value: {
                                    size: "lg"
                                }
                            },
                            {
                                name: "Small",
                                value: {
                                    size: "sm"
                                }
                            },
                            {
                                name: "Extra small",
                                value: {
                                    size: "xs"
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Primary button",
            description: "Use a primary button as the main call to action on a page. Avoid using multiple default buttons on a single page. Having more than one main call to action reduces their impact, and makes it harder for users to know what to do next."
        },
        {
            tab: "BankID",
            component: <ButtonComponent type="primary" bankId="se" label="Do something" />,
            options: {
                checkbox: [
                    {
                        id: "loader_check",
                        name: "Loader",
                        value: {
                            loader: true,
                            loading: true
                        }
                    }
                ],
                radio: [
                    {
                        id: "country_radio",
                        title: "Country",
                        values: [
                            {
                                name: "Sweden",
                                value: {
                                    bankId: "se"
                                }
                            },
                            {
                                name: "Norway",
                                value: {
                                    bankId: "no"
                                }
                            }
                        ]
                    }
                ]
            },
            title: "BankID button",
            description: <>
                <p>
                    Use BankID buttons as the main call to action on a page when the following action is signing or verifying something with BankID.
                    Currently only available for Swedish and Norwegian BankID.
                </p>
                <p>
                    Avoid using multiple BankID buttons on a single page. Having more than one main call to action reduces their impact,
                    and makes it harder for users to know what to do next.
                </p>
            </>
        },
        {
            tab: "Secondary",
            component: <ButtonComponent type="secondary" label="Do something" />,
            options: {
                checkbox: [
                    {
                        id: "icon_check",
                        name: "Icon",
                        value: {
                            icon: "cloud"
                        }
                    },
                    {
                        id: "loader_check",
                        name: "Loader",
                        value: {
                            loader: true,
                            loading: true
                        }
                    }
                ],
                radio: [
                    {
                        id: "size_radio",
                        title: "Sizes",
                        values: [
                            {
                                name: "Large",
                                value: {
                                    size: "lg"
                                }
                            },
                            {
                                name: "Small",
                                value: {
                                    size: "sm"
                                }
                            },
                            {
                                name: "Extra small",
                                value: {
                                    size: "xs"
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Secondary button",
            description: <p>
                Use secondary buttons for secondary call to actions on a page.
                Pages with too many calls to action make it hard for users to know what to do next.
                Before adding lots of secondary buttons, try to simplify the page or break the content down across multiple pages or
                consider using <Link to="/components/links#action-link">Action links</Link>.
            </p>
        },
        {
            tab: "Text/Link button",
            component: <ButtonComponent type="link" label="Do something" />,
            title: "Link button",
            options: {
                checkbox: [
                    {
                        id: "icon_check",
                        name: "Icon",
                        value: {
                            icon: "cloud"
                        }
                    }
                ]
            },
            description: "Only use in combination with a primary or secondary button – for stand alone links see Links. Use for less important or less commonly used actions since they’re less prominent. Text buttons are often embedded in contained components like cards and dialogs. Since text buttons don’t have a container, they don’t distract from nearby content."
        }
    ]
};

export const destructiveButtons = {
    id: "destructiveButtons",
    tabsId: "destructiveButtonsTabs",
    elements: [
        {
            tab: "Guiding",
            component: <ButtonComponent type="guiding-destructive" label="Do something" />,
            options: {
                checkbox: [
                    {
                        id: "icon_check_destructive",
                        name: "Icon",
                        value: {
                            icon: "cloud"
                        }
                    },
                    {
                        id: "loader_check_destructive",
                        name: "Loader",
                        value: {
                            loader: true,
                            loading: true
                        }
                    }
                ],
                radio: [
                    {
                        id: "size_radio_destructive",
                        title: "Sizes",
                        values: [
                            {
                                name: "Large",
                                value: {
                                    size: "lg"
                                }
                            },
                            {
                                name: "Small",
                                value: {
                                    size: "sm"
                                }
                            },
                            {
                                name: "Extra small",
                                value: {
                                    size: "xs"
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Destructive button",
            description: <>
                <p>
                    Use a guiding destructive button to clearly show the user that the action is destructive. The button is designed to not take on too much visual
                    attention from the user yet still clearly communicate a destructive action. It can therefor safely be used in most contexts.
                </p>
                <p>
                    When letting users carry out an action like this, it’s a good idea to include an additional step which asks them to confirm it.
                    The guiding destructive button will therefor often occur prior to the executive destructive button in a user flow.
                </p>
            </>
        },
        {
            tab: "Text/Link",
            component: <ButtonComponent type="link-destructive" label="Do something" />,
            options: {
                checkbox: [
                    {
                        id: "icon_check_destructive",
                        name: "Icon",
                        value: {
                            icon: "cloud"
                        }
                    }
                ]
            },
            title: "Destructive button",
            description: "The text destructive button is used as an alternative for the guiding destructive button and can be used when there is limited space, within other components or various containers."
        },
        {
            tab: "Executive",
            component: <ButtonComponent type="executive-destructive" label="Do something" />,
            title: "Executive destructive button",
            options: {
                checkbox: [
                    {
                        id: "icon_check_destructive",
                        name: "Icon",
                        value: {
                            icon: "close"
                        }
                    },
                    {
                        id: "loader_check_destructive",
                        name: "Loader",
                        value: {
                            loader: true,
                            loading: true
                        }
                    }
                ],
                radio: [
                    {
                        id: "size_radio_destructive",
                        title: "Sizes",
                        values: [
                            {
                                name: "Large",
                                value: {
                                    size: "lg"
                                }
                            },
                            {
                                name: "Small",
                                value: {
                                    size: "sm"
                                }
                            },
                            {
                                name: "Extra small",
                                value: {
                                    size: "xs"
                                }
                            }
                        ]
                    }
                ]
            },
            description: "The executive destructive button should be used sparingly and only in case of a final destructive call to action. The executive destructive button visually takes up a lot of the attention. To not distract the user from other content it is often used in simpler contexts such as dialogs, for example when confirming removal of certain information."
        }
    ]
};
