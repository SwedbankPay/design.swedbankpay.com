import React from "react";
import { shallow } from "enzyme";

import Nav, { StandardNav, TwoLevels, IconsOnly, Mix, Mobile } from "./index";

describe("Component: Nav", () => {
    it("is defined", () => {
        expect(Nav).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Nav />);

        expect(wrapper).toMatchSnapshot();
    });

    it("runs init on rerender", () => {
        const wrapper = shallow(<Nav />);

        wrapper.setState({ foo: "bar" });

        expect(wrapper).toMatchSnapshot();
    });

    describe("StandardNav", () => {
        it("is defined", () => {
            expect(StandardNav).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<StandardNav />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("TwoLevels", () => {
        it("is defined", () => {
            expect(TwoLevels).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<TwoLevels />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("IconsOnly", () => {
        it("is defined", () => {
            expect(IconsOnly).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<IconsOnly />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Mix", () => {
        it("is defined", () => {
            expect(Mix).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Mix />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Mobile", () => {
        it("is defined", () => {
            expect(Mobile).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Mobile />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
