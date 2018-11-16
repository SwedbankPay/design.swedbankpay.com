import React, { Component } from "react";

import { ComponentPreview, DocToc, Icon, Property } from "#";
import { sheet } from "$/px-script/main";

const Example = () => (
    <>
        <h2 id="example">Example</h2>
        <p>Example sheet...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="sheet" id="demo-sheet">
                <section>{"\n"}
                    <a href="#" className="sheet-close">{"\n\t\t\t"}
                        <Icon icon="close" />{"\n\t\t"}
                    </a>
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
                </section>
            </div>{"\n"}
            <button className="btn btn-primary" type="button" data-sheet-open="demo-sheet">Open sheet</button>
        </ComponentPreview>
    </>
);

const UsageWithJavascript = () => (
    <>
        <h2 id="usage-with-javascript">Usage with javascript</h2>
        <p>To programmatically open a sheet, use <Property value={"px.sheet.open(\"SHEET_ID\")"} />.</p>
        <p>To programmatically close a sheet, use <Property value={"px.sheet.close(\"SHEET_ID\")"} />.</p>
    </>
);

const SheetText = () => (
    <div className="col-lg-10 doc-body">
        <p className="lead">Sheet...</p>
        <Example />
        <UsageWithJavascript />
    </div>
);

class Sheet extends Component {
    componentDidMount () {
        sheet.init();
    }

    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <SheetText />
                    <DocToc component={SheetText} />
                </div>
            </div>
        );
    }
}

export default Sheet;

/* For testing */
export { Example, UsageWithJavascript, SheetText };
