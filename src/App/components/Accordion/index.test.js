import React from "react";
import { shallow } from "enzyme";

import Accordion from "./index";

const item = [
    {
        title: "Foo",
        content: <p>My accordion content</p>
    }
];

const items = [
    {
        title: "Foo",
        content: <p>My accordion content</p>
    },
    {
        title: "Bar",
        content: <p>My accordion content</p>
    },
    {
        title: "Baz",
        content: <p>My accordion content</p>
    }
];

describe("Component: Accordion", () => {
    it("is defined", () => {
        expect(Accordion).toBeDefined();
    });

    it("returns an empty accordion container if the items props is not provided", () => {
        const wrapper = shallow(<Accordion />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<div className="accordion"></div>)).toEqual(true);
    });

    it("returns an accordion containing the item", () => {
        const wrapper = shallow(<Accordion items={item}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(items[0].title)).toEqual(true);
        expect(wrapper.contains(<div className="accordion-content">{items[0].content}</div>)).toEqual(true);
    });

    it("returns an accordion with several accordion items", () => {
        const wrapper = shallow(<Accordion items={items}/>);

        expect(wrapper).toMatchSnapshot();
        items.forEach(item => {
            expect(wrapper.contains(item.title)).toEqual(true);
            expect(wrapper.contains(<div className="accordion-content">{item.content}</div>)).toEqual(true);
        });
    });
});
