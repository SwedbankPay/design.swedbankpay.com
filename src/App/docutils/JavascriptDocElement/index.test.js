import React from "react";
import { shallow } from "enzyme";

import JavascriptDocElement from "./index";

describe("Utilities: JavascriptDocElement", () => {
    it("is defined", () => {
        expect(JavascriptDocElement).toBeDefined();
    });

    it("renders", () => {
        const mockCode = <>test code</>;
        const mockDescription = <>test description</>;
        const wrapper = shallow(<JavascriptDocElement code={mockCode} description={mockDescription} />);

        expect(wrapper).toMatchSnapshot();
    });
});
