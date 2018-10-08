import React from "react";
import { shallow } from "enzyme";

import Tabs from "./index";

const items = ["test", "test 2"];

// TODO: Write more tests!! [EH]

describe("Component: Tabs - ", () => {
    it("is defined", () => {
        expect(Tabs).toBeDefined();
    });

    it("Prop mode is required", () => {
        console.error = jest.fn();

        const wrapper = shallow(<Tabs mode="auto" items={items} />);

        expect(console.error).toHaveBeenCalled();
        expect(wrapper).toMatchSnapshot();
    });

    it("renders", () => {
        const wrapper = shallow(<Tabs items={items} />);

        expect(wrapper).toMatchSnapshot();
    });
});
