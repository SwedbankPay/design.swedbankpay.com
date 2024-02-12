import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import dropdown from "./index";

describe("Scripts: Dropdown", () => {
	const Dropdown = ({ id, active }) => (
		<div
			id={id}
			className={`dropdown anchor-top-left${active ? " active" : ""}`}
		>
			<div className="toggle-menu-container">
				<button
					className="dropdown-toggle btn btn-secondary"
					type="button"
					aria-label="dropdown button"
				>
					Actions
					<i className="swepay-icon-chevron-down ml-2" aria-hidden="true"></i>
				</button>
				<div className="dropdown-menu   " aria-labelledby="dropdownToggle">
					<a id="firstElem" href="#">
						<i className="at-bookmark-star" aria-hidden="true"></i>
						Edit
					</a>
					<a href="#">
						<i className="at-trash" aria-hidden="true"></i>
						Delete
					</a>
				</div>
			</div>
		</div>
	);

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
		render(<Dropdown id="foo" />);

		const container = document.querySelector(".dropdown");

		dropdown.init();

		expect(container.classList).not.toContain("active");

		const btn = document.querySelector(".btn");

		btn.click();

		expect(container.classList).toContain("active");
	});

	it("button click removes dropdown-div class of active", () => {
		render(<Dropdown id="foo" active />);

		const container = document.querySelector(".dropdown");

		dropdown.init();

		expect(container.classList).toContain("active");

		const btn = document.querySelector(".btn");

		btn.click();

		expect(container.classList).not.toContain("active");
	});
});
