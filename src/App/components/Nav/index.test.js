import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Nav from "./index";

const navItems = [
    {
        name: "Home",
        icon: "home"
    },
    {
        name: "Transactions",
        icon: "shopping_cart"
    },
    {
        name: "Notifications",
        icon: "notification_important"
    },
    {
        name: "Language",
        icon: "language"
    },
    {
        name: "Account",
        icon: "account_balance"
    },
    {
        name: "Authentication",
        icon: "fingerprint"
    }
];

const navItemsTwoLevels = [
    {
        name: "Home",
        icon: "home"
    },
    {
        name: "Transactions",
        icon: "shopping_cart",
        subItems: ["Purchase history", "Invoice"]
    },
    {
        name: "Notifications",
        icon: "notification_important"
    },
    {
        name: "Language",
        icon: "language"
    },
    {
        name: "Account",
        icon: "account_balance",
        subItems: ["Email", "Information", "Other things"]
    }
];

const div = document.createElement("div");

document.body.appendChild(div);

describe("Component: Nav -", () => {
    it("is defined", () => {
        expect(Nav).toBeDefined();
    });

    it("Throws an error when proptype for vertsize is wrong", () => {
        console.error = jest.fn();

        const wrapper = shallow(<Nav items={navItems} vertsize="xxxl" />);

        expect(console.error).toHaveBeenCalled();
        expect(wrapper).toMatchSnapshot();
    });

    it("Throws an error when proptype for widesize is wrong", () => {
        console.error = jest.fn();

        const wrapper = shallow(<Nav items={navItems} widesize="xxxl" />);

        expect(console.error).toHaveBeenCalled();
        expect(wrapper).toMatchSnapshot();
    });

    it("renders", () => {
        const wrapper = shallow(<Nav items={navItems} />);

        expect(wrapper).toMatchSnapshot();
    });

    it("renders with two levels", () => {
        const wrapper = shallow(<Nav items={navItemsTwoLevels} />);

        expect(wrapper).toMatchSnapshot();
    });

    it("renders with an active list if state active matches", () => {
        const wrapper = shallow(<Nav items={navItems} active="main-0" />);

        expect(wrapper.find(".active")).toHaveLength(1);
        expect(wrapper).toMatchSnapshot();
    });

    it.skip("renders with an active sublistItem if state active matches", () => {
        const wrapper = shallow(<Nav items={navItemsTwoLevels} />).setState({ active: "sub-1-0" });

        expect(wrapper.find(".active")).toHaveLength(1);
        expect(wrapper).toMatchSnapshot();
    });

    it("does nothing when clicking on an active listitem", () => {
        ReactDOM.render(<Nav items={navItems} active="main-0" />, div);

        const renderedNav = document.querySelector(".nav");
        const activeAnchor = renderedNav.querySelector(".active");

        expect(renderedNav).toBeTruthy();
        expect(activeAnchor).toBeTruthy();
        expect(activeAnchor.classList).toContain("active");

        activeAnchor.click();

        expect(activeAnchor.classList).toContain("active");

        ReactDOM.unmountComponentAtNode(div);
    });

    it("changes active item", () => {
        ReactDOM.render(<Nav items={navItems} active="main-0" />, div);

        const renderedNav = document.querySelector(".nav");
        const inactiveAnchor = renderedNav.querySelector("a:not(.active)");

        expect(renderedNav).toBeTruthy();
        expect(inactiveAnchor).toBeTruthy();
        expect(inactiveAnchor.classList).not.toContain("active");

        inactiveAnchor.click();

        expect(inactiveAnchor.classList).toContain("active");

        ReactDOM.unmountComponentAtNode(div);
    });

    it("sets subitems parent to active aswell as subitem when clicked", () => {
        ReactDOM.render(<Nav items={navItemsTwoLevels} />, div);

        const renderedNav = document.querySelector(".nav");
        const submenu = renderedNav.querySelector(".submenu");
        const subitemList = submenu.querySelector("li");
        const subitemAnchor = submenu.querySelector("a");

        expect(renderedNav).toBeTruthy();
        expect(submenu).toBeTruthy();
        expect(subitemAnchor).toBeTruthy();
        expect(submenu.classList).not.toContain("submenu-active-parent");
        expect(subitemList.classList).not.toContain("active");

        subitemAnchor.click();

        expect(submenu.classList).toContain("submenu-active-parent");
        expect(subitemList.classList).toContain("active");

        // Not unmounting to keep state for following test [AW]
    });

    // NB! Do not put new tests between these two [AW]

    it("changes active parent and active item when another subitem is clicked", () => {
        const renderedNav = document.querySelector(".nav");
        const submenu = renderedNav.querySelector("div:not(.submenu-active-parent");
        const subitemList = submenu.querySelector("li");
        const subitemAnchor = submenu.querySelector("a");

        expect(subitemList).toBeTruthy();
        expect(subitemAnchor).toBeTruthy();
        expect(submenu.classList).not.toContain("submenu-active-parent");
        expect(subitemList.classList).not.toContain("active");

        subitemAnchor.click();

        expect(submenu.classList).toContain("submenu-active-parent");
        expect(subitemList.classList).toContain("active");

        // Not unmounting to keep state for following test [AW]
    });

    // NB! Do not put new tests between these two [AW]

    it("removes active parent if top level item is clicked", () => {
        const renderedNav = document.querySelector(".nav");
        const anchor = renderedNav.querySelector("a");

        expect(renderedNav).toBeTruthy();
        expect(anchor).toBeTruthy();
        expect(anchor.classList).not.toContain("active");

        anchor.click();

        expect(anchor.classList).toContain("active");
    });
});
