import React from "react";
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

describe("Component: Nav - ", () => {
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
        const wrapper = shallow(<Nav items={navItems} />);

        wrapper.setState({ active: "main-0" });

        expect(wrapper.find(".active")).toHaveLength(1);
        expect(wrapper).toMatchSnapshot();
    });

    it("renders with an active sublistItem if state active matches", () => {
        const wrapper = shallow(<Nav items={navItemsTwoLevels} />);

        wrapper.setState({ active: "sub-1-0" });

        expect(wrapper.find(".active")).toHaveLength(1);
        expect(wrapper).toMatchSnapshot();
    });

    it("does nothing when clicking on an anchor in an active listitem", () => {
        const wrapper = shallow(<Nav items={navItemsTwoLevels} />).setState({ active: "sub-1-0"});
        const activeList = wrapper.find(".active");

        expect(activeList).toHaveLength(1);
        activeList.find("a").simulate("click");

        expect(wrapper).toMatchSnapshot();
    });
});
