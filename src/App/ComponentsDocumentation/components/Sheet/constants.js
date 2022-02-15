import React from "react";
import Sheet from "@components/Sheet";

import InputGroup from "@components/InputGroup";
import Checkbox from "@components/FormComponents/Checkbox";

const SheetButton = ({ footer }) => (
    <>
        {footer ?
            <div>
                <button className="btn btn-primary" data-sheet-open={"demo-sheet-footer"}>Open sheet</button>
                <Sheet id="demo-sheet-footer" footer={true} title="Title">
                    <p>This is the sheet component. It can contain anything you want. Create a local component and replace this placeholder content component with it.</p>
                    <InputGroup type="text" label="Input label" id="input-showcase-example" placeholder="Placeholder text" />
                    <InputGroup type="text" label="Input label" id="input-showcase-example" placeholder="Placeholder text" />
                    <InputGroup type="text" label="Input label" id="input-showcase-example" placeholder="Placeholder text" />
                    <Checkbox label="Checkbox label" name="checkbox-group-example" />
                </Sheet>
            </div>
            :
            <>
                <button className="btn btn-primary" data-sheet-open={"demo-sheet"}>Open sheet</button>
                <Sheet id="demo-sheet" footer={false} title="Title">
                    <p>This is the sheet component. It can contain anything you want. Create a local component and replace this placeholder content component with it.</p>
                    <InputGroup type="text" label="Input label" id="input-showcase-example" placeholder="Placeholder text" />
                    <InputGroup type="text" label="Input label" id="input-showcase-example" placeholder="Placeholder text" />
                    <InputGroup type="text" label="Input label" id="input-showcase-example" placeholder="Placeholder text" />
                    <Checkbox label="Checkbox label" name="checkbox-group-example" />
                </Sheet>
            </>
        }
    </>
);

export const sheetShowCase = {
    id: "no-tabs",
    elements: [
        {
            component: <SheetButton id="sheet-showcase"/>,
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
