import React from "react";
import renderer from "react-test-renderer";

import Datepickers, {
	AboutDatepickers,
	SimpleDatepicker,
	AllowInput,
	HumanReadable,
	InitialValue,
	CustomFormat,
	IncludeTime,
	ShowingMultipleMonths,
	ValidDates,
	DateRange,
	MultipleDates,
	Options,
	JavascriptMethods,
} from "./index";

describe("Documentation: Datepickers", () => {
	it("is defined", () => {
		expect(Datepickers).toBeDefined();
	});

	it.skip("renders", () => {
		console.warn = jest.fn();

		const wrapper = renderer.create(<Datepickers />);

		expect(wrapper.toJSON()).toMatchSnapshot();
		// expect(console.warn).toHaveBeenCalled();
	});

	describe("AboutDatepickers", () => {
		it("is defined", () => {
			expect(AboutDatepickers).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<AboutDatepickers />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("SimpleDatepicker", () => {
		it("is defined", () => {
			expect(SimpleDatepicker).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<SimpleDatepicker />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("AllowInput", () => {
		it("is defined", () => {
			expect(AllowInput).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<AllowInput />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("HumanReadable", () => {
		it("is defined", () => {
			expect(HumanReadable).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<HumanReadable />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("InitialValue", () => {
		it("is defined", () => {
			expect(InitialValue).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<InitialValue />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("CustomFormat", () => {
		it("is defined", () => {
			expect(CustomFormat).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<CustomFormat />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("IncludeTime", () => {
		it("is defined", () => {
			expect(IncludeTime).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<IncludeTime />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("ShowingMultipleMonths", () => {
		it("is defined", () => {
			expect(ShowingMultipleMonths).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<ShowingMultipleMonths />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("ValidDates", () => {
		it("is defined", () => {
			expect(ValidDates).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<ValidDates />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("DateRange", () => {
		it("is defined", () => {
			expect(DateRange).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<DateRange />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("MultipleDates", () => {
		it("is defined", () => {
			expect(MultipleDates).toBeDefined();
		});

		it.skip("renders", () => {
			const wrapper = renderer.create(<MultipleDates />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("Options", () => {
		it("is defined", () => {
			expect(Options).toBeDefined();
		});

		it("renders", () => {
			const wrapper = renderer.create(<Options />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("JavascriptMethods", () => {
		it("is defined", () => {
			expect(JavascriptMethods).toBeDefined();
		});

		it.skip("renders", () => {
			const wrapper = renderer.create(<JavascriptMethods />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});
});
