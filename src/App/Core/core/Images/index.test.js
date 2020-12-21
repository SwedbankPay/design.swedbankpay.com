import React from "react";
import { shallow } from "enzyme";

import Images, { ImagesLink } from "./index";

describe("Resources: Images", () => {
    it("is defined", () => {
        expect(Images).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Images />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("ImagesLink", () => {
        it("is defined", () => {
            expect(ImagesLink).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ImagesLink />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
