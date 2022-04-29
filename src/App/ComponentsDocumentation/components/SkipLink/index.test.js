import React from "react";
import { shallow } from "enzyme";

import SkipLink, { Overview, DeveloperDocumentation } from "./index";

describe("Documentation: SkipLink", () => {
    it("is defined", () => {
        expect(SkipLink).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<SkipLink />);

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

    describe("DeveloperDocumentation", () => {
        it("is defined", () => {
            expect(DeveloperDocumentation).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DeveloperDocumentation />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
