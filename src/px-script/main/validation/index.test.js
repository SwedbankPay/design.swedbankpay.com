import React from "react";
import ReactDOM from "react-dom";

import validation from "./index";

describe("px-script: validation", () => {
    const div = document.createElement("div");

    document.body.appendChild(div);
    afterEach(() => {
        ReactDOM.unmountComponentAtNode(div);
    });

    const Email = props => (
        <form>
            <div className="form-group">
                <div className="input-group">
                    <input {...props} type="email" className="form-control" id="test-id" placeholder="Email" data-validate/>
                </div>
            </div>
        </form>
    );

    it("is defined", () => {
        expect(validation).toBeDefined();
    });

    it("has an init method", () => {
        expect(validation.init).toBeDefined();
        expect(validation.init).toBeInstanceOf(Function);
    });

    it("does nothing if no value is given", () => {
        ReactDOM.render(<Email />, div);

        const formElement = document.querySelector(".form-group");
        const inputElement = formElement.querySelector("#test-id");

        expect(formElement).toBeTruthy();
        expect(inputElement).toBeTruthy();
        expect(formElement.classList.contains("has-error")).toBeFalsy();
        expect(formElement.classList.contains("has-success")).toBeFalsy();

        validation.init();

        inputElement.dispatchEvent(new Event("blur"));

        expect(formElement.classList.contains("has-error")).toBeFalsy();
        expect(formElement.classList.contains("has-success")).toBeFalsy();
    });

    it("tests given email with default email regex and adds class has-success to form-group when it succeeds", () => {
        ReactDOM.render(<Email />, div);

        const formElement = document.querySelector(".form-group");
        const inputElement = formElement.querySelector("#test-id");

        expect(formElement).toBeTruthy();
        expect(inputElement).toBeTruthy();
        expect(formElement.classList.contains("has-error")).toBeFalsy();
        expect(formElement.classList.contains("has-success")).toBeFalsy();

        validation.init();

        inputElement.value = "correct.email@address.com";
        inputElement.dispatchEvent(new Event("blur"));

        expect(formElement.classList.contains("has-success")).toBeTruthy();
    });

    it("tests given email with default email regex and adds class has-error to form-group when it fails", () => {
        ReactDOM.render(<Email />, div);

        const formElement = document.querySelector(".form-group");
        const inputElement = formElement.querySelector("#test-id");

        expect(formElement).toBeTruthy();
        expect(inputElement).toBeTruthy();
        expect(formElement.classList.contains("has-error")).toBeFalsy();
        expect(formElement.classList.contains("has-success")).toBeFalsy();

        validation.init();

        inputElement.value = "incorrect email address";
        inputElement.dispatchEvent(new Event("blur"));

        expect(formElement.classList.contains("has-error")).toBeTruthy();
    });

    it("tests given email with pattern and adds class has-success to form-group when it succeeds", () => {
        ReactDOM.render(<Email pattern="[^@]+@[^\.]+\..+"/>, div);

        const formElement = document.querySelector(".form-group");
        const inputElement = formElement.querySelector("#test-id");

        expect(formElement).toBeTruthy();
        expect(inputElement).toBeTruthy();
        expect(formElement.classList.contains("has-error")).toBeFalsy();
        expect(formElement.classList.contains("has-success")).toBeFalsy();

        validation.init();

        inputElement.value = "correct.email@address.com";
        inputElement.dispatchEvent(new Event("blur"));

        expect(formElement.classList.contains("has-success")).toBeTruthy();
    });

    it("tests given email with pattern and adds class has-error to form-group when it fails", () => {
        ReactDOM.render(<Email pattern="[^@]+@[^\.]+\..+" />, div);

        const formElement = document.querySelector(".form-group");
        const inputElement = formElement.querySelector("#test-id");

        expect(formElement).toBeTruthy();
        expect(inputElement).toBeTruthy();
        expect(formElement.classList.contains("has-error")).toBeFalsy();
        expect(formElement.classList.contains("has-success")).toBeFalsy();

        validation.init();

        inputElement.value = "incorrect email address";
        inputElement.dispatchEvent(new Event("blur"));

        expect(formElement.classList.contains("has-error")).toBeTruthy();
    });

    it("triggers validation when input event is triggered after initial validation state is set as has-success", () => {
        ReactDOM.render(<Email />, div);

        const formElement = document.querySelector(".form-group");
        const inputElement = formElement.querySelector("#test-id");

        expect(formElement).toBeTruthy();
        expect(inputElement).toBeTruthy();

        validation.init();

        inputElement.value = "correct.email@address.com";
        inputElement.dispatchEvent(new Event("blur"));
        expect(formElement.classList.contains("has-success")).toBeTruthy();

        inputElement.dispatchEvent(new Event("input"));

        expect(formElement.classList.contains("has-success")).toBeTruthy();
    });

    it("triggers validation when input event is triggered after initial validation state is set as has-error", () => {
        ReactDOM.render(<Email />, div);

        const formElement = document.querySelector(".form-group");
        const inputElement = formElement.querySelector("#test-id");

        expect(formElement).toBeTruthy();
        expect(inputElement).toBeTruthy();

        validation.init();

        inputElement.value = "incorrect mail address";
        inputElement.dispatchEvent(new Event("blur"));
        expect(formElement.classList.contains("has-error")).toBeTruthy();

        inputElement.dispatchEvent(new Event("input"));

        expect(formElement.classList.contains("has-error")).toBeTruthy();
    });

    it("does not trigger validation when input event is triggered if parent format element does not contain has-success or has-error", () => {
        ReactDOM.render(<Email />, div);

        const formElement = document.querySelector(".form-group");
        const inputElement = formElement.querySelector("#test-id");

        expect(formElement).toBeTruthy();
        expect(inputElement).toBeTruthy();

        validation.init();

        inputElement.value = "incorrect mail address";
        inputElement.dispatchEvent(new Event("input"));
        expect(formElement.classList.contains("has-success")).toBeFalsy();
        expect(formElement.classList.contains("has-error")).toBeFalsy();
    });
});
