import React from "react";
import Tag from "@components/Tag";

const TagComponent = ({ removable, type }) => (
    <div className="d-flex w-100 justify-content-center">
        <Tag className="mr-2" removable={removable} type={type} text="Tag"/>
        <Tag className="mr-2" removable={removable} type={type} text="Tag"/>
        <Tag removable={removable} type={type} text="Tag"/>
    </div>
);

const CodeTagComponent = ({ type }) => (
    <div>
        Example of inline code using <code>{"<code>"}</code><br/>
        Example of inline code <Tag className="mt-2" code type={type} text={"<ComponentName/>"}/> with specified class.
    </div>
);

export const overviewTags = {
    id: "overviewTags",
    tabsId: "overviewTagsTabs",
    elements: [
        {
            tab: "Tag",
            component: <TagComponent/>,
            options: {
                checkbox: [
                    {
                        inputs: [
                            {
                                id: "removable",
                                name: "Removable",
                                value: {
                                    removable: true
                                }
                            }
                        ]
                    }
                ],
                radio: [
                    {
                        id: "tag_color",
                        title: "Color",
                        values: [
                            {
                                name: "Primary",
                                value: {
                                    type: "primary"
                                }
                            },
                            {
                                name: "Secondary",
                                value: {
                                    type: "secondary"
                                }
                            },
                            {
                                name: "Tertiary",
                                value: {
                                    type: "tertiary"
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Tag",
            description: "A Tag should represent a keyword, search term or filter and will always include a label. Tags come in three different colors and have the option to be removable and will in this case have a close button after the label. "
        },
        {
            tab: "Code tag",
            component: <CodeTagComponent/>,
            options: {
                radio: [
                    {
                        id: "tag-color",
                        title: "Color",
                        values: [
                            {
                                name: "Primary",
                                value: {
                                    type: "primary"
                                }
                            },
                            {
                                name: "Secondary",
                                value: {
                                    type: "secondary"
                                }
                            },
                            {
                                name: "Tertiary",
                                value: {
                                    type: "tertiary"
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Code tags",
            description: <p>Code tags are used to present inline code. They use the Akkurat Mono font. Using {<Tag code text="<code>"/>} without any specified styling will result in the primary tag styling being applied. Chose which color that is more suitable for your project, or combine them to differentiate between different coding languages or styles.</p>
        }
    ]
};
