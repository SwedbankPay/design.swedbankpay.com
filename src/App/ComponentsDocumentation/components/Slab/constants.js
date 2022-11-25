import React from "react";

const Slab = ({ darkShadow, noShadow }) => (
    <div id="slab-doc"className={`slab slab-default${darkShadow ? " dark" : ""}${noShadow ? " flat" : ""}`}/>
);

export const overviewSlabs = {
    id: "overviewSlabs",
    elements: [
        {
            component: <Slab/>,
            options: {
                radio: [
                    {
                        id: "shadow-type",
                        title: "Shadow type",
                        values: [
                            {
                                name: "Drop shadow 15%",
                                value: {
                                    darkShadow: false,
                                    noShadow: false
                                }
                            },
                            {
                                name: "Drop shadow 25%",
                                value: {
                                    darkShadow: true,
                                    noShadow: false
                                }
                            },
                            {
                                name: "Without shadow",
                                value: {
                                    darkShadow: false,
                                    noShadow: true
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Overview slabs",
            description: "Slab component is basically a content frame which is used as a graphic element background in order to display different types of content on it surface. Slab component uses drop shadows to be more visible and noticeable on the UI. Drop shadows can be an amazing way to add depth and emphasis to your designs, creating an image of floating UI elements. Shadows are a way of creating a container for content without making it feel boxed in."
        }
    ]
};
