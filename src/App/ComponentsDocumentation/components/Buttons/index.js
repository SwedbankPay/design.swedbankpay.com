import React from "react";

import { ComponentPreview, DocContainer } from "@docutils";
import ButtonComponent from "@components/Button";
import Alert from "@components/Alert";
import CodeTags from "@components/CodeTags";

import { overviewButtons, destructiveButtons } from "./constants";

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
                <ButtonComponent href="#" disabled type="primary" label="Executive" />{"\n"}
                <ButtonComponent href="#" disabled type="secondary" label="Guiding" />{"\n"}
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

        <h3>Using buttons together</h3>
        <p>When you use buttons next to each other you have to wrap them in a <CodeTags type="secondary" code=".button-group" />.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="button-group">{"\n"}
                <ButtonComponent type="primary" label="Activate" />{"\n"}
                <ButtonComponent type="secondary" label="Disable" />{"\n"}
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
        <DeveloperDocumentation />
    </DocContainer>
);

export default Buttons;

/* for testing */
export { Overview, DestructiveButton, DeveloperDocumentation };
