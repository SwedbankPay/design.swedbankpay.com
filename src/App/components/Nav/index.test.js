import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

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

        const componentForSnap = renderer.create(<Nav items={navItems} vertsize="xxxl" />);

        expect(console.error).toHaveBeenCalled();

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("Throws an error when proptype for widesize is wrong", () => {
        console.error = jest.fn();

        const componentForSnap = renderer.create(<Nav items={navItems} widesize="xxxl" />);

        expect(console.error).toHaveBeenCalled();

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders", () => {

        const componentForSnap = renderer.create(<Nav items={navItems} />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders with two levels", () => {
        const componentForSnap = renderer.create(<Nav items={navItemsTwoLevels} />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("renders with an active list if state active matches", () => {
        render(<Nav items={navItems} />);

        expect(screen.getAllByRole("link").filter(elmt => elmt.classList.contains("active"))).toHaveLength(1);

        const componentForSnap = renderer.create(<Nav items={navItems} />);

        expect(componentForSnap.toJSON()).toMatchSnapshot();
    });

    it("does nothing when clicking on an active listitem", () => {
        render(<Nav items={navItems} />);

        const renderedNav = screen.getByRole("navigation");
        const activeAnchor = screen.getAllByRole("link").filter(elmt => elmt.classList.contains("active"))[0];

        expect(renderedNav).toBeInTheDocument();
        expect(activeAnchor).toBeInTheDocument();
        expect(activeAnchor).toHaveClass("active");

        userEvent.click(activeAnchor);

        expect(activeAnchor).toHaveClass("active");
    });

    it.skip("changes active item", () => {
        render(<Nav items={navItems} />);

        const renderedNav = screen.getByRole("navigation");

        const inactiveAnchor = screen.getAllByRole("link").filter(elmt => !elmt.classList.contains("active") && !elmt.parentElement.classList.contains("active"))[0];

        expect(renderedNav).toBeInTheDocument();
        expect(inactiveAnchor).toBeInTheDocument();
        expect(inactiveAnchor.childElementCount).toBe(2);
        expect(inactiveAnchor.parentElement).not.toHaveClass("active");
        expect(inactiveAnchor).toHaveAttribute("data-level", "2");

        userEvent.click(inactiveAnchor);

        expect(inactiveAnchor.parentElement).toHaveClass("active");

    });

    it.skip("sets subitems parent to active aswell as subitem when clicked", () => {
        render(<Nav items={navItemsTwoLevels} />);

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

    it.skip("changes active parent and active item when another subitem is clicked", () => {
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

    it.skip("removes active parent if top level item is clicked", () => {
        const renderedNav = document.querySelector(".nav");
        const anchor = renderedNav.querySelector("a");

        expect(renderedNav).toBeTruthy();
        expect(anchor).toBeTruthy();
        expect(anchor.classList).not.toContain("active");

        anchor.click();

        expect(anchor.classList).toContain("active");
    });
});
