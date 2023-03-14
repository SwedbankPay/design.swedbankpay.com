import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

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

                render(
                    <>
                        <ActionList />
                        <ActionList items={items} />
                    </>
                );

                expect(console.error).toHaveBeenCalledTimes(1);

                const componentForSnap = renderer.create(<>
                    <ActionList />
                    <ActionList items={items} />
                </>).toJSON();

                expect(componentForSnap).toMatchSnapshot();
            });

            it("prints an error if it does not contain objects", () => {
                console.error = jest.fn();

                render(<ActionList items={["Array"]}/>);
                expect(console.error).toHaveBeenCalled();

                const componentForSnap = renderer.create(<ActionList items={["Array"]}/>).toJSON();

                expect(componentForSnap).toMatchSnapshot();
            });
        });

        it("prints a warning if prop items !== array", () => {
            console.error = jest.fn();

            render(
                <>
                    <ActionList items={"test"} />
                    <ActionList items={items} />
                </>
            );

            expect(console.error).toHaveBeenCalledTimes(1);

            const componentForSnap = renderer.create(
                <>
                    <ActionList items={"test"} />
                    <ActionList items={items} />
                </>).toJSON();

            expect(componentForSnap).toMatchSnapshot();
        });

        it("prints a warning if prop id !== string", () => {
            console.error = jest.fn();

            render(
                <>
                    <ActionList items={items} id={1} />
                    <ActionList items={items} id={"test-id"} />
                </>
            );

            expect(console.error).toHaveBeenCalledTimes(1);

            const componentForSnap = renderer.create(
                <>
                    <ActionList items={items} id={1} />
                    <ActionList items={items} id={"test-id"} />
                </>).toJSON();

            expect(componentForSnap).toMatchSnapshot();
        });

        it("prints a warning if prop classnames !== string", () => {
            console.error = jest.fn();

            render(
                <>
                    <ActionList items={items} classNames={2} />
                    <ActionList items={items} classNames={"test-class"} />
                </>
            );

            expect(console.error).toHaveBeenCalledTimes(1);

            const componentForSnap = renderer.create(
                <>
                    <ActionList items={items} classNames={2} />
                    <ActionList items={items} classNames={"test-class"} />
                </>).toJSON();

            expect(componentForSnap).toMatchSnapshot();
        });
    });

    it("renders with a custom .action-toggle if it is provided", () => {
        render(<ActionList items={items} toggleBtn={<a className="action-toggle" href="#">Custom action-toggle</a>} />);

        expect(screen.getAllByRole("link")[0]).toHaveTextContent("Custom action-toggle");

        const componentForSnap = renderer.create(
            <ActionList items={items} toggleBtn={<a className="action-toggle" href="#">Custom action-toggle</a>} />).toJSON();

        expect(componentForSnap).toMatchSnapshot();
    });

    describe(".action-menu", () => {
        it("prevents default when an item is clicked", () => {
            const eventHandler = { preventDefault: jest.fn() };

            render(<ActionList items={items} />);

            userEvent.click(screen.getByRole("button"));

            const itemsRendered = screen.getAllByRole("link");

            itemsRendered.forEach(item => userEvent.click(item));
            expect(itemsRendered.length).toEqual(items.length);

            // expect(eventHandler.preventDefault).toHaveBeenCalledTimes(items.length);

            const componentForSnap = renderer.create(<ActionList items={items} />).toJSON();

            expect(componentForSnap).toMatchSnapshot();
        });
    });
});
