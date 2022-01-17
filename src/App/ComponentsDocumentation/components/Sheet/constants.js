import React from "react";
import Sheet from "@components/Sheet";

const SheetButton = ({ footer }) => (
    <>
        <Sheet id="demo-sheet" footer={footer} title="Demonstration sheet">
            <p>This is the sheet component. It can contain anything you want.</p>
            <p>It can also contain lots of useless text, just like the text in this paragraph. Or it can contain useful info and cheats. For example if you have a math quiz coming up;</p>
            <ul className="list">
                <li><code>3 + 8 = 11</code></li>
                <li><code>36 - 22 = 14</code></li>
                <li><code>256 + 113 = 369</code></li>
                <li><code>356 - 1 = 355</code></li>
            </ul>
            <hr/>
            <form onSubmit={e => e.preventDefault()}>
                <div className="form-group">
                    <label htmlFor="full-name">Full name</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="full-name" placeholder="Enter your full name" />
                    </div>
                    <div className="help-block">Your full name</div>
                </div>
                <div className="form-group">
                    <label htmlFor="email-address">Email</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="email-address" placeholder="Enter your email" />
                    </div>
                    <div className="help-block">Email means electronic mail, not express mail</div>
                </div>
                <div className="form-group">
                    <div className="checkbox">
                        <input type="checkbox" id="subscribe-checkbox" />
                        <label htmlFor="subscribe-checkbox">Sign up to our math newsletter</label>
                    </div>
                </div>
            </form>
        </Sheet>
        <button className="btn btn-primary" data-sheet-open="demo-sheet">Open sheet</button>
    </>
);

export const sheetShowCase = {
    id: "no-tabs",
    elements: [
        {
            component: <SheetButton/>,
            options: {
                checkbox: [
                    {
                        title: "Add on",
                        inputs: [
                            {
                                id: "checkbox_sheet",
                                name: "Sticky footer",
                                value: {
                                    footer: true
                                }
                            }
                        ]
                    }
                ]
            },
            title: "Sheet",
            description: "The Sheets component appears when triggered by a user action, such as tapping a button. At large screen sizes, the sheet component enters the page from the right side of the screen and at small screen sizes, the sheet component enters the page from the bottom of the screen. It has a header with a title and close button and a main content area that can contain a number of different components. An optional feature that can useful is a sticky footer with actions."
        }
    ]
};
