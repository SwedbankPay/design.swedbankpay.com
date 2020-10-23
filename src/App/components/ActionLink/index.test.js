import React from "react";
import { shallow } from "enzyme";

import ActionLink, { ActionLinkContent } from "./index";

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

    it("renders ActionLink with .action-link class only when not newTab", () => {
        const wrapper = shallow(<ActionLink linkText="Link text" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("<a class=\"action-link\" href=\"#\">");
    });

    it("renders ActionLink with .action-link-new-tab class when newTab is true", () => {
        const wrapper = shallow(<ActionLink linkText="Link text" newTab={true} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("<a class=\"action-link action-link-new-tab\" href=\"#\" rel=\"noopener noreferrer\" target=\"_blank\">");
    });

    describe("ActionLinkContent", () => {
        it("is defined", () => {
            expect(ActionLinkContent).toBeDefined();
        });

        it("renders ActionLinkContent with link text", () => {
            const wrapper = shallow(<ActionLinkContent linkText="Link text" />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains("Link text")).toEqual(true);
        });

        it("renders ActionLinkContent with badge if badge is provided", () => {
            const mockBadge = {
                type: "badge-default",
                text: "Badge"
            };
            const wrapper = shallow(<ActionLinkContent linkText="Link text" badge={mockBadge} />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<span className="badge badge-default" >Badge</span>)).toEqual(true);
        });

        it("renders ActionLinkContent without badge if badge is not provided", () => {
            const wrapper = shallow(<ActionLinkContent linkText="Link text" />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<span className="badge badge-default" >Badge</span>)).toEqual(false);
        });

        it("renders ActionLinkContent with smalltext when provided", () => {
            const wrapper = shallow(<ActionLinkContent linkText="Link text" smallText="Small text" />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<span className="small-text">Small text</span>)).toEqual(true);
        });

        it("renders ActionLinkContent without smalltext when not provided", () => {
            const wrapper = shallow(<ActionLinkContent linkText="Link text" />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<span className="small-text">Small text</span>)).toEqual(false);
        });

        it("renders ActionLinkContent with smalltext on multiline when multiline and smalltext is provided", () => {
            const wrapper = shallow(<ActionLinkContent linkText="Link text" smallText="Small text" multiline={true} />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("<span class=\"action-link-multiline\">");
        });

        it("renders ActionLinkContent with new tab properties when newTab is true", () => {
            const wrapper = shallow(<ActionLinkContent linkText="Link text" newTab={true} />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<i className="material-icons" aria-hidden="true">open_in_new</i>)).toEqual(true);
        });
    });

});
