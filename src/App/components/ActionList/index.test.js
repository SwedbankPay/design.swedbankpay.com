import React from "react";
import { shallow, mount } from "enzyme";

import ActionList from "./index";

const items = [
    {
        name: "Add bookmark",
        icon: "bookmark"
    },
    {
        name: "Add client",
        icon: "business_center"
    },
    {
        name: "Add document",
        icon: "add_circle"
    },
    {
        name: "Add user",
        icon: "person_add"
    }
];

describe("Component: ActionList", () => {
    it("is defined", () => {
        expect(ActionList).toBeDefined();
    });

    describe("prop types", () => {
        describe("items", () => {
            it("prints an error if it is not provided", () => {
                console.error = jest.fn();

                const wrapper = mount(
                    <>
                        <ActionList />
                        <ActionList items={items} />
                    </>
                );

                expect(wrapper).toMatchSnapshot();
                expect(console.error).toHaveBeenCalledTimes(1);
            });

            it("prints an error if it does not contain objects", () => {
                console.error = jest.fn();

                const wrapper = mount(<ActionList items={["Array"]}/>);

                expect(wrapper).toMatchSnapshot();
                expect(console.error).toHaveBeenCalled();
            });
        });

        it("prints a warning if prop items !== array", () => {
            console.error = jest.fn();

            const wrapper = mount(
                <>
                    <ActionList items={"test"} />
                    <ActionList items={items} />
                </>
            );

            expect(wrapper).toMatchSnapshot();
            expect(console.error).toHaveBeenCalledTimes(1);
        });

        it("prints a warning if prop id !== string", () => {
            console.error = jest.fn();

            const wrapper = mount(
                <>
                    <ActionList items={items} id={1} />
                    <ActionList items={items} id={"test-id"} />
                </>
            );

            expect(wrapper).toMatchSnapshot();
            expect(console.error).toHaveBeenCalledTimes(1);
        });

        it("prints a warning if prop classnames !== string", () => {
            console.error = jest.fn();

            const wrapper = mount(
                <>
                    <ActionList items={items} classNames={2} />
                    <ActionList items={items} classNames={"test-class"} />
                </>
            );

            expect(wrapper).toMatchSnapshot();
            expect(console.error).toHaveBeenCalledTimes(1);
        });
    });

    it("renders with a custom .action-toggle if it is provided", () => {
        const wrapper = mount(<ActionList items={items} toggleBtn={<a href="#">Custom action-toggle</a>} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.html()).toContain("Custom action-toggle");
    });
});
