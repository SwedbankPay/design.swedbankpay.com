import React from "react";
import { shallow } from "enzyme";

import Links, {
    Overview,
    ActionLink,
    ContentGuidelines
} from "./index";

describe("Components: Links", () => {
    it("is defined", () => {
        expect(Links).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Links />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("ActionLink", () => {
        it("is defined", () => {
            expect(ActionLink).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ActionLink />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("ContentGuidelines", () => {
        it("is defined", () => {
            expect(ContentGuidelines).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ContentGuidelines />);

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
});
