import React from "react";
import { shallow } from "enzyme";

import Identity, { OurBrand, MenuOverview } from "./index";

describe("Identity: Identity", () => {
    it("is defined", () => {
        expect(Identity).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Identity />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("OurBrand", () => {
        it("is defined", () => {
            expect(OurBrand).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<OurBrand />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("MenuOverview", () => {
        it("is defined", () => {
            expect(MenuOverview).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<MenuOverview />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
