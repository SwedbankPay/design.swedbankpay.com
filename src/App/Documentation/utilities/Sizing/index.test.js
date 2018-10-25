import React from "react";
import { shallow } from "enzyme";

import Sizing, { SizingText } from "./index";

describe("Utilities: Sizing", () => {
    it("is defined", () => {
        expect(Sizing).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Sizing />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("SizingText", () => {
        it("is defined", () => {
            expect(SizingText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<SizingText />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
