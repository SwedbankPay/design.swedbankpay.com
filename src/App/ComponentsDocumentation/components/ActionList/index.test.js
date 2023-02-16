import React from "react";
import { shallow } from "enzyme";

import ActionList, { Overview, Anchorpoints, JavascriptMethods } from "./index";

describe("Components: ActionList", () => {
    it("is defined", () => {
        expect(ActionList).toBeDefined();
    });

    it("renders", () => {
        console.warn = jest.fn();

        const wrapper = shallow(<ActionList />);

        expect(wrapper).toMatchSnapshot();
        // expect(console.warn).toHaveBeenCalled();
    });

    describe("Overview", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Overview />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("JavascriptMethods", () => {
        it("is defined", () => {
            expect(JavascriptMethods).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<JavascriptMethods />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Anchorpoints", () => {
        it("is defined", () => {
            expect(Anchorpoints).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Anchorpoints />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
