import React from "react";
import { shallow } from "enzyme";

import Tabs from "./index";

const items = [
    {
        name: "test",
        active: false
    },
    {
        name: "test 2",
        active: true
    }
];

// TODO: Write more tests!! [EH]

describe("Component: Tabs - ", () => {
    it("is defined", () => {
        expect(Tabs).toBeDefined();
    });

    it("Prop mode is required", () => {
        console.error = jest.fn();
        const wrapper = shallow(
            <Tabs items={items} />
        );

        expect(console.error).toHaveBeenCalled();
        expect(wrapper).toMatchSnapshot();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Tabs mode="auto" items={items} />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<a href="#">test</a>)).toEqual(true);
    });
});
