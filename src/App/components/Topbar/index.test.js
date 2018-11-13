import React from "react";
import { shallow } from "enzyme";

import Topbar from "./index";

describe("Component: Topbar - ", () => {
    const menu = {
        btnLeft: {
            text: "Menu"
        },
        items: [
            {
                title: "Link 1",
                href: "#"
            },
            {
                title: "Link 2",
                href: "#"
            },
            {
                title: "Link 3",
                href: "#"
            }
        ]
    };

    const menuNoBtnIcon = {
        btn: {
            text: "Menu"
        },
        items: [
            {
                title: "Link 1",
                href: "#"
            },
            {
                title: "Link 2",
                href: "#"
            },
            {
                title: "Link 3",
                href: "#"
            }
        ]
    };

    const topbarContent = {
        id: "topbar-nav",
        ...menu
    };

    it("is defined", () => {
        expect(Topbar).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Topbar />);

        expect(wrapper).toMatchSnapshot();
    });

    it("renders with nav and button when prop topbarContent is provided", () => {
        const wrapper = shallow(<Topbar topbarContent={topbarContent} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("topbar-btn-left");
        expect(wrapper.html()).toContain("topbar-nav");
    });
});
