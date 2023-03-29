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
                        name: "Extra large",
                        value: {
                            size: "xl"
                        }
                    },
                    {
                        name: "Large (Default)",
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
            component: <ButtonComponent size="xl" type="primary" label="Primary button" />,
            options: ButtonOptions(),
            title: "Primary button",
            description: "Use a primary button as the main call to action on a page. We strongly advice you to not use more than one primary button on each page."
        },
        {
            tab: "Secondary",
            component: <ButtonComponent size="xl" type="secondary" label="Secondary button" />,
            options: ButtonOptions(),
            title: "Secondary button",
            description: "Secondary buttons are used for offering non-primary actions to users i.e. Cancel, Reset, Next section, etc."
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
            description: "Tertiary actions are additional actions that the user may need to access. They are often smaller then primary and secondary buttons."
        },
        {
            tab: "Icon only",
            component: <ButtonComponent type="icon" icon="cloud" size="lg" iconOnly={true}/>,
            title: "Icon only button",
            options: IconButtonOptions(),
            description: <p>
                Use this button in constrained places. This button is accessible for screen reader users, but remember to describe the action in aria-label.
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
            description: <p>
                    Use BankID buttons as the main call to action on a page when the following action is signing or verifying something with BankID.
                    Currently only available for Swedish and Norwegian BankID. Avoid using multiple BankID buttons on a single page.
            </p>
        }
    ]
};

export const buttonUtilClasses = [
    {
        tag: "btn-group",
        description: "Using two or more buttons combined. Adds internal spacing."
    },
    {
        tag: "btn-block",
        description: "Button will use the full width of its parent container."
    },
    {
        tag: "btn-xl",
        description: "Button size extra large"
    },
    {
        tag: "btn-lg",
        description: "Button size large"
    },
    {
        tag: "btn-sm",
        description: "Button size small"
    },
    {
        tag: "btn-xs",
        description: "Button size extra small"
    },
    {
        tag: "loading",
        description: "Button will get a spinning loader."
    }
];
