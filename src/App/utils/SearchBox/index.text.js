import React from "react";
import { shallow } from "enzyme";

import SearchBox from "./index";

describe("Utilities; SearchBox", () => {
    it("is defined", () => {
        expect(SearchBox).toBeDefined();
    });

    it("renders with no props", () => {
        const wrapper = shallow(<SearchBox/>);

        expect(wrapper).toMatchSnapshot();
    });

    it("renders with mobile prop", () => {
        const wrapper = shallow(<SearchBox mobile/>);

        expect(wrapper).toMatchSnapshot();
    });

    it("renders with className prop", () => {
        const wrapper = shallow(<SearchBox className="test" />);

        expect(wrapper).toMatchSnapshot();
    });

    it("renders with props mobile and className", () => {
        const wrapper = shallow(<SearchBox mobile className="test"/>);

        expect(wrapper).toMatchSnapshot();
    });
});
