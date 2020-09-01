import React from "react";
import { shallow } from "enzyme";

import Icon from "./index";

describe("Utilities: Icon", () => {
    it("is defined", () => {
        expect(Icon).toBeDefined();
    });

    it("renders correct icon", () => {
        const wrapper = shallow(<Icon type="test" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<i className="material-icons" aria-hidden="true">test</i>)).toEqual(true);
    });
});

