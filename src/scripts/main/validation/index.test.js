import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import validation from "./index";

describe("scripts: validation", () => {
	const Email = (props) => (
		<form>
			<div className="form-group">
				<label htmlFor="validation-email">Email</label>
				<div className="input-group">
					<input
						{...props}
						type="email"
						className="form-control"
						id="validation-email"
						placeholder="Email"
						data-validate
					/>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="validation-textarea">textarea</label>
				<div className="input-group">
					<textarea
						className="form-control"
						id="validation-textarea"
						placeholder="textarea"
						data-validate
					/>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="validation-select">select</label>
				<div className="input-group">
					<select
						className="form-control"
						id="validation-select"
						placeholder="select"
						data-validate
					/>
				</div>
			</div>
		</form>
	);

	const FormValidation = ({ submitBtn, id }) => (
		<form id={id} noValidate data-validate="">
			<div className="form-group">
				<label htmlFor="validation-email">Email</label>
				<div className="input-group">
					<input
						type="email"
						className="form-control"
						id="validation-email"
						placeholder="Enter your email"
						required
					/>
				</div>
			</div>
			{submitBtn ? (
				<button className="btn btn-primary" type="submit" data-disable-invalid>
					Submit
				</button>
			) : null}
		</form>
	);

	it("is defined", () => {
		expect(validation).toBeDefined();
	});

	describe("validation.init", () => {
		it("is defined", () => {
			expect(validation.init).toBeDefined();
			expect(validation.init).toBeInstanceOf(Function);
		});

		it("returns a single object when one ID is passed", () => {
			render(<FormValidation id="demo-validation" />);

			const returnVal = validation.init("demo-validation");

			expect(Array.isArray(returnVal)).toBeFalsy();
			expect(typeof returnVal).toEqual("object");
			expect(returnVal.container.tagName).toEqual("FORM");
		});

		it("returns an array of objects when more than one dialog is initialized", () => {
			render(
				<>
					<FormValidation id="demo-validation-1" />
					<FormValidation id="demo-validation-2" />
				</>
			);

			const returnVal = validation.init();

			expect(Array.isArray(returnVal)).toBeTruthy();
			expect(returnVal.length).toEqual(2);
		});
	});

	it("validateField is exposed globally", () => {
		expect(validation.validateField).toBeDefined();
	});

	it("does nothing if no value is given", () => {
		render(<Email />);

		const formElement = document.querySelector(".form-group");
		const inputElement = formElement.querySelector("#validation-email");

		expect(formElement).toBeTruthy();
		expect(inputElement).toBeTruthy();
		expect(formElement).not.toHaveClass("has-error");
		expect(formElement).not.toHaveClass("has-success");

		validation.init();

		inputElement.dispatchEvent(new Event("blur"));

		expect(formElement).not.toHaveClass("has-error");
		expect(formElement).not.toHaveClass("has-success");
	});

	it("tests given email with default email regex and adds class has-success to form-group when it succeeds", () => {
		render(<Email />);

		const formElement = document.querySelector(".form-group");
		const inputElement = formElement.querySelector("#validation-email");

		expect(formElement).toBeTruthy();
		expect(inputElement).toBeTruthy();
		expect(formElement).not.toHaveClass("has-error");
		expect(formElement).not.toHaveClass("has-success");

		validation.init();

		inputElement.value = "correct.email@address.com";
		inputElement.dispatchEvent(new Event("blur"));

		expect(formElement).toHaveClass("has-success");
	});

	it("tests given email with default email regex and adds class has-error to form-group when it fails", () => {
		render(<Email />);

		const formElement = document.querySelector(".form-group");
		const inputElement = formElement.querySelector("#validation-email");

		expect(formElement).toBeTruthy();
		expect(inputElement).toBeTruthy();
		expect(formElement).not.toHaveClass("has-error");
		expect(formElement).not.toHaveClass("has-success");

		validation.init();

		inputElement.value = "incorrect email address";
		inputElement.dispatchEvent(new Event("blur"));

		expect(formElement).toHaveClass("has-error");
	});

	it("tests given email with pattern and adds class has-success to form-group when it succeeds", () => {
		render(<Email pattern="[^@]+@[^\.]+\..+" />);

		const formElement = document.querySelector(".form-group");
		const inputElement = formElement.querySelector("#validation-email");

		expect(formElement).toBeTruthy();
		expect(inputElement).toBeTruthy();
		expect(formElement).not.toHaveClass("has-error");
		expect(formElement).not.toHaveClass("has-success");

		validation.init();

		inputElement.value = "correct.email@address.com";
		inputElement.dispatchEvent(new Event("blur"));

		expect(formElement).toHaveClass("has-success");
	});

	it("tests given email with pattern and adds class has-error to form-group when it fails", () => {
		render(<Email pattern="[^@]+@[^\.]+\..+" />);

		const formElement = document.querySelector(".form-group");
		const inputElement = formElement.querySelector("#validation-email");

		expect(formElement).toBeTruthy();
		expect(inputElement).toBeTruthy();
		expect(formElement).not.toHaveClass("has-error");
		expect(formElement).not.toHaveClass("has-success");

		validation.init();

		inputElement.value = "incorrect email address";
		inputElement.dispatchEvent(new Event("blur"));

		expect(formElement).toHaveClass("has-error");
	});

	it("triggers validation when input event is triggered after initial validation state is set as has-success", () => {
		render(<Email />);

		const formElement = document.querySelector(".form-group");
		const inputElement = formElement.querySelector("#validation-email");

		expect(formElement).toBeTruthy();
		expect(inputElement).toBeTruthy();

		validation.init();

		inputElement.value = "correct.email@address.com";
		inputElement.dispatchEvent(new Event("blur"));
		expect(formElement).toHaveClass("has-success");

		inputElement.dispatchEvent(new Event("input"));

		expect(formElement).toHaveClass("has-success");
	});

	it("triggers validation when input event is triggered after initial validation state is set as has-error", () => {
		render(<Email />);

		const formElement = document.querySelector(".form-group");
		const inputElement = formElement.querySelector("#validation-email");

		expect(formElement).toBeTruthy();
		expect(inputElement).toBeTruthy();

		validation.init();

		inputElement.value = "incorrect mail address";
		inputElement.dispatchEvent(new Event("blur"));
		expect(formElement).toHaveClass("has-error");

		inputElement.dispatchEvent(new Event("input"));

		expect(formElement).toHaveClass("has-error");
	});

	it("does not trigger validation when input event is triggered if parent format element does not contain has-success or has-error", () => {
		render(<Email />);

		const formElement = document.querySelector(".form-group");
		const inputElement = formElement.querySelector("#validation-email");

		expect(formElement).toBeTruthy();
		expect(inputElement).toBeTruthy();

		validation.init();

		inputElement.value = "incorrect mail address";
		inputElement.dispatchEvent(new Event("input"));
		expect(formElement).not.toHaveClass("has-success");
		expect(formElement).not.toHaveClass("has-error");
	});

	it("adds an asterisk to required input element labels if label exists", () => {
		render(<Email required />);

		const formElement = document.querySelector(".form-group");
		const inputElement = formElement.querySelector("#validation-email");
		const reqLabel = formElement.querySelector("label");

		expect(formElement).toBeTruthy();
		expect(inputElement).toBeTruthy();
		expect(reqLabel).toBeTruthy();

		validation.init();

		expect(reqLabel.innerHTML).toContain("required-asterisk");
	});

	it("disables the form button if it exists and the form contains a required field with invalid values", () => {
		render(<FormValidation submitBtn />);

		const form = document.querySelector("form");
		const submitButton = form.querySelector(".btn");

		expect(form).toBeTruthy();
		expect(submitButton).toBeTruthy();

		validation.init();

		expect(submitButton).toHaveAttribute("disabled");
	});

	it("removes disabled attribute from button if the required fields of a form contains valid values", () => {
		render(<FormValidation submitBtn />);

		const form = document.querySelector("form");
		const inputElement = form.querySelector("#validation-email");
		const submitButton = form.querySelector(".btn");

		expect(form).toBeTruthy();
		expect(inputElement).toBeTruthy();
		expect(submitButton).toBeTruthy();

		validation.init();

		expect(submitButton).toHaveAttribute("disabled");

		inputElement.value = "valid.email@test.com";
		form.dispatchEvent(new Event("input"));

		expect(submitButton).toBeEnabled();
	});

	it("adds disabled attribute to button if a required field in a form contains invalid values", () => {
		render(<FormValidation submitBtn />);

		const form = document.querySelector("form");
		const inputElement = form.querySelector("#validation-email");
		const submitButton = form.querySelector(".btn");

		expect(form).toBeTruthy();
		expect(inputElement).toBeTruthy();
		expect(submitButton).toBeTruthy();

		validation.init();

		expect(submitButton).toHaveAttribute("disabled");

		inputElement.value = "invalid email";
		form.dispatchEvent(new Event("input"));

		expect(submitButton).toHaveAttribute("disabled");
	});

	it("checks all forms before submitting value and prevents default if one of the required fields are invalid", () => {
		render(<FormValidation submitBtn />);
		Event.prototype.preventDefault = jest.fn();

		const form = document.querySelector("form");
		const inputElement = form.querySelector("#validation-email");
		const submitButton = form.querySelector(".btn");

		expect(form).toBeTruthy();
		expect(inputElement).toBeTruthy();
		expect(submitButton).toBeTruthy();

		validation.init();
		inputElement.value = "valid.emest.com";

		expect(submitButton).toHaveAttribute("disabled");

		form.dispatchEvent(new Event("submit"));

		expect(Event.prototype.preventDefault).toHaveBeenCalled();
	});

	it("checks all forms before submitting value and does not prevent default if all the required fields are valid", () => {
		render(<FormValidation submitBtn />);
		Event.prototype.preventDefault = jest.fn();

		const form = document.querySelector("form");
		const inputElement = form.querySelector("#validation-email");
		const submitButton = form.querySelector(".btn");

		expect(form).toBeTruthy();
		expect(inputElement).toBeTruthy();
		expect(submitButton).toBeTruthy();

		validation.init();
		inputElement.value = "valid.email@test.com";

		expect(submitButton).toHaveAttribute("disabled");

		form.dispatchEvent(new Event("submit"));

		expect(Event.prototype.preventDefault).not.toHaveBeenCalled();
	});

	it("validateForm throws an error if sent element is not a form", () => {
		console.error = jest.fn();

		const elem = document.createElement("div");
		const invalidValue = validation.validateForm(elem);

		expect(invalidValue).toBeFalsy();
		expect(console.error).toHaveBeenCalled();
	});

	it("if the given element is not of type email validateField then tests element validity", () => {
		const elem = document.createElement("input");
		const checkValidity = validation.validateField(elem);

		expect(checkValidity).toBeTruthy();
	});
});
