import React, { forwardRef, useRef } from "react";
import { Link } from "react-router-dom";
import { ComponentPreview, DocContainer } from "@docutils";
import CodeTags from "@components/CodeTags";
import InputGroup from "@components/InputGroup";
import { inputShowCase, textareaShowCase, contentGuidelines } from "./constants";

const Overview = () => (
    <section id="input-field-overview">
        <h2 id="input-field">Overview</h2>
        <p>Depending on the expected length of the user input use either a Input field for shorter input or a Textarea for longer input. </p>
        <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={inputShowCase} codeFigure />
        <h3>When to consider something else</h3>
        <ul className="list list-bullet">
            <li>If you want users to choose from a list of responses, instead consider <Link to="/components/radio-button">radio buttons</Link>, <Link to="/components/checkbox">checkboxes</Link> or a <Link to="/components/select">select</Link>.</li>
        </ul>
    </section>
);

const ContentGuidelines = forwardRef((props, ref) => <section ref={ref}>
    <h2 id="content-guidelines">Content guidelines</h2>

    <div className="slab slab-plain h-100 mb-2">
        <div className="d-flex flex-column align-items-center">
            <div className="py-3">
                <InputGroup type="text" label="Label" defaultValue="Input text"  helpBlock="Hint text" id="input-guidelines-example"/>
                <InputGroup type="textarea" label="Label" expandingHintText="Expander hint text"/>
            </div>
        </div>
    </div>

    <h3>Label</h3>
    <p>An input field must have a label that clearly describes the type of input a field requires. </p>
    <ul className="list list-bullet">
        <li>When a text field is not required to be filled by the user, label it as “optional”.</li>
    </ul>

    {contentGuidelines.map(section => (
        <section key={section.lead}>
            <h3>{section.heading}</h3>
            <p>{section.lead}</p>
            <div className="row placeholder-guideline">
                {section.examples.map(({ slabType, description, content },) => (
                    <div key={description} className="col-lg-6 col-sm-12">
                        <div className={`slab slab-plain slab-border-${slabType}`}>
                            <span className="h3 d-block mb-3">Do{slabType === "error" && "n't" }</span>
                            {content}
                        </div>
                        <p className="mb-4">{description}</p>
                    </div>
                ))}
            </div>
        </section>
    ))}
</section>);

const DeveloperDocumentation = () => (
    <section id="developer-documentation-container">
        <h2 id="developer-documentation mb-3">Developer documentation</h2>
        <h3 className="mt-3">Autocomplete</h3>
        <p>Add <CodeTags type="primary" code="autocomplete"/> attributes to input fields when it is possible to make a form easier for users to fill. </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <InputGroup type="text" label="Name" autoComplete="name" id="developer-documentation-example" />
        </ComponentPreview>

        <h3>Error message</h3>
        <p>To display the error state, add the <CodeTags type="secondary" code={".has-error"} /> class to the parent element, then add the <CodeTags type="secondary" code={".help-block"} /> element as the last child with the error message.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <InputGroup type="text" label="Input label" defaultValue="Input text" errorMessage="Descriptive helpful error message." id="developer-documentation-error-example"/>
        </ComponentPreview>

        <h3>Disabled state</h3>
        <p>Disable a input field by adding the <CodeTags type="primary" code="disabled"/> attribute to the desired input field and the <CodeTags type="primary" code="form-group"/> where the input field resides.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <InputGroup type="text" label="Input label" disabled />
        </ComponentPreview>

        <h3>Javascript methods</h3>
        <p><CodeTags type="primary" code="dg.validation.init()"/> can be used on a form tag to initialize all fields contained in the form, or you can pass a single field to initialize just that one.</p>
    </section>
);

const InputField = () => {
    const guidelinesRef = useRef();
    const scrollToRef = () => guidelinesRef.current.scrollIntoView();

    return (

        <DocContainer>
            <section id="input-field-doc">
                <p className="lead">Input fields typically reside in forms and enable the user to interact with and input words, characters or numbers.</p>
                <Overview/>
                <ContentGuidelines/>
                <DeveloperDocumentation />
            </section>
        </DocContainer>
    );
};

ContentGuidelines.displayName = "ContentGuidelines";

export default InputField;

export { Overview, ContentGuidelines, DeveloperDocumentation };
