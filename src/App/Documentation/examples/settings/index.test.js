import React from "react";
import { shallow } from "enzyme";

import Settings, { SettingsHeader, SettingsBasic, SettingsEmailNotification, SettingsDescription } from "./index";

describe("Examples: Settings", () => {
    it("is defined", () => {
        expect(Settings).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Settings />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("SettingsHeader", () => {
        it("is defined", () => {
            expect(SettingsHeader).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<SettingsHeader />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("SettingsBasic", () => {
        it("is defined", () => {
            expect(SettingsBasic).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<SettingsBasic />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("SettingsEmailNotification", () => {
        it("is defined", () => {
            expect(SettingsEmailNotification).toBeDefined();
        });

        it("renders", () => {
            const mockEmailNotif = true;
            const mockToggleEmailNotif = jest.fn();
            const wrapper = shallow(<SettingsEmailNotification emailNotif={mockEmailNotif} toggleEmailNotif={mockToggleEmailNotif} />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("SettingsDescription", () => {
        it("is defined", () => {
            expect(SettingsDescription).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<SettingsDescription />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
