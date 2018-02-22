import React from "react";
import { shallow } from "enzyme";

import Button from "./index";

describe("Component: Button", () => {
    it("is defined", () => {
        expect(Button).toBeDefined();
    });

    it("prop label is marked as required", () => {
        console.error = jest.fn();

        const wrapper = shallow(
            <Button />
        );

        expect(wrapper).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });
});
