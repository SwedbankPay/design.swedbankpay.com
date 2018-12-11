import React from "react";
import { shallow } from "enzyme";

import Badge, { Overview, FurtherUsage } from "./index";

describe("Components: Badge", () => {
    it("is defined", () => {
        expect(Badge).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Badge />);

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

    describe("FurtherUsage", () => {
        it("is defined", () => {
            expect(FurtherUsage).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<FurtherUsage />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
