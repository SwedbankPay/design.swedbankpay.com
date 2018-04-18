import React from "react";
import { shallow } from "enzyme";

import Togglebox from "./Togglebox";

describe("Component: Togglebox - ", () => {
    it("is defined", () => {
        expect(Togglebox).toBeDefined();
    });

    it("renders without label", () => {
        const wrapper = shallow(
            <Togglebox />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<input type="checkbox" />)).toEqual(true);
        expect(wrapper.contains(<label></label>)).toEqual(false);
    });

    it("renders with id and label", () => {
        const wrapper = shallow(
            <Togglebox id="test" label="test" />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<input type="checkbox" id="test" />)).toEqual(true);
        expect(wrapper.contains(<label htmlFor="test">test</label>)).toEqual(true);
    });

    it("renders disabled", () => {
        const wrapper = shallow(
            <Togglebox disabled={true} />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<input type="checkbox" disabled={true} />)).toEqual(true);
    });

    it("renders checked", () => {
        const wrapper = shallow(
            <Togglebox checked={true} />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<input type="checkbox" defaultChecked={true} />)).toEqual(true);
    });
});
