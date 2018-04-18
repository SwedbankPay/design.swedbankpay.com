import React from "react";
import ReactDOM from "react-dom";

import button from "./index";
import Button from "../../App/components/Button";

describe("px-script: button", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);

    it("is defined", () => {
        expect(button).toBeDefined();
    });

    // it("method init adds loader markup to buttons with attribute [data-px-loader='true']", () => {
    //     const Buttons = () => (
    //         <div>
    //             <Button type="default" label="test" loader={true} />
    //             <Button type="default" label="test" loader={true} />
    //         </div>
    //     );
    //     ReactDOM.render(<Buttons />, div);

    //     const renderedButtons = document.querySelectorAll("[data-px-loader='true']");

    //     expect(renderedButtons).toHaveLength(2);

    //     renderedButtons.forEach(button => {
    //         expect(button.childNodes).toHaveLength(1);
    //     });

    //     button.init();

    //     renderedButtons.forEach(button => {
    //         expect(button.childNodes).toHaveLength(2);
    //         expect(button.lastChild.classList).toContain("loader");
    //     });

    //     ReactDOM.unmountComponentAtNode(div);
    // });

    // it("displays a console warning when method loader.hide recieves an id which does not exist in current dom", () => {
    //     console.warn = jest.fn();
    //     button.loader.hide("test");
    //     expect(console.warn).toHaveBeenCalled();
    // });

    // it("hides the loader from button when provided an id to method loader.hide", () => {
    //     ReactDOM.render(<Button type="default" id="test" loading={true} />, div);

    //     expect(document.getElementById("test").classList).toContain("loading");
    //     button.loader.hide("test");
    //     expect(document.getElementById("test").classList).not.toContain("loading");

    //     ReactDOM.unmountComponentAtNode(div);
    // });

    // it("hides all loaders from buttons when not provided an id to method loader.hide", () => {
    //     const Buttons = () => (
    //         <div>
    //             <Button type="default" loading={true} />
    //             <Button type="default" loading={true} />
    //         </div>
    //     );
    //     ReactDOM.render(<Buttons />, div);

    //     const renderedButtons = document.querySelectorAll(".btn");

    //     renderedButtons.forEach(button => {
    //         expect(button.classList).toContain("loading");
    //     });

    //     button.loader.hide();

    //     renderedButtons.forEach(button => {
    //         expect(button.classList).not.toContain("loading");
    //     });

    //     ReactDOM.unmountComponentAtNode(div);
    // });

    // it("displays a console warning when method loader.show recieves an id which does not exist in current dom", () => {
    //     console.warn = jest.fn();
    //     button.loader.show("test");
    //     expect(console.warn).toHaveBeenCalled();
    // });

    // it("shows the loader in button when provided an id to method loader.hide", () => {
    //     ReactDOM.render(<Button type="default" id="test" loading={false} />, div);

    //     expect(document.getElementById("test").classList).not.toContain("loading");
    //     button.loader.show("test");
    //     expect(document.getElementById("test").classList).toContain("loading");

    //     ReactDOM.unmountComponentAtNode(div);
    // });

    // it("shows all loaders in buttons when not provided an id to method loader.show", () => {
    //     const Buttons = () => (
    //         <div>
    //             <Button type="default" loading={false} />
    //             <Button type="default" loading={false} />
    //         </div>
    //     );
    //     ReactDOM.render(<Buttons />, div);

    //     const renderedButtons = document.querySelectorAll(".btn");

    //     renderedButtons.forEach(button => {
    //         expect(button.classList).not.toContain("loading");
    //     });

    //     button.loader.show();

    //     renderedButtons.forEach(button => {
    //         expect(button.classList).toContain("loading");
    //     });

    //     ReactDOM.unmountComponentAtNode(div);
    // });
});
