import React from "react";
import { shallow } from "enzyme";

import Introduction, { GetStarted, WhatIsDG, Feedback } from "./index";

describe("GetStarted: Introduction", () => {
    it("is defined", () => {
        expect(Introduction).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Introduction />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("GetStarted", () => {
        it("is defined", () => {
            expect(GetStarted).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<GetStarted />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("WhatIsDG", () => {
        it("is defined", () => {
            expect(WhatIsDG).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<WhatIsDG />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Feedback", () => {
        it("is defined", () => {
            expect(Feedback).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Feedback/>);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
