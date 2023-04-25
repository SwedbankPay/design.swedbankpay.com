import React from "react";
import renderer from "react-test-renderer";

import Icons, { MaterialIcons, CardIcons, PaymentIcons, Flags } from "./index";

describe("Core: Iconography", () => {
	it("is defined", () => {
		expect(Icons).toBeDefined();
	});

	it("renders", () => {
		const wrapper = renderer.create(<Icons />);

		expect(wrapper.toJSON()).toMatchSnapshot();
	});

	describe("MaterialIcons", () => {
		it("is defined", () => {
			expect(MaterialIcons).toBeDefined();
		});
	});

	describe("CardIcons", () => {
		it("is defined", () => {
			expect(CardIcons).toBeDefined();
		});
	});

	describe("PaymentIcons", () => {
		it("is defined", () => {
			expect(PaymentIcons).toBeDefined();
		});
	});

	describe("Flags", () => {
		it("is defined", () => {
			expect(Flags).toBeDefined();
		});
	});
});
