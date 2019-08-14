import React from "react";
import { shallow } from "enzyme";

import Nav, { StandardNav, WithIconsOnly, JavascriptMethods } from "./index";

describe("Component: Nav", () => {
    it("is defined", () => {
        expect(Nav).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Nav />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("StandardNav", () => {
        it("is defined", () => {
            expect(StandardNav).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<StandardNav />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("WithIconsOnly", () => {
        it("is defined", () => {
            expect(WithIconsOnly).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<WithIconsOnly />);

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
});
