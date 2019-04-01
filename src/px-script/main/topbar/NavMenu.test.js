import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import NavMenu from "./NavMenu";

describe("px-script: topbar - NavMenu", () => {
    jest.useFakeTimers();

    const div = document.createElement("div");

    document.body.appendChild(div);

    beforeEach(() => {
        ReactDOM.unmountComponentAtNode(div);
    });

    const TopbarTest = ({ menuBtn, closeIcon, openNav }) => (
        <header className="topbar">
            {menuBtn ?
                <button type="button" className="topbar-menu-button" data-toggle-nav="#topbar-nav">
                    <i className="material-icons topbar-btn-icon">menu</i>
                </button>
                : null}
            <a href="#" className="topbar-logo"></a>
            <nav className={`topbar-nav${openNav ? " d-block topbar-nav-open" : ""}`}>
                <div className="topbar-link-container">
                    {closeIcon ? <i className="material-icons close-topbar-nav">close</i> : null}
                    <a href="#" className="active">
                        <i className="material-icons">home</i>
                        <span>Home</span>
                    </a>
                    <a href="#">
                        <i className="material-icons">shopping_cart</i>
                        <span>Purchase history</span>
                    </a>
                    <a href="#">
                        <i className="material-icons">settings</i>
                        <span>Settings</span>
                    </a>
                    <a className="topbar-link-right" href="#">
                        <i className="material-icons">exit_to_app</i>
                        <span>Log out</span>
                    </a>
                </div>
            </nav>
            <button type="button" className="topbar-btn">
                <i className="material-icons">exit_to_app</i>
                <span className="topbar-btn-text">Log out</span>
            </button>
        </header>
    );

    it("is defined", () => {
        expect(NavMenu).toBeDefined();
    });

    it("creates a new instance with sent button and connected topbar-nav", () => {
        ReactDOM.render(<TopbarTest menuBtn closeIcon />, div);

        const topbar = document.querySelector(".topbar");
        const newNavMenu = new NavMenu(topbar);

        expect(topbar).toBeTruthy();
        expect(newNavMenu).toBeTruthy();
    });

    it("throws an error message if no closing icon exists", () => {
        ReactDOM.render(<TopbarTest menuBtn />, div);

        console.error = jest.fn();

        const topbar = document.querySelector(".topbar");

        expect(topbar).toBeTruthy();

        new NavMenu(topbar);

        expect(console.error).toHaveBeenCalledTimes(1);
    });

    it("throws an error message if no menuBtn exists", () => {
        ReactDOM.render(<TopbarTest closeIcon />, div);

        console.error = jest.fn();

        const topbar = document.querySelector(".topbar");

        expect(topbar).toBeTruthy();

        new NavMenu(topbar);

        expect(console.error).toHaveBeenCalledTimes(1);
    });

    it("opens the topbar nav when the menu button is clicked", () => {
        ReactDOM.render(<TopbarTest menuBtn closeIcon />, div);

        const topbar = document.querySelector(".topbar");
        const navMenu = topbar.querySelector(".topbar-nav");
        const navMenuBtn = topbar.querySelector(".topbar-menu-button");

        new NavMenu(topbar);

        expect(navMenu.classList.contains("topbar-nav-open")).toBeFalsy();

        navMenuBtn.click();
        jest.runAllTimers();

        expect(navMenu.classList).toContain("topbar-nav-open");
    });

    it("closes the topbar nav when the menu button is clicked", () => {
        ReactDOM.render(<TopbarTest menuBtn closeIcon openNav />, div);

        const topbar = document.querySelector(".topbar");
        const navMenu = topbar.querySelector(".topbar-nav");
        const navMenuBtn = topbar.querySelector(".topbar-menu-button");
        const navInstance = new NavMenu(topbar);

        navInstance.isOpen = true;

        expect(navMenu.classList.contains("topbar-nav-open")).toBeTruthy();

        navMenuBtn.click();
        jest.runAllTimers();

        expect(navMenu.classList).not.toContain("topbar-nav-open");
    });
});
