import React from "react";
import ButtonComponent from "@components/Button";

export const overviewButtons = {
    id: "overviewButtons",
    tabsId: "overviewButtonsTabs",
    elements: [
        {
            tab: "Primary",
            component: <ButtonComponent type="executive" label="Primary" />,
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
            tab: "Secondary",
            component: <ButtonComponent outline type="executive" label="Secondary" />,
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
            description: "Use a secondary button for secondary call to action on a page. Pages with too many calls to action make it hard for users to know what to do next. Before adding lots of secondary buttons, try to simplify the page or break the content down across multiple pages."
        },
        {
            tab: "Link button",
            component: <ButtonComponent type="link" label="Link" />,
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
            description: "Should only be used in combination with a Primary or Secondary button. Use link for stand alone links see Links. Use for less important or less commonly used actions since they’re less prominent. Text buttons are often embedded in contained components like cards and dialogs. Since text buttons don’t have a container, they don’t distract from nearby content."
        }
    ]
};

export const destructiveButtons = {
    id: "destructiveButtons",
    tabsId: "destructiveButtonsTabs",
    elements: [
        {
            tab: "Guiding",
            component: <ButtonComponent outline type="destructive" label="Type something" />,
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
            description: "Only use warning buttons for actions with serious destructive consequences that cannot be easily undone by a user. For example, permanently deleting an account. When letting users carry out an action like this, it’s a good idea to include an additional step which asks them to confirm it."
        },
        {
            tab: "Text/Link",
            component: <ButtonComponent type="link-destructive" label="Type something" />,
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
            description: "Only use warning buttons for actions with serious destructive consequences that cannot be easily undone by a user. For example, permanently deleting an account. When letting users carry out an action like this, it’s a good idea to include an additional step which asks them to confirm it."
        },
        {
            tab: "Executive",
            component: <ButtonComponent type="destructive" label="Type something" />,
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
            description: "Use these only in confirming a destructive action. For example, use this button in a dialog confirming a deleting an account. Executive Destructive button takes a lot of attention from the user and should there be used with restraint."
        }
    ]
};
