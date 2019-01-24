import React from "react";
import { shallow } from "enzyme";

import IconPreview from "./index";

describe("Component: IconPreview - ", () => {
    it("is defined", () => {
        expect(IconPreview).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<IconPreview name="amex" type="payment-icon" />);

        expect(wrapper).toMatchSnapshot();
    });

    it("prop name is marked as required", () => {
        console.error = jest.fn();

        const wrapper = shallow(<IconPreview type="payment-icon" />);

        expect(console.error).toHaveBeenCalled();
        expect(wrapper).toMatchSnapshot();
    });

    it("prop type has specific allowed values", () => {
        console.error = jest.fn();

        const allowedSizes = shallow(
            <div>
                <IconPreview type="material-icons" />
                <IconPreview type="payment-icon" />
                <IconPreview type="flag-icon" />
            </div>
        );

        expect(console.error).not.toHaveBeenCalled();

        const illegalSize = shallow(<IconPreview type="invalid_value" />);

        expect(console.error).toHaveBeenCalled();
        expect(allowedSizes).toMatchSnapshot();
        expect(illegalSize).toMatchSnapshot();
    });

    it("prop size is an enum with specified allowed values", () => {
        console.error = jest.fn();

        const allowedSizes = shallow(
            <div>
                <IconPreview size="tiny" type="material-icons" name="visa" />
                <IconPreview size="small" type="payment-icon" name="amex" />
                <IconPreview size="medium" type="payment-icon" name="diners" />
                <IconPreview size="large" type="payment-icon" name="mastercard" />
                <IconPreview size="huge" type="payment-icon" name="mobilepay" />
            </div>
        );

        expect(console.error).not.toHaveBeenCalled();

        const illegalSize = shallow(<IconPreview name="amex" size="test" type="payment-icon" />);

        expect(console.error).toHaveBeenCalled();

        expect(allowedSizes).toMatchSnapshot();
        expect(illegalSize).toMatchSnapshot();
    });

    it("renders a material icon when type is equal to material-icons", () => {
        const wrapper = shallow(<IconPreview name="android" type="material-icons" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<i className="material-icons">android</i>)).toEqual(true);
    });

    it("renders correct icon when prop name is provided", () => {
        const wrapper = shallow(<IconPreview name="amex" type="payment-icon" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<i className="payment-icon payment-icon-amex"></i>)).toEqual(true);
    });

    it("renders correct size when prop size is provided", () => {
        const wrapper = shallow(<IconPreview name="amex" size="large" type="payment-icon" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<i className="payment-icon payment-icon-large payment-icon-amex"></i>)).toEqual(true);
    });

    it("renders icon with custom when prop className is provided", () => {
        const wrapper = shallow(<IconPreview name="amex" type="payment-icon" className="test test2 test-3" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<i className="payment-icon payment-icon-amex test test2 test-3"></i>)).toEqual(true);
    });

    it("renders a preview wrapper around payment-icon when prop preview is true", () => {
        const wrapper = shallow(<IconPreview name="amex" type="payment-icon" preview />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(
            <div className="icon-preview">
                <i className="payment-icon payment-icon-amex"></i>
                <code className="token property p-0 mt-2">payment-icon-amex</code>
            </div>
        )).toEqual(true);
    });

    it("renders a preview wrapper around material-icon when prop preview is true", () => {
        const wrapper = shallow(<IconPreview name="android" type="material-icons" preview />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(
            <div className="icon-preview">
                <i className="material-icons">android</i>
                <code className="token property p-0 mt-2">android</code>
            </div>
        )).toEqual(true);
    });

    it("renders a preview wrapper around material-icon when prop previewSize is true with a span containing the size as text", () => {
        const wrapper = shallow(<IconPreview name="android" type="material-icons" size="large" previewSize />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(
            <div className="icon-preview">
                <i className="material-icons material-icons-large">android</i>
                <code className="token property p-0 mt-2">material-icons-large</code>
            </div>
        )).toEqual(true);
    });
});
