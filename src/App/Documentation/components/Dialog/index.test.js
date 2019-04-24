import React from "react";
import { shallow } from "enzyme";

import Dialog, { HowItWorks, Overview, UsageWithJavascript } from "./index";

describe("Documentation: Dialog", () => {
    it("is defined", () => {
        expect(Dialog).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Dialog />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("HowItWorks", () => {
        it("is defined", () => {
            expect(HowItWorks).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<HowItWorks />);

            expect(wrapper).toMatchSnapshot();
        });
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

    describe("UsageWithJavascript", () => {
        it("is defined", () => {
            expect(UsageWithJavascript).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<UsageWithJavascript />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
