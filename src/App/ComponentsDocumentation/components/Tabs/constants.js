import React from "react";
import Tag from "@components/Tag";
import Tabs from "@components/Tabs";

const tabItems = ["Selected", "Unselected", "Unselected", "Unselected", "Unselected", "Unselected"];

const TabsExample = ({ scroll, id }) => (
    <div className="w-75">
        {scroll === true
            ? <><Tabs id={id} items={tabItems} scroll="true"/></>
            : <Tabs id={id} items={tabItems.slice(0, 3)} />
        }
        <p>Content of the selected tabs</p>
    </div>
);

export const tabsShowCasePanel = {
    id: "no-tabs",
    elements: [
        {
            component: <TabsExample id="tabs-showcase-example"/>,
            options: {
                checkbox: [
                    {
                        title: "Behavior",
                        inputs: [
                            {
                                id: "scroll",
                                name: "Scrollable",
                                value: {
                                    scroll: true
                                }
                            }

                        ]
                    }
                ]
            },
            title: "Tabs",
            description: <>Tabs appear in a single row, above their content. Only one tab can be selected at a time and the selected tab decides which content that is shown in the container beneath. The width of each tab is dependent on its label and the width of the row of tabs is dependent on the container. If the container can’t display all the tabs at once the tabs can be set to scrollable by adding the class <Tag code text=".tabs-scroll" type="secondary"/>, but it is not optimized for desktop usage at the moment.</>
        }
    ]
};
