import React from "react";
import { shallow } from "enzyme";

import Datepickers, { SimpleDatepicker, InitialValue, CustomFormat, IncludeTime, ShowingMultipleMonths, DateRange, Options } from "./index";

describe("Documentation: Datepickers", () => {
    it("is defined", () => {
        expect(Datepickers).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Datepickers />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("SimpleDatepicker", () => {
        it("is defined", () => {
            expect(SimpleDatepicker).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<SimpleDatepicker />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("InitialValue", () => {
        it("is defined", () => {
            expect(InitialValue).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <InitialValue />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("CustomFormat", () => {
        it("is defined", () => {
            expect(CustomFormat).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <CustomFormat />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("IncludeTime", () => {
        it("is defined", () => {
            expect(IncludeTime).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <IncludeTime />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("ShowingMultipleMonths", () => {
        it("is defined", () => {
            expect(ShowingMultipleMonths).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ShowingMultipleMonths />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("DateRange", () => {
        it("is defined", () => {
            expect(DateRange).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <DateRange />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Options", () => {
        it("is defined", () => {
            expect(Options).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Options />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
