import React from "react";
import { shallow } from "enzyme";

import Sheet, { Example, UsageWithJavascript, SheetText } from "./index";

describe("Documentation: Sheet", () => {
    it("is defined", () => {
        expect(Sheet).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Sheet />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("Example", () => {
        it("is defined", () => {
            expect(Example).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Example />);

            expect(wrapper).toMatchSnapshot();
        });

        it("onSubmit prevents default", () => {
            const wrapper = shallow(<Example />);
            const eventHandler = { preventDefault: jest.fn() };

            wrapper.find("form").simulate("submit", eventHandler);
            expect(eventHandler.preventDefault).toHaveBeenCalled();
            expect(wrapper).toMatchSnapshot();
        });

        it("onClick prevents default", () => {
            const wrapper = shallow(<Example />);
            const clickHandler = { preventDefault: jest.fn() };
            const formBtn = wrapper.find("form").find("button");

            formBtn.simulate("click", clickHandler);
            expect(clickHandler.preventDefault).toHaveBeenCalled();
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("UsageWithJavascript", () => {
        it("is defined", () => {
            expect(UsageWithJavascript).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<UsageWithJavascript />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("SheetText", () => {
        it("is defined", () => {
            expect(SheetText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<SheetText />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
