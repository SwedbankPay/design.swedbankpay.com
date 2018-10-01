import React from "react";
import { shallow } from "enzyme";

import Modal, { Usage, Demo, ModalText } from "./index";

describe("Documentation: Modal", () => {
    it("is defined", () => {
        expect(Modal).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Modal />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("Usage", () => {
        it("is defined", () => {
            expect(Usage).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Usage />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Demo", () => {
        it("is defined", () => {
            expect(Demo).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Demo />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("ModalText", () => {
        it("is defined", () => {
            expect(ModalText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ModalText />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
