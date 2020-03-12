import React from "react";
import { shallow } from "enzyme";

import LogoType, { Overview, Download } from "./index";

describe("Resources: Presentations", () => {
    it("is defined", () => {
        expect(LogoType).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<LogoType />);

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

    describe("Download", () => {
        it("is defined", () => {
            expect(Download).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Download />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
