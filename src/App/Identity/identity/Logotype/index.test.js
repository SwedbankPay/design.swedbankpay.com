import React from "react";
import { shallow } from "enzyme";

import Logotype, { Overview, HorizontalLogo, LogoBlack, LogoWhite, SpacingZone, MisuseLogo, LogotypeBackgrounds, Favicon, LogoPayex, LogoWhitePayex } from "./index";

describe("Core: Logotype", () => {
    it("is defined", () => {
        expect(Logotype).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Logotype />);

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

    describe("LogoPayex", () => {
        it("is defined", () => {
            expect(LogoPayex).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<LogoPayex />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("LogoWhitePayex", () => {
        it("is defined", () => {
            expect(LogoWhitePayex).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<LogoWhitePayex />);

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

    describe("LogoBlack", () => {
        it("is defined", () => {
            expect(LogoBlack).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<LogoBlack />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("LogoWhite", () => {
        it("is defined", () => {
            expect(LogoWhite).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<LogoWhite />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("SpacingZone", () => {
        it("is defined", () => {
            expect(SpacingZone).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<SpacingZone />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("MisuseLogo", () => {
        it("is defined", () => {
            expect(MisuseLogo).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<MisuseLogo />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("LogotypeBackgrounds", () => {
        it("is defined", () => {
            expect(LogotypeBackgrounds).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<LogotypeBackgrounds />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Favicon", () => {
        it("is defined", () => {
            expect(Favicon).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Favicon />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
