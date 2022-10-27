import React from "react";
import ReactDOM from "react-dom";

import dropdown from "./index";

describe("Scripts: Dropdown", () => {
    const div = document.createElement("div");

    document.body.appendChild(div);

    const Dropdown = ({ id, active }) => (
        <div id={id} className={`dropdown anchor-top-left${active ? " active" : ""}`}>
            <div className="toggle-menu-container">
                <button className="dropdown-toggle btn btn-secondary" type="button" aria-label="dropdown button">
                    Actions
                    <i className="material-icons ml-2" aria-hidden="true">keyboard_arrow_down</i>
                </button>
                <div className="dropdown-menu   " aria-labelledby="dropdownToggle">
                    <a id="firstElem" href="#"><i className="material-icons" aria-hidden="true">bookmark</i>Edit</a>
                    <a href="#"><i className="material-icons" aria-hidden="true">delete_outline</i>Delete</a>
                </div>
            </div>
        </div>
    );

    afterEach(() => {
        ReactDOM.unmountComponentAtNode(div);
    });

    it("is defined", () => {
        expect(dropdown).toBeDefined();
    });

    describe("dropdown.init", () => {
        it("has an init method", () => {
            expect(dropdown.init).toBeDefined();
            expect(dropdown.init).toBeInstanceOf(Function);
        });

        it("init returns null if no dropdown is found and prints a warning message", () => {
            console.warn = jest.fn();

            expect(dropdown.init()).toBeNull();
            expect(console.warn).toHaveBeenCalled();
        });
    });

    it("button click gives dropdown-div class of active", () => {
        ReactDOM.render(<Dropdown id="foo"/>, div);

        const container = document.querySelector(".dropdown");

        dropdown.init();

        expect(container.classList).not.toContain("active");

        const btn = document.querySelector(".btn");

        btn.click();

        expect(container.classList).toContain("active");

    });

    it("button click removes dropdown-div class of active", () => {
        ReactDOM.render(<Dropdown id="foo" active/>, div);

        const container = document.querySelector(".dropdown");

        dropdown.init();

        expect(container.classList).toContain("active");

        const btn = document.querySelector(".btn");

        btn.click();

        expect(container.classList).not.toContain("active");
    });
});
