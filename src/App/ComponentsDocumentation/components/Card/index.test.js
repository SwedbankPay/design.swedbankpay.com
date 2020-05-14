import React from "react";
import { shallow } from "enzyme";

import Card, { Overview, GridCard } from "./index";

describe("Documentation: Card", () => {
    it("is defined", () => {
        expect(Card).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Card />);

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

    describe("GridCard", () => {
        it("is defined", () => {
            expect(GridCard).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<GridCard />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
