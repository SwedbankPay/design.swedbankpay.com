import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { ComponentPreview, DocContainer } from "@docutils";
import CodeTags from "@components/CodeTags";
import InputGroup from "@components/InputGroup";
import { inputShowCase } from "./constants";

const Overview = () => (
    <section id="input-field-overview">
        <h2 id="input-field">Overview</h2>
        <p>Depending on the expected length of the user input use either a Input field for shorter input or a Textarea for longer input. </p>
        <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={inputShowCase} codeFigure />
        <h3>When to consider something else</h3>
        <ul className="list list-bullet">
            <li>If you want users to choose from a list of responses, instead consider <Link to="/components/radio-button">radio buttons</Link>, <Link to="/components/checkbox">checkboxes</Link>, <Link to="/components/dropdown">dropdown</Link> or a <Link to="/components/select">select</Link>.</li>
        </ul>
    </section>
);

const ContentGuidelines = forwardRef((props, ref) => <section ref={ref}>
    <h2 id="content-guidelines">Content guidelines</h2>

    <section>
        <ul className="list list-bullet">
            <li>Clearly label the input field so users know what information they are expected to enter.</li>
            <li>Use placeholder text sparingly and <b>only</b> if it helps to clarify the purpose of the input field.</li>
            <li>Provide clear and concise instructions or hints if necessary, either within the input field or nearby by using the hint text.</li>
            <li>Validate user input in real-time if possible and provide clear feedback if there are errors.</li>
        </ul>
    </section>

    <section>
        <h3>Hint text</h3>
        <p>Use hint text if information is important and should be permanent even if users are interacting with the component.</p>
        <div className="slab col-12 justify-content-center d-flex bg-quaternary">
            <InputGroup label="Personal identification number" helpBlock="YYYYMMDDNNNNN" />
        </div>
    </section>

    <section>
        <h3>Prefix/postfix</h3>
        <p>Use prefix/postfix for even more effective communication with the user.</p>
        <div className="slab col-12 justify-content-center d-flex bg-quaternary">
            <div className="form-group">
                <InputGroup label="Username" prefixValue="account_circle" addOnType="icon"/>
                <InputGroup label="Fixed transaction fee" postfixValue="kr" postfix addOnType="text"/>
            </div>
        </div>
    </section>

    <section>
        <h3>Error message</h3>
        <p>Strive to have clear communication with the user. Describe the error precise.</p>
        <div className="slab col-12 justify-content-center d-flex bg-quaternary">
            <InputGroup label="Email address" error errorMessage="The email address must include '@'" defaultValue="example.email.com" />
        </div>

        <h3>Success message</h3>
        <p>One can also add a successful variant in those cases the users are correctly placing their input.</p>
        <div className="slab col-12 justify-content-center d-flex bg-quaternary">
            <InputGroup label="Email address" success defaultValue="example.email@company.com" />
        </div>
    </section>
</section>);

const DeveloperDocumentation = () => (
    <section id="developer-documentation-container">
        <h2 id="developer-documentation mb-3">Developer documentation</h2>
        <section>
            <h3 className="mt-3">Autocomplete</h3>
            <p>Add <CodeTags type="primary" code="autocomplete"/> attributes to input fields when it is possible to make a form easier for users to fill. </p>
            <p>Please check out <Link to="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete">this site</Link> for full autocomplete specs.</p>
            <ComponentPreview language="html" showCasePanel codeFigure>
                <form>
                    <fieldset>
                        <InputGroup type="text" label="Name" id="developer-doc-given-name-example" className="mb-3" autoComplete="name"/>
                        <InputGroup type="text" label="E-mail" id="developer-doc-given-name-example" className="mb-3" autoComplete="email"/>
                        <InputGroup type="number" label="Phone number" id="developer-doc-given-name-example" autoComplete="phone"/>
                    </fieldset>
                </form>
            </ComponentPreview>
        </section>

        <section>
            <h3>Error message</h3>
            <p>To display the error state, add the <CodeTags type="secondary" code={".has-error"} /> class to the parent element, then add the <CodeTags type="secondary" code={".help-block"} /> element as the last child with the error message.</p>
            <ComponentPreview language="html" showCasePanel codeFigure>
                <InputGroup label="Input label" defaultValue="Input text" error errorMessage="Descriptive helpful error message." id="developer-documentation-error-example"/>
            </ComponentPreview>
        </section>

        <section>
            <h3>Disabled state</h3>
            <p>Disable a input field by adding the <CodeTags type="primary" code="disabled"/> attribute to the desired input field and the <CodeTags type="primary" code="form-group"/> where the input field resides.</p>
            <ComponentPreview language="html" showCasePanel codeFigure>
                <InputGroup type="text" label="Input label" disabled />
            </ComponentPreview>
        </section>

        <section>
            <h3>Javascript methods</h3>
            <p><CodeTags type="secondary" code="dg.validation.init()"/> can be used on a form tag to initialize all fields contained in the form, or you can pass a single field to initialize just that one.</p>
        </section>
    </section>
);

const InputField = () => (

    <DocContainer>
        <section id="input-field-doc">
            <p className="lead">Make it easy for the user to enter the information you want. If they mess up, make sure they know it.</p>
            <Overview/>
            <ContentGuidelines/>
            <DeveloperDocumentation />
        </section>
    </DocContainer>
);

ContentGuidelines.displayName = "ContentGuidelines";

export default InputField;

export { Overview, ContentGuidelines, DeveloperDocumentation };
