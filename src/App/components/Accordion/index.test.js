import React from "react";
import { shallow } from "enzyme";

import Accordion from "./index";

describe("Component: Accordion", () => {

    const items = [
        {
            id: "exp-1",
            title: "My title",
            content: "Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit consectetur aliqua officia Lorem elit. Cupidatat ea tempor ut esse. Aliquip exercitation in nisi reprehenderit anim Lorem. Excepteur nostrud officia irure tempor aute ipsum. Voluptate nisi incididunt proident enim reprehenderit fugiat fugiat magna sit reprehenderit Lorem anim. Aute commodo cillum nisi consectetur amet eiusmod do tempor incididunt anim."
        },
        {
            id: "exp-2",
            title: "My title",
            content: "Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit consectetur aliqua officia Lorem elit. Cupidatat ea tempor ut esse. Aliquip exercitation in nisi reprehenderit anim Lorem. Excepteur nostrud officia irure tempor aute ipsum. Voluptate nisi incididunt proident enim reprehenderit fugiat fugiat magna sit reprehenderit Lorem anim. Aute commodo cillum nisi consectetur amet eiusmod do tempor incididunt anim."
        },
        {
            id: "exp-3",
            title: "My title",
            content: "Proident cupidatat irure excepteur id minim dolore mollit amet reprehenderit consectetur aliqua officia Lorem elit. Cupidatat ea tempor ut esse. Aliquip exercitation in nisi reprehenderit anim Lorem. Excepteur nostrud officia irure tempor aute ipsum. Voluptate nisi incididunt proident enim reprehenderit fugiat fugiat magna sit reprehenderit Lorem anim. Aute commodo cillum nisi consectetur amet eiusmod do tempor incididunt anim."
        }
    ];

    it("is defined", () => {
        expect(Accordion).toBeDefined();
    });

    it("renders with correct number of accordions", () => {
        const wrapper = shallow(<Accordion items={items} />);
        const accordions = wrapper.find(".accordion");

        expect(wrapper).toMatchSnapshot();
        expect(accordions.length).toEqual(items.length);
    });
});
