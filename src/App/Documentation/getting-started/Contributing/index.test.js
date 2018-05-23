/* eslint-disable babel/new-cap */
import React from "react";
import { shallow } from "enzyme";

import Contributing, { CreatingYourComponent, CreateADocumentationPage, AddComponentToRoutes, AddingStyles, AddingJavaScript, ContributingText } from "./index";

describe("GettingStarted: Contributing", () => {
    it("is defined", () => {
        expect(Contributing).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(
            <Contributing />
        );

        expect(wrapper).toMatchSnapshot();
    });

    describe("Creating Your Component", () => {
        it("is defined", () => {
            expect(CreatingYourComponent).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <CreatingYourComponent />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Create A Documentation Page", () => {
        it("is defined", () => {
            expect(CreateADocumentationPage).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <CreateADocumentationPage />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Add Component To Routes", () => {
        it("is defined", () => {
            expect(AddComponentToRoutes).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <AddComponentToRoutes />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Adding Styles", () => {
        it("is defined", () => {
            expect(AddingStyles).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <AddingStyles />
            );

            if (AddingStyles().props.children) {
                AddingStyles().props.children.map(Child => {
                    const wrapper = shallow(
                        <Child.type />
                    );

                    expect(wrapper).toMatchSnapshot();
                });
            }

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Adding JavaScript", () => {
        it("is defined", () => {
            expect(AddingJavaScript).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <AddingJavaScript />
            );

            if (AddingJavaScript().props.children) {
                AddingJavaScript().props.children.map(Child => {
                    const wrapper = shallow(
                        <Child.type />
                    );

                    expect(wrapper).toMatchSnapshot();
                });
            }

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Contributing Text", () => {
        it("is defined", () => {
            expect(ContributingText).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(
                <ContributingText />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });
});
