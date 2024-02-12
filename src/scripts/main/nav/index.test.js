import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import nav from "./index";

describe("scripts: nav", () => {
	const div = document.createElement("div");
	const submenuItems = ["Email", "Information", "Other things"];

	document.body.appendChild(div);

	const Nav = ({ subItems, open, subopen, id }) => (
		<nav id={id} className={`nav ${open ? "nav-open" : null}`}>
			<ul>
				<li>
					<a href="#">
						<i className="at-home small" aria-hidden="true"></i>
						<span>Home</span>
					</a>
				</li>
				<li>
					<a href="#">
						<i className="at-building-column small" aria-hidden="true"></i>
						<span>Account</span>
					</a>
				</li>
				<li>
					<a href="#">
						<i className="at-fingerprint small" aria-hidden="true"></i>
						<span>Authentication</span>
					</a>
				</li>
				<li>
					<a href="#">
						<i className="at-bell-reminder small" aria-hidden="true"></i>
						<span>Notifications</span>
					</a>
				</li>
				<li>
					<a href="#">
						<i className="at-shop-cart small" aria-hidden="true"></i>
						<span>Transactions</span>
					</a>
				</li>
				<li>
					<a href="#">
						<i className="at-language-translation small"></i>
						<span>Language</span>
					</a>
				</li>
				<li>
					{subItems ? (
						<div className={subopen ? "submenu submenu-open" : "submenu"}>
							{"\n"}
							<a href="#">
								<i className="at-language-translation small"></i>
								{"\n"}
								<span>{name}</span>
							</a>
							<ul>
								{subItems.map((itemsname, j) => (
									<li key={`nav-subItems-${itemsname}-${j}`}>
										<a href="#" onClick={(e) => e.preventDefault()}>
											{itemsname}
										</a>
									</li>
								))}
							</ul>
						</div>
					) : (
						<a href="#">
							<i className="at-shop-cart small" aria-hidden="true"></i>
							<span>Shop</span>
						</a>
					)}
				</li>
			</ul>
		</nav>
	);

	const Navsm = ({ subItems }) => (
		<nav className="nav">
			<ul>
				<li>
					<i className="at-home small" aria-hidden="true"></i>
					<span>Home</span>
				</li>
				<li>
					{subItems ? (
						<div className="submenu">
							{"\n"}
							<a href="#">
								<i className="at-language-translation small"></i>
								{"\n"}
								<span>{name}</span>
							</a>
							<ul>
								{subItems.map((itemsname, j) => (
									<li key={`nav-subItems-${itemsname}-${j}`}>
										<a href="#" onClick={(e) => e.preventDefault()}>
											{itemsname}
										</a>
									</li>
								))}
							</ul>
						</div>
					) : (
						<a href="#">
							<i className="at-building-column small" aria-hidden="true"></i>
							<span>Account</span>
						</a>
					)}
				</li>
			</ul>
		</nav>
	);

	it("is defined", () => {
		expect(nav).toBeTruthy();
	});

	describe("nav.init", () => {
		it("is defined", () => {
			expect(nav.init).toBeTruthy();
		});

		it("returns a single object when one ID is passed", () => {
			render(<Nav id="demo-nav" />, div);

			const renderedNav = screen.getByRole("navigation");

			expect(renderedNav).toBeInTheDocument();

			const returnVal = nav.init("demo-nav");

			expect(Array.isArray(returnVal)).toBeFalsy();
			expect(returnVal.id).toEqual("demo-nav");
		});

		it("returns an array of objects when more than one nav is initialized", () => {
			render(
				<>
					<Nav />
					<Nav />
				</>,
				div,
			);

			const renderedNavs = screen.getAllByRole("navigation");

			expect(renderedNavs.length).toEqual(2);

			const returnVal = nav.init();

			expect(Array.isArray(returnVal)).toBeTruthy();
			expect(returnVal.length).toEqual(2);
		});

		it("init returns null if no nav is found prints a warning message", () => {
			console.warn = jest.fn();

			expect(nav.init()).toBeNull();
			expect(console.warn).toHaveBeenCalled();
		});

		it("returns null if an invalid ID is passed and prints a warning message", () => {
			console.warn = jest.fn();

			expect(nav.init("test")).toBeNull();
			expect(console.warn).toHaveBeenCalled();
		});
	});

	it("does not render a menu icon when there are less than four list elements", () => {
		render(<Navsm />, div);
		nav.init();

		const renderedNav = screen.getByRole("navigation");
		const sidebarMenubtn = renderedNav.querySelector(".nav-openbtn");

		expect(renderedNav).toBeInTheDocument();
		expect(sidebarMenubtn).toBeNull();
	});

	it("renders a menu icon when there are less than four list elements but submenus exist", () => {
		render(<Navsm subItems={submenuItems} />, div);
		nav.init();

		const renderedNav = screen.getByRole("navigation");
		const sidebarMenubtn = renderedNav.querySelector(".nav-openbtn");

		expect(renderedNav).toBeInTheDocument();
		expect(sidebarMenubtn).toBeTruthy();
	});

	it("renders a menu icon when there are more than four list elements", () => {
		render(<Nav />, div);
		nav.init();

		const renderedNav = screen.getByRole("navigation");
		const sidebarMenubtn = renderedNav.querySelector(".nav-openbtn");

		expect(renderedNav).toBeInTheDocument();
		expect(sidebarMenubtn).toBeTruthy();
	});

	it("opens when clicking the menu icon", () => {
		render(<Nav />, div);
		nav.init();

		const renderedNav = screen.getByRole("navigation");
		const sidebarMenubtn = renderedNav.querySelector(".nav-openbtn");

		expect(renderedNav).toBeInTheDocument();
		expect(sidebarMenubtn).toBeTruthy();
		expect(renderedNav).not.toHaveClass("nav-open");

		sidebarMenubtn.click();

		expect(renderedNav).toHaveClass("nav-open");
	});

	it("closes when clicking the menu icon while open", () => {
		render(<Nav open />, div);
		nav.init();

		const renderedNav = screen.getByRole("navigation");
		const sidebarMenubtn = renderedNav.querySelector(".nav-openbtn");

		expect(renderedNav).toBeInTheDocument();
		expect(sidebarMenubtn).toBeTruthy();
		expect(renderedNav).toHaveClass("nav-open");

		sidebarMenubtn.click();
		expect(renderedNav).not.toHaveClass("nav-open");
	});

	it("closes when clicking outside nav", () => {
		render(<Nav open />, div);
		nav.init();

		const renderedNav = screen.getByRole("navigation");

		expect(renderedNav).toBeInTheDocument();
		expect(renderedNav).toHaveClass("nav-open");

		document.querySelector("html").click();

		expect(renderedNav).not.toHaveClass("nav-open");
	});

	it("closes nav on resize", () => {
		render(<Nav id="nav-test" subItems={submenuItems} />, div);
		nav.init();
		nav.open("nav-test");

		const renderedNav = screen.getByRole("navigation");

		expect(renderedNav).toHaveClass("nav-open");

		global.dispatchEvent(new Event("resize"));

		expect(renderedNav).not.toHaveClass("nav-open");
	});

	it("creates a copy of the submenu anchor", () => {
		render(<Nav subItems={submenuItems} />, div);
		nav.init();

		expect(document.querySelector(".submenu-toggle")).toBeTruthy();
	});

	it("opens a submenu when a submenu icon is clicked", () => {
		render(<Nav subItems={submenuItems} />, div);
		nav.init();

		const renderedNav = screen.getByRole("navigation");
		const submenu = renderedNav.querySelector(".submenu");
		const iconClickable = submenu.querySelector(".submenu-toggle");

		expect(renderedNav).toBeInTheDocument();
		expect(submenu).toBeTruthy();
		expect(iconClickable).toBeTruthy();
		expect(submenu.classList).not.toContain("submenu-open");

		iconClickable.click();

		expect(submenu.classList).toContain("submenu-open");
	});

	it("closes a submenu when a submenu icon is clicked", () => {
		render(<Nav subItems={submenuItems} subopen />, div);
		nav.init();

		const renderedNav = screen.getByRole("navigation");
		const submenu = renderedNav.querySelector(".submenu");
		const iconClickable = submenu.querySelector(".submenu-toggle");

		expect(renderedNav).toBeInTheDocument();
		expect(submenu).toBeTruthy();
		expect(iconClickable).toBeTruthy();
		expect(submenu.classList).toContain("submenu-open");

		iconClickable.click();

		expect(submenu.classList).not.toContain("submenu-open");
	});

	it("closes a submenu when clicking outside the submenu", () => {
		render(<Nav subItems={submenuItems} subopen />, div);
		nav.init();

		const renderedNav = screen.getByRole("navigation");
		const submenu = renderedNav.querySelector(".submenu");

		expect(renderedNav).toBeInTheDocument();
		expect(submenu).toBeTruthy();
		expect(submenu.classList).toContain("submenu-open");

		document.querySelector("html").click();

		expect(submenu.classList).not.toContain("submenu-open");
	});

	it("closes submenu on resize", () => {
		render(<Nav subItems={submenuItems} />, div);
		nav.init();

		const renderedNav = screen.getByRole("navigation");
		const submenu = renderedNav.querySelector(".submenu");
		const iconClickable = submenu.querySelector(".submenu-toggle");

		expect(renderedNav).toBeInTheDocument();
		expect(submenu).toBeTruthy();
		expect(iconClickable).toBeTruthy();
		expect(submenu.classList).not.toContain("submenu-open");

		iconClickable.click();

		expect(submenu.classList).toContain("submenu-open");

		global.dispatchEvent(new Event("resize"));

		expect(submenu.classList).not.toContain("submenu-open");
	});

	describe("nav.open", () => {
		it("opens nav when calling nav.open", () => {
			render(<Nav id="demo-nav" />, div);
			nav.init();

			const renderedNav = screen.getByRole("navigation");

			expect(renderedNav).not.toHaveClass("nav-open");

			nav.open("demo-nav");

			expect(renderedNav).toHaveClass("nav-open");
		});

		it("does not open nav when calling nav.open with wrong id and prints error to console", () => {
			console.error = jest.fn();
			render(<Nav id="demo-nav" />, div);
			nav.init();

			const renderedNav = screen.getByRole("navigation");

			expect(renderedNav).not.toHaveClass("nav-open");

			nav.open("qwerty");

			expect(console.error).toHaveBeenCalledWith(
				'nav.open: No nav with id "qwerty" found.',
			);
			expect(renderedNav).not.toHaveClass("nav-open");
		});
	});

	describe("nav.close", () => {
		it("closes nav when calling nav.close", () => {
			render(<Nav id="demo-nav" open />, div);

			const renderedNav = screen.getByRole("navigation");

			expect(renderedNav).toHaveClass("nav-open");

			nav.init();
			nav.close("demo-nav");

			expect(renderedNav).not.toHaveClass("nav-open");
		});

		it("does not close nav when calling nav.close with wrong id and prints error to console", () => {
			console.error = jest.fn();
			render(<Nav id="demo-nav" open />, div);
			nav.init();

			const renderedNav = screen.getByRole("navigation");

			expect(renderedNav).toHaveClass("nav-open");

			nav.close("qwerty");

			expect(console.error).toHaveBeenCalledWith(
				'nav.close: No nav with id "qwerty" found.',
			);
			expect(renderedNav).toHaveClass("nav-open");
		});
	});
});
