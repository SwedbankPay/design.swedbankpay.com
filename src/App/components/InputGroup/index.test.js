import React from "react";
import { shallow, mount } from "enzyme";

import InputGroup from "./index";

describe("Component: InputGroup - ", () => {
    it("is defined", () => {
        expect(InputGroup).toBeDefined();
    });

    it("throws an error if type prop is not provided", () => {
        console.error = jest.fn();

        const wrapper = shallow(<InputGroup />);

        expect(wrapper).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });

    it("renders", () => {
        const wrapper = shallow(<InputGroup type="typetest" />);

        expect(wrapper).toMatchSnapshot();
    });

    it("throws an error if validationState prop has an invalid value", () => {
        const testValues = ["success", "error", "", "invalid", "test"];

        console.error = jest.fn();
        testValues.forEach(testValue => {
            const wrapper = shallow(<InputGroup type="typetest" validationState={testValue} />);

            expect(wrapper).toMatchSnapshot();
        });
        expect(console.error).toHaveBeenCalledTimes(3);
    });

    it("throws an error if prefixType prop has an invalid value", () => {
        const testValues = ["button", "icon", "", "invalid", "test"];

        console.error = jest.fn();
        testValues.forEach(testValue => {
            const wrapper = shallow(<InputGroup type="typetest" prefixType={testValue} />);

            expect(wrapper).toMatchSnapshot();
        });
        expect(console.error).toHaveBeenCalledTimes(2);
    });

    it("throws an error if prefixBtnColor prop has an invalid value", () => {
        const testValues = ["primary", "secondary", "invalid", "test"];

        console.error = jest.fn();
        testValues.forEach(testValue => {
            const wrapper = shallow(<InputGroup type="typetest" prefixBtnColor={testValue} />);

            expect(wrapper).toMatchSnapshot();
        });
        expect(console.error).toHaveBeenCalledTimes(2);
    });

    it("throws an error if postfixType prop has an invalid value", () => {
        const testValues = ["button", "icon", "", "invalid", "test"];

        console.error = jest.fn();
        testValues.forEach(testValue => {
            const wrapper = shallow(<InputGroup type="typetest" postfixType={testValue} />);

            expect(wrapper).toMatchSnapshot();
        });
        expect(console.error).toHaveBeenCalledTimes(2);
    });

    it("throws an error if postfixBtnColor prop has an invalid value", () => {
        const testValues = ["primary", "secondary", "invalid", "test"];

        console.error = jest.fn();
        testValues.forEach(testValue => {
            const wrapper = shallow(<InputGroup type="typetest" postfixBtnColor={testValue} />);

            expect(wrapper).toMatchSnapshot();
        });
        expect(console.error).toHaveBeenCalledTimes(2);
    });

    it("renders a form-group with a label if prop label is provided", () => {
        const wrapper = shallow(<InputGroup type="typetest" label="this is a text in a label" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("label");
        expect(wrapper.html()).toContain("this is a text in a label");
    });

    it("renders div with class .input-group when prefixValue, postfixValue or feedbackIcon is provided", () => {
        const wrapper1 = shallow(<InputGroup type="typetest" prefixType="button" prefixValue="button text" prefixBtnColor="primary" />);
        const wrapper2 = shallow(<InputGroup type="typetest" feedbackIcon="testvalue" />);
        const wrapper3 = shallow(<InputGroup type="typetest" postfixValue="testvalue" />);

        expect(wrapper1.html()).toContain("input-group");
        expect(wrapper2.html()).toContain("input-group");
        expect(wrapper3.html()).toContain("input-group");
    });

    it("does not render div with class .input-group when prefixValue, postfixValue and feedbackIcon are not provided", () => {
        const wrapper = shallow(<InputGroup type="typetest" label="this is a text in a label" />);

        expect(wrapper.html()).not.toContain("input-group");
    });

    it("renders a form-group with a prefix button if prop prefixValue is provided", () => {
        const wrapper = mount(<InputGroup type="typetest" prefixType="button" prefixValue="button text" prefixBtnColor="primary" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("btn btn-primary");
    });

    it("renders a form-group with a prefix label if prop prefixValue is provided and no prefixType is given", () => {
        const wrapper = mount(<InputGroup type="typetest" prefixValue="label text" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("input-group-addon");

        const inputGroupAddon = wrapper.find(".input-group-addon");

        expect(inputGroupAddon.html()).toContain("label text");
    });

    it("renders a form-group with a prefix icon if prop prefixValue equals icon", () => {
        const wrapper = mount(<InputGroup type="typetest" prefixType="icon" prefixValue="home" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("material-icons");

        const icon = wrapper.find(".material-icons");

        expect(icon.html()).toContain("home");
    });

    it("renders a form-group with a text-area if type equals textarea", () => {
        const wrapper = mount(<InputGroup type="textarea" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("textarea");
    });

    it("renders a form-group with a select field with given values if type equals select", () => {
        const selectOptions = ["Bounty hunter", "Smuggler", "Jedi"];
        const wrapper = mount(<InputGroup type="select" selectOptions={selectOptions} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("select");

        const selectField = wrapper.find(".form-control");

        selectOptions.forEach(value => {
            expect(selectField.html()).toContain(value);
        });
    });

    it("renders a form-group with a feedback icon if prop feedbackIcon is provided", () => {
        const wrapper = mount(<InputGroup type="typetest" feedbackIcon="testvalue" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("material-icons");

        const icon = wrapper.find(".material-icons");

        expect(icon.html()).toContain("testvalue");
    });

    it("renders a form-group with a postfix if prop postfixValue is provided", () => {
        const wrapper = mount(<InputGroup type="typetest" postfixValue="testvalue" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("input-group-addon");

        const span = wrapper.find(".input-group-addon");

        expect(span.html()).toContain("testvalue");
    });

    it("renders a form-group with a help block if prop helpBlock is provided", () => {
        const wrapper = mount(<InputGroup type="typetest" helpBlock="testvalue" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("help-block");

        const helpblock = wrapper.find(".help-block");

        expect(helpblock.html()).toContain("testvalue");
    });

    it("renders a form-group with a help block with data-success and data-error attributes", () => {
        const wrapper = mount(<InputGroup type="typetest" successMessage="success" errorMessage="error" helpBlock="testvalue" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("help-block");
        expect(wrapper.html()).toContain("data-success");
        expect(wrapper.html()).toContain("data-error");
    });
});
