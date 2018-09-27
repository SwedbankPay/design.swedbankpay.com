import React from "react";
import { shallow } from "enzyme";

import Favicons, { OurFavicon, Usage, FaviconsText } from "./index";

describe("Core: Favicons", () => {
    it("is defined", () => {
        expect(Favicons).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Favicons />);

        expect(wrapper).toMatchSnapshot();
    });

    it("OurFavicon renders", () => {
        const wrapper = shallow(<OurFavicon />);

        expect(wrapper).toMatchSnapshot();
    });

    it("Usage renders", () => {
        const wrapper = shallow(<Usage />);

        expect(wrapper).toMatchSnapshot();
    });

    it("FaviconsText renders", () => {
        const wrapper = shallow(<FaviconsText />);

        expect(wrapper).toMatchSnapshot();
    });
});
