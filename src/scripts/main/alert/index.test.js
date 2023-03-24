import React from "react";
import { render } from "@testing-library/react";

import alert from "./index";
import Alert from "@components/Alert";

describe("scripts: alert", () => {

    it("is defined", () => {
        expect(alert).toBeDefined();
    });

    describe("alert.init", () => {
        it("is defined", () => {
            expect(alert.init).toBeDefined();
            expect(alert.init).toBeInstanceOf(Function);
        });

        it("returns a single object when one element is initialized", () => {
            render(<Alert type="success" id="demo-alert" />);

            const renderedAlert = document.querySelector(".alert");

            expect(renderedAlert).toBeTruthy();

            const returnVal = alert.init("demo-alert");

            expect(Array.isArray(returnVal)).toBeFalsy();
            expect(typeof returnVal).toEqual("object");
        });

        it("returns an array of objects when more than one element is initialized", () => {
            render(
                <>
                    <Alert type="success" />
                    <Alert type="success" />
                </>);

            const renderedAlert = document.querySelectorAll(".alert");

            expect(renderedAlert).toBeTruthy();
            expect(renderedAlert.length).toEqual(2);

            const returnVal = alert.init();

            expect(Array.isArray(returnVal)).toBeTruthy();
            expect(returnVal.length).toEqual(2);
        });

        it("returns null if no alert is found and prints a warning message", () => {
            console.warn = jest.fn();

            expect(alert.init()).toBeNull();
            expect(console.warn).toHaveBeenCalled();
        });

        it("returns null if an invalid ID is passed and prints a warning message", () => {
            console.warn = jest.fn();

            expect(alert.init("test")).toBeNull();
            expect(console.warn).toHaveBeenCalled();
        });
    });

    it("adds eventlisteners on all close buttons", () => {
        const Alerts = () => (
            <>
                <Alert id="asd" type="success" close display />
                <Alert type="success" close display />
            </>
        );

        render(<Alerts />);

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

        render(<AlertTest />);

        const renderedButton = document.querySelector("[data-alert-close]");

        expect(renderedButton).toBeDefined();

        const targetAlert = document.getElementById(renderedButton.dataset.alertClose);

        expect(targetAlert.classList).not.toContain("d-none");

        alert.init();

        renderedButton.click();
        expect(targetAlert.classList).toContain("d-none");
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
            render(<Alert id="demo-alert" type="success" />);

            const renderedAlert = document.querySelector(".alert");

            expect(renderedAlert.classList).not.toContain("d-none");

            alert.close("demo-alert");

            expect(renderedAlert.classList).toContain("d-none");
        });

        it("prints a warning message to console if alert with passed id doesn't exist", () => {
            console.warn = jest.fn();

            render(<Alert id="demo-alert" type="success" />);

            alert.close("wrong-id");

            expect(console.warn).toHaveBeenCalled();
        });
    });
});
