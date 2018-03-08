import React from "react";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import RenderRoutes from "./RenderRoutes";

// TODO: Refactor and clean this up, write proper tests!! [EH]
describe("Utilities: RenderRoutes", () => {
    it("is defined", () => {
        expect(RenderRoutes).toBeDefined();
    });

    it("renders a basic route structure", () => {
        const props = {
            path: "test",
            redirect:"test",
            routes: [
                {
                    path: "test-2",
                    component: {
                        default: "test-2"
                    }
                }
            ]
        };

        const wrapper = mount(
            <MemoryRouter>
                <RenderRoutes {...props} />
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();
    });
});

