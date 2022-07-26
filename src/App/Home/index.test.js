import React from "react";
import { shallow } from "enzyme";

import Home, { SearchBox } from "./index";

describe("Home: index", () => {
    it("is defined", () => {
        expect(Home).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Home />);

        expect(wrapper).toMatchSnapshot();
    });
});

describe("SearchBox", () => {
    it("is defined", () => {
        expect(SearchBox).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<SearchBox/>);

        expect(wrapper).toMatchSnapshot();
    });
});
