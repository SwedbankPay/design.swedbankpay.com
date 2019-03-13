import React from "react";
import ReactDOM from "react-dom";

import NavMenu from "./NavMenu";

describe("px-script: topbar - NavMenu", () => {
    const div = document.createElement("div");

    document.body.appendChild(div);

    const Topbar = ({ navOpen, noBtnIcon }) => (
        <header className="topbar">
            <button type="button" className="topbar-btn" data-toggle-nav="#topbar-nav">
                {noBtnIcon ? null : <i className="material-icons topbar-btn-icon">menu</i>}
                <span className="topbar-btn-text">Menu</span>
            </button>
            <nav id="topbar-nav" className={`topbar-nav${navOpen ? " in" : ""}`}>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </nav>
            <a href="#" className="topbar-logo"></a>
            <button type="button" className="topbar-btn">
                <i className="material-icons">exit_to_app</i>
                <span className="topbar-btn-text">Log out</span>
            </button>
        </header>
    );

    it("is defined", () => {
        expect(NavMenu).toBeDefined();
    });

    test.todo("Update NavMenu tests");

    // it("creates a new instance with sent button and connected topbar-nav", () => {
    //     ReactDOM.render(<Topbar />, div);

    //     const topbar = document.querySelector(".topbar");
    //     const navMenu = topbar.querySelector(".topbar-nav");
    //     const newNavMenu = new NavMenu(topbar, navMenu);

    //     expect(topbar).toBeTruthy();
    //     expect(navMenu).toBeTruthy();
    //     expect(newNavMenu).toBeTruthy();

    //     ReactDOM.unmountComponentAtNode(div);
    // });

    // it("sets userIcon to null if no iconElement exists", () => {
    //     ReactDOM.render(<Topbar noBtnIcon />, div);

    //     const topbar = document.querySelector(".topbar");
    //     const navMenu = topbar.querySelector(".topbar-nav");
    //     const newNavMenu = new NavMenu(topbar, navMenu);

    //     expect(topbar).toBeTruthy();
    //     expect(navMenu).toBeTruthy();
    //     expect(newNavMenu).toBeTruthy();
    //     expect(newNavMenu.userIcon).toEqual(null);

    //     ReactDOM.unmountComponentAtNode(div);
    // });

    // it("does not set icon value if no button icon exists when a nav gets opened", () => {
    //     ReactDOM.render(<Topbar noBtnIcon />, div);

    //     const topbar = document.querySelector(".topbar");
    //     const topbarBtn = topbar.querySelector(".topbar-btn");
    //     const navMenu = topbar.querySelector(".topbar-nav");
    //     const newNavMenu = new NavMenu(topbar, navMenu);

    //     expect(topbar).toBeTruthy();
    //     expect(topbarBtn).toBeTruthy();
    //     expect(navMenu).toBeTruthy();
    //     expect(newNavMenu).toBeTruthy();
    //     expect(newNavMenu.userIcon).toEqual(null);
    //     expect(topbar.querySelector(".topbar-btn-icon")).toBeFalsy();

    //     topbarBtn.click();

    //     expect(topbar.querySelector(".topbar-btn-icon")).toBeFalsy();
    //     // Not unmounting to keep state for next test. [AW]
    // });

    // // NB! Do not put new tests between these two as that will make the next test break. [AW]

    // it("does not set icon value if no button icon exists when a nav gets closed", () => {
    //     const topbar = document.querySelector(".topbar");
    //     const topbarBtn = topbar.querySelector(".topbar-btn");

    //     expect(topbarBtn).toBeTruthy();
    //     expect(topbar.querySelector(".topbar-btn-icon")).toBeFalsy();

    //     topbarBtn.click();

    //     expect(topbar.querySelector(".topbar-btn-icon")).toBeFalsy();

    //     ReactDOM.unmountComponentAtNode(div);
    // });

    // it("prevents default and fires handleClick() when the topbar button connected to a nav is clicked", () => {
    //     ReactDOM.render(<Topbar />, div);

    //     const topbar = document.querySelector(".topbar");
    //     const navMenu = topbar.querySelector(".topbar-nav");
    //     const navBtn = topbar.querySelector(".topbar-btn");
    //     const newNavMenu = new NavMenu(topbar, navMenu);

    //     newNavMenu.handleClick = jest.fn();
    //     Event.prototype.preventDefault = jest.fn();

    //     expect(topbar).toBeTruthy();
    //     expect(navMenu).toBeTruthy();
    //     expect(navBtn).toBeTruthy();
    //     expect(newNavMenu).toBeTruthy();

    //     navBtn.click();

    //     expect(newNavMenu.handleClick).toHaveBeenCalled();
    //     expect(Event.prototype.preventDefault).toHaveBeenCalled();

    //     ReactDOM.unmountComponentAtNode(div);
    // });

    // it("opens the menu when the topbar button is clicked", () => {
    //     ReactDOM.render(<Topbar />, div);

    //     const topbar = document.querySelector(".topbar");
    //     const navMenu = topbar.querySelector(".topbar-nav");
    //     const navBtn = topbar.querySelector(".topbar-btn");
    //     const newNavMenu = new NavMenu(topbar, navMenu);

    //     expect(topbar).toBeTruthy();
    //     expect(navMenu).toBeTruthy();
    //     expect(navBtn).toBeTruthy();
    //     expect(newNavMenu).toBeTruthy();
    //     expect(navMenu.classList).not.toContain("in");

    //     navBtn.click();

    //     expect(navMenu.classList).toContain("in");

    //     // Not unmounting to keep state for next test. [AW]
    // });

    // // NB! Do not put new tests between these two as that will make the next test break. [AW]

    // it("closes the menu when the nav menu is open and topbar button is clicked", () => {
    //     const topbar = document.querySelector(".topbar");
    //     const navMenu = topbar.querySelector(".topbar-nav");
    //     const navBtn = topbar.querySelector(".topbar-btn");

    //     expect(topbar).toBeTruthy();
    //     expect(navMenu).toBeTruthy();
    //     expect(navBtn).toBeTruthy();
    //     expect(navMenu.classList).toContain("in");

    //     navBtn.click();

    //     expect(navMenu.classList).not.toContain("in");

    //     ReactDOM.unmountComponentAtNode(div);
    // });

    // it("closes the menu when an anchor is clicked.", () => {
    //     ReactDOM.render(<Topbar navOpen />, div);

    //     const topbar = document.querySelector(".topbar");
    //     const navMenu = topbar.querySelector(".topbar-nav");
    //     const navAnchor = navMenu.querySelector("a");
    //     const newNavMenu = new NavMenu(topbar, navMenu);

    //     expect(topbar).toBeTruthy();
    //     expect(navMenu).toBeTruthy();
    //     expect(navAnchor).toBeTruthy();
    //     expect(newNavMenu).toBeTruthy();
    //     expect(navMenu.classList).toContain("in");

    //     navAnchor.click();

    //     expect(navMenu.classList).not.toContain("in");

    //     ReactDOM.unmountComponentAtNode(div);
    // });

    // it("containsPoint is defined and can be called", () => {
    //     ReactDOM.render(<Topbar />, div);

    //     const topbar = document.querySelector(".topbar");
    //     const navMenu = topbar.querySelector(".topbar-nav");
    //     const newNavMenu = new NavMenu(topbar, navMenu);

    //     expect(topbar).toBeTruthy();
    //     expect(navMenu).toBeTruthy();
    //     expect(newNavMenu).toBeTruthy();
    //     expect(newNavMenu.containsPoint).toBeDefined();
    //     expect(newNavMenu.containsPoint(0, 0)).toEqual(false);

    //     ReactDOM.unmountComponentAtNode(div);
    // });
});
