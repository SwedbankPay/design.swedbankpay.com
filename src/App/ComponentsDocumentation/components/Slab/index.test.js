import React from "react";
import { shallow } from "enzyme";

import Slab, { OverviewSlab, SlabArrow } from "./index";

describe("Components: Slab", () => {
    it("is defined", () => {
        expect(Slab).toBeDefined();
    });

    it("renders", () => {
        console.warn = jest.fn();

        const wrapper = shallow(<Slab />);

        expect(wrapper).toMatchSnapshot();
        expect(console.warn).toHaveBeenCalled();
    });

    describe("OverviewSlab", () => {
        it("is defined", () => {
            expect(OverviewSlab).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<OverviewSlab />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("SlabArrow", () => {
        it("is defined", () => {
            expect(SlabArrow).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<SlabArrow />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
