import React from "react";
import { shallow } from "enzyme";

import ActionLink, { Overview, ActionLinkBadge } from "./index";

describe("Components: ActionLink", () => {
    it("is defined", () => {
        expect(ActionLink).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<ActionLink />);

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

    describe("ActionLinkBadge", () => {
        it("is defined", () => {
            expect(ActionLinkBadge).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ActionLinkBadge />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
