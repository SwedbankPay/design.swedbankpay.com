import React from "react";
import ButtonComponent from "@components/Button";
import { Link } from "react-router-dom";

const ButtonOptions = idAddOn => (
    {
        radio: [
            {
                id: `${idAddOn ? idAddOn : ""}icon_radio`,
                title: "Icon",
                values: [
                    {
                        name: "None"
                    },
                    {
                        name: "Before",
                        value: {
                            icon: "cloud"
                        }
                    },
                    {
                        name: "After",
                        value: {
                            icon: "keyboard_arrow_down",
                            iconAfter: true
                        }
                    }
                ]
            },
            {
                id: `${idAddOn ? idAddOn : ""}size_radio`,
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
            },
            {
                id: `${idAddOn ? idAddOn : ""}state_modifiers`,
                title: "State modifiers",
                values: [
                    {
                        name: "Enabled",
                        value: {
                            loader: false,
                            loading: false,
                            disabled: false
                        }
                    },
                    {
                        name: "Loading",
                        value: {
                            loader: true,
                            loading: true,
                            disabled: true
                        }
                    },
                    {
                        name: "Disabled",
                        value: {
                            disabled: true
                        }
                    }
                ]
            }
        ]
    }
);

export const overviewButtons = {
    id: "overviewButtons",
    tabsId: "overviewButtonsTabs",
    elements: [
        {
            tab: "Primary",
            component: <ButtonComponent type="primary" label="Primary button" />,
            options: ButtonOptions(),
            title: "Primary button",
            description: "Use a primary button as the main call to action on a page. Avoid using multiple default buttons on a single page. Having more than one main call to action reduces their impact, and makes it harder for users to know what to do next."
        },
        {
            tab: "BankID",
            component: <ButtonComponent type="primary" bankId="se" label="BankId button" />,
            options: {
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
                    },
                    {
                        id: "loading_icon",
                        title: "State modifiers",
                        values: [
                            {
                                name: "Enabled",
                                value: {
                                    loader: false,
                                    loading: false,
                                    disabled: false
                                }
                            },
                            {
                                name: "Loading",
                                value: {
                                    loader: true,
                                    loading: true,
                                    disabled: true
                                }
                            },
                            {
                                name: "Disabled",
                                value: {
                                    disabled: true
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
            component: <ButtonComponent type="secondary" label="Secondary button" />,
            options: ButtonOptions(),
            title: "Secondary button",
            description: <p>
                Use secondary buttons for secondary call to actions on a page.
                Pages with too many calls to action make it hard for users to know what to do next.
                Before adding lots of secondary buttons, try to simplify the page or break the content down across multiple pages or
                consider using <Link to="/components/links#action-link">Action links</Link>.
            </p>
        },
        {
            tab: "Link",
            component: <ButtonComponent type="link" label="Link button" />,
            title: "Link button",
            options: ButtonOptions(),
            description: <p>
                Only use in combination with a primary or secondary button – for stand alone links see <Link to="/components/links">Links</Link>. Use for less important or less commonly used actions since they’re less prominent. Text buttons are often embedded in contained components like dialogs.
            </p>
        },
        {
            tab: "Icon only",
            component: <ButtonComponent type="default" icon="cloud" size="icon-xl" iconOnly={true}/>,
            title: "Icon only button",
            options: {
                radio: [
                    {
                        id: "type_radio",
                        title: "Type",
                        values: [
                            {
                                name: "Default",
                                value: {
                                    type: "default",
                                    icon: "cloud"
                                }
                            },
                            {
                                name: "Primary",
                                value: {
                                    type: "primary",
                                    icon: "cloud"
                                }
                            },
                            {
                                name: "Secondary",
                                value: {
                                    type: "secondary",
                                    icon: "cloud"
                                }
                            }
                        ]
                    },
                    {
                        id: "size",
                        title: "Sizes",
                        values: [
                            {
                                name: "Extra large",
                                value: {
                                    size: "icon-xl"
                                }
                            },
                            {
                                name: "Large",
                                value: {
                                    size: "icon-lg"
                                }
                            },
                            {
                                name: "Small",
                                value: {
                                    size: "icon-sm"
                                }
                            },
                            {
                                name: "Extra small",
                                value: {
                                    size: "icon-xs"
                                }
                            }
                        ]
                    }
                ]
            },
            description: <p>
                Use this button in constrained places. This button is accessible for screen reader users, but remember to describe the action in aria-label. This button also comes in the following states: Enabled, hover, focus, active and disabled.
            </p>
        }
    ]
};

export const destructiveButtons = {
    id: "destructiveButtons",
    tabsId: "destructiveButtonsTabs",
    elements: [
        {
            tab: "Guiding",
            component: <ButtonComponent type="guiding-destructive" label="Guiding destructive button" />,
            options: ButtonOptions("destructive_"),
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
            tab: "Executive",
            component: <ButtonComponent type="executive-destructive" label="Executive destructive button" />,
            title: "Executive destructive button",
            options: ButtonOptions("destructive_"),
            description: "The executive destructive button should be used sparingly and only in case of a final destructive call to action. The executive destructive button visually takes up a lot of the attention. To not distract the user from other content it is often used in simpler contexts such as dialogs, for example when confirming removal of certain information."
        },
        {
            tab: "Link",
            component: <ButtonComponent type="link-destructive" label="Link destructive button" />,
            options: ButtonOptions("destructive_"),
            title: "Destructive button",
            description: "The text destructive button is used as an alternative for the guiding destructive button and can be used when there is limited space, within other components or various containers."
        }
    ]
};
