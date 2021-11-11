import React from "react";
import { shallow } from "enzyme";

import SelectPanel, { SearchBox } from "./index";

describe("Documentation: SelectPanel", () => {
    it("is defined", () => {
        expect(SelectPanel).toBeDefined();
    });

    describe("SearchBox", () => {
        it("is defined", () => {
            expect(SearchBox).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<SearchBox routes={[]} />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});

