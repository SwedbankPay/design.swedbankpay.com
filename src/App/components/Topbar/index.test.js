import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import Topbar from "./index";

describe("Component: Topbar -", () => {
	const div = document.createElement("div");

	document.body.appendChild(div);

	const menu = {
		items: [
			{
				name: "Home",
				icon: "at-home small",
			},
			{
				name: "Purchases",
				icon: "at-shop-cart small",
			},
			{
				name: "Settings",
				icon: "at-gear small",
			},
		],
	};

	const menuNoIcons = {
		items: [
			{
				name: "Home",
			},
			{
				name: "Purchase history",
			},
			{
				name: "Settings",
			},
		],
	};

	it("is defined", () => {
		expect(Topbar).toBeDefined();
	});

	it("renders a topbar with only a clickable logo", () => {
		render(<Topbar />);

		expect(screen.getByRole("link")).toHaveClass("topbar-logo");
		expect(screen.getByRole("link")).not.toHaveClass("topbar-nav");

		const componentForSnap = renderer.create(<Topbar />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	describe("props", () => {
		describe("wide", () => {
			it("renders a topbar with the given breakpoint", () => {
				render(<Topbar wide="lg" />);

				expect(screen.getByRole("banner")).toHaveClass("topbar-lg-wide");

				const componentForSnap = renderer.create(<Topbar wide="lg" />);

				expect(componentForSnap.toJSON()).toMatchSnapshot();
			});
		});

		describe("topbarContent", () => {
			it("renders a topbar menu without menu icons", () => {
				render(<Topbar topbarContent={menuNoIcons} />);

				const menuContainer = screen
					.getByRole("navigation")
					.querySelector(".topbar-link-container");
				const menuIcons = menuContainer.querySelectorAll("i");

				expect(menuIcons.length).toEqual(0);

				const componentForSnap = renderer.create(
					<Topbar topbarContent={menuNoIcons} />,
				);

				expect(componentForSnap.toJSON()).toMatchSnapshot();
			});

			it("renders topbar-link-container and populates it with given information without a logout link", () => {
				render(<Topbar topbarContent={menu} />);

				const renderedTopbar = screen.getByRole("banner");

				expect(renderedTopbar).toHaveClass("topbar");

				const renderedNav = screen.getByRole("navigation");

				expect(renderedNav).toHaveClass("topbar-nav");

				expect(
					menu.items.every((item) =>
						[...renderedNav.querySelectorAll("a span")].some(
							(elmt) => elmt.textContent === item.name,
						),
					),
				).toBeTruthy();

				expect(
					[...renderedNav.querySelectorAll("a span")].some(
						(elmt) => elmt.textContent === "Log out",
					),
				).not.toBeTruthy();

				const componentForSnap = renderer.create(
					<Topbar topbarContent={menu} />,
				);

				expect(componentForSnap.toJSON()).toMatchSnapshot();
			});

			it("renders topbar-link-container and a logout link", () => {
				render(<Topbar topbarContent={menu} logout />);

				const renderedTopbar = screen.getByRole("banner");

				expect(renderedTopbar).toHaveClass("topbar");

				const renderedNav = screen.getByRole("navigation");

				expect(renderedNav).toHaveClass("topbar-nav");

				expect(renderedNav.querySelector(".topbar-link-right i")).toHaveClass(
					"at-exit small",
				);

				const componentForSnap = renderer.create(
					<Topbar topbarContent={menu} logout />,
				);

				expect(componentForSnap.toJSON()).toMatchSnapshot();
			});

			it("renders a topbar menuopen and close buttons when content is provided", () => {
				render(<Topbar topbarContent={menu} />);

				const renderedTopbar = screen.getByRole("banner");

				expect(renderedTopbar).toBeInTheDocument();

				expect(
					screen
						.getAllByRole("button")
						.filter((elmt) => elmt.classList.contains("topbar-btn")),
				).toHaveLength(1);

				expect(
					screen
						.getAllByRole("button")
						.filter((elmt) => elmt.classList.contains("topbar-close")),
				).toHaveLength(1);

				const componentForSnap = renderer.create(
					<Topbar topbarContent={menu} />,
				);

				expect(componentForSnap.toJSON()).toMatchSnapshot();
			});

			// FIXME: what are we testing, the fact that when I click a link the link is clicked but we do not want the effect behind? what is th epoint?
			it.skip("menu links prevents default when clicked", () => {
				const eventHandler = { preventDefault: jest.fn() };

				render(<Topbar topbarContent={menu} />);

				const menuLinks = screen
					.getByRole("navigation")
					.querySelectorAll("a[href]");

				menuLinks.forEach((anchor) => {
					userEvent.click(anchor);
				});

				expect(eventHandler.preventDefault).toHaveBeenCalled();

				const componentForSnap = renderer.create(
					<Topbar topbarContent={menu} />,
				);

				expect(componentForSnap.toJSON()).toMatchSnapshot();
			});

			it("renders a sidebar in topbar-link-container when sidebar prop is true", () => {
				render(<Topbar topbarContent={menu} sidebar />);

				const renderedSidebar = screen
					.getAllByRole("banner")
					.find((elmt) => elmt.classList.contains("topbar"))
					.querySelector("nav.topbar-nav .sidebar");

				expect(renderedSidebar).toBeTruthy();

				const componentForSnap = renderer.create(
					<Topbar topbarContent={menu} sidebar />,
				);

				expect(componentForSnap.toJSON()).toMatchSnapshot();
			});
		});

		describe("logout", () => {
			it("renders logout link and adds topbar-link-right to the logout", () => {
				render(<Topbar logout />);

				expect(
					screen
						.getAllByRole("link")
						.filter((elmt) =>
							[...elmt.children].some(
								(childElmt) => childElmt.textContent === "Log out",
							),
						),
				).toBeTruthy();
				expect(
					screen
						.queryAllByRole("navigation")
						?.some((elmt) => elmt.classList.contains("topbar-nav")),
				).toBeFalsy();
				expect(
					screen
						.getAllByRole("link")
						.find((elmt) => elmt.classList.contains("topbar-link-right"))
						.querySelector("span"),
				).toHaveTextContent("Log out");

				const componentForSnap = renderer.create(<Topbar logout />);

				expect(componentForSnap.toJSON()).toMatchSnapshot();
			});

			// FIXME: what are we testing, the fact that when I click a link the link is clicked but we do not want the effect behind? what is th epoint?
			it.skip("prevents default when clicked", () => {
				const eventHandler = { preventDefault: jest.fn() };

				render(<Topbar logout />);

				const logout = screen
					.getAllByRole("link")
					.find((elmt) => elmt.classList.contains("topbar-link-right"));

				userEvent.click(logout);

				expect(eventHandler.preventDefault).toHaveBeenCalled();

				const componentForSnap = renderer.create(<Topbar logout />);

				expect(componentForSnap.toJSON()).toMatchSnapshot();
			});
		});

		describe("png", () => {
			it("renders a topbar with anchor with class .topbar-logo-png", () => {
				render(<Topbar png />);

				expect(screen.getByLabelText("To homepage").tagName).toBe("A");
				expect(screen.getByLabelText("To homepage")).toHaveClass(
					"topbar-logo topbar-logo-png",
				);
			});
		});

		describe("sticky", () => {
			it("renders a topbar with class .topbar-sticky", () => {
				render(<Topbar sticky />);

				expect(screen.getByRole("banner")).toHaveClass("topbar-sticky");
			});
		});
	});

	// FIXME: what are we testing, the fact that when I click a link the link is clicked but we do not want the effect behind? what is th epoint?
	it.skip("logo prevents default when clicked", () => {
		const eventHandler = { preventDefault: jest.fn() };

		render(<Topbar />);

		const logo = wrapper.find(".topbar-logo");

		logo.simulate("click", eventHandler);

		expect(eventHandler.preventDefault).toHaveBeenCalled();

		const componentForSnap = renderer.create(<Topbar />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});
});
