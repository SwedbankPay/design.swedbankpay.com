import React from "react";
import { shallow } from "enzyme";

import PaymentIcon from "./index";

describe("Component: Panel - ", () => {
    it("is defined", () => {
        expect(PaymentIcon).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<PaymentIcon name="amex" />);

        expect(wrapper).toMatchSnapshot();
    });

    it("prop name is marked as required", () => {
        console.error = jest.fn();

        const wrapper = shallow(<PaymentIcon />);

        expect(console.error).toHaveBeenCalled();
        expect(wrapper).toMatchSnapshot();
    });

    it("prop name is an enum with specified allowed values", () => {
        console.error = jest.fn();

        const allowedIcons = shallow(
            <div>
                <PaymentIcon name="amex" />
                <PaymentIcon name="diners" />
                <PaymentIcon name="mastercard" />
                <PaymentIcon name="mobilepay" />
                <PaymentIcon name="paypal" />
                <PaymentIcon name="swish" />
                <PaymentIcon name="vipps" />
                <PaymentIcon name="visa" />
            </div>
        );

        expect(console.error).not.toHaveBeenCalled();

        const illegalIcon = shallow(<PaymentIcon name="test" />);

        expect(console.error).toHaveBeenCalled();

        expect(allowedIcons).toMatchSnapshot();
        expect(illegalIcon).toMatchSnapshot();
    });

    it("prop size is an enum with specified allowed values", () => {
        console.error = jest.fn();

        const allowedSizes = shallow(
            <div>
                <PaymentIcon size="small" name="amex" />
                <PaymentIcon size="medium" name="diners" />
                <PaymentIcon size="large" name="mastercard" />
                <PaymentIcon size="huge" name="mobilepay" />
            </div>
        );

        expect(console.error).not.toHaveBeenCalled();

        const illegalSize = shallow(<PaymentIcon name="amex" size="test" />);

        expect(console.error).toHaveBeenCalled();

        expect(allowedSizes).toMatchSnapshot();
        expect(illegalSize).toMatchSnapshot();
    });

    it("renders correct icon when prop name is provided", () => {
        const wrapper = shallow(<PaymentIcon name="amex" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<i className="payment-icon amex"></i>)).toEqual(true);
    });

    it("renders correct size when prop size is provided", () => {
        const wrapper = shallow(<PaymentIcon name="amex" size="large" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<i className="payment-icon amex large"></i>)).toEqual(true);
    });

    it("renders icon with custom when prop className is provided", () => {
        const wrapper = shallow(<PaymentIcon name="amex" className="test test2 test-3" />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<i className="payment-icon amex test test2 test-3"></i>)).toEqual(true);
    });

    it("renders a preview wrapper around icon when prop preview is true", () => {
        const wrapper = shallow(<PaymentIcon name="amex" preview />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(
            <div className="icon-preview">
                <i className="payment-icon amex"></i>
                <span>amex</span>
            </div>
        )).toEqual(true);
    });
});
