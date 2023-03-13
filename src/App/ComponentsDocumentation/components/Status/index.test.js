import React from "react";
import renderer from "react-test-renderer";

import Status, { Overview, ExampleUse, ExtendedUsage } from "./index";

describe("Documentation: Status", () => {
    it("is defined", () => {
        expect(Status).toBeDefined();
    });

    it.skip("renders", () => {
        const wrapper = renderer.create(<Status />);

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

    describe("ExampleUse", () => {
        it("is defined", () => {
            expect(ExampleUse).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<ExampleUse />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("ExtendedUsage", () => {
        it("is defined", () => {
            expect(ExtendedUsage).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<ExtendedUsage />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });
});
