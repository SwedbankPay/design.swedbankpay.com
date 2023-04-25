import React from "react";
import renderer from "react-test-renderer";

import Lists, {
	BasicList,
	InlineList,
	BulletList,
	DescriptionList,
	SettingsList,
	ItemList,
	ItemListBordered,
	ItemListLarge,
	HoverItemList,
	StripedItemList,
} from "./index";

describe("Documentation: Lists", () => {
	it("is defined", () => {
		expect(Lists).toBeDefined();
	});

	it("renders", () => {
		console.warn = jest.fn();

		const wrapper = renderer.create(<Lists />);

		expect(wrapper.toJSON()).toMatchSnapshot();
	});

	describe("BasicList", () => {
		it("is defined", () => {
			expect(BasicList).toBeDefined();
		});

		it.skip("renders", () => {
			const wrapper = renderer.create(<BasicList />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("InlineList", () => {
		it("is defined", () => {
			expect(InlineList).toBeDefined();
		});

		it.skip("renders", () => {
			const wrapper = renderer.create(<InlineList />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("BulletList", () => {
		it("is defined", () => {
			expect(BulletList).toBeDefined();
		});

		it.skip("renders", () => {
			const wrapper = renderer.create(<BulletList />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("DescriptionList", () => {
		it("is defined", () => {
			expect(DescriptionList).toBeDefined();
		});

		it.skip("renders", () => {
			const wrapper = renderer.create(<DescriptionList />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("SettingsList", () => {
		it("is defined", () => {
			expect(SettingsList).toBeDefined();
		});

		it.skip("renders", () => {
			const wrapper = renderer.create(<SettingsList />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("ItemList", () => {
		it("is defined", () => {
			expect(ItemList).toBeDefined();
		});

		it.skip("renders", () => {
			const wrapper = renderer.create(<ItemList />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("ItemListBordered", () => {
		it("is defined", () => {
			expect(ItemListBordered).toBeDefined();
		});

		it.skip("renders", () => {
			const wrapper = renderer.create(<ItemListBordered />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("ItemListLarge", () => {
		it("is defined", () => {
			expect(ItemListLarge).toBeDefined();
		});

		it.skip("renders", () => {
			const wrapper = renderer.create(<ItemListLarge />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("HoverItemList", () => {
		it("is defined", () => {
			expect(HoverItemList).toBeDefined();
		});

		it.skip("renders", () => {
			const wrapper = renderer.create(<HoverItemList />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe("StripedItemList", () => {
		it("is defined", () => {
			expect(StripedItemList).toBeDefined();
		});

		it.skip("renders", () => {
			const wrapper = renderer.create(<StripedItemList />);

			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});
});
