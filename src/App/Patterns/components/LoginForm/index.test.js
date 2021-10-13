import React from "react";
import { shallow, mount } from "enzyme";

import LoginForm from "./index";

describe("Pattern: LoginForm", () => {
    it("is defined", () => {
        expect(LoginForm).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<LoginForm />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("input type=\"email\"");
        expect(wrapper.html()).toContain("input type=\"password\"");
        expect(wrapper.html()).toContain("input type=\"checkbox\"");
        expect(wrapper.html()).toContain("a href");
        expect(wrapper.html()).toContain("button");

    });
    it("renders with a title", () => {
        const wrapper = shallow(<LoginForm title="h1"/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("h1");
    });

    it("renders with a product label", () => {
        const wrapper = shallow(<LoginForm productLabel="Product Label"/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("Product Label");
    });

    it("renders with alternative logins", () => {
        const wrapper = shallow(<LoginForm alternativeLogins />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("action-link");
        expect(wrapper.html()).toContain("action-link-label");
    });

    it("renders with an alert and error state on input", () => {
        const wrapper = shallow(<LoginForm error />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("alert alert-danger");
        expect(wrapper.html()).toContain("<b>Error.</b>");
        expect(wrapper.html()).toContain("Incorrect password");
        expect(wrapper.html()).toContain("input-group has-error");
        expect(wrapper.html()).toContain("help-block");
    });

    it("renders with additional text", () => {
        const wrapper = shallow(<LoginForm additionalText="Additional text" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("p class=\"small");
        expect(wrapper.html()).toContain("Additional text");
    });

    it("renders with helpDesk", () => {
        const wrapper = shallow(<LoginForm additionalText helpDesk />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("p class=\"small");
        expect(wrapper.html()).toContain("Contact helpDesk");
        expect(wrapper.html()).toContain("if you are having trouble signing in.");
    });

    it("renders with a logo", () => {
        const wrapper = shallow(<LoginForm logo />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("img");
        expect(wrapper.html()).toContain("TESTBRAND-logo-v.svg");
    });

    it("renders email input with an id", () => {
        const wrapper = shallow(<LoginForm emailId="email-test-id"/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("<input type=\"email\" class=\"form-control\" id=\"email-test-id");
    });

    it("renders password input with an id", () => {
        const wrapper = shallow(<LoginForm passwordId="password-test-id"/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("<input type=\"password\" class=\"form-control\" id=\"password-test-id");
    });

    it("renders checkbox input with an id", () => {
        const wrapper = shallow(<LoginForm checkboxId="checkbox-test-id"/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("<input type=\"checkbox\" id=\"checkbox-test-id");
    });
});
