import React from "react";
import { shallow, mount } from "enzyme";

import InputGroup from "./index";

describe("Component: InputGroup -", () => {
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

    it("renders div with class .input-group when prefixValue or postfixValue is provided", () => {
        const wrapper1 = shallow(<InputGroup type="typetest" prefixType="button" prefixValue="button text" prefixBtnColor="primary" />);
        const wrapper3 = shallow(<InputGroup type="typetest" postfixValue="testvalue" />);

        expect(wrapper1.html()).toContain("input-group");
        expect(wrapper3.html()).toContain("input-group");
    });

    it("does not render div with class .input-group when prefixValue or postfixValue are not provided", () => {
        const wrapper = shallow(<InputGroup type="typetest" label="this is a text in a label" />);

        expect(wrapper.html()).not.toContain("input-group");
    });

    it("renders a form-group with a prefix icon if prop prefixValue equals icon", () => {
        const wrapper = mount(<InputGroup type="typetest" addOnType="icon" prefixValue="home" />);

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

    it("renders a form-group with a help block", () => {
        const wrapper = mount(<InputGroup type="typetest" helpBlock="testvalue" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("hint-text");
    });
});
