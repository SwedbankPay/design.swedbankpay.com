import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import ButtonComponent from "@components/Button";
import Alert from "@components/Alert";
import CodeTags from "@components/CodeTags";
import Dropdown from "@components/Dropdown";
import CheckboxComponent from "@components/FormComponents/Checkbox";

import { overviewButtons, destructiveButtons } from "./constants";
import { Link } from "react-router-dom";

const basename = process.env.basename;

const Overview = () => (
    <section>
        <h2 id="overview">Button variants</h2>
        <p>There are three different sizes of buttons to choose from: xsmall, small and large. Our button variants can also be customized with icons next to the label to clarify the action. </p>
        <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={overviewButtons} codeFigure />
    </section>
);

const DestructiveButton = () => (
    <section>
        <h2 id="destructive-button">Destructive button</h2>
        <p>
            Only use warning buttons for actions with serious destructive consequences that cannot be easily recovered or undone by a user.
            For example, permanently deleting an account.
        </p>
        <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={destructiveButtons} codeFigure />

        <h3>How to use destructive buttons</h3>

        <div className="row">
            <div className="col-lg-6 col-sm-12">
                <div className="slab slab-plain slab-border-success pb-4">
                    <h4 className="mb-3 mt-0">Do</h4>
                    <div className="d-flex justify-content-center mt-4 mb-4">
                        <img className="img-fluid" src={`${basename}img/documentation/buttons/dos-guiding.png`} alt="A destructive button within a payment flow, with a guiding destructive button that reads Cancel payment."/>
                    </div>
                </div>
                <p>Use the Guiding Destructive Buttons to initiate a destructive action.</p>
            </div>
            <div className="col-lg-6 col-sm-12">
                <div className="slab slab-plain slab-border-error pb-4">
                    <h4>{"Don't"}</h4>
                    <div className="d-flex justify-content-center mt-4 mb-4">
                        <img className="img-fluid" src={`${basename}img/documentation/buttons/donts-executive.png`} alt="Destructive button within a payment flow, with an executive destructive button that reads Cancel."/>
                    </div>
                </div>
                <p>Avoid using the Executive Destructive Buttons to initiate a destructive action.</p>
            </div>
        </div>

        <div className="row mt-2">
            <div className="col-lg-6 col-sm-12">
                <div className="slab slab-plain slab-border-success pb-4">
                    <h4>Do</h4>
                    <div className="d-flex justify-content-center mt-4 mb-4">
                        <img className="img-fluid" src={`${basename}img/documentation/buttons/dos.png`} alt="Multiple destructive buttons in a payment flow. The guiding destructive button reads Cancel payment and leads to a second step with an executive destructive button that reads, Yes, cancel payment process." />
                    </div>
                </div>
                <p>Use the Executive Destructive Buttons in a contained space as a final destructive call to action.</p>
            </div>
            <div className="col-lg-6 col-sm-12">
                <div className="slab slab-plain slab-border-error pb-4">
                    <h4>Don&apos;t</h4>
                    <div className="d-flex justify-content-center mt-4 mb-4">
                        <img className="img-fluid" src={`${basename}img/documentation/buttons/donts.png`} alt="Multiple destructive buttons in a payment flow. An executive destructive button reads Cancel and leads to a second step with another executive destructive button that also reads Cancel." />
                    </div>
                </div>
                <p>Avoid using multiple Executive Destructive Buttons in the same user flow.</p>
            </div>
        </div>
    </section>
);

const ContentGuidelines = () => (
    <section>
        <h2 id="content-guidelines">Content guidelines</h2>
        <p>
            {"The intention of a button should be clear and predictable. Users should be able to anticipate what will happen when they click on a button. Buttons should always lead with a strong verb that encourages action. Provide enough context for users by using the {verb} + {noun} content formula instead of using “Yes”, “Confirm”, “Cancel” – except when it comes to the Text Button, which commonly uses “Cancel”. To avoid buttons breaking in smaller interfaces due to long names, always check that the button looks OK in a mobile view. Generally, try to keep the number of characters fairly low to provide more clarity."}
        </p>

        <h3>Unique naming</h3>
        <p>
            {
                "Avoid using the same name for multiple buttons in the same user flow. It’s particularly hard for users using a screen reader to tell four “Next” buttons one\
                after another apart. \
                When combining an \"Executive Destructive Button\" with a \"Text Button\" be careful to not name both buttons “Cancel”.\
                Try to separate the text as much as you can to improve the user experience, providing the user from accidentally making the wrong choice."
            }
        </p>
        <div className="row">
            <div className="col-lg-6 col-sm-12">
                <div className="slab slab-plain slab-border-success pb-4">
                    <h4>Do</h4>
                    <div className="d-flex justify-content-center mt-4 mb-4">
                        <img className="img-fluid" src={`${basename}img/documentation/buttons/dos-naming.png`} alt="An executive destructive button reads Yes, cancel payment process with a text destructive button that reads No, take me back." />
                    </div>
                </div>
                <p>Make sure to differentiate the naming so that the user understands the difference between the actions the user can take.</p>
            </div>
            <div className="col-lg-6 col-sm-12">
                <div className="slab slab-plain slab-border-error pb-4">
                    <h4>{"Don't"}</h4>
                    <div className="d-flex justify-content-center mt-4 mb-4">
                        <img className="img-fluid" src={`${basename}img/documentation/buttons/donts-naming.png`} alt="An executive destructive button that reads Cancel to cancel payment, and a link button that also reads Cancel."/>
                    </div>
                </div>
                <p>Avoid naming an Executive Destructive Button poorly – the button cancels the payment of the invoice and not the invoice, which isn’t clear at all.</p>
            </div>
        </div>

        <h3>How to use icons</h3>

        <div className="row">
            <div className="col-lg-6 col-sm-12">
                <div className="slab slab-plain slab-border-success pb-4">
                    <h4 className="mb-3 mt-0">Do</h4>
                    <div className="button-group flex-column align-items-center justify-content-center mt-4 mb-4">
                        <ButtonComponent className="justify-content-center w-50" type="guiding-destructive" label="Delete" icon="delete"/>
                        <ButtonComponent className="justify-content-center w-50" type="secondary" label="Edit" icon="edit"/>
                    </div>
                </div>
                <p>Use an icon to further convey the action, e.g. a trashcan icon for a delete button.</p>
            </div>
            <div className="col-lg-6 col-sm-12">
                <div className="slab slab-plain slab-border-success pb-4">
                    <h4 className="mb-3 mt-0">Do</h4>
                    <div className="button-group flex-column align-items-center justify-content-center mt-5 mb-5">
                        <Dropdown className="pt-2" label="Status" icon="keyboard_arrow_down" largePadding content={
                            <CheckboxComponent groupTitle="" name="dropdown-checkboxes-examples" options={[
                                {
                                    id: "dropdown-checkbox-overview-form-inputs-example-1",
                                    label: "Successful"
                                },
                                {
                                    id: "dropdown-checkbox-overview-form-inputs-example-2",
                                    label: "Failed"
                                },
                                {
                                    id: "dropdown-checkbox-overview-form-inputs-example-3",
                                    label: "Cancelled"
                                }
                            ]} group />}
                        />
                    </div>
                </div>
                <p>Use an arrow icon to indicate that the button will trigger a dropdown menu.</p>
            </div>
        </div>
    </section>
);

const CombiningButtons = () => (
    <section>
        <h2 id="combining-buttons">Combining buttons</h2>
        <p>
            When using buttons next to each other, always wrap them in a <CodeTags type="primary" code=".button-group" /> (to ensure internal spacing).
            <br />Strive not to use multiple buttons of the same kind.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="button-group">{"\n"}
                <ButtonComponent type="primary" label="Activate" />{"\n"}
                <ButtonComponent type="secondary" label="Disable" />{"\n"}
            </div>
        </ComponentPreview>

        <h3>How to combine buttons</h3>
        <div className="row">
            <div className="col-lg-6 col-sm-12">
                <div className="slab slab-plain slab-border-success pb-4">
                    <h4 className="mb-3 mt-0">Do</h4>
                    <div className="flex-column button-group mt-4 ">
                        <ButtonComponent className="justify-content-center" type="primary" label="Primary action"/>
                        <ButtonComponent className="justify-content-center" type="secondary" label="Secondary action"/>
                        <ButtonComponent className="justify-content-center" type="link" label="Cancel"/>
                    </div>
                </div>
                <p>Place buttons in hierarchal correct order and combine different kinds of buttons.</p>
            </div>
            <div className="col-lg-6 col-sm-12">
                <div className="slab slab-plain slab-border-success pb-5 h-75">
                    <h4 className="mb-3 mt-0">Do</h4>
                    <div className="button-group mt-4 align-items-center">
                        <ButtonComponent type="primary" label="Primary"/>
                        <ButtonComponent type="secondary" label="Secondary"/>
                    </div>
                </div>
                <p>Place buttons side by side in desktop view.</p>
            </div>
        </div>
        <div className="row mt-2">
            <div className="col-lg-6 col-sm-12">
                <div className="slab slab-plain slab-border-success pb-5">
                    <h4 className="mb-3 mt-0">Do</h4>
                    <div className="flex-column button-group mt-4">
                        <ButtonComponent className="justify-content-center" type="primary" label="Primary action"/>
                        <ButtonComponent className="justify-content-center" type="link" label="Cancel"/>
                    </div>
                </div>
                <p>Use the Link button as a discrete option to cancel.</p>
            </div>
            <div className="col-lg-6 col-sm-12">
                <div className="slab slab-plain slab-border-success pb-5">
                    <h4 className="mb-3 mt-0">Do</h4>
                    <div className="flex-column button-group mt-4 ">
                        <ButtonComponent className="justify-content-center" type="executive-destructive" label="Executive destructive action"/>
                        <ButtonComponent className="justify-content-center" type="link" label="Cancel"/>
                    </div>
                </div>
                <p>Combine Executive destructive buttons with normal Link buttons.</p>
            </div>
        </div>

        <h3>How not to combine buttons</h3>
        <div className="row">
            <div className="col-lg-6 col-sm-12">
                <div className="slab slab-plain slab-border-error pb-5">
                    <h4 className="mb-3 mt-0">Don&apos;t</h4>
                    <div className="flex-column button-group mt-4 ">
                        <ButtonComponent className="justify-content-center" type="secondary" label="Secondary action"/>
                        <ButtonComponent className="justify-content-center" type="primary" label="Primary action"/>
                    </div>
                </div>
                <p>Don&apos;t use the Secondary button and/or the Link button above the Primary button.</p>
            </div>
            <div className="col-lg-6 col-sm-12">
                <div className="slab slab-plain slab-border-error pb-5">
                    <h4 className="mb-3 mt-0">Don&apos;t</h4>
                    <div className="flex-column button-group mt-4 ">
                        <ButtonComponent className="justify-content-center" type="primary" label="Primary action"/>
                        <ButtonComponent className="justify-content-center" type="guiding-destructive" label="Destructive guiding action"/>
                    </div>
                </div>
                <p>Don&apos;t combine Primary buttons with Destructive buttons.</p>
            </div>
        </div>
        <div className="row mt-2">
            <div className="col-lg-6 col-sm-12">
                <div className="slab slab-plain slab-border-error pb-5">
                    <h4 className="mb-3 mt-0">Don&apos;t</h4>
                    <div className="flex-column button-group mt-4 ">
                        <ButtonComponent className="justify-content-center" type="executive-destructive" label="Executive destructive action"/>
                        <ButtonComponent className="justify-content-center" type="guiding-destructive" label="Destructive guiding action"/>
                        <ButtonComponent className="justify-content-center" type="link-destructive" label="Cancel"/>
                    </div>
                </div>
                <p>Don&apos;t use and combine Destructive buttons the same way as normal buttons.</p>
            </div>
            <div className="col-lg-6 col-sm-12">
                <div className="slab slab-plain slab-border-error pb-5">
                    <h4 className="mb-3 mt-0">Don&apos;t</h4>
                    <div className="flex-column button-group mt-4 ">
                        <ButtonComponent className="justify-content-center" type="primary" label="Primary action"/>
                        <ButtonComponent bankId="se" className="justify-content-center" type="primary" label="Primary action"/>
                        <ButtonComponent className="justify-content-center" type="primary" label="Primary action"/>
                    </div>
                </div>
                <p>Don&apos;t use multiple Primary buttons or combine with BankID button.</p>
            </div>
        </div>
    </section>
);

const DeveloperDocumentation = () => (
    <section>
        <h2 id="developer-documentation">Developer documentation</h2>
        <h3>Disabled state</h3>
        <p>Make buttons look inactive by adding the <CodeTags type="primary" code="disabled" /> boolean attribute to any <CodeTags type="primary" code={"<button>"} /> element.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent disabled type="primary" label="Primary" />{"\n"}
                <ButtonComponent disabled type="secondary" label="Secondary" />{"\n"}
                <ButtonComponent disabled type="link" label="Link" />{"\n"}
                <ButtonComponent disabled type="executive-destructive" label="Destructive Executive" />{"\n"}
                <ButtonComponent disabled type="guiding-destructive" label="Guiding destructive" />{"\n"}
                <ButtonComponent disabled type="link-destructive" label="Destructive link" />{"\n"}

            </div>
        </ComponentPreview>
        <h4>Disabled with <CodeTags type="primary" code={"<a>"}/> tag</h4>
        <p>Disabled buttons using the <CodeTags type="primary" code={"<a>"} /> element behave a bit different:</p>
        <ul>
            <li><CodeTags type="primary" code={"<a>"} />s do not support the <CodeTags type="secondary" code="disabled" /> attribute, so you must add the <CodeTags type="secondary" code=".disabled" /> class to make it visually appear disabled.</li>
            <li>Some future-friendly styles are included to disable all <CodeTags type="secondary" code="pointer-events" /> on anchor buttons. In browsers which support that property, you won’t see the disabled cursor at all.</li>
            <li>Disabled buttons should include the <CodeTags type="secondary" code={"aria-disabled=\"true\""} /> attribute to indicate the state of the element to assistive technologies.</li>
        </ul>
        <Alert type="informative" icon="warning" text={<p><b>Link functionality:</b> The <CodeTags type="secondary" code=".disabled" /> class uses <CodeTags type="secondary" code="pointer-events: none" /> to try to disable the link functionality of <CodeTags type="primary" code={"<a>"} />s, but that CSS property is not yet standardized. In addition, even in browsers that do support <CodeTags type="secondary" code="pointer-events: none" />, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, add a <CodeTags type="secondary" code={"tabindex=\"-1\""} /> attribute on these links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.</p>} />

        <h3>Loading state</h3>
        <p>Use the loading state to show users their action is processing by adding the <CodeTags type="primary" code={".loading"}/> class to the <CodeTags type="primary" code={"<button>"}/> element, and the <CodeTags type="primary" code={"disabled"}/> attribute.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent disabled loading type="primary" label="Primary" />{"\n"}
                <ButtonComponent disabled loading type="secondary" label="Secondary" />{"\n"}
                <ButtonComponent disabled loading type="link" label="Link" />{"\n"}
                <ButtonComponent disabled loading type="executive-destructive" label="Destructive executive" />{"\n"}
                <ButtonComponent disabled loading type="guiding-destructive" label="Destructive guiding" />{"\n"}
                <ButtonComponent disabled loading type="link-destructive" label="Destructive link" />{"\n"}

            </div>
        </ComponentPreview>

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
    </section>
);

const Buttons = () => (
    <DocContainer>
        <div className="button-group">
            <button className="new-btn btn-cta btn-primary">Primary</button>
            <button className="new-btn btn-primary">Primary</button>
            <button className="new-btn btn-small btn-primary">Primary</button>
            <button className="new-btn btn-xsmall btn-primary">Primary</button>
            <button className="new-btn btn-secondary">Secondary</button>
            <button className="new-btn btn-tertiary">Tertiary</button>
            <button className="new-btn btn-primary disabled">Primary</button>
            <button className="new-btn btn-secondary disabled">Secondary</button>
            <button className="new-btn btn-tertiary disabled">Tertiary</button>
            <button className="new-btn btn-cta btn-primary">Primary</button>
            <button className="new-btn btn-cta btn-secondary">Secondary</button>
            <button className="new-btn btn-cta btn-tertiary">Tertiary</button>
            <button className="new-btn btn-small btn-primary">Primary</button>
            <button className="new-btn btn-small btn-secondary">Secondary</button>
            <button className="new-btn btn-small btn-tertiary">Tertiary</button>
            <button className="new-btn btn-xsmall btn-primary">Primary</button>
            <button className="new-btn btn-xsmall btn-secondary">Secondary</button>
            <button className="new-btn btn-xsmall btn-tertiary">Tertiary</button>

        </div>
        <p className="lead">
        Buttons communicate actions that users can take. Buttons are typically placed throughout your UI, in places like: Dialogs, Modals, Forms, Cards and Toolbars.
        </p>
        <Overview />
        <DestructiveButton />
        <ContentGuidelines />
        <CombiningButtons />
        <DeveloperDocumentation />
    </DocContainer>
);

export default Buttons;

/* for testing */
export { Overview, DestructiveButton, ContentGuidelines, CombiningButtons, DeveloperDocumentation };
