import React from "react";
import Link from "@components/Link";
import ActionLink from "~/src/App/components/ActionLink";

const ShowcaseComponent = ({ rightIcon, leftIcon, linkText, smallFont, backgroundDark, bright, standalone }) => (
    <div className={`loader-preview-container${backgroundDark ? " dark" : ""} d-flex justify-content-center align-items-center`}>
        {standalone ? <Link rightIcon={rightIcon} leftIcon={leftIcon} linkText={linkText} smallFont={smallFont} bright={bright}/> :
            <p className={`mt-3 ${backgroundDark ? "text-white" : ""}`}>Paragraph text with a <Link rightIcon={rightIcon} leftIcon={leftIcon} linkText={linkText} smallFont={smallFont} bright={bright}/></p>}
    </div>
);

const ShowcaseActionComponent = ({ linkText, badge, smallText, multiline, newTab }) => (
    <div className="action-link-buttons-container">
        <ActionLink className={`action-link ${badge ? "badge badge-default badge-number": null}`} linkText={linkText} badge={badge} smallText={smallText} multiline={multiline} newTab={newTab}/>
    </div>
);

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
                                id: "dark_theme_color",
                                name: "Dark theme",
                                value: {
                                    backgroundDark: true,
                                    bright: true
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
                                id: "icon_check",
                                name: "With icon",
                                value: {
                                    leftIcon: "arrow_back_ios"
                                }
                            },
                            {
                                id: "dark_theme_color",
                                name: "Dark theme",
                                value: {
                                    backgroundDark: true,
                                    bright: true
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
            title: "Standalone links",
            description: "Standalone links are separate to paragraph content and appear on there own. They can be user with a leading icon to further convey the result of clicking the link. Links with icons are not underlined."
        }
    ]
};

/*
            <>
                <div className="action-link-buttons-container">
                    <ShowcaseActionComponent linkText="Pay now"/>
                    <ShowcaseActionComponent linkText="Pay on the settlement date"/>
                    <ShowcaseActionComponent linkText="Add to my credit"/>
                </div>
            </>*/ 

export const overviewActionLinks = {
    id: "no-tabs",
    elements: [
        {
            component: 
            <ShowcaseActionComponent linkText="Pay now"/>,
            options: {
                checkbox: [
                    {
                        title: "Modifiers",
                        inputs: [
                            {
                                id: "infoText",
                                name: "Info text",
                                value: {
                                    smallText: "Pay your invoices in your tempo"
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
                    }
                ]
            }
        }
    ]
};
