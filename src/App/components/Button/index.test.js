import React from "react";
import { shallow } from "enzyme";

import Button from "./index";

describe("Component: Button - ", () => {
    it("is defined", () => {
        expect(Button).toBeDefined();
    });

    it("prop color is marked as required", () => {
        console.error = jest.fn();

        const wrapper = shallow(
            <Button />
        );

        expect(wrapper).toMatchSnapshot();
        expect(console.error).toHaveBeenCalled();
    });

    describe("Anchor tag:", () => {
        it("renders a button inside an anchor tag when prop href is provided", () => {
            const wrapper = shallow(
                <Button color="test" href="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<a className="btn btn-test" href="test" role="button"/>)).toEqual(true);
        });

        it("renders a button inside an anchor tag with label when prop href and label is provided", () => {
            const wrapper = shallow(
                <Button color="test" href="test" label="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<a className="btn btn-test" href="test" role="button">test</a>)).toEqual(true);
        });

        it("renders a outline button inside an anchor tag when prop href and outline is provided", () => {
            const wrapper = shallow(
                <Button color="test" href="test" outline={true} />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<a className="btn btn-outline-test" href="test" role="button"/>)).toEqual(true);
        });

        it("renders a button with specified size inside an anchor tag when prop href and size is provided", () => {
            const wrapper = shallow(
                <Button color="test" href="test" size="size-test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<a className="btn btn-test btn-size-test" href="test" role="button"/>)).toEqual(true);
        });

        it("renders a loading button inside an anchor tag when prop href and loading is provided", () => {
            const wrapper = shallow(
                <Button color="test" href="test" loading={true} />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<a className="btn btn-test loading" href="test" role="button"/>)).toEqual(true);
        });

        it("renders a full width button inside an anchor tag when prop href and fullWidth is provided", () => {
            const wrapper = shallow(
                <Button color="test" href="test" fullWidth={true} />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<a className="btn btn-test btn-block" href="test" role="button"/>)).toEqual(true);
        });

        it("renders a button inside an anchor tag with class pull-right when prop href and pullRight is provided", () => {
            const wrapper = shallow(
                <Button color="test" href="test" pullRight={true} />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<a className="btn btn-test pull-right" href="test" role="button"/>)).toEqual(true);
        });

        it("renders a button inside an anchor tag with class active when prop href and active is provided", () => {
            const wrapper = shallow(
                <Button color="test" href="test" active={true} />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<a className="btn btn-test active" href="test" role="button"/>)).toEqual(true);
        });

        it("renders a button inside an anchor tag with id when prop href and id is provided", () => {
            const wrapper = shallow(
                <Button color="test" href="test" id="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<a className="btn btn-test" href="test" id="test" role="button"/>)).toEqual(true);
        });

        it("renders a button inside an anchor tag with name when prop href and name is provided", () => {
            const wrapper = shallow(
                <Button color="test" href="test" name="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<a className="btn btn-test" href="test" name="test" role="button"/>)).toEqual(true);
        });

        it("renders a disabled button inside an anchor tag when prop href and disabled is provided", () => {
            const wrapper = shallow(
                <Button color="test" href="test" disabled={true} />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<a className="btn btn-test" href="test" disabled={true} role="button"/>)).toEqual(true);
        });

        it("renders a button inside an anchor tag with attribute data-px-loader='true' when prop href and loader is provided", () => {
            const wrapper = shallow(
                <Button color="test" href="test" loader={true} />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<a className="btn btn-test" href="test" data-px-loader={true} role="button"/>)).toEqual(true);
        });

        it("renders a button with icon inside an anchor tag when prop href and icon is provided", () => {
            const wrapper = shallow(
                <Button color="test" href="test" icon="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<i className="material-icons">test</i>)).toEqual(true);
        });

        it("renders a button with icon and label inside a span inside an anchor tag when prop href, label and icon is provided", () => {
            const wrapper = shallow(
                <Button color="test" href="test" icon="test" label="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<i className="material-icons">test</i>)).toEqual(true);
            expect(wrapper.contains(<span>test</span>)).toEqual(true);
        });
    });

    describe("Input tag:", () => {
        it("renders a button inside an input tag and defaults to type='button' when prop input is provided", () => {
            const wrapper = shallow(
                <Button color="test" input={true} />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<input type="button" className="btn btn-test" />)).toEqual(true);
        });

        it("renders an outline button inside an input tag when prop input and outline is provided", () => {
            const wrapper = shallow(
                <Button color="test" input={true} outline={true} />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<input type="button" className="btn btn-outline-test" />)).toEqual(true);
        });

        it("renders a button with specified size inside an input tag when prop input and size is provided", () => {
            const wrapper = shallow(
                <Button color="test" input={true} size="size-test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<input type="button" className="btn btn-test btn-size-test" />)).toEqual(true);
        });

        it("renders a loading button inside an input tag when prop input and loading is provided", () => {
            const wrapper = shallow(
                <Button color="test" input={true} loading={true} />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<input type="button" className="btn btn-test loading" />)).toEqual(true);
        });

        it("renders a full width button inside an input tag when prop input and fullWidth is provided", () => {
            const wrapper = shallow(
                <Button color="test" input={true} fullWidth={true} />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<input type="button" className="btn btn-test btn-block" />)).toEqual(true);
        });

        it("renders a button with class pull-right inside an input tag when prop input and pullRight is provided", () => {
            const wrapper = shallow(
                <Button color="test" input={true} pullRight={true} />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<input type="button" className="btn btn-test pull-right" />)).toEqual(true);
        });

        it("renders a button with class active inside an input tag when prop input and active is provided", () => {
            const wrapper = shallow(
                <Button color="test" input={true} active={true} />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<input type="button" className="btn btn-test active" />)).toEqual(true);
        });

        it("renders a button with the specified type inside an input tag when prop input and type is provided", () => {
            const wrapper = shallow(
                <Button color="test" input={true} type="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<input type="test" className="btn btn-test" />)).toEqual(true);
        });

        it("renders a button with the specified id inside an input tag when prop input and id is provided", () => {
            const wrapper = shallow(
                <Button color="test" input={true} id="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<input type="button" id="test" className="btn btn-test" />)).toEqual(true);
        });

        it("renders a button with the specified name inside an input tag when prop input and name is provided", () => {
            const wrapper = shallow(
                <Button color="test" input={true} name="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<input type="button" name="test" className="btn btn-test" />)).toEqual(true);
        });

        it("renders a disabled button inside an input tag when prop input and disabled is provided", () => {
            const wrapper = shallow(
                <Button color="test" input={true} disabled={true} />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<input type="button" disabled={true} className="btn btn-test" />)).toEqual(true);
        });

        it("renders a button inside an input tag with attribute data-px-loader='true' when prop input and loader is provided", () => {
            const wrapper = shallow(
                <Button color="test" input={true} loader={true} />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<input type="button" data-px-loader={true} className="btn btn-test" />)).toEqual(true);
        });

        it("renders a button inside an input tag with value attribute when prop input and value is provided", () => {
            const wrapper = shallow(
                <Button color="test" input={true} value="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<input type="button" value="test" className="btn btn-test" />)).toEqual(true);
        });
    });

    describe("Button tag:", () => {
        it("renders a default button and defaults to type='button' when no type prop is provided", () => {
            const wrapper = shallow(
                <Button color="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<button type="button" className="btn btn-test"></button>)).toEqual(true);
        });

        it("renders a button with a label when prop label is provided", () => {
            const wrapper = shallow(
                <Button color="test" label="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<button type="button" className="btn btn-test">test</button>)).toEqual(true);
        });

        it("renders an outline button when prop outline is provided", () => {
            const wrapper = shallow(
                <Button color="test" outline={true} />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<button type="button" className="btn btn-outline-test"></button>)).toEqual(true);
        });

        it("renders a button with specified size when prop size is provided", () => {
            const wrapper = shallow(
                <Button color="test" size="size-test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<button type="button" className="btn btn-test btn-size-test"></button>)).toEqual(true);
        });

        it("renders a loading button with when prop loading is provided", () => {
            const wrapper = shallow(
                <Button color="test" loading={true} />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<button type="button" className="btn btn-test loading"></button>)).toEqual(true);
        });

        it("renders a full width button with when prop fullWidth is provided", () => {
            const wrapper = shallow(
                <Button color="test" fullWidth={true} />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<button type="button" className="btn btn-test btn-block"></button>)).toEqual(true);
        });

        it("renders a button with class pull-right when prop pullRight is provided", () => {
            const wrapper = shallow(
                <Button color="test" pullRight={true} />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<button type="button" className="btn btn-test pull-right"></button>)).toEqual(true);
        });

        it("renders a button with class active when prop active is provided", () => {
            const wrapper = shallow(
                <Button color="test" active={true} />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<button type="button" className="btn btn-test active"></button>)).toEqual(true);
        });

        it("renders a button with the specified type when prop type is provided", () => {
            const wrapper = shallow(
                <Button color="test" type="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<button type="test" className="btn btn-test"></button>)).toEqual(true);
        });

        it("renders a button with the specified id when prop id is provided", () => {
            const wrapper = shallow(
                <Button color="test" id="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<button type="button" id="test" className="btn btn-test"></button>)).toEqual(true);
        });

        it("renders a button with the specified name when prop name is provided", () => {
            const wrapper = shallow(
                <Button color="test" name="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<button type="button" name="test" className="btn btn-test"></button>)).toEqual(true);
        });

        it("renders a disabled button when prop disabled is provided", () => {
            const wrapper = shallow(
                <Button color="test" disabled={true} />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<button type="button" disabled={true} className="btn btn-test"></button>)).toEqual(true);
        });

        it("renders a button with the attribute data-px-loader='true' when prop loader is provided", () => {
            const wrapper = shallow(
                <Button color="test" loader={true} />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<button type="button" data-px-loader={true} className="btn btn-test"></button>)).toEqual(true);
        });

        it("renders a button with an icon when prop icon is provided", () => {
            const wrapper = shallow(
                <Button color="test" icon="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<i className="material-icons">test</i>)).toEqual(true);
        });

        it("renders a button with icon and label inside a span when prop icon and label is provided", () => {
            const wrapper = shallow(
                <Button color="test" icon="test" label="test" />
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<i className="material-icons">test</i>)).toEqual(true);
            expect(wrapper.contains(<span>test</span>)).toEqual(true);
        });
    });
});
