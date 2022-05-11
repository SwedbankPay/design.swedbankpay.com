import React from "react";
import { shallow } from "enzyme";

import Sidebar, { Overview, DeveloperDocumentation, SetActiveState, RemoveActiveState, InitScrollListener, RemoveScrollListener } from "./index";

describe("Components: Sidebar", () => {
    it("is defined", () => {
        expect(Sidebar).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Sidebar />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("Overview", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Overview />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("DeveloperDocumentation", () => {
        it("is defined", () => {
            expect(DeveloperDocumentation).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<DeveloperDocumentation />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("SetActiveState", () => {
        it("is defined", () => {
            expect(SetActiveState).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<SetActiveState />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("RemoveActiveState", () => {
        it("is defined", () => {
            expect(RemoveActiveState).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<RemoveActiveState />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("InitScrollListener", () => {
        it("is defined", () => {
            expect(InitScrollListener).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<InitScrollListener />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("RemoveScrollListener", () => {
        it("is defined", () => {
            expect(RemoveScrollListener).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<RemoveScrollListener />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
