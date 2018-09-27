import React from "react";
import ReactDOM from "react-dom";

import alert from "./index";
import Alert from "@/Alert";

describe("px-script: alert", () => {
    const div = document.createElement("div");

    document.body.appendChild(div);

    it("is defined", () => {
        expect(alert).toBeDefined();
    });

    it("has an init method", () => {
        expect(alert.init).toBeDefined();
        expect(alert.init).toBeInstanceOf(Function);
    });

    it("method init adds eventlisteners on all close buttons", () => {
        const Alerts = () => (
            <>
                <Alert id="asd" type="success" close display />
                <Alert type="success" close display />
            </>
        );

        ReactDOM.render(<Alerts />, div);

        const renderedButtons = document.querySelectorAll("[data-alert-close]");

        expect(renderedButtons).toHaveLength(2);

        renderedButtons.forEach(button => {
            expect(button.parentElement.classList).not.toContain("d-none");
        });

        alert.init();

        renderedButtons.forEach(button => {
            button.click();
            expect(button.parentElement.classList).toContain("d-none");
        });

        ReactDOM.unmountComponentAtNode(div);
    });

    it("method init adds eventlisteners on all button with data attributes", () => {
        const AlertTest = () => (
            <>
                <Alert id="test" type="success" display />
                <button data-alert-close="test"></button>
            </>
        );

        ReactDOM.render(<AlertTest />, div);

        const renderedButton = document.querySelector("[data-alert-close]");

        expect(renderedButton).toBeDefined();

        const targetAlert = document.getElementById(renderedButton.dataset.alertClose);

        expect(targetAlert.classList).not.toContain("d-none");

        alert.init();

        renderedButton.click();
        expect(targetAlert.classList).toContain("d-none");

        ReactDOM.unmountComponentAtNode(div);
    });

    it("method init warns about possible wrong id", () => {
        const AlertTest = () => (
            <>
                <button data-alert-close="test"></button>
            </>
        );

        ReactDOM.render(<AlertTest />, div);
        console.warn = jest.fn();

        alert.init();
        expect(console.warn).toHaveBeenCalled();

        ReactDOM.unmountComponentAtNode(div);
    });
});
