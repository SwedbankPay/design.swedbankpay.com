import React from "react";
import { shallow } from "enzyme";

import ActionList, { Overview, ActionListText } from "./index";

describe("Components: ActionList", () => {
    it("is defined", () => {
        expect(ActionList).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<ActionList />);

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

    describe("ActionListText", () => {
        it("is defined", () => {
            expect(ActionListText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ActionListText />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
