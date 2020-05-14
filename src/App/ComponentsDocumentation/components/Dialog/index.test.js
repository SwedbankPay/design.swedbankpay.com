import React from "react";
import { shallow } from "enzyme";

import Dialog, { HowItWorks, Example, JavascriptMethods } from "./index";

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

    describe("Example", () => {
        it("is defined", () => {
            expect(Example).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Example />);

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
