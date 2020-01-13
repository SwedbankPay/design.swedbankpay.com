import React from "react";
import { shallow } from "enzyme";

import Login, { LoginContent } from "./index";

describe("Example: Login", () => {
    it("is defined", () => {
        expect(Login).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Login />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("LoginContent", () => {
        it("is defined", () => {
            expect(LoginContent).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<LoginContent />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
