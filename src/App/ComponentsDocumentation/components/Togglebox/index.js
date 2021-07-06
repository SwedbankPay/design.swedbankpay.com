import React from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer } from "@docutils";
import Togglebox from "@components/FormComponents/Togglebox";
import CodeTags from "~/src/App/components/CodeTags";

const HowTo = () => (
    <>
        <h3>How to setup radio button group</h3>
        <div className="row">
            <div className="col-6">
                <div className="slab slab-plain slab-border-success h-100">
                    <h3>Do</h3>
                    <div className="d-flex flex-column align-items-center">
                        <div className="pt-3 pb-5">
                            <h4>Card type</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="slab slab-plain slab-border-error">
                    <h3>Don&#x27;t</h3>
                    <div className="d-flex flex-column align-items-center">
                        <div className="pt-3 pb-5 w-50">
                            <h4>Delivery options</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Toggleboxes are used to enable or disable a mode, feature, or function. Most common toggles are used to switch between on/off in preferences or settings, in forms or for other on/off functionality. Toggles are similar to radio groups in function but optimized for toggling between two states. A togglebox can also be similar to a checkobox with the difference being that a toggle-switch will trigger a state change directly when you toggle it, while a checkbox is generally used for state marking together with a submit action.
        </p>

        <ComponentPreview language="html" showCasePanel codeFigure>
            <Togglebox label="Label" id="togglebox-example"/>
            <Togglebox label="Label" id="togglebox-example2" optional/>
        </ComponentPreview>

        <h3>When to consider something else</h3>
        <ul className="list list-bullet">
            <li>
                Use a <Link to="/components/radio-button">Radio Button</Link> group if users need to select one item from a list of options.
            </li>
            <li>
                Use a <Link to="/components/checkbox">Checkbox</Link> group if users can select multiple items from a list of options. 
            </li>
        </ul>

        <HowTo />
    </>
);

const ContentGuidelines = () => (
    <>
        <h2 id="content-guidelines">Content guidelines</h2>
        <ul className="list list-bullet">
            <li>The label should be short and concise, preferably three words or less.</li>
            <li>Label should be written as to describe the on state of the toggle.</li>
            <li>Avoid using negations such as “Notifications Off”, which would mean the user would have to turn the switch on to turn the setting off.</li>
        </ul>
    </>
);

const DeveloperDocumentation = () => (
    <>
        <h2 id="developer-documentation">Developer documentation</h2>
        <span className="h3">Checked</span>
        <p>Use the <CodeTags type="primary" code="checked" /> attribute to enable a toggle.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            hey
        </ComponentPreview>

        <span className="h3">Disabled</span>
        <p>Disable a toggle by adding <CodeTags type="primary" code="disabled" /> attribute to the desired toggle.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            hey
        </ComponentPreview>

        <span className="h3">Form groups</span>
        <p><CodeTags type="secondary" code=".form-group" /> s and/or <CodeTags type="primary" code="form" /> allow you to gather user input components like input fields, radio buttons, checkboxes and toggleboxes in various ways. For more information on how this works refer to the <Link to="/components/forms">Forms</Link> section.</p>

        <span className="h3">Javascript</span>
        <p>Disable a toggle by adding <CodeTags type="primary" code="disabled" /> attribute to the desired toggle.</p>
    </>
);

const Toggle = () => (
    <DocContainer>
        <p className="lead">The togglebox is a representation of a physical switch that allows users to toggle between two states, commonly to turn something on/off.</p>
        <Overview />
        <ContentGuidelines />
        <DeveloperDocumentation />
    </DocContainer>
);

export default Toggle;

/* for testing */
export { Overview, ContentGuidelines, HowTo };
