import React from "react";
import { shallow } from "enzyme";

import ForDesigners, { NeedToHave, NeedToKnow, Contributing, Feedback, DiscoverMore } from "./index";

describe("GettingStarted: ForDesigners", () => {
    it("is defined", () => {
        expect(ForDesigners).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<ForDesigners />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("NeedToHave", () => {
        it("is defined", () => {
            expect(NeedToHave).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<NeedToHave />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("NeedToKnow", () => {
        it("is defined", () => {
            expect(NeedToKnow).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<NeedToKnow />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Contributing", () => {
        it("is defined", () => {
            expect(Contributing).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Contributing />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Feedback", () => {
        it("is defined", () => {
            expect(Feedback).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Feedback />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("DiscoverMore", () => {
        it("is defined", () => {
            expect(DiscoverMore).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DiscoverMore />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
