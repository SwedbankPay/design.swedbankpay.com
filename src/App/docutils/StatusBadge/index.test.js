import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import StatusBadge from "./index";

describe("Utilities: StatusBadge", () => {
    it("is defined", () => {
        expect(StatusBadge).toBeDefined();
    });

    it("prints error if type is not provided", () => {
        console.error = jest.fn();

        const wrapper = renderer.create(<StatusBadge />);

        expect(wrapper.toJSON()).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });

    it("renders new status badge when type is 'new'", () => {
        const wrapper = renderer.create(<StatusBadge type="new" />);
        const { container } = render(<StatusBadge type="new"/>);

        expect(wrapper.toJSON()).toMatchSnapshot();
        expect(container.firstChild.classList.contains("status-badge-new")).toBe(true);
    });

    it("renders updated status badge when type is 'updated'", () => {
        const wrapper = renderer.create(<StatusBadge type="updated" />);
        const { container } = render(<StatusBadge type="updated"/>);

        expect(wrapper.toJSON()).toMatchSnapshot();
        expect(container.firstChild.classList.contains("status-badge-updated")).toBe(true);
    });

    it("renders remove status badge when type is 'remove'", () => {
        const wrapper = renderer.create(<StatusBadge type="remove" />);
        const { container } = render(<StatusBadge type="remove"/>);

        expect(wrapper.toJSON()).toMatchSnapshot();
        expect(container.firstChild.classList.contains("status-badge-remove")).toBe(true);
    });

    it("renders javascript status badge when type is 'javascript'", () => {
        const wrapper = renderer.create(<StatusBadge type="javascript" />);
        const { container } = render(<StatusBadge type="javascript"/>);

        expect(wrapper.toJSON()).toMatchSnapshot();
        expect(container.firstChild.classList.contains("status-badge-javascript")).toBe(true);
    });

    it("renders deprecated status badge when type is 'deprecated'", () => {
        const wrapper = renderer.create(<StatusBadge type="deprecated" />);
        const { container } = render(<StatusBadge type="deprecated"/>);

        expect(wrapper.toJSON()).toMatchSnapshot();
        expect(container.firstChild.classList.contains("status-badge-deprecated")).toBe(true);
    });
});
