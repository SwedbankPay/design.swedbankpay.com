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

    it("Throws an error when proptype for horsize is wrong", () => {
        console.error = jest.fn();

        const wrapper = shallow(<Nav items={navItems} widesize="xxxl" />);

        expect(console.error).toHaveBeenCalled();
        expect(wrapper).toMatchSnapshot();
    });

    it("renders", () => {
        const wrapper = shallow(<Nav items={navItems} />);

        expect(wrapper).toMatchSnapshot();
    });

    // it("setActive prevents default", () => {
    //     const wrapper = shallow(<Nav items={navItems} />);
    //     const listItem = wrapper.find(".active");

    //     const setActive = jest.fn();

    //     expect(listItem).toHaveLength(1);
    //     listItem.simulate("click");
    //     expect(setActive).toHaveBeenCalled();

    //     expect(wrapper).toMatchSnapshot();
    // });
});
