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

        const renderedButtons = document.querySelectorAll("[data-alert-close]");

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
});
