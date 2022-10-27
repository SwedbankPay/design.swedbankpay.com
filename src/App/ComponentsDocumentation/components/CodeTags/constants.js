import React from "react";
import CodeTags from "@components/CodeTags";

const TagComponent = ({ removable, type }) => (
    <div className="d-flex justify-content-center">
        <CodeTags type={type} removable={removable} className="mr-2" text="Tag" />{"\n"}
        <CodeTags type={type} removable={removable} className="mr-2" text="Tag" />{"\n"}
        <CodeTags type={type} removable={removable} text="Tag" />
    </div>
);

const CodeTagsComponent = ({ type }) => (
    <div>
        Example of inline code using <code>{"<code>"}</code><br/>{"\n"}
        Example of inline code <CodeTags type={type} code={"<ComponentName/>"}/> with specified class.
    </div>
);

export const overviewTags = {
    id: "overviewTags",
    tabsId: "overviewTagsTabs",
    elements: [
        {
            tab: "Tag",
            component: <TagComponent type="primary"/>,
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
                        title: "Accent color",
                        values: [
                            {
                                name: "Example 1",
                                value: {
                                    type: "primary"
                                }
                            },
                            {
                                name: "Example 2",
                                value: {
                                    type: "secondary"
                                }
                            },
                            {
                                name: "Example 3",
                                value: {
                                    type: "tertiary"
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Tag",
            description: "A Tag should represent a keyword, search term or filter and will always include a label. Tags could be used in different colors and have the option to be removable and will in this case have a close button after the label."
        },
        {
            tab: "Code tag",
            component: <CodeTagsComponent type="primary"/>,
            options: {
                radio: [
                    {
                        id: "code_tag_color",
                        title: "Accent color",
                        values: [
                            {
                                name: "Example 1",
                                value: {
                                    type: "primary"
                                }
                            },
                            {
                                name: "Example 2",
                                value: {
                                    type: "secondary"
                                }
                            },
                            {
                                name: "Example 3",
                                value: {
                                    type: "tertiary"
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Code tags",
            description: <p>Code tags are used to present inline code. They use the Akkurat Mono font. Using {<CodeTags code="<code>"/>} without any specified styling will result in the primary tag styling being applied. Chose which color that is more suitable for your project, or combine them to differentiate between different coding languages or styles.</p>
        }
    ]
};
