import React from "react";
import { shallow } from "enzyme";

import Colors, { TextColors, BackgroundColors, ColorsText } from "./index";

describe("Utilities: Colors", () => {
    it("is defined", () => {
        expect(Colors).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Colors />
        );

        expect(wrapper).toMatchSnapshot();
    });

    it("TextColors renders", () => {
        const wrapper = shallow(
            <TextColors />
        );

        expect(wrapper).toMatchSnapshot();
    });

    it("BackgroundColors renders", () => {
        const wrapper = shallow(
            <BackgroundColors />
        );

        expect(wrapper).toMatchSnapshot();
    });

    it("ColorsText renders", () => {
        const wrapper = shallow(
            <ColorsText />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
