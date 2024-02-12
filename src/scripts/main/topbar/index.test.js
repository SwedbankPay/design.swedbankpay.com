import React from "react";
import { render } from "@testing-library/react";

import NavMenu from "./NavMenu";
import topbar from "./index";
import { openComponent, closeComponent } from "../utils";

jest.mock("./NavMenu");
jest.mock("../utils");

describe("scripts: topbar", () => {
	beforeEach(() => {
		NavMenu.mockClear();
		openComponent.mockClear();
		closeComponent.mockClear();
	});

	const NoTopbar = () => (
		<header>
			<p>This is a header!</p>
		</header>
	);

	const Topbar = ({ navOpen, id }) => (
		<header className="topbar" id={id}>
			<button
				type="button"
				className="topbar-btn"
				data-toggle-nav="#topbar-nav"
			>
				<i className="swepay-icon-menu topbar-btn-icon" aria-hidden="true"></i>
				<span className="topbar-btn-text">Menu</span>
			</button>
			<nav className={`topbar-nav${navOpen ? " topbar-nav-open" : ""}`}>
				<i
					className="swepay-icon-close close-topbar-nav"
					aria-hidden="true"
				></i>
				<div className="topbar-link-container">
					<a href="#">Link 1</a>
					<a href="#">Link 2</a>
					<a href="#">Link 3</a>
				</div>
			</nav>
			<a href="#" className="topbar-logo"></a>
		</header>
	);

	it("is defined", () => {
		expect(topbar).toBeDefined();
	});

	describe("topbar.init", () => {
		it("has an init method", () => {
			expect(topbar.init).toBeDefined();
			expect(topbar.init).toBeInstanceOf(Function);
		});

		it("returns one object when an ID is passed", () => {
			render(<Topbar id="demo-topbar-1" />);

			const renderedTopbar = document.querySelector(".topbar");

			expect(renderedTopbar).toBeTruthy();

			const returnVal = topbar.init("demo-topbar-1");

			expect(Array.isArray(returnVal)).toBeFalsy();
			expect(typeof returnVal).toEqual("object");
		});

		it("warns the user if no topbar with the given ID exists", () => {
			console.warn = jest.fn();

			render(<Topbar id="demo-topbar-1" />);

			expect(topbar.init("demo-topbar-2")).toBeNull();
			expect(console.warn).toHaveBeenCalledTimes(1);
		});

		it("returns an array of objects when more than one topbar is initialized", () => {
			render(
				<>
					<Topbar />
					<Topbar />
				</>,
			);

			const renderedTopbars = document.querySelectorAll(".topbar");

			expect(renderedTopbars).toBeTruthy();
			expect(renderedTopbars.length).toEqual(2);

			const returnVal = topbar.init();

			expect(Array.isArray(returnVal)).toBeTruthy();
			expect(returnVal.length).toEqual(2);
		});

		it("returns null if no topbar is found", () => {
			console.warn = jest.fn();

			expect(topbar.init()).toBeNull();
			expect(console.warn).toHaveBeenCalled();
		});

		it("does not generate NavMenu instances if no .topbar exists", () => {
			render(<NoTopbar />);
			topbar.init();

			expect(NavMenu).not.toHaveBeenCalled();
			expect(NavMenu.mock.instances[0]).toBeFalsy();
		});

		it("generates NavMenu instances if .topbar-nav exists", () => {
			render(<Topbar />);

			topbar.init();

			expect(NavMenu).toHaveBeenCalled();
		});
	});

	describe("event listeners", () => {
		it("Escape closes an open navMenu", () => {
			render(<Topbar navOpen />);

			topbar.init();
			NavMenu.mock.instances[0].isOpen = true;
			NavMenu.mock.instances[0].close.mockReturnValueOnce("true");

			document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));

			expect(NavMenu.mock.instances[0].close).toHaveBeenCalled();
		});

		it("does nothing if a key other than Escape is pressed", () => {
			render(<Topbar navOpen />);

			topbar.init();
			NavMenu.mock.instances[0].isOpen = true;

			document.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));

			expect(NavMenu.mock.instances[0].close).not.toHaveBeenCalled();
		});
	});

	describe("topbar.open", () => {
		it("calls openComponent", () => {
			render(<Topbar id="test-topbar" />);

			const topbarInstance = topbar.init("test-topbar");

			// Have to set the ID manually due to NavMenu being mocked and thus not saving the ID [AW].
			topbarInstance.id = "test-topbar";

			topbar.open("test-topbar");

			expect(openComponent).toHaveBeenCalled();
		});
	});

	describe("topbar.close", () => {
		it("calls closeComponent", () => {
			render(<Topbar id="test-topbar-2" />);

			const topbarInstance = topbar.init("test-topbar-2");

			topbarInstance.id = "test-topbar-2";

			topbar.close("test-topbar-2");

			expect(closeComponent).toHaveBeenCalled();
		});
	});
});
