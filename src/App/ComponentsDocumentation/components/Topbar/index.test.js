import React from "react";
import { shallow } from "enzyme";

import Topbar, { Overview, DeveloperDocumentation } from "./index";

import { topbar } from "@src/scripts/main";

describe("Components: Topbar", () => {
    it("is defined", () => {
        expect(Topbar).toBeDefined();
    });

    it("renders", () => {
        /*
            The Topbar component calls dg.topbar.init("demo-topbar") on componentDidMount. Mocking the topbarscript
            to avoid a warning message. [AW]
        */
        topbar.init = jest.fn();

        const wrapper = shallow(<Topbar />);

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

    describe("DeveloperDocumentation", () => {
        it("is defined", () => {
            expect(DeveloperDocumentation).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DeveloperDocumentation />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
