import React from "react";
import { shallow } from "enzyme";

import Slab, { DefaultSlab, SlabSizes, SlabText } from "./index";

describe("Components: Slab", () => {
    it("is defined", () => {
        expect(Slab).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Slab />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("DefaultSlab", () => {
        it("is defined", () => {
            expect(DefaultSlab).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DefaultSlab />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("SlabSizes", () => {
        it("is defined", () => {
            expect(SlabSizes).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<SlabSizes />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("SlabText", () => {
        it("is defined", () => {
            expect(SlabText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<SlabText />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
