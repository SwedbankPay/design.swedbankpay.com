import React from "react";
import Link  from "@components/Link";

export const overviewLinks = {
    id: "overviewLinks",
    tabsId: "overviewLinksTabs",
    elements: [
        {
            tab: "Inline",
            component: <>
                <p>Paragraph text with a <Link linkText="Inline link"/></p></>,
            options: {
                checkbox: [
                    {
                        inputs: [
                            {
                                id: "external_link",
                                name: "External link",
                                value: {
                                    value: "<p><p/>//TODO"
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
                                    size: "lg"
                                }
                            },
                            {
                                name: "Small",
                                value: {
                                    size: "sm"
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
            component: <Link linkText="Standalone link"/>,
            options: {
                checkbox: [
                    {
                        inputs: [
                            {
                                id: "icon_check",
                                name: "With icon",
                                value: {
                                    icon: "cloud"
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
                                    size: "lg"
                                }
                            },
                            {
                                name: "Small",
                                value: {
                                    size: "sm"
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
