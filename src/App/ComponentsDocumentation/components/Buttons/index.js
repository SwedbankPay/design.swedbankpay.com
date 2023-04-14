import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import ButtonComponent from "@components/Button";
import CodeTags from "@components/CodeTags";

import { overviewButtons, buttonUtilClasses } from "./constants";

const Overview = () => (
    <section>
        <h2 id="overview">Button variants</h2>
        <p>There are four different sizes of buttons to choose from: xsmall, small, large (default) and extra large. Our button variants can also be customized with icons next to the label to clarify the action. </p>
        <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={overviewButtons} codeFigure />
    </section>
);

const CombiningButtons = () => (
    <section>
        <h2 id="combining-buttons">Combining buttons</h2>
        <p>When using buttons next to each other, always wrap them in a <CodeTags type="primary" code=".button-group" /> to ensure internal spacing. Never use multiple buttons of type primary, and preferably only one secondary.</p>
        <p>In the example below, primary button is using <CodeTags type="primary" code=".btn-block" />, using the whole width of its container.</p>
        <p>The tertiary button are often smaller than the other buttons. We are not recommending the example below in terms of UI - we just want to visualize the grouping.</p>

        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="button-group">{"\n"}
                <ButtonComponent type="primary" label="Activate" size="xl" className="btn-block" />{"\n"}
                <ButtonComponent type="secondary" label="Disable" />{"\n"}
                <ButtonComponent type="tertiary" size="sm" label="Back" />{"\n"}
            </div>
        </ComponentPreview>
    </section>
);

const DeveloperDocumentation = () => (
    <section>
        <h2 id="developer-documentation">Developer documentation</h2>
        <h3>Disabled state</h3>
        <p>Make buttons look inactive by adding the <CodeTags type="primary" code="disabled" /> boolean attribute to any <CodeTags type="primary" code={"<button>"} /> element. Disabling buttons are rarely recommended, so please think twice before implementing them. They should only be used in settings where an action is required before you can continue, or similar cases.</p>
        <p>In cases where <CodeTags type="primary" code={"<a>"} /> tags are styled as buttons (NOT RECOMMENDED), adding the disabled attribute is not sufficient, therefore you need to add the <CodeTags type="secondary" code=".disabled" /> class and make sure <CodeTags type="secondary" code={"aria-disabled=\"true\""}/> attribute is present.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent disabled type="primary" label="Primary" />{"\n"}
                <ButtonComponent disabled type="secondary" label="Secondary" />{"\n"}
                <ButtonComponent disabled type="tertiary" label="Tertiary" />{"\n"}
            </div>
        </ComponentPreview>

        <h3>Loading state</h3>
        <p>Use the loading state to show users their action is processing by adding the <CodeTags type="primary" code={".loading"}/> class to the <CodeTags type="primary" code={"<button>"}/> element.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent loading type="primary" label="Primary" />{"\n"}
                <ButtonComponent loading type="secondary" label="Secondary" />{"\n"}
                <ButtonComponent loading type="tertiary" label="Tertiary" />{"\n"}
            </div>
        </ComponentPreview>
    </section>
);

const UtilityClasses = () => (
    <section id="button-utilities">
        <h2 id="utility-classes">Utility classes</h2>
        <p>Button specific utility classes</p>
        <div className="col-12 button-utilities-container">
            {buttonUtilClasses.map(({ tag, description }, i) => <div key={i} className="utility-container">
                <CodeTags type="primary" code={tag}/>
                <p>{description}</p>
            </div>
            )}
        </div>
    </section>
);

const Buttons = () => (
    <DocContainer>
        <p className="lead">
        Buttons communicate actions that users can take. Buttons are typically placed throughout your UI, in places like: Dialogs, Modals, Forms, Cards and Toolbars.
        </p>
        <Overview />
        <CombiningButtons />
        <DeveloperDocumentation />
        <UtilityClasses/>
    </DocContainer>
);

export default Buttons;

/* for testing */
export { Overview, UtilityClasses, CombiningButtons, DeveloperDocumentation };
