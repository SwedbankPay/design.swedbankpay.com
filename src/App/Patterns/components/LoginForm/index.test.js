import React from "react";
import renderer from "react-test-renderer";
import LoginForm from "./index";

describe("Pattern: LoginForm", () => {
    it("is defined", () => {
        expect(LoginForm).toBeDefined();
    });

    it("renders", () => {
        const wrapper = renderer.create(<LoginForm />);

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});
