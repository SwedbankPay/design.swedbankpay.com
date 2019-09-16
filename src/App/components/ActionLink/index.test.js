import React from "react";
import { shallow } from "enzyme";

import ActionLink from "./index";

describe("Component: ActionLink", () => {
    it("is defined", () => {
        expect(ActionLink).toBeDefined();
    });

    it("prop linkText is marked as required", () => {
        console.error = jest.fn();

        const wrapper = shallow(<ActionLink />);

        expect(wrapper).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });

    it("renders an actionlink with link text", () => {
        const wrapper = shallow(<ActionLink linkText="Link text" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains("Link text")).toEqual(true);
    });

    it("renders an actionlink with badge if badge is provided", () => {
        const mockBadge = {
            type: "badge-yellow",
            text: "Badge"
        };
        const wrapper = shallow(<ActionLink linkText="Link text" badge={mockBadge} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<span className="badge badge-yellow" >Badge</span>)).toEqual(true);
    });

    it("renders an actionlink without badge if badge is not provided", () => {
        const wrapper = shallow(<ActionLink linkText="Link text" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<span className="badge badge-yellow" >Badge</span>)).toEqual(false);
    });

    it("renders an actionlink with smalltext when provided", () => {
        const wrapper = shallow(<ActionLink linkText="Link text" smallText="Small text" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<span className="small-text">Small text</span>)).toEqual(true);
    });

    it("renders an actionlink without smalltext when not provided", () => {
        const wrapper = shallow(<ActionLink linkText="Link text" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<span className="small-text">Small text</span>)).toEqual(false);
    });

});
