import React from "react";
import ReactDOM from "react-dom";

import alert from "./index";
import Alert from "../../App/components/Alert";

describe("px-script: alert", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);

    it("is defined", () => {
        expect(alert).toBeDefined();
    });

    it("method init adds eventlisteners on all close buttons", () => {
        const Alerts = () => (
            <div>
                <Alert id={"asd"} type="success" close={true} display={true} />
                <Alert type="success" close={true} display={true} />
            </div>
        );
        ReactDOM.render(<Alerts />, div);

        const renderedButtons = document.querySelectorAll(".alert>.alert-close");

        expect(renderedButtons).toHaveLength(2);

        renderedButtons.forEach(button => {
            expect(button.parentElement.classList).toContain("in");
        });

        alert.init();

        renderedButtons.forEach(button => {
            button.click();
            expect(button.parentElement.classList).not.toContain("in");
        });

        ReactDOM.unmountComponentAtNode(div);

    });

    it("displays a console warning when method hide recieves an id which does not exist in current dom", () => {
        console.warn = jest.fn();
        alert.hide("test");
        expect(console.warn).toHaveBeenCalled();
    });

    it("hides alert when provided an id to method hide", () => {
        ReactDOM.render(<Alert type="success" id="test" display={true} />, div);

        expect(document.getElementById("test").classList).toContain("in");
        alert.hide("test");
        expect(document.getElementById("test").classList).not.toContain("in");

        ReactDOM.unmountComponentAtNode(div);
    });

    it("hides all alerts when not provided an id to method hide", () => {
        const Alerts = () => (
            <div>
                <Alert type="success" display={true} />
                <Alert type="success" display={true} />
            </div>
        );
        ReactDOM.render(<Alerts />, div);

        const renderedAlerts = document.querySelectorAll(".alert");

        renderedAlerts.forEach(alert => {
            expect(alert.classList).toContain("in");
        });

        alert.hide();

        renderedAlerts.forEach(alert => {
            expect(alert.classList).not.toContain("in");
        });

        ReactDOM.unmountComponentAtNode(div);
    });

    it("displays a console warning when method show recieves an id which does not exist in current dom", () => {
        console.warn = jest.fn();
        alert.show("test");
        expect(console.warn).toHaveBeenCalled();
    });

    it("shows alert when provided an id to method show", () => {
        ReactDOM.render(<Alert type="success" id="test" display={false} />, div);

        expect(document.getElementById("test").classList).not.toContain("in");
        alert.show("test");
        expect(document.getElementById("test").classList).toContain("in");

        ReactDOM.unmountComponentAtNode(div);
    });

    it("shows all alerts when not provided an id to method show", () => {
        const Alerts = () => (
            <div>
                <Alert type="success" display={false} />
                <Alert type="success" display={false} />
            </div>
        );
        ReactDOM.render(<Alerts />, div);

        const renderedAlerts = document.querySelectorAll(".alert");

        renderedAlerts.forEach(alert => {
            expect(alert.classList).not.toContain("in");
        });

        alert.show();

        renderedAlerts.forEach(alert => {
            expect(alert.classList).toContain("in");
        });

        ReactDOM.unmountComponentAtNode(div);
    });
});
