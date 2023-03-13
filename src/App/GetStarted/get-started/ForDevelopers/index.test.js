import React from "react";
import renderer from "react-test-renderer";

import ForDevelopers, { Installation, GridAndBreakpoints, Contributing, Feedback, DiscoverMore, DGLightVideo } from "./index";

describe("GetStarted: ForDevelopers", () => {
    it("is defined", () => {
        expect(ForDevelopers).toBeDefined();
    });

    describe("Installation", () => {
        it("is defined", () => {
            expect(Installation).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<Installation />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("GridAndBreakpoints", () => {
        it("is defined", () => {
            expect(GridAndBreakpoints).toBeDefined();
        });
    });

    describe("Contributing", () => {
        it("is defined", () => {
            expect(Contributing).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<Contributing />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("Feedback", () => {
        it("is defined", () => {
            expect(Feedback).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<Feedback />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("DiscoverMore", () => {
        it("is defined", () => {
            expect(DiscoverMore).toBeDefined();
        });
    });

    describe("DGLightVideo", () => {
        it("is defined", () => {
            expect(DGLightVideo).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<DGLightVideo />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });
});
