import React from "react";
import { shallow } from "enzyme";

import FAQ, { FAQSearch, FAQList, FAQSheet, FAQCard } from "./index";

describe("Examples: FAQ", () => {
    it("is defined", () => {
        expect(FAQ).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<FAQ />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("FAQSearch", () => {
        it("is defined", () => {
            expect(FAQSearch).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<FAQSearch />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("FAQList", () => {
        it("is defined", () => {
            expect(FAQList).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<FAQList />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("FAQSheet", () => {
        it("is defined", () => {
            expect(FAQSheet).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<FAQSheet />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("FAQCard", () => {
        it("is defined", () => {
            expect(FAQCard).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<FAQCard />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
