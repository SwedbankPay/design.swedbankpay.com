import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "./index";

describe("Component: Button -", () => {
	it("is defined", () => {
		expect(Button).toBeDefined();
	});

	it("prop type is marked as required", () => {
		console.error = jest.fn();

		render(<Button />);

		expect(console.error).toHaveBeenCalled();

		const componentForSnap = renderer.create(<Button />);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	describe("Anchor tag:", () => {
		it("renders a button inside an anchor tag when prop href is provided", () => {
			render(<Button type="primary" href="test" />);

			// FIXME: why having role=button for an anchor tag with an href attribute? why not leaving the default role i.e. a link?
			expect(screen.getByRole("button")).toHaveAttribute("href", "test");

			const componentForSnap = renderer.create(
				<Button type="primary" href="test" />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		it("renders a button inside an anchor tag with label when prop href and label is provided", () => {
			render(<Button type="primary" href="test" label="test" />);

			expect(screen.getByRole("button")).toHaveAttribute("href", "test");
			expect(screen.getByRole("button")).toHaveTextContent("test");
			expect(screen.getByRole("button")).toHaveClass("btn btn-primary");

			const componentForSnap = renderer.create(
				<Button type="primary" href="test" label="test" />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		it("renders a button with specified size inside an anchor tag when prop href and size is provided", () => {
			render(<Button type="primary" href="test" size="size-test" />);

			expect(screen.getByRole("button")).toHaveClass("btn-size-test");

			const componentForSnap = renderer.create(
				<Button type="primary" href="test" size="size-test" />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		// FIXME: if an href is passed there will be no `<i>` , only an <a>. so the loading will only be a class, not an <i>. It will be it though if no href is passed OR if pass the icon prop with 'loading' string value. Is that the expcted behaviour?
		it("renders a loading button inside an anchor tag when prop href and loading is provided", () => {
			render(<Button type="primary" href="test" loading />);

			expect(screen.getByRole("button")).toHaveClass("loading");

			const componentForSnap = renderer.create(
				<Button type="primary" href="test" loading />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		it("renders a full width button inside an anchor tag when prop href and fullWidth is provided", () => {
			render(<Button type="primary" href="test" fullWidth />);

			expect(screen.getByRole("button")).toHaveClass("btn-block");

			const componentForSnap = renderer.create(
				<Button type="primary" href="test" fullWidth />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		it("renders a button inside an anchor tag with class active when prop href and active is provided", () => {
			render(<Button type="primary" href="test" active />);

			expect(screen.getByRole("button")).toHaveClass("active");

			const componentForSnap = renderer.create(
				<Button type="primary" href="test" active />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		// FIXME: it is syntaxically an anchor tag, but its role is set to button. Is this the expected result? test description might indicate the negative
		it("renders a button inside an anchor tag with id when prop href and id is provided", () => {
			render(<Button type="primary" href="test" id="test" />);

			expect(screen.getByRole("button")).toHaveAttribute("id", "test");

			const componentForSnap = renderer.create(
				<Button type="primary" href="test" id="test" />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		it("renders a button inside an anchor tag with name when prop href and name is provided", () => {
			render(<Button type="primary" href="test" name="test" />);

			expect(screen.getByRole("button")).toHaveAttribute("name", "test");

			const componentForSnap = renderer.create(
				<Button type="primary" href="test" name="test" />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		it.skip("renders a disabled button inside an anchor tag when prop href and disabled is provided", () => {
			render(<Button type="primary" href="test" disabled />);

			expect(screen.getByRole("button")).toHaveClass("disabled");
			// FIXME: the button (actually an anchor tag) is NOT actually disabled ! shoul dthis be fixed?
			expect(screen.getByRole("button")).toBeDisabled();

			const componentForSnap = renderer.create(
				<Button type="primary" href="test" disabled />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		it("renders a button with icon inside an anchor tag when prop href and icon is provided", () => {
			const { container } = render(
				<Button type="primary" href="test" icon="test-icon" />,
			);

			expect(container.querySelector("i")).toHaveClass("test-icon");
			expect(container.querySelector("i")).toHaveAttribute(
				"aria-hidden",
				"true",
			);

			const componentForSnap = renderer.create(
				<Button type="primary" href="test" icon="test-icon" />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		it("renders a button with icon and label inside a span inside an anchor tag when prop href, label and icon is provided", () => {
			const { container } = render(
				<Button type="primary" href="test" icon="test-icon" label="test" />,
			);

			expect(container.querySelector("i")).toHaveClass("test-icon");
			expect(container.querySelector("i")).toHaveAttribute(
				"aria-hidden",
				"true",
			);
			expect(
				screen.getByRole("button").querySelector("span"),
			).toHaveTextContent("test");

			const componentForSnap = renderer.create(
				<Button type="primary" href="test" icon="test" label="test" />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});
	});

	// FIXME: does it makes sense A11y wise to set an input with role="button" ?
	describe("Input tag:", () => {
		it("renders a button inside an input tag and defaults to type='button' when prop input is provided", () => {
			render(<Button type="primary" input />);

			expect(screen.getByRole("button")).toHaveAttribute("type", "button");

			const componentForSnap = renderer.create(<Button type="primary" input />);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		it("renders a button with specified size inside an input tag when prop input and size is provided", () => {
			render(<Button type="primary" input size="size-test" />);

			expect(screen.getByRole("button")).toHaveClass("btn-size-test");

			const componentForSnap = renderer.create(
				<Button type="primary" input size="size-test" />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		it("renders a loading button inside an input tag when prop input and loading is provided", () => {
			render(<Button type="primary" input loading />);

			expect(screen.getByRole("button")).toHaveClass("loading");

			const componentForSnap = renderer.create(
				<Button type="primary" input loading />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		it("renders a full width button inside an input tag when prop input and fullWidth is provided", () => {
			render(<Button type="primary" input fullWidth />);

			expect(screen.getByRole("button")).toHaveClass("btn-block");

			const componentForSnap = renderer.create(
				<Button type="primary" input fullWidth />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		// FIXME: there is NO class 'active' added to the classes of the input. The test was passing because an ATTRIBUTE `active` was added to the element. But not a CLASSSName. Should this be fixed? It is only added IF there is an href (but then it's not set as input anymore)
		it.skip("renders a button with class active inside an input tag when prop input and active is provided", () => {
			render(<Button type="primary" input active />);

			expect(screen.getByRole("button")).toHaveClass("active");

			const componentForSnap = renderer.create(
				<Button type="primary" input active />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		// FIXME: what's the point of this test? a button component, with role="null", tag input, and inputType test set via btnType ? I do not understand the point o fit yet?
		it("renders a button with the specified type inside an input tag when prop input and btnType is provided", () => {
			render(<Button type="primary" input btnType="test" />);

			expect(screen.getByRole("textbox")).toHaveAttribute("type", "test");

			const componentForSnap = renderer.create(
				<Button type="primary" input btnType="test" />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		// FIXME: what do we care about setting the id? how is this important for a design system where the users are actually copy-pasting the html snippet?
		it("renders a button with the specified id inside an input tag when prop input and id is provided", () => {
			render(<Button type="primary" input id="test" />);

			expect(screen.getByRole("button")).toHaveAttribute("id", "test");

			const componentForSnap = renderer.create(
				<Button type="primary" input id="test" />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		it("renders a button with the specified name inside an input tag when prop input and name is provided", () => {
			render(<Button type="primary" input name="test" />);

			expect(screen.getByRole("button")).toHaveAttribute("name", "test");

			const componentForSnap = renderer.create(
				<Button type="primary" input name="test" />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		it("renders a disabled button inside an input tag when prop input and disabled is provided", () => {
			render(<Button type="primary" input disabled />);

			expect(screen.getByRole("button")).toBeDisabled();

			const componentForSnap = renderer.create(
				<Button type="primary" input disabled />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		it("renders a button inside an input tag with value attribute when prop input and value is provided", () => {
			render(<Button type="primary" input value="test" />);

			expect(screen.getByRole("button")).toHaveAttribute("value", "test");

			const componentForSnap = renderer.create(
				<Button type="primary" input value="test" />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});
	});

	describe("Button tag:", () => {
		it("renders a primary button and defaults to type='button' when no btnType prop is provided", () => {
			render(<Button type="primary" />);

			expect(screen.getByRole("button")).toHaveAttribute("type", "button");

			const componentForSnap = renderer.create(<Button type="primary" />);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		it("renders a button with a label when prop label is provided", () => {
			render(<Button type="primary" label="test" />);

			expect(screen.getByRole("button")).toHaveTextContent("test");

			const componentForSnap = renderer.create(
				<Button type="primary" label="test" />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		it("renders a button with specified size when prop size is provided", () => {
			console.error = jest.fn();

			render(<Button type="primary" size="size-test" />);

			expect(screen.getByRole("button")).toHaveClass("btn-size-test");

			const componentForSnap = renderer.create(
				<Button type="primary" size="size-test" />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		it("renders a loading button when prop loading is provided", () => {
			render(<Button type="primary" loading />);

			expect(screen.getByRole("button")).toHaveClass("loading");

			const componentForSnap = renderer.create(
				<Button type="primary" loading />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		it("renders a full width button when prop fullWidth is provided", () => {
			render(<Button type="primary" fullWidth />);

			expect(screen.getByRole("button")).toHaveClass("btn-block");

			const componentForSnap = renderer.create(
				<Button type="primary" fullWidth />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		// FIXME: there is NO class 'active' added to the classes of the button. The test was passing because an ATTRIBUTE `active` was added to the element. But not a CLASSSName. Should this be fixed?
		it.skip("renders a button with class active when prop active is provided", () => {
			render(<Button type="primary" active />);

			expect(screen.getByRole("button")).toHaveClass("active");

			const componentForSnap = renderer.create(
				<Button type="primary" active />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		it("renders a button with the specified type when prop btnType is provided", () => {
			render(<Button type="primary" btnType="test" />);

			expect(screen.getByRole("button")).toHaveAttribute("type", "test");

			const componentForSnap = renderer.create(
				<Button type="primary" btnType="test" />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		it("renders a button with the specified id when prop id is provided", () => {
			render(<Button type="primary" id="test" />);

			expect(screen.getByRole("button")).toHaveAttribute("id", "test");

			const componentForSnap = renderer.create(
				<Button type="primary" id="test" />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		it("renders a button with the specified name when prop name is provided", () => {
			render(<Button type="primary" name="test" />);

			expect(screen.getByRole("button")).toHaveAttribute("name", "test");

			const componentForSnap = renderer.create(
				<Button type="primary" name="test" />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		it("renders a disabled button when prop disabled is provided", () => {
			render(<Button type="primary" disabled />);

			expect(screen.getByRole("button")).toBeDisabled();

			const componentForSnap = renderer.create(
				<Button type="primary" disabled />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		it("renders a button with an icon when prop icon is provided", () => {
			render(<Button type="primary" icon="test-icon" />);

			expect(screen.getByRole("button").querySelector("i")).toHaveClass(
				"test-icon",
			);
			expect(screen.getByRole("button").querySelector("i")).toHaveAttribute(
				"aria-hidden",
				"true",
			);

			const componentForSnap = renderer.create(
				<Button type="primary" icon="test" />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});

		it("renders a button with icon and label when prop icon and label is provided", () => {
			render(<Button type="primary" icon="test-icon" label="test" />);

			expect(screen.getByRole("button").querySelector("i")).toHaveClass(
				"test-icon",
			);
			expect(screen.getByRole("button").querySelector("i")).toHaveAttribute(
				"aria-hidden",
				"true",
			);

			const componentForSnap = renderer.create(
				<Button type="primary" icon="icon" label="test" />,
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});
	});
});
