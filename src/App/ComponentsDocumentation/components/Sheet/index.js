import React, { Component } from "react";

import { ComponentPreview, DocContainer, JavascriptDocs } from "@docutils";
import SheetComponent from "@components/Sheet";
import CodeTags from "@components/CodeTags";

const { sheet } = window.dg;

const Example = () => (
    <>
        <h2 id="example">Example</h2>
        <p>
            A standard sheet should display content that complements the screen’s primary content. It will close when the user clicks outside of the sheet or exits out of it in another way.
        </p>
        <p>
            Sheets can be used for a number of different things, but common use cases for a sheet are for example displaying a list of actions that affet the screen’s primary content such as filters, deletion or other
            ways to manipulate the main content. If you have a form then you could include an icon that opens said sheet to display more information about what the expected input is.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <SheetComponent id="demo-sheet">
                <h2>Sheet component</h2>
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
                    <button className="btn btn-primary" type="submit" onClick={e => e.preventDefault()}>Submit</button>
                </form>
            </SheetComponent>{"\n"}
            <button className="btn btn-primary" type="button" data-sheet-open="demo-sheet">Open sheet</button>
        </ComponentPreview>
    </>
);

const RequireAction = () => (
    <>
        <h2 id="require-action">Require action</h2>
        <p>
            To disable the listener responsible for closing the sheet when a user clicks outside, add <CodeTags type="secondary" code="data-require-action" /> to your Sheet.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <SheetComponent id="demo-sheet-1" requireAction>
                <h2>Sheet component</h2>
                <p>
                    This sheet can not be closed by clicking outside its white area.
                </p>
            </SheetComponent>{"\n"}
            <button className="btn btn-primary" type="button" data-sheet-open="demo-sheet-1">Open sheet</button>
        </ComponentPreview>
    </>
);

const JavascriptMethods = () => (
    <>
        <h2 id="javascript-methods">JavaScript methods</h2>
        <JavascriptDocs componentName="sheet"open close />
    </>
);

class Sheet extends Component {

    componentDidMount () {
        sheet.init();
    }

    render () {
        return (
            <DocContainer docToc>

                <p className="lead">
                    Sheet is a container component that is anchored on the right side of the screen and can contain a number of different things.
                </p>
                <Example />
                <RequireAction />
                <JavascriptMethods />
            </DocContainer>
        );
    }
}

export default Sheet;

/* For testing */
export { Example, RequireAction, JavascriptMethods };
