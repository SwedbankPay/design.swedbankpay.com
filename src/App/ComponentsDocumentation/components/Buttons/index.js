import React from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer } from "@docutils";
import ButtonComponent from "@components/Button";
import Alert from "@components/Alert";
import CodeTags from "@components/CodeTags";

const Examples = () => (
    <>
        <h2 id="examples">Examples</h2>
        <p>
            The DesignGuide includes a few predefined button styles, each serving its own semantic purpose.
            Note: <CodeTags type="secondary" code=".btn-link" /> is recommended as the cancel button when paired with other buttons.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent type="executive" label="Executive" />{"\n"}
                <ButtonComponent type="guiding" label="Guiding" />{"\n"}
                <ButtonComponent type="destructive" label="Destructive" />{"\n"}
                <ButtonComponent type="link" label="Link" />{"\n"}
            </div>
        </ComponentPreview>
    </>
);

const UsageWithOtherTags = () => (
    <>
        <h2 id="usage-with-other-tags">Usage with other tags</h2>
        <p>The <CodeTags type="secondary" code=".btn" /> classes are designed to be used with the <CodeTags type="primary" code={"<button>"} /> element.
        However, you can also use these classes on <CodeTags type="primary" code={"<a>"} /> or <CodeTags type="primary" code={"<input>"} /> elements
        (though some browsers may apply a slightly different rendering).</p>
        <p>When using button classes on <CodeTags type="primary" code={"<a>"} /> elements that are used to trigger in-page
        functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given
        a <CodeTags type="secondary" code={"role=\"button\""} /> to appropriately convey their purpose to assistive technologies such as screen readers.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent type="executive" label="Anchor" href="#" />{"\n"}
                <ButtonComponent type="executive" label="Button" />{"\n"}
                <ButtonComponent type="executive" input value="Input" btnType="button" />{"\n"}
                <ButtonComponent type="executive" input value="Submit" btnType="submit" />{"\n"}
                <ButtonComponent type="executive" input value="Reset" btnType="reset" />{"\n"}
            </div>
        </ComponentPreview>
    </>
);

const OutlineButtons = () => (
    <>
        <h2 id="outline-buttons">Outline buttons</h2>
        <p>Replace the default modifier classes with the <CodeTags type="secondary" code=".btn-outline-{style}" /> ones to get an outline of the button style.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent outline type="executive" label="Executive" />{"\n"}
                <ButtonComponent outline type="guiding" label="Guiding" />{"\n"}
                <ButtonComponent outline type="destructive" label="Destructive" />{"\n"}
            </div>
        </ComponentPreview>
    </>
);

const ButtonGroup = () => (
    <>
        <h2 id="button-group">Using buttons together</h2>
        <p>When you use buttons next to each other you have to wrap them in a <CodeTags type="secondary" code=".button-group" />.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="button-group">{"\n"}
                <ButtonComponent type="executive" label="Activate" />{"\n"}
                <ButtonComponent type="guiding" label="Disable" />{"\n"}
            </div>
        </ComponentPreview>
    </>
);

const Sizes = () => (
    <>
        <h2 id="sizes">Sizes</h2>
        <p>For a different sized button add <CodeTags type="secondary" code=".btn-lg" />, <CodeTags type="secondary" code=".btn-sm" /> or <CodeTags type="secondary" code=".btn-xs" />.</p>
        <h3>Large</h3>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent size="lg" type="executive" label="Large button" />{"\n"}
                <ButtonComponent size="lg" type="guiding" label="Large button" />{"\n"}
            </div>
        </ComponentPreview>
        <h3>Small</h3>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent size="sm" type="executive" label="Small button" />{"\n"}
                <ButtonComponent size="sm" type="guiding" label="Small button" />{"\n"}
            </div>
        </ComponentPreview>
        <h3>Extra small</h3>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent size="xs" type="executive" label="Extra small button" />{"\n"}
                <ButtonComponent size="xs" type="guiding" label="Extra small button" />{"\n"}
            </div>
        </ComponentPreview>
        <h3>Block level</h3>
        <p>Create block level buttons—those that span the full width of a parent by adding <CodeTags type="secondary" code=".btn-block" />.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent fullWidth type="executive" label="Block level button" />{"\n"}
                <ButtonComponent fullWidth type="guiding" label="Block level button" />{"\n"}
            </div>
        </ComponentPreview>
    </>
);

const ActiveState = () => (
    <>
        <h2 id="active-state">Active state</h2>
        <p>Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active.
            <b>There’s no need to add a class to <CodeTags type="primary" code={"<button>"} />s as they use a pseudo-class.</b>
            However, you can still force the same active appearance with <CodeTags type="secondary" code=".active" /> (and
            include the <CodeTags type="secondary" code={"aria-pressed=\"true\""} /> attribute) should you need to replicate the state programmatically.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent href="#" active type="executive" label="Executive" />{"\n"}
                <ButtonComponent href="#" active type="guiding" label="Guiding" />{"\n"}
            </div>
        </ComponentPreview>
    </>
);

const DisabledState = () => (
    <>
        <h2 id="disabled-state">Disabled state</h2>
        <p>Make buttons look inactive by adding the <CodeTags type="secondary" code="disabled" /> boolean attribute to any <CodeTags type="primary" code={"<button>"} /> element.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent disabled type="executive" label="Executive" />{"\n"}
                <ButtonComponent disabled type="guiding" label="Guiding" />{"\n"}
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
                <ButtonComponent href="#" disabled type="executive" label="Executive" />{"\n"}
                <ButtonComponent href="#" disabled type="guiding" label="Guiding" />{"\n"}
            </div>
        </ComponentPreview>
        <Alert type="warning">
            <h5>Link functionality caveat</h5>
            <p>The <CodeTags type="secondary" code=".disabled" /> class uses <CodeTags type="secondary" code="pointer-events: none" /> to try to disable the link functionality of <CodeTags type="primary" code={"<a>"} />s, but that CSS property is not yet standardized. In addition, even in browsers that do support <CodeTags type="secondary" code="pointer-events: none" />, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, add a <CodeTags type="secondary" code={"tabindex=\"-1\""} /> attribute on these links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.</p>
        </Alert>
    </>
);

const UsageWithIcons = () => (
    <>
        <h2 id="usage-with-icons">Usage with icons</h2>
        <p>To use a button with an icon simply put the icon markup inside the <CodeTags type="primary" code={"<button>"} />.</p>
        <p>Read more about icon usage here <Link to="/core/iconography">here</Link>.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent icon="cloud" type="executive" label="Executive" />{"\n\n"}
                <ButtonComponent icon="cloud" type="guiding" label="Guiding" />{"\n"}
            </div>
        </ComponentPreview>
    </>
);

const ButtonLoader = () => (
    <>
        <h2 id="button-loader">Button loader</h2>
        <p>Add class <CodeTags type="secondary" code=".loading" /> to display the loader.</p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent type="executive" label="Executive" loader loading />{"\n"}
                <ButtonComponent type="guiding" label="Guiding" loader loading />{"\n"}
            </div>
        </ComponentPreview>
        <h3>Disabled loader</h3>
        <p><CodeTags type="secondary" code=".loading" /> with <CodeTags type="secondary" code="disabled" /></p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent disabled type="executive" label="Executive" loader loading />{"\n"}
                <ButtonComponent disabled type="guiding" label="Guiding" loader loading />{"\n"}
            </div>
        </ComponentPreview>
        <h3>Outline loader</h3>
        <p><CodeTags type="secondary" code=".loading" /> with <CodeTags type="secondary" code=".outline" /></p>
        <ComponentPreview language="html" showCasePanel codeFigure removeOuterTag>
            <div className="button-group">{"\n"}
                <ButtonComponent outline type="executive" label="Executive" loader loading />{"\n"}
                <ButtonComponent outline type="guiding" label="Guiding" loader loading />{"\n"}
            </div>
        </ComponentPreview>
    </>
);

const Buttons = () => (
    <DocContainer docToc>
        <p className="lead">Use our button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
        <Examples />
        <UsageWithOtherTags />
        <OutlineButtons />
        <ButtonGroup />
        <Sizes />
        <ActiveState />
        <DisabledState />
        <UsageWithIcons />
        <ButtonLoader />
    </DocContainer>
);

export default Buttons;

/* for testing */
export { Examples, UsageWithOtherTags, OutlineButtons, ButtonGroup, Sizes, ActiveState, DisabledState, UsageWithIcons, ButtonLoader };
