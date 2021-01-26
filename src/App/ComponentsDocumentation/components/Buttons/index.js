import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import ButtonComponent from "@components/Button";
import Alert from "@components/Alert";
import CodeTags from "@components/CodeTags";

import { overviewButtons, destructiveButtons } from "./constants";
import { Link } from "react-router-dom";

const basename = process.env.basename;

const Overview = () => (
    <>
        <h2 id="overview">Which button to use?</h2>
        <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={overviewButtons} codeFigure />
    </>
);

const DestructiveButton = () => (
    <>
        <h2 id="destructive-button">Destructive button</h2>
        <p>
            Only use warning buttons for actions with serious destructive consequences that cannot be easily recovered or undone by a user.
            For example, permanently deleting an account.
        </p>
        <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={destructiveButtons} codeFigure />

        <h3>How to use destructive buttons</h3>

        <div className="row">
            <div className="col-lg-6">
                <div className="slab slab-plain slab-border-success pb-5 h-100">
                    <h4>Do</h4>
                    <div className="d-flex justify-content-center mt-4 mb-4">
                        <img src={`${basename}img/documentation/buttons/dos-guiding.png`} className="w-50"/>
                    </div>
                    Use the <b>Guiding Destructive Buttons</b> to initiate a destructive action

                    <div className="d-flex justify-content-center mt-5 mb-4">
                        <img src={`${basename}img/documentation/buttons/dos.png`} className="w-75"/>
                    </div>
                    Use the <b>Executive Destructive Buttons</b> a contained space as a final destructive call to action
                </div>
            </div>
            <div className="col-lg-6">
                <div className="slab slab-plain slab-border-error pb-5 h-100">
                    <h4>{"Don't"}</h4>
                    <div className="d-flex justify-content-center mt-4 mb-4">
                        <img src={`${basename}img/documentation/buttons/donts-executive.png`} className="w-50"/>
                    </div>
                    Avoid using the <b>Executive Destructive Buttons</b> to initiate a destructive action

                    <div className="d-flex justify-content-center mt-5 mb-4">
                        <img src={`${basename}img/documentation/buttons/donts.png`} className="w-75"/>
                    </div>
                    Avoid using multiple <b>Executive Destructive Buttons</b> in the same userflow
                </div>
            </div>
        </div>
    </>
);

const NamingButtons = () => (
    <>
        <h2 id="naming-buttons">Naming button labels</h2>
        <p>
            {"Buttons should always lead with a strong verb that encourages action. Provide enough context for users by using the {verb} + {noun} content \
            formula instead of using “Yes”, “Confirm”, “Cancel” – except when it comes to the Text Button, which commonly uses “Cancel”. \
            To avoid buttons breaking in smaller interfaces due to long names, always check that the button looks OK in a mobile view. Generally, \
            try to keep the number of characters fairly low to provide more clarity."}
        </p>

        <h4>Unique naming</h4>
        <p>
            {
                "Avoid using the same name for multiple buttons in the same user flow. It’s particularly hard for users using a screen reader to tell four “Next” buttons one\
                after another apart. \
                When combining an \"Executive Destructive Button\" with a \"Text Button\" be careful to not name both buttons “Cancel”.\
                Try to separate the text as much as you can to improve the user experience, providing the user from accidentally making the wrong choice."
            }
        </p>

        <h3>How to name destructive buttons</h3>
        <div className="row">
            <div className="col-lg-6">
                <div className="slab slab-plain slab-border-success pb-5 h-100">
                    <h4>Do</h4>

                    <div className="d-flex justify-content-center mt-4 mb-4">
                        <img src={`${basename}img/documentation/buttons/dos-naming.png`} className="w-75"/>
                    </div>
                    Make sure to differentiate the naming so that the user understands the difference between the actions the user can take.
                </div>
            </div>
            <div className="col-lg-6">
                <div className="slab slab-plain slab-border-error pb-5 h-100">
                    <h4>{"Don't"}</h4>

                    <div className="d-flex justify-content-center mt-4 mb-4">
                        <img src={`${basename}img/documentation/buttons/donts-naming.png`} className="w-75"/>
                    </div>
                    Avoid naming an <b>Executive Destructive Button</b> poorly – the button cancels the payment of the invoice and not the invoice, which isn’t clear at all.
                </div>
            </div>
        </div>
    </>
);

const CombiningButtons = () => (
    <>
        <h2 id="combining-buttons">Combining buttons</h2>
        <p>
            When using buttons next to each other, always wrap them in a <CodeTags type="secondary" code=".button-group" /> and make sure to use 8px spacing
            between the buttons, both in horizontally and vertically groupings. Strive not to use multiple buttons of the same kind –
            instead, use <Link to="/components/links#action-link">Action links</Link>.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="button-group">{"\n"}
                <ButtonComponent type="primary" label="Activate" />{"\n"}
                <ButtonComponent type="secondary" label="Disable" />{"\n"}
            </div>
        </ComponentPreview>

        <h3>{"Dos and don'ts"}</h3>
        <div className="slab slab-plain slab-border-success mb-5">
            <h4>Do</h4>
            <div className="row">
                <div className="col-lg-6">
                    <img src={`${basename}img/documentation/buttons/dos1.png`} className="w-100 mb-4"/>
                    <p>Place buttons in a hierarchly correct order and combine different kinds of button</p>
                </div>
                <div className="col-lg-6">
                    <img src={`${basename}img/documentation/buttons/dos3.png`} className="w-100 mb-4"/>
                    <p>Place buttons side by side in Desktop view</p>
                </div>
                <div className="col-lg-6">
                    <img src={`${basename}img/documentation/buttons/dos2.png`} className="w-100 mb-4"/>
                    <p>Use the <b>Text Button</b> as an discrete option to cancel</p>
                </div>
                <div className="col-lg-6">
                    <img src={`${basename}img/documentation/buttons/dos4.png`} className="w-100 mb-4"/>
                    <p>Combine <b>Executive Destructive Buttons</b> with normal <b>Text/Link Buttons</b></p>
                </div>
            </div>
        </div>

        <div className="slab slab-plain slab-border-error">
            <h4>{"Don't"}</h4>
            <div className="row">
                <div className="col-lg-6">
                    <img src={`${basename}img/documentation/buttons/donts1.png`} className="w-100 mb-4"/>
                    <p>Use the <b>Secondary Button</b> (and/or the <b>Text Button</b>) above the <b>Primary Button</b></p>
                </div>
                <div className="col-lg-6">
                    <img src={`${basename}img/documentation/buttons/donts2.png`} className="w-100 mb-4"/>
                    <p>List primary actions and/or combine <b>Primary Button</b> and <b>BankID Button</b></p>
                </div>
                <div className="col-lg-6">
                    <img src={`${basename}img/documentation/buttons/donts3.png`} className="w-100 mb-4"/>
                    <p>Use and combine destructive buttons the same way as normal buttons</p>
                </div>
                <div className="col-lg-6">
                    <img src={`${basename}img/documentation/buttons/donts4.png`} className="w-100 mb-4"/>
                    <p>Combine normal buttons and destructive buttons</p>
                </div>
            </div>
        </div>
    </>
);

const DeveloperDocumentation = () => (
    <>
        <h2 id="developer-documentation">Developer documentation</h2>
        <h3>Active state</h3>
        <p>Buttons will appear pressed (with inset shadow) when active.
            <b>There’s no need to add a class to <CodeTags type="primary" code={"<button>"} />s as they use a pseudo-class.</b> However,
            you can still force the same active appearance with <CodeTags type="secondary" code=".active" /> (and
            include the <CodeTags type="secondary" code={"aria-pressed=\"true\""} /> attribute) should you need to replicate the state programmatically.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent href="#" active type="primary" label="Primary" />{"\n"}
                <ButtonComponent href="#" active type="secondary" label="Secondary" />{"\n"}
                <ButtonComponent active type="guiding-destructive" label="Guiding destructive" />{"\n"}
                <ButtonComponent active type="executive-destructive" label="Executive destructive" />{"\n"}

            </div>
        </ComponentPreview>

        <h3>Disabled state</h3>
        <p>Make buttons look inactive by adding the <CodeTags type="secondary" code="disabled" /> boolean attribute to any <CodeTags type="primary" code={"<button>"} /> element.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent disabled type="primary" label="Primary" />{"\n"}
                <ButtonComponent disabled type="secondary" label="Secondary" />{"\n"}
                <ButtonComponent disabled type="link" label="Text/Link" />{"\n"}
                <ButtonComponent disabled type="guiding-destructive" label="Guiding destructive" />{"\n"}
                <ButtonComponent disabled type="link-destructive" label="Link destructive" />{"\n"}
                <ButtonComponent disabled type="executive-destructive" label="Executive destructive" />{"\n"}

            </div>
        </ComponentPreview>
        <p>Disabled buttons using the <CodeTags type="primary" code={"<a>"} /> element behave a bit different:</p>
        <ul>
            <li><CodeTags type="primary" code={"<a>"} />s do not support the <CodeTags type="secondary" code="disabled" /> attribute, so you must add the <CodeTags type="secondary" code=".disabled" /> class to make it visually appear disabled.</li>
            <li>Some future-friendly styles are included to disable all <CodeTags type="secondary" code="pointer-events" /> on anchor buttons. In browsers which support that property, you won’t see the disabled cursor at all.</li>
            <li>Disabled buttons should include the <CodeTags type="secondary" code={"aria-disabled=\"true\""} /> attribute to indicate the state of the element to assistive technologies.</li>
        </ul>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent href="#" disabled type="primary" label="Primary" />{"\n"}
                <ButtonComponent href="#" disabled type="secondary" label="Secondary" />{"\n"}
            </div>
        </ComponentPreview>
        <Alert type="warning">
            <h5>Link functionality caveat</h5>
            <p>The <CodeTags type="secondary" code=".disabled" /> class uses <CodeTags type="secondary" code="pointer-events: none" /> to try to disable the link functionality of <CodeTags type="primary" code={"<a>"} />s, but that CSS property is not yet standardized. In addition, even in browsers that do support <CodeTags type="secondary" code="pointer-events: none" />, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, add a <CodeTags type="secondary" code={"tabindex=\"-1\""} /> attribute on these links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.</p>
        </Alert>

        <h3>Usage with other tags</h3>
        <p>The <CodeTags type="secondary" code=".btn" /> classes are designed to be used with the <CodeTags type="primary" code={"<button>"} /> element.
        However, you can also use these classes on <CodeTags type="primary" code={"<a>"} /> or <CodeTags type="primary" code={"<input>"} /> elements
        (though some browsers may apply a slightly different rendering).</p>
        <p>When using button classes on <CodeTags type="primary" code={"<a>"} /> elements that are used to trigger in-page
        functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given
        a <CodeTags type="secondary" code={"role=\"button\""} /> to appropriately convey their purpose to assistive technologies such as screen readers.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent type="primary" label="Anchor" href="#" />{"\n"}
                <ButtonComponent type="primary" label="Button" />{"\n"}
                <ButtonComponent type="primary" input value="Input" btnType="button" />{"\n"}
                <ButtonComponent type="primary" input value="Submit" btnType="submit" />{"\n"}
                <ButtonComponent type="primary" input value="Reset" btnType="reset" />{"\n"}
            </div>
        </ComponentPreview>
    </>
);

const Buttons = () => (
    <DocContainer docToc>
        <p>
            Buttons communicate actions that users can take. The intention of a button should be clear and predictable.
            Users should be able to anticipate what will happen when they click on a button. Buttons are typically placed throughout your UI, in places like:
        </p>
        <ul className="list list-bullet">
            <li>Dialogs</li>
            <li>Modals</li>
            <li>Forms</li>
            <li>Cards</li>
            <li>Toolbars</li>
        </ul>
        <Overview />
        <DestructiveButton />
        <NamingButtons />
        <CombiningButtons />
        <DeveloperDocumentation />
    </DocContainer>
);

export default Buttons;

/* for testing */
export { Overview, DestructiveButton, NamingButtons, CombiningButtons, DeveloperDocumentation };
