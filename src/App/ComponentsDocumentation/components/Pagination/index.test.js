import React from "react";
import renderer from "react-test-renderer";

import Pagination, { Overview, DeveloperDocumentation } from "./index";

describe("Documentation: Pagination", () => {
    it("is defined", () => {
        expect(Pagination).toBeDefined();
    });

    it.skip("renders", () => {
        const wrapper = renderer.create(<Pagination />);

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    describe("Overview", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it.skip("renders", () => {
            const wrapper = renderer.create(<Overview />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("DeveloperDocumentation", () => {
        it("is defined", () => {
            expect(DeveloperDocumentation).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<DeveloperDocumentation />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });
});
