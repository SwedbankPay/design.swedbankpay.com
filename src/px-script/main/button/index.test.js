import React from "react";
import ReactDOM from "react-dom";

import button from "./index";
import Button from "@/Button";

describe("px-script: button", () => {
    const div = document.createElement("div");

    document.body.appendChild(div);

    it("is defined", () => {
        expect(button).toBeDefined();
    });

    it("has an init method", () => {
        expect(button.init).toBeDefined();
        expect(button.init).toBeInstanceOf(Function);
    });

    it("method init is defined and adds loader markup to buttons with attribute [data-button-loader]", () => {
        const Buttons = () => (
            <div>
                <Button type="primary" label="test" loader />
                <Button type="primary" label="test" loader />
            </div>
        );

        ReactDOM.render(<Buttons />, div);

        const renderedButtons = document.querySelectorAll("[data-button-loader]");

        expect(renderedButtons).toHaveLength(2);

        renderedButtons.forEach(button => {
            expect(button.childNodes).toHaveLength(1);
        });

        button.init();

        renderedButtons.forEach(button => {
            expect(button.childNodes).toHaveLength(2);
            expect(button.lastChild.classList).toContain("loader");
        });

        ReactDOM.unmountComponentAtNode(div);
    });
});
