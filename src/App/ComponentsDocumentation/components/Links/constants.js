import React from "react";
import Link from "@components/Link";
import ActionLink from "~/src/App/components/ActionLink";

const ShowcaseComponent = ({ rightIcon, leftIcon, linkText, smallFont, backgroundDark, bright, standalone, disabled }) => {
    const attrs = {
        rightIcon,
        leftIcon,
        linkText,
        smallFont,
        bright,
        standalone,
        disabled
    };

    return (
        <div className={`loader-preview-container${backgroundDark ? " dark" : ""} d-flex justify-content-center align-items-center`}>
            {standalone
                ? <Link {...attrs} />
                : <p className={`mt-3${backgroundDark ? " text-white" : ""}${smallFont ? " small-text" : ""}`}>{"\n"}
                    Paragraph text with a <Link {...attrs}/>{"\n"}
                </p>
            }
        </div>
    );
};

const ShowcaseActionComponent = ({ badge, smallText, multiline, newTab, disabled }) => (
    <div className="d-flex flex-column w-100">
        <ActionLink linkText="Pay now" className={` ${badge ? "badge badge-default badge-number" : null}`} badge={badge} smallText={smallText} multiline={multiline} newTab={newTab} disabled={disabled}/>{"\n"}
        <ActionLink linkText="Pay on the settlement date" className={`${badge ? "badge badge-default badge-number" : null}`} badge={badge} smallText={smallText} multiline={multiline} newTab={newTab} disabled={disabled}/>{"\n"}
        <ActionLink linkText="Add to my credit" className={`${badge ? "badge badge-default badge-number" : null}`} badge={badge} smallText={smallText} multiline={multiline} newTab={newTab} disabled={disabled}/>{"\n"}
    </div>
);

export const guidelinesContent = [
    {
        slabs: [
            {
                type: "success",
                content: <Link linkText="Read our terms and conditions"/>
            },
            {
                type: "error",
                content: <p className=" mb-0 justify-content-center"><Link linkText="Click here" /> to read our term and conditions.</p>
            }
        ],
        text: "Avoid using \"click here\", links should not need supporting copy to make sense."
    },
    {
        slabs: [
            {
                type: "success",
                content: <Link linkText="View our opening hours"/>
            },
            {
                type: "error",
                content: <Link linkText="View more"/>
            }
        ],
        text: "Make sure the link makes it clear what content the link goes to."
    },
    {
        slabs: [
            {
                type: "success",
                content: <p className="mb-0 justify-content-center">Here you can <Link linkText="read about the browsers we recommend"/>.</p>
            },
            {
                type: "error",
                content: <Link linkText="Here you can read about the browsers we recommend"/>
            }
        ],
        text: "Make links as short as possible whilst still making them clear. Don't include several sentences or preceding articles or punctuation marks."
    }
];

export const overviewLinks = {
    id: "overviewLinks",
    tabsId: "overviewLinksTabs",
    elements: [
        {
            tab: "Inline",
            component: <ShowcaseComponent linkText="Inline link"/>,
            options: {
                checkbox: [
                    {
                        title: "Alternatives",
                        inputs: [
                            {
                                id: "external_link",
                                name: "External link",
                                value: {
                                    rightIcon: "launch"
                                }
                            },
                            {
                                id: "bright_color",
                                name: "Bright color",
                                value: {
                                    backgroundDark: true,
                                    bright: true
                                }
                            }
                        ]
                    },
                    {
                        title: "State modifier",
                        inputs: [
                            {
                                id: "state_modifier",
                                name: "Disabled",
                                value: {
                                    disabled: true
                                }
                            }
                        ]
                    }
                ],
                radio: [
                    {
                        id: "font_size_radio",
                        title: "Font size",
                        values: [
                            {
                                name: "Normal",
                                value: {
                                    smallFont: false
                                }
                            },
                            {
                                name: "Small",
                                value: {
                                    smallFont: true
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Inline links",
            description: "Inline links appear within paragraphs or sentences. They’re used to direct users to content that’s not directly related to the journey they’re on. If a link is directing the user to an external web page, this should be indicated using an icon and the page should open in a new window. The font size should match the font size of the text it is inline with."
        },
        {
            tab: "Standalone",
            component: <ShowcaseComponent linkText="Standalone link" standalone/>,
            options: {
                checkbox: [
                    {
                        title: "Alternatives",
                        inputs: [
                            {
                                id: "dark_theme_color",
                                name: "Bright color",
                                value: {
                                    backgroundDark: true,
                                    bright: true
                                }
                            }
                        ]
                    },
                    {
                        title: "State modifiers",
                        inputs: [
                            {
                                id: "state_modifier",
                                name: "Disabled",
                                value: {
                                    disabled: true
                                }
                            }
                        ]
                    }
                ],

                radio: [
                    {
                        id: "with_icon_choice",
                        title: "With icon",
                        values: [
                            {
                                name: "None",
                                value: {
                                    leftIcon: null
                                }
                            },
                            {
                                name: "External link",
                                value: {
                                    leftIcon: "launch"
                                }
                            },
                            {
                                name: "Back",
                                value: {
                                    leftIcon: "arrow_back_ios"
                                }
                            },
                            {
                                name: "Other type",
                                value: {
                                    leftIcon: "edit"
                                }
                            }
                        ]
                    },
                    {
                        id: "font_size_radio",
                        title: "Font size",
                        values: [
                            {
                                name: "Normal",
                                value: {
                                    smallFont: false
                                }
                            },
                            {
                                name: "Small",
                                value: {
                                    smallFont: true
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Standalone links",
            description: "Standalone links are separate to paragraph content and appear on there own. They can be user with a leading icon to further convey the result of clicking the link. Links with icons are not underlined."
        }
    ]
};

export const overviewActionLinks = {
    id: "no-tabs",
    elements: [
        {
            component: <ShowcaseActionComponent linkText="Pay now"/>,
            options: {
                checkbox: [
                    {
                        title: "Modifiers",
                        inputs: [
                            {
                                id: "infoText",
                                name: "Info text",
                                value: {
                                    smallText: "Pay your invoices in your tempo",
                                    multiline: true
                                }
                            },
                            {
                                id: "badge",
                                name: "With Badge",
                                value: {
                                    badge:
                                        {
                                            type: "badge-default",
                                            text: "40"
                                        }
                                }
                            },
                            {
                                id: "externalLink",
                                name: "External link",
                                value: {
                                    newTab: true
                                }
                            }
                        ]
                    },
                    {
                        title: "State modifier",
                        inputs: [
                            {
                                id: "state_modifiers",
                                name: "Disabled",
                                value: {
                                    disabled: true
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Action links",
            description: <>
                <p>Actions links can be customized in a few different ways to fit different contexts. Default styling contains a heading and an arrow icon. It can be modified be adding an info text that will give more information or with a number badge. If a the link is directing the user to an external web page or opens up a new tab, this should be indicated using an new tab icon instead of the arrow.  </p>
            </>
        }
    ]
};
