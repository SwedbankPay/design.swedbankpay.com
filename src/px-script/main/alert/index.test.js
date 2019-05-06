import React from "react";
import ReactDOM from "react-dom";

import alert from "./index";
import Alert from "@/Alert";

describe("px-script: alert", () => {
    const div = document.createElement("div");

    document.body.appendChild(div);

    afterEach(() => ReactDOM.unmountComponentAtNode(div));

    it("is defined", () => {
        expect(alert).toBeDefined();
    });

    describe("alert.init", () => {
        it("has an init method", () => {
            expect(alert.init).toBeDefined();
            expect(alert.init).toBeInstanceOf(Function);
        });

        it("adds eventlisteners on all close buttons", () => {
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
        });

        it("adds eventlisteners on all button with data attributes", () => {
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
        });

        it("warns about possible wrong id", () => {
            const AlertTest = () => (
                <>
                    <button data-alert-close="test"></button>
                </>
            );

            ReactDOM.render(<AlertTest />, div);
            console.warn = jest.fn();

            alert.init();
            expect(console.warn).toHaveBeenCalled();
        });
    });

    describe("alert.close", () => {
        it("has a close method", () => {
            expect(alert.close).toBeDefined();
            expect(alert.close).toBeInstanceOf(Function);
        });

        it("prints a warning message if method is called with no ID", () => {
            console.warn = jest.fn();

            alert.close();

            expect(console.warn).toHaveBeenCalled();
        });

        it("adds class .d-none when called with a valid ID", () => {
            ReactDOM.render(<Alert id="demo-alert" type="success" />, div);

            const renderedAlert = document.querySelector(".alert");

            expect(renderedAlert.classList).not.toContain("d-none");

            alert.close("demo-alert");

            expect(renderedAlert.classList).toContain("d-none");
        });

        it("prints a warning message to console if alert with passed id doesn't exist", () => {
            console.warn = jest.fn();

            ReactDOM.render(<Alert id="demo-alert" type="success" />, div);

            alert.close("wrong-id");

            expect(console.warn).toHaveBeenCalled();
        });
    });
});
