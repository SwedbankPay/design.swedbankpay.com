import React from "react";
import { shallow } from "enzyme";

import Expandable, { Overview, ExpandableGroup } from "./index";

describe("Components: Expandable", () => {
    it("is defined", () => {
        expect(Expandable).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Expandable />);

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

    describe("ExpandableGroup", () => {
        it("is defined", () => {
            expect(ExpandableGroup).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ExpandableGroup />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    test.todo("Expandable tests");
});
