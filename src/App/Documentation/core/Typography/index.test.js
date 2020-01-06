/* eslint-disable babel/new-cap */
import React from "react";
import { shallow } from "enzyme";

import Typography, { ResourcesTypography, Fonts, Headings, HeroTitle, Lead, Inline, TextUtilities, Abbreviations, Blockquotes, AkkuratMono } from "./index";

describe("Core: Typography", () => {
    it("is defined", () => {
        expect(Typography).toBeDefined();
    });

    it("renders", () => {
        const wrapper = shallow(<Typography />);

        expect(wrapper).toMatchSnapshot();
    });

    describe("ResourcesTypography", () => {
        it("is defined", () => {
            expect(ResourcesTypography).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<ResourcesTypography />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Fonts", () => {
        it("is defined", () => {
            expect(Fonts).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Fonts />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Headings", () => {
        it("is defined", () => {
            expect(Headings).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Headings />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("HeroTitle", () => {
        it("is defined", () => {
            expect(HeroTitle).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<HeroTitle />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Lead", () => {
        it("is defined", () => {
            expect(Lead).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Lead />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Inline", () => {
        it("is defined", () => {
            expect(Inline).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Inline />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Text Utilities", () => {
        it("is defined", () => {
            expect(TextUtilities).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<TextUtilities />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Abbreviations", () => {
        it("is defined", () => {
            expect(Abbreviations).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Abbreviations />);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("Blockquotes", () => {
        it("is defined", () => {
            expect(Blockquotes).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<Blockquotes />);

            if (Blockquotes().props.children) {
                Blockquotes().props.children.map(Child => {
                    const wrapper = shallow(<Child.type />);

                    expect(wrapper).toMatchSnapshot();
                });
            }

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe("AkkuratMono", () => {
        it("is defined", () => {
            expect(AkkuratMono).toBeDefined();
        });

        it("renders", () => {
            const wrapper = shallow(<AkkuratMono />);

            expect(wrapper).toMatchSnapshot();
        });
    });
});
