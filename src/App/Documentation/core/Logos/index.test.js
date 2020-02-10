import React from "react";
import { shallow } from "enzyme";

import Logos, { OurFavicon, ResourcesLogotype, OverviewLogos, HorizontalLogo, VerticalLogo } from "./index";

describe("Core: Favicons", () => {
    it("is defined", () => {
        expect(Logos).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Logos />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("OurFavicon", () => {
        it("is defined", () => {
            expect(OurFavicon).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<OurFavicon />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("ResourcesLogotype", () => {
        it("is defined", () => {
            expect(ResourcesLogotype).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ResourcesLogotype />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("OverviewLogos", () => {
        it("is defined", () => {
            expect(OverviewLogos).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<OverviewLogos />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("HorizontalLogo", () => {
        it("is defined", () => {
            expect(HorizontalLogo).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<HorizontalLogo />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("VerticalLogo", () => {
        it("is defined", () => {
            expect(VerticalLogo).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<VerticalLogo />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
