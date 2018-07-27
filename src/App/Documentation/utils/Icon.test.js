import React from "react";
import { shallow } from "enzyme";

import Icon from "./Icon";

describe("Utilities: Icon", () => {
    it("is defined", () => {
        expect(Icon).toBeDefined();
    });

    it("renders correct icon", () => {
        const wrapper = shallow(
            <Icon icon="test" />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<i className="material-icons">test</i>)).toEqual(true);
    });
});

