import React from "react";
import Link from "@components/Link";

const ShowcaseComponent = ({ rightIcon, leftIcon, linkText, smallFont, backgroundDark, bright }) => (
    <div className={`loader-preview-container${backgroundDark ? " dark" : ""} d-flex justify-content-center align-items-center`}>
        <p className= {backgroundDark ? "text-white" : ""}>Paragraph text with a <Link rightIcon={rightIcon} leftIcon={leftIcon} linkText={linkText} smallFont={smallFont} bright={bright}/></p>
    </div>
);
const ShowcaseComponentStandalone = ({ rightIcon, leftIcon, linkText, smallFont, backgroundDark, bright }) => (
    <div className={`loader-preview-container${backgroundDark ? " dark" : ""} d-flex justify-content-center align-items-center`}>
        <Link rightIcon={rightIcon} leftIcon={leftIcon} linkText={linkText} smallFont={smallFont} bright={bright}/>
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
            component: <ShowcaseComponentStandalone linkText="Standalone link"/>,
            options: {
                checkbox: [
                    {
                        inputs: [
                            {
                                id: "icon_check",
                                name: "With icon",
                                value: {
                                    leftIcon: "arrow"
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
