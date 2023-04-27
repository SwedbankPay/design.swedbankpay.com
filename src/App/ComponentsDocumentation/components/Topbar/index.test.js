import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

import Topbar, { Overview, DeveloperDocumentation } from "./index";

import { topbar } from "@src/scripts/main";

describe("Components: Topbar", () => {
	it("is defined", () => {
		expect(Topbar).toBeDefined();
	});

	it.skip("renders", () => {
		/*
            The Topbar component calls dg.topbar.init("demo-topbar") on componentDidMount. Mocking the topbarscript
            to avoid a warning message. [AW]
        */
		topbar.init = jest.fn();

		const componentForSnap = renderer.create(
			<BrowserRouter>
				<Topbar />
			</BrowserRouter>
		);

		expect(componentForSnap.toJSON()).toMatchSnapshot();
	});

	describe("Overview", () => {
		it("is defined", () => {
			expect(Overview).toBeDefined();
		});

		it.skip("renders", () => {
			const componentForSnap = renderer.create(
				<BrowserRouter>
					<Overview />
				</BrowserRouter>
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});
	});

	describe("DeveloperDocumentation", () => {
		it("is defined", () => {
			expect(DeveloperDocumentation).toBeDefined();
		});

		it("renders", () => {
			const componentForSnap = renderer.create(
				<BrowserRouter>
					<DeveloperDocumentation />
				</BrowserRouter>
			);

			expect(componentForSnap.toJSON()).toMatchSnapshot();
		});
	});
});
