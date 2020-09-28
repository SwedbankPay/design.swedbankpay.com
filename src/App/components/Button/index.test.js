import React from "react";
import { shallow } from "enzyme";

import Button from "./index";

describe("Component: Button - ", () => {
    it("is defined", () => {
        expect(Button).toBeDefined();
    });

    it("prop type is marked as required", () => {
        console.error = jest.fn();

        const wrapper = shallow(<Button />);

        expect(wrapper).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });

    describe("Anchor tag:", () => {
        it("renders a button inside an anchor tag when prop href is provided", () => {
            const wrapper = shallow(<Button type="primary" href="test" />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("href=\"test\"");
        });

        it("renders a button inside an anchor tag with label when prop href and label is provided", () => {
            const wrapper = shallow(<Button type="primary" href="test" label="test" />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("<a class=\"btn btn-primary\" href=\"test\" role=\"button\">test</a>");
        });

        it("renders a button with specified size inside an anchor tag when prop href and size is provided", () => {
            const wrapper = shallow(<Button type="primary" href="test" size="size-test" />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("btn-size-test");
        });

        it("renders a loading button inside an anchor tag when prop href and loading is provided", () => {
            const wrapper = shallow(<Button type="primary" href="test" loading />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("loading");
        });

        it("renders a full width button inside an anchor tag when prop href and fullWidth is provided", () => {
            const wrapper = shallow(<Button type="primary" href="test" fullWidth />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("btn-block");
        });

        it("renders a button inside an anchor tag with class pull-right when prop href and pullRight is provided", () => {
            const wrapper = shallow(<Button type="primary" href="test" pullRight />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("pull-right");
        });

        it("renders a button inside an anchor tag with class active when prop href and active is provided", () => {
            const wrapper = shallow(<Button type="primary" href="test" active />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("active");
        });

        it("renders a button inside an anchor tag with id when prop href and id is provided", () => {
            const wrapper = shallow(<Button type="primary" href="test" id="test" />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("id=\"test\"");
        });

        it("renders a button inside an anchor tag with name when prop href and name is provided", () => {
            const wrapper = shallow(<Button type="primary" href="test" name="test" />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("name=\"test\"");
        });

        it("renders a disabled button inside an anchor tag when prop href and disabled is provided", () => {
            const wrapper = shallow(<Button type="primary" href="test" disabled />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("disabled");
        });

        it("renders a button with icon inside an anchor tag when prop href and icon is provided", () => {
            const wrapper = shallow(<Button type="primary" href="test" icon="test" />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<i className="material-icons" aria-hidden="true">test</i>)).toEqual(true);
        });

        it("renders a button with icon and label inside a span inside an anchor tag when prop href, label and icon is provided", () => {
            const wrapper = shallow(<Button type="primary" href="test" icon="test" label="test" />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<i className="material-icons" aria-hidden="true">test</i>)).toEqual(true);
            expect(wrapper.html()).toContain("<span>test</span>");
        });
    });

    describe("Input tag:", () => {
        it("renders a button inside an input tag and defaults to type='button' when prop input is provided", () => {
            const wrapper = shallow(<Button type="primary" input />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("type=\"button\"");
        });

        it("renders a button with specified size inside an input tag when prop input and size is provided", () => {
            const wrapper = shallow(<Button type="primary" input size="size-test" />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("btn-size-test");
        });

        it("renders a loading button inside an input tag when prop input and loading is provided", () => {
            const wrapper = shallow(<Button type="primary" input loading />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("loading");
        });

        it("renders a full width button inside an input tag when prop input and fullWidth is provided", () => {
            const wrapper = shallow(<Button type="primary" input fullWidth />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("btn-block");
        });

        it("renders a button with class pull-right inside an input tag when prop input and pullRight is provided", () => {
            const wrapper = shallow(<Button type="primary" input pullRight />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("pull-right");
        });

        it("renders a button with class active inside an input tag when prop input and active is provided", () => {
            const wrapper = shallow(<Button type="primary" input active />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("active");
        });

        it("renders a button with the specified type inside an input tag when prop input and btnType is provided", () => {
            const wrapper = shallow(<Button type="primary" input btnType="test" />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("type=\"test\"");
        });

        it("renders a button with the specified id inside an input tag when prop input and id is provided", () => {
            const wrapper = shallow(<Button type="primary" input id="test" />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("id=\"test\"");
        });

        it("renders a button with the specified name inside an input tag when prop input and name is provided", () => {
            const wrapper = shallow(<Button type="primary" input name="test" />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("name=\"test\"");
        });

        it("renders a disabled button inside an input tag when prop input and disabled is provided", () => {
            const wrapper = shallow(<Button type="primary" input disabled />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("disabled");
        });

        it("renders a button inside an input tag with value attribute when prop input and value is provided", () => {
            const wrapper = shallow(<Button type="primary" input value="test" />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("value=\"test\"");
        });
    });

    describe("Button tag:", () => {
        it("renders a primary button and defaults to type='button' when no btnType prop is provided", () => {
            const wrapper = shallow(<Button type="primary" />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("type=\"button\"");
        });

        it("renders a button with a label when prop label is provided", () => {
            const wrapper = shallow(<Button type="primary" label="test" />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("test");
        });

        it("renders a button with specified size when prop size is provided", () => {
            console.error = jest.fn();

            const wrapper = shallow(<Button type="primary" size="size-test" />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("btn-size-test");
        });

        it("renders a loading button when prop loading is provided", () => {
            const wrapper = shallow(<Button type="primary" loading />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("loading");
        });

        it("renders a full width button when prop fullWidth is provided", () => {
            const wrapper = shallow(<Button type="primary" fullWidth />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("btn-block");
        });

        it("renders a button with class pull-right when prop pullRight is provided", () => {
            const wrapper = shallow(<Button type="primary" pullRight />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("pull-right");
        });

        it("renders a button with class active when prop active is provided", () => {
            const wrapper = shallow(<Button type="primary" active />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("active");
        });

        it("renders a button with the specified type when prop btnType is provided", () => {
            const wrapper = shallow(<Button type="primary" btnType="test" />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("type=\"test\"");
        });

        it("renders a button with the specified id when prop id is provided", () => {
            const wrapper = shallow(<Button type="primary" id="test" />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("id=\"test\"");
        });

        it("renders a button with the specified name when prop name is provided", () => {
            const wrapper = shallow(<Button type="primary" name="test" />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("name=\"test\"");
        });

        it("renders a disabled button when prop disabled is provided", () => {
            const wrapper = shallow(<Button type="primary" disabled />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.html()).toContain("disabled");
        });

        it("renders a button with an icon when prop icon is provided", () => {
            const wrapper = shallow(<Button type="primary" icon="test" />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<i className="material-icons" aria-hidden="true">test</i>)).toEqual(true);
        });

        it("renders a button with icon and label when prop icon and label is provided", () => {
            const wrapper = shallow(<Button type="primary" icon="icon" label="test" />);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<i className="material-icons" aria-hidden="true">icon</i>)).toEqual(true);
            expect(wrapper.contains("test")).toEqual(true);
        });
    });
});
