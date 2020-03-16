import React from "react";
import { shallow } from "enzyme";

import Links, {
    TextLinks,
    ButtonLinks,
    IconLinks,
    ActionLink,
    ActionLinkBadge,
    ActionLinkSmallText,
    ActionLinkBadgeSmallText,
    ActionLinkNewTab
} from "./index";

describe("Components: Links", () => {
    it("is defined", () => {
        expect(Links).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Links />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("TextLinks", () => {
        it("is defined", () => {
            expect(TextLinks).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<TextLinks />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("ButtonLinks", () => {
        it("is defined", () => {
            expect(ButtonLinks).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ButtonLinks />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("IconLinks", () => {
        it("is defined", () => {
            expect(IconLinks).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<IconLinks />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("ActionLink", () => {
        it("is defined", () => {
            expect(ActionLink).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ActionLink />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("ActionLinkBadge", () => {
        it("is defined", () => {
            expect(ActionLinkBadge).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ActionLinkBadge />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("ActionLinkSmallText", () => {
        it("is defined", () => {
            expect(ActionLinkSmallText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ActionLinkSmallText />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("ActionLinkBadgeSmallText", () => {
        it("is defined", () => {
            expect(ActionLinkBadgeSmallText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ActionLinkBadgeSmallText />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("ActionLinkNewTab", () => {
        it("is defined", () => {
            expect(ActionLinkNewTab).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ActionLinkNewTab />);

            expect(wrapper).toMatchSnapshot();
        });
    });

});
