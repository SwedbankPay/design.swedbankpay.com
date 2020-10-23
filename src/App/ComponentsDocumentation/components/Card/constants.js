import React from "react";
import CardsComponent from "@components/Cards";

const BASENAME = process.env.basename;

export const overviewCards = {
    id: "overviewCards",
    tabsId: "overviewButtonsTabs",
    elements: [
        {
            tab: "Standard",
            component: <CardsComponent
                titleTxt="Title"
                type="primary"
                text="Write the supportive paragraph here."
                icon={<i className="material-icons">shopping_basket</i>}
            />,
            options: {
                radio: [
                    {
                        id: "addons_radio",
                        title: "Addons",
                        values: [
                            {
                                name: "Plain",
                                value: {
                                    icon: null
                                }
                            },
                            {
                                name: "With icon",
                                default: true,
                                value: {
                                    icon: <i className="material-icons">shopping_basket</i>
                                }
                            },
                            {
                                name: "With image",
                                value: {
                                    imgSrc: `${BASENAME}img/documentation/cards/img-example.png`,
                                    icon: null
                                }
                            }
                        ]
                    },
                    {
                        id: "color_radio",
                        title: "Accent color",
                        values: [
                            {
                                name: "Yellow brown",
                                value: {
                                    type: "primary"
                                }
                            },
                            {
                                name: "Turquoise",
                                value: {
                                    type: "secondary"
                                }
                            },
                            {
                                name: "Purple",
                                value: {
                                    type: "tertiary"
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Standard cards",
            description: "The standard card component can be customized either icon or picture in order to make it easier for users to scan the content. Mixing simple card without icon should mostly be done when seperating the cards functionality such as when there are more cards to be displayed or when approperiate icons can not be found."
        },
        {
            tab: "Wide",
            component: <CardsComponent
                titleTxt="Title"
                type="primary"
                text="Write the supportive paragraph here."
                wide
                icon={<>01</>}
            />,
            options: {
                radio: [
                    {
                        id: "addons_radio",
                        title: "Addons",
                        values: [
                            {
                                name: "Plain",
                                value: {
                                    icon: null
                                }
                            },
                            {
                                name: "With icon",
                                default: true,
                                value: {
                                    icon: <>01</>
                                }
                            }
                        ]
                    },
                    {
                        id: "color_radio",
                        title: "Accent color",
                        values: [
                            {
                                name: "Yellow brown",
                                value: {
                                    type: "primary"
                                }
                            },
                            {
                                name: "Turquoise",
                                value: {
                                    type: "secondary"
                                }
                            },
                            {
                                name: "Purple",
                                value: {
                                    type: "tertiary"
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Wide cards",
            description: "The wide card component can be used with and without numbering. Try to avoid mixing different card setups with each other as it could be confusing for the users to understand. Try to keep the title concise and to the point, to make it simple to understand and the design aligned with the cards as a group."
        }
    ]
};
