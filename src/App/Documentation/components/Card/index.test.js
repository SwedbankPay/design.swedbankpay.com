import React from "react";
import { shallow } from "enzyme";

import Card, { Overview, CardText } from "./index";

describe("Documentation: Card", () => {
    it("is defined", () => {
        expect(Card).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Card />
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

    describe("CardText", () => {
        it("is defined", () => {
            expect(CardText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <CardText />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });
});
