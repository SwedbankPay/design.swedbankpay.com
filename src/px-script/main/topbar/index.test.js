import React from "react";
import ReactDOM from "react-dom";

import topbar from "./index";
import NavMenu from "./NavMenu";

jest.mock("./NavMenu");

describe("px-script: topbar", () => {
    beforeEach(() => NavMenu.mockClear());

    const div = document.createElement("div");

    document.body.appendChild(div);

    const NoTopbar = () => (
        <header>
            <p>This is a header!</p>
        </header>
    );

    const TopbarNoBtn = () => (
        <header className="topbar">
            <a href="#" className="topbar-logo"></a>
            <button type="button" className="topbar-btn">
                <i className="material-icons">exit_to_app</i>
                <span className="topbar-btn-text">Log out</span>
            </button>
        </header>
    );

    const Topbar = ({ navOpen }) => (
        <header className="topbar">
            <button type="button" className="topbar-btn" data-toggle-nav="#topbar-nav">
                <i className="material-icons topbar-btn-icon">menu</i>
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
        expect(topbar).toBeDefined();
    });

    it("has an init method", () => {
        expect(topbar.init).toBeDefined();
        expect(topbar.init).toBeInstanceOf(Function);
    });

    it("does not generate NavMenu instances if no .topbar exists", () => {
        ReactDOM.render(<NoTopbar />, div);
        topbar.init();

        expect(NavMenu).not.toHaveBeenCalled();

        ReactDOM.unmountComponentAtNode(div);
    });

    it("does not generate NavMenu instances if .topbar exists but no menu button exists", () => {
        ReactDOM.render(<TopbarNoBtn />, div);
        topbar.init();

        expect(NavMenu).not.toHaveBeenCalled();

        ReactDOM.unmountComponentAtNode(div);
    });

    it("generates NavMenu instances if .topbar exists", () => {
        ReactDOM.render(<Topbar />, div);
        topbar.init();

        expect(NavMenu).toHaveBeenCalled();

        ReactDOM.unmountComponentAtNode(div);
    });
});
