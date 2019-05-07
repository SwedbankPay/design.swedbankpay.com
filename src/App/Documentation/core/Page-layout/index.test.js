import React from "react";
import { shallow } from "enzyme";

import PageLayout, { FullWidth, CenteredContent } from "./index";

describe("Utilities: PageLayout", () => {
    it("is defined", () => {
        expect(PageLayout).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<PageLayout />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("FullWidth", () => {
        it("is defined", () => {
            expect(FullWidth).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<FullWidth />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("CenteredContent", () => {
        it("is defined", () => {
            expect(CenteredContent).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<CenteredContent />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
