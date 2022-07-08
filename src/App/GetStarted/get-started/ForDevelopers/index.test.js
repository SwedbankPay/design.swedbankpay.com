import React from "react";
import { shallow } from "enzyme";

import ForDevelopers, { Installation, GridAndBreakpoints, Contributing, Feedback, DiscoverMore, DGLightVideo } from "./index";

describe("GetStarted: ForDevelopers", () => {
    it("is defined", () => {
        expect(ForDevelopers).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<ForDevelopers />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("Installation", () => {
        it("is defined", () => {
            expect(Installation).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Installation />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("GridAndBreakpoints", () => {
        it("is defined", () => {
            expect(GridAndBreakpoints).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<GridAndBreakpoints />);

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

    describe("DGLightVideo", () => {
        it("is defined", () => {
            expect(DGLightVideo).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DGLightVideo />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
