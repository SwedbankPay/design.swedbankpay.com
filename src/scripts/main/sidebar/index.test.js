import React from "react";
import { render } from "@testing-library/react";

import sidebar from "./index";
// import SELECTORS from "./selectors";

describe("scripts: sidebar", () => {
	const Sidebar = ({ id }) => (
		<div id={id} className="sidebar">
			<nav className="sidebar-main-nav">
				<div className="sidebar-logo">
					<img></img>
				</div>
				<ul className="main-nav-ul">
					<li className="main-nav-li">
						<a href="#">Title - Level 1</a>
					</li>
					<li className="main-nav-li">
						<a href="#">Title - Level 1</a>
					</li>
					<li className="main-nav-li content-id">
						<a href="#">Group - Level 2</a>
						<nav className="sidebar-secondary-nav">
							<header className="secondary-nav-header">Title - Level 2</header>
							<ul className="secondary-nav-ul extended-sidebar">
								<li className="secondary-nav-li leaf">
									<a href="#">Leaf 1</a>
								</li>
								<li className="secondary-nav-li leaf">
									<a href="#">Leaf 2</a>
								</li>
								<li className="secondary-nav-li group">
									<a href="#">Group - Level 3</a>
									<ul className="tertiary-nav-ul">
										<a href="#" className="previous-nav">
											<i className="material-icons" aria-hidden="true">
												arrow_back_ios
											</i>
											<span>Back to previous nav</span>
										</a>
										<header className="tertiary-nav-header">
											Title - Level 3
										</header>
										<li className="tertiary-nav-li leaf">
											<a href="#">Leaf 1</a>
										</li>
										<li className="tertiary-nav-li leaf">
											<a href="#">Leaf 2</a>
										</li>
										<li className="tertiary-nav-li group">
											<a href="#">Group - Level 4</a>
											<ul className="quaternary-nav-ul">
												<li className="nav-leaf">
													<a href="#">Nav-leaf 1</a>
												</li>
												<li className="nav-leaf">
													<a href="#">Nav-leaf 2</a>
												</li>
												<li className="nav-leaf">
													<a href="#">Nav-leaf 3</a>
												</li>
											</ul>
										</li>
									</ul>
								</li>
							</ul>
						</nav>
					</li>
				</ul>
			</nav>
		</div>
	);

	it("is defined", () => {
		expect(sidebar).toBeDefined();
	});

	describe("sidebar.init", () => {
		it("has an init method", () => {
			expect(sidebar.init).toBeDefined();
			expect(sidebar.init).toBeInstanceOf(Function);
		});

		it("returns one object when an ID is passed", () => {
			render(<Sidebar id="sidebar-1" />);

			const renderedSidebar = document.getElementById("sidebar-1");

			expect(renderedSidebar).toBeTruthy();

			const returnVal = sidebar.init("sidebar-1");

			expect(typeof returnVal).toEqual("object");
		});

		it("warns the user if no sidebar with the given ID exists", () => {
			const id = "sidebar-1";

			console.warn = jest.fn();

			render(<Sidebar id="sidebar-2" />);

			expect(sidebar.init(id)).toBeNull();
			expect(console.warn).toHaveBeenCalledWith(
				`sidebar.init: No sidebar with id ${id} found`
			);
		});

		it("returns array of sidebars when no id is provided", () => {
			render(
				<>
					<Sidebar id="sidebar-2" />
					<Sidebar id="sidebar-3" />
				</>
			);

			expect(sidebar.init().length).toEqual(2);
		});

		it("returns null and warns user if no sidebar found", () => {
			console.warn = jest.fn();

			expect(sidebar.init()).toBeNull();
			expect(console.warn).toHaveBeenCalledWith(
				"sidebar.init: No sidebars found"
			);
		});
	});

	describe("sidebar.removeScrollListener", () => {
		it("is defined", () => {
			expect(sidebar.removeScrollListener).toBeDefined();
			expect(sidebar.removeScrollListener).toBeInstanceOf(Function);
		});
	});

	describe("sidebar.initScrollListener", () => {
		it("is defined", () => {
			expect(sidebar.initScrollListener).toBeDefined();
			expect(sidebar.initScrollListener).toBeInstanceOf(Function);
		});

		// it("invokes removeScrollListener when initiated", () => {
		//     const id = "sidebar-1";
		//     const contentId = "contentId";

		//     sidebar.removeScrollListener = jest.fn();

		//     sidebar.initScrollListener(id, contentId);

		//     expect(sidebar.removeScrollListener).toHaveBeenCalledWith(id, contentId);
		// });

		it("warns user when no content with contentId is found", () => {
			const id = "sidebar-1";
			const contentId = "contentId";

			console.warn = jest.fn();

			sidebar.initScrollListener(id, contentId);

			expect(console.warn).toHaveBeenCalledWith(
				`sidebar.initScrollListener: Cannot find main content with id ${contentId}`
			);
		});
	});
});
