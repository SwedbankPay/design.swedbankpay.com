import React from "react";
import { shallow } from "enzyme";

import SearchBox from "./index";

describe("SearchBox:", () => {
    it("is defined", () => {
        expect(SearchBox).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<SearchBox />);

        expect(wrapper).toMatchSnapshot();
    });

});
