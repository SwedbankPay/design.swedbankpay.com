import React from "react";
import { shallow } from "enzyme";

import Toast, { Overview, ContentGuidelines, DeveloperDocumentation } from "./index";

import { toast } from "@src/scripts/main";

// Can't use aliases in jest mock it seems, but this automocks the toast import [THN]
jest.mock("../../../../scripts/main");

describe("Components: Toast", () => {
    beforeEach(() => {
        toast.mockClear();
    });

    it("is defined", () => {
        expect(Toast).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Toast />);

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

    describe("Content guidelines", () => {
        it("is defined", () => {
            expect(ContentGuidelines).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ContentGuidelines />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Developer documentation", () => {
        it("is defined", () => {
            expect(DeveloperDocumentation).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DeveloperDocumentation />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
