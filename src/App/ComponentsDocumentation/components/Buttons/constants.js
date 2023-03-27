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
                        name: "Default (Large)",
                        value: {
                            size: "lg"
                        }
                    },
                    {
                        name: "CTA (XL)",
                        value: {
                            size: "cta"
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
                            loading: true
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

const IconButtonOptions = idAddOn => (
    {
        radio: [
            {
                id: `${idAddOn ? idAddOn : ""}size_radio`,
                title: "Sizes",
                values: [
                    {
                        name: "Default (Large)",
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
            tab: "Tertiary",
            component: <ButtonComponent type="tertiary" label="Tertiary button" />,
            options: {
                radio: [
                    {
                        id: "icon_radio",
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
                        id: "size_radio",
                        title: "Sizes",
                        values: [
                            {
                                name: "Default (Large)",
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
                        id: "state_modifiers",
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
                                    loading: true
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
            title: "Tertiary button",
            description: "A lot of information: Destructive, random, all other purposes"
        },
        {
            tab: "Icon only",
            component: <ButtonComponent type="icon" icon="cloud" size="icon-xl" iconOnly={true}/>,
            title: "Icon only button",
            options: IconButtonOptions(),
            description: <p>
                Use this button in constrained places. This button is accessible for screen reader users, but remember to describe the action in aria-label. This button also comes in the following states: Enabled, hover, focus, active and disabled.
            </p>
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
                                    loading: true
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
        }
    ]
};
