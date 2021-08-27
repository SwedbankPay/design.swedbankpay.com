import React from "react";
import { shallow } from "enzyme";

import Loaders, { Overview} from "./index";

describe("Documentation: Loaders", () => {
    it("is defined", () => {
        expect(Loaders).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Loaders />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("Overview", () => {
        it("is defined", () => {
            expect(Overview).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Overview />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
