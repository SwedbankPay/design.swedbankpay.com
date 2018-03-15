import React from "react";
import { shallow } from "enzyme";

import Cards from "./index";
import { Overview, CardsText } from "./index";

describe("Documentation: Cards", () => {
    it("is defined", () => {
        expect(Cards).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Cards />
        );

        expect(wrapper).toMatchSnapshot();
    });

    describe("Overview", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <Overview />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("CardsText", () => {
        it("is defined", () => {
            expect(CardsText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <CardsText />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });
});
