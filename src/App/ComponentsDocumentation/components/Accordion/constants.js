import React from "react";
import Accordion from "@components/Accordion";
import CodeTags from "@components/CodeTags";

const items = [];

for (let i = 1; i < 4; i++) {
    items.push({ id: `exp-${i}`,
        title: "My title",
        content: <p>Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit consectetur aliqua officia Lorem elit. Cupidatat ea tempor ut esse. Aliquip exercitation in nisi reprehenderit anim Lorem. Excepteur nostrud officia irure tempor aute ipsum. Voluptate nisi incididunt proident enim reprehenderit fugiat fugiat magna sit reprehenderit Lorem anim. Aute commodo cillum nisi consectetur amet eiusmod do tempor incididunt anim.</p> });
}

const AccordionComponentExample = ({ accordionGroup }) => (
    <div className="w-100">
        {accordionGroup === true ?
            <div id="accordion-group-example" className="accordion-group">
                <Accordion items={items}/>
            </div>
            : <Accordion items={items} />
        }
    </div>
);

export const accordionShowCase = {
    id: "no-tabs",
    elements: [
        {
            component: <AccordionComponentExample id="accordion-showcase" />,
            options: {
                checkbox: [
                    {
                        title: "Accordion group",
                        inputs: [
                            {
                                id: "checkbox-accordions",
                                name: "Open one at a time",
                                value: {
                                    accordionGroup: true
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Accordion",
            description: <p>The accordion component can be either collapsed or expanded. Accordions are by default in the collapsed state with the body content hidden. If a group of accordions are wrapped in a <CodeTags type="primary" code=".accordion-group"/>, only one will be open at a time.</p>
        }
    ]
};
