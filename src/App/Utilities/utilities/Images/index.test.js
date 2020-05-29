import React from "react";
import { shallow } from "enzyme";

import Image, { ImageFluid, ImageRounded, ImageCircle, ImageThumbnail } from "./index";

describe("Utilities: Image", () => {
    it("is defined", () => {
        expect(Image).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Image />);

        expect(wrapper).toMatchSnapshot();
    });

    it("ImageRounded renders", () => {
        const wrapper = shallow(<ImageRounded />);

        expect(wrapper).toMatchSnapshot();
    });

    it("ImageCircle renders", () => {
        const wrapper = shallow(<ImageCircle />);

        expect(wrapper).toMatchSnapshot();
    });

    it("ImageThumbnail renders", () => {
        const wrapper = shallow(<ImageThumbnail />);

        expect(wrapper).toMatchSnapshot();
    });

    it("ImageFluid renders", () => {
        const wrapper = shallow(<ImageFluid />);

        expect(wrapper).toMatchSnapshot();
    });
});
