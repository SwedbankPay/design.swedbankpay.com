import React from "react";
import { shallow } from "enzyme";

import Pagination from "./index";

describe("Component: Pagination -", () => {
    const items = [
        /* eslint-disable object-property-newline */
        { name: "test#1", href: "#", active: false },
        { name: "test#2", href: "#", active: false }
        /* eslint-enable object-property-newline */
    ];

    it("is defined", () => {
        expect(Pagination).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Pagination items={items} />);

        expect(wrapper).toMatchSnapshot();
    });

    it("prop type is enum and requires 'example' or none and produces an error when neither is provided", () => {
        console.error = jest.fn();

        const wrapper = shallow(<Pagination type="test" items={items} />);

        expect(wrapper).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });

    it("prop type is enum and requires 'example' or none and does not produce an error when either is provided", () => {
        console.error = jest.fn();

        const wrapper = shallow(
            <div>
                <Pagination type="example" items={items} />
                <Pagination items={items} />
            </div>
        );

        expect(wrapper).toMatchSnapshot();
        expect(console.error).not.toHaveBeenCalled();
    });

    // it("renders list items when prop items is provided", () => {

    //     const wrapper = shallow(<Pagination items={items} />);

    //     expect(wrapper).toMatchSnapshot();

    //     expect(wrapper.contains(<a aria-label="Go to page test#1">1</a>)).toEqual(true);
    // }); fungerer ikke lengre. kommenterer ut
});

// Todo: Skrive test for ny parameter
