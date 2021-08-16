import React from "react";
import { shallow } from "enzyme";

import Introduction, { QuickStart, JavaScript } from "./index";

describe("Dashboard: Introduction", () => {
    it("is defined", () => {
        expect(Introduction).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Introduction />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("QuickStart", () => {
        it("is defined", () => {
            expect(QuickStart).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<QuickStart />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("JavaScript", () => {
        it("is defined", () => {
            expect(JavaScript).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<JavaScript />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
