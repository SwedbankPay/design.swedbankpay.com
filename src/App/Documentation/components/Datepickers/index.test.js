import React from "react";
import { shallow } from "enzyme";

import Datepickers, { SimpleDatepicker, InitialValue, CustomFormat, IncludeTime, Required, ShowingMultipleMonths, DateRange, Options } from "./index";

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

        // TODO: Test fails due to using todays date
        // it("renders", () => {
        //     const wrapper = shallow(
        //         <InitialValue />
        //     );

        //     expect(wrapper).toMatchSnapshot();
        // });
    });

    describe("CustomFormat", () => {
        it("is defined", () => {
            expect(CustomFormat).toBeDefined();
        });

        // TODO: Test fails due to using todays date
        // it("renders", () => {
        //     const wrapper = shallow(
        //         <CustomFormat />
        //     );

        //     expect(wrapper).toMatchSnapshot();
        // });
    });

    describe("IncludeTime", () => {
        it("is defined", () => {
            expect(IncludeTime).toBeDefined();
        });

        // TODO: Test fails due to using todays date
        // it("renders", () => {
        //     const wrapper = shallow(
        //         <IncludeTime />
        //     );

        //     expect(wrapper).toMatchSnapshot();
        // });
    });

    describe("Required", () => {
        it("is defined", () => {
            expect(Required).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Required />);

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

        // TODO: Test fails due to using todays date
        // it("renders", () => {
        //     const wrapper = shallow(
        //         <DateRange />
        //     );

        //     expect(wrapper).toMatchSnapshot();
        // });
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
