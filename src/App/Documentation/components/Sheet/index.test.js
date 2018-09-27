import React from "react";
import { shallow } from "enzyme";

import Sheet, { Example, SheetText } from "./index";

describe("Documentation: Sheet", () => {
    it("is defined", () => {
        expect(Sheet).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Sheet />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("Example", () => {
        it("is defined", () => {
            expect(Example).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Example />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("SheetText", () => {
        it("is defined", () => {
            expect(SheetText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<SheetText />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
