import React from "react";
import { shallow } from "enzyme";

import Card, { DefaultBehaviour, CardTypes, CardText } from "./index";

describe("Documentation: Card", () => {
    it("is defined", () => {
        expect(Card).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Card />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("DefaultBehaviour", () => {
        it("is defined", () => {
            expect(DefaultBehaviour).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DefaultBehaviour />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("CardTypes", () => {
        it("is defined", () => {
            expect(CardTypes).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<CardTypes />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("CardText", () => {
        it("is defined", () => {
            expect(CardText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<CardText />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
