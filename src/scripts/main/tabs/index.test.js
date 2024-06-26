import React from "react";
import { render } from "@testing-library/react";

import tabs from "./index";
import TabsComponent from "@components/Tabs";

describe("scripts: tabs", () => {
	const items = ["item1", "item2", "item3"];

	const NoActiveTab = ({ id, tabsOpen }) => (
		<div className={`tabs ${tabsOpen ? "tabs-open" : null}`} id={id}>
			<i className="swepay-icon-chevron-right" aria-hidden="true"></i>
			<ul>
				{items.map((name, i) => (
					<li key={`tab-item-${name}-${i}`}>
						{"\n"}
						<a href="#">{name}</a>
						{"\n"}
					</li>
				))}
			</ul>
		</div>
	);

	it("is defined", () => {
		expect(tabs).toBeTruthy();
	});

	describe("test.init", () => {
		it("has an init method", () => {
			expect(tabs.init).toBeTruthy();
			expect(tabs.init).toBeInstanceOf(Function);
		});

		it("returns one object when an ID is passed", () => {
			render(<NoActiveTab id="demo-tabs-1" />);

			const renderedTab = document.querySelector(".tabs");

			expect(renderedTab).toBeTruthy();

			const returnVal = tabs.init("demo-tabs-1");

			expect(Array.isArray(returnVal)).toBeFalsy();
			expect(typeof returnVal).toEqual("object");
		});

		it("returns an array of objects when more than one tabs is initialized", () => {
			render(
				<>
					<NoActiveTab />
					<NoActiveTab />
				</>,
			);

			const renderedTabs = document.querySelectorAll(".tabs");

			expect(renderedTabs).toBeTruthy();
			expect(renderedTabs.length).toEqual(2);

			const returnVal = tabs.init();

			expect(Array.isArray(returnVal)).toBeTruthy();
			expect(returnVal.length).toEqual(2);
		});

		it("returns null if no tabs is found", () => {
			console.warn = jest.fn();

			expect(tabs.init()).toBeNull();
			expect(console.warn).toHaveBeenCalled();
		});
	});

	it("sets an active item if none has been provided", () => {
		render(<NoActiveTab items={items} />);

		const renderedTab = document.querySelector(".tabs");
		let activeTab = renderedTab.querySelector(".active");

		expect(renderedTab).toBeTruthy();
		expect(activeTab).toBeFalsy();

		tabs.init();

		activeTab = renderedTab.querySelector(".active");

		expect(activeTab).toBeTruthy();
	});

	it("does not reassign active item if one exists", () => {
		render(<TabsComponent items={items} />);
		tabs.init();

		const renderedTab = document.querySelector(".tabs");
		const activeTab = renderedTab.querySelector(".active");
		const firstTab = renderedTab.querySelector("li");

		expect(activeTab).toBeTruthy();
		expect(firstTab).toBeTruthy();
		expect(activeTab.classList).toContain("active");
		expect(firstTab.classList).toContain("active");
		expect(activeTab).toEqual(firstTab);
	});

	it("prevents default if you click an active tab", () => {
		render(<NoActiveTab items={items} />);
		tabs.init();
		Event.prototype.preventDefault = jest.fn();

		const renderedTab = document.querySelector(".tabs");
		const activeTab = renderedTab.querySelector(".active");

		expect(renderedTab).toBeTruthy();
		expect(activeTab).toBeTruthy();

		activeTab.click();

		expect(activeTab.classList).toContain("active");
		expect(document.querySelector(".active")).toEqual(activeTab);
		expect(Event.prototype.preventDefault).toHaveBeenCalled();
	});

	// Tests persist the _tabs array through test cases. No way to "reset" an imported module, have to use require. [AW]
});
