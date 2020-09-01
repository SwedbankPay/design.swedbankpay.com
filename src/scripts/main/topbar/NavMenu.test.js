import React from "react";
import ReactDOM from "react-dom";

import NavMenu from "./NavMenu";
import utils from "../utils";

jest.useFakeTimers();

jest.mock("../utils");

describe("scripts: topbar - NavMenu", () => {
    const div = document.createElement("div");

    document.body.appendChild(div);

    beforeEach(() => ReactDOM.unmountComponentAtNode(div));

    const Topbar = ({ id, navOpen, noBtnIcon, noCloseIcon }) => (
        <header className="topbar" id={id}>
            <button type="button" className="topbar-btn" data-toggle-nav="#topbar-nav">
                {noBtnIcon ? null : <i className="material-icons topbar-btn-icon" aria-hidden="true">menu</i>}
                <span className="topbar-btn-text">Menu</span>
            </button>
            <nav className={`topbar-nav${navOpen ? " topbar-nav-open" : ""}`}>
                {noCloseIcon ? null
                    :
                    <button type="button" className="topbar-close">
                        <i className="material-icons" aria-hidden="true">close</i>
                    </button>}
                <div className="topbar-link-container">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </nav>
            <a href="#" className="topbar-logo"></a>
        </header>
    );

    it("is defined", () => {
        expect(NavMenu).toBeDefined();
    });

    it("creates a new instance with sent button and connected topbar-nav", () => {
        ReactDOM.render(<Topbar />, div);

        const topbar = document.querySelector(".topbar");
        const navMenu = topbar.querySelector(".topbar-nav");
        const newNavMenu = new NavMenu(topbar, navMenu);

        expect(topbar).toBeTruthy();
        expect(navMenu).toBeTruthy();
        expect(newNavMenu).toBeTruthy();
    });

    it("prints a warning if no close icon (.close-topbar-nav) exists", () => {
        console.warn = jest.fn();

        ReactDOM.render(<Topbar noCloseIcon />, div);

        const topbar = document.querySelector(".topbar");
        const navMenu = topbar.querySelector(".topbar-nav");

        new NavMenu(topbar, navMenu);

        expect(console.warn).toHaveBeenCalledTimes(1);
    });

    it("prevents default and fires open when the topbar button connected to a nav is clicked", () => {
        ReactDOM.render(<Topbar />, div);

        const topbar = document.querySelector(".topbar");
        const navMenu = topbar.querySelector(".topbar-nav");
        const navBtn = topbar.querySelector(".topbar-btn");
        const newNavMenu = new NavMenu(topbar, navMenu);

        newNavMenu.open = jest.fn();
        Event.prototype.preventDefault = jest.fn();

        expect(topbar).toBeTruthy();
        expect(navMenu).toBeTruthy();
        expect(navBtn).toBeTruthy();
        expect(newNavMenu).toBeTruthy();

        navBtn.click();

        // eslint-disable-next-line security/detect-non-literal-fs-filename
        expect(newNavMenu.open).toHaveBeenCalled();
        expect(Event.prototype.preventDefault).toHaveBeenCalled();
    });

    it("opens the menu when the topbar button is clicked", () => {
        ReactDOM.render(<Topbar />, div);

        const topbar = document.querySelector(".topbar");
        const navMenu = topbar.querySelector(".topbar-nav");
        const navBtn = topbar.querySelector(".topbar-btn");
        const newNavMenu = new NavMenu(topbar, navMenu);

        expect(topbar).toBeTruthy();
        expect(navMenu).toBeTruthy();
        expect(navBtn).toBeTruthy();
        expect(newNavMenu).toBeTruthy();
        expect(navMenu.classList).not.toContain("topbar-nav-open");

        navBtn.click();
        jest.runAllTimers();

        expect(navMenu.classList).toContain("topbar-nav-open");
    });

    it("closes the menu when an anchor is clicked.", () => {
        ReactDOM.render(<Topbar navOpen />, div);

        const topbar = document.querySelector(".topbar");
        const navMenu = topbar.querySelector(".topbar-nav");
        const navAnchor = navMenu.querySelector("a");
        const newNavMenu = new NavMenu(topbar, navMenu);

        expect(topbar).toBeTruthy();
        expect(navMenu).toBeTruthy();
        expect(navAnchor).toBeTruthy();
        expect(newNavMenu).toBeTruthy();
        expect(navMenu.classList).toContain("topbar-nav-open");

        navAnchor.click();
        jest.runAllTimers();

        expect(navMenu.classList).not.toContain("topbar-nav-open");
    });

    it("containsPoint is defined and can be called", () => {
        ReactDOM.render(<Topbar />, div);

        const topbar = document.querySelector(".topbar");
        const navMenu = topbar.querySelector(".topbar-nav");
        const newNavMenu = new NavMenu(topbar, navMenu);

        expect(topbar).toBeTruthy();
        expect(navMenu).toBeTruthy();
        expect(newNavMenu).toBeTruthy();
        expect(newNavMenu._containsPoint).toBeDefined();
    });

    it("closes .topbar-nav-menu when a click event is fired outside of .topbar-link-container", () => {
        ReactDOM.render(<Topbar navOpen />, div);

        const topbar = document.querySelector(".topbar");
        const navMenu = topbar.querySelector(".topbar-nav");

        expect(navMenu.classList).toContain("topbar-nav-open");

        utils.isWithinBoundingBox.mockReturnValue(false);

        new NavMenu(topbar, navMenu);

        navMenu.dispatchEvent(new Event("mousedown"));

        expect(navMenu.classList).not.toContain("topbar-nav-open");
    });

    it("does not close .topbar-nav-menu when a mousedown event is fired inside .topbar-link-container", () => {
        ReactDOM.render(<Topbar navOpen />, div);

        const topbar = document.querySelector(".topbar");
        const navMenu = topbar.querySelector(".topbar-nav");

        expect(navMenu.classList).toContain("topbar-nav-open");

        utils.isWithinBoundingBox.mockReturnValue(true);

        new NavMenu(topbar, navMenu);

        navMenu.dispatchEvent(new Event("mousedown"));

        expect(navMenu.classList).toContain("topbar-nav-open");
    });

    it("closes .topbar-nav-menu if a user clicks .close-topbar-nav", () => {
        ReactDOM.render(<Topbar navOpen />, div);

        const topbar = document.querySelector(".topbar");
        const navMenu = topbar.querySelector(".topbar-nav");
        const navMenuInstance = new NavMenu(topbar, navMenu);

        expect(navMenu.classList).toContain("topbar-nav-open");

        navMenuInstance.closeNavIcon.click();

        expect(navMenu.classList).not.toContain("topbar-nav-open");
    });
});
