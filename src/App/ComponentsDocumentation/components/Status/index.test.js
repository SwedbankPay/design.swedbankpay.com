import React from "react";
import { shallow } from "enzyme";

import Status, { Overview, ExampleUse, ExtendedUsage } from "./index";

describe("Documentation: Status", () => {
    it("is defined", () => {
        expect(Status).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Status />);

        expect(wrapper).toMatchSnapshot();
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

    describe("ExampleUse", () => {
        it("is defined", () => {
            expect(ExampleUse).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ExampleUse />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("ExtendedUsage", () => {
        it("is defined", () => {
            expect(ExtendedUsage).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ExtendedUsage />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
