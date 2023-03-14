/* eslint-disable babel/new-cap */
import React from "react";
import renderer from "react-test-renderer";
import Typography, { Typefaces, Desktop, Mobile, Code, Headings, HeroTitle, Lead, Inline, TextUtilities, Abbreviations, Blockquotes, AkkuratMono } from "./index";

describe("Core: Typography", () => {
    it("is defined", () => {
        expect(Typography).toBeDefined();
    });

    describe("Typefaces", () => {
        it("is defined", () => {
            expect(Typefaces).toBeDefined();
        });

        it("renders", () => {
            const typefaces = renderer.create(<Typefaces />);

            expect(typefaces.toJSON()).toMatchSnapshot();
        });
    });

    describe("Desktop", () => {
        it("is defined", () => {
            expect(Desktop).toBeDefined();
        });
    });

    describe("Mobile", () => {
        it("is defined", () => {
            expect(Mobile).toBeDefined();
        });
    });

    describe("Code", () => {
        it("is defined", () => {
            expect(Code).toBeDefined();
        });
    });

    describe("Headings", () => {
        it("is defined", () => {
            expect(Headings).toBeDefined();
        });

        it("renders", () => {
            const headings = renderer.create(<Headings />);

            expect(headings.toJSON()).toMatchSnapshot();
        });
    });

    describe("HeroTitle", () => {
        it("is defined", () => {
            expect(HeroTitle).toBeDefined();
        });

        it("renders", () => {
            const heroTitle = renderer.create(<HeroTitle />);

            expect(heroTitle.toJSON()).toMatchSnapshot();
        });
    });

    describe("Lead", () => {
        it("is defined", () => {
            expect(Lead).toBeDefined();
        });

        it("renders", () => {
            const lead = renderer.create(<Lead />);

            expect(lead.toJSON()).toMatchSnapshot();
        });
    });

    describe("Inline", () => {
        it("is defined", () => {
            expect(Inline).toBeDefined();
        });

        it("renders", () => {
            const inline = renderer.create(<Inline />);

            expect(inline.toJSON()).toMatchSnapshot();
        });
    });

    describe("Text Utilities", () => {
        it("is defined", () => {
            expect(TextUtilities).toBeDefined();
        });
    });

    describe("Abbreviations", () => {
        it("is defined", () => {
            expect(Abbreviations).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<Abbreviations />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("Blockquotes", () => {
        it("is defined", () => {
            expect(Blockquotes).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<Blockquotes />);

            if (Blockquotes().props.children) {
                Blockquotes().props.children.map(Child => {
                    const wrapper = renderer.create(<Child.type />);

                    //  eslint-disable-next-line jest/no-conditional-expect
                    expect(wrapper.toJSON()).toMatchSnapshot();
                });
            }

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });

    describe("AkkuratMono", () => {
        it("is defined", () => {
            expect(AkkuratMono).toBeDefined();
        });

        it("renders", () => {
            const wrapper = renderer.create(<AkkuratMono />);

            expect(wrapper.toJSON()).toMatchSnapshot();
        });
    });
});
