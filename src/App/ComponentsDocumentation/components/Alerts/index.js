import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { ComponentPreview, DocContainer } from "@docutils";
import Alert from "@components/Alert";
import CodeTags from "@components/CodeTags";
import { alertsShowCase } from "./constants";
import { alert } from "@src/scripts/main";
import NpmInformation from "@docutils/NpmInformation";

const Overview = () => (
    <section>
        <h2 id="local-alerts">Overview</h2>
        <p>Alerts are inserted within the content area near related items to notify users about potential problems or to communicate information. There are four different sub-types of alerts: error, warning, info, and success.</p>

        <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={alertsShowCase} codeFigure/>

        <WhenToConsider />
        <HowTo />
    </section>
);

const WhenToConsider = () => (
    <section>
        <h3>When to consider something else</h3>
        <ul className="list list-bullet">
            <li>If an action will destroy the users work consider a more intrusive pattern such as a <Link to="/components/dialog">Dialog</Link> to confirm the action.</li>
            <li>Always use field-level error messages in forms to indicate inaccurate input. Error alerts can be used to supplement these messages.</li>
            <li>Consider using a <Link to="/components/toast">Toast</Link> to confirm the system response to an user action that do not correspond to a specific section of the page.</li>
        </ul>
    </section>
);

const HowTo = () => (
    <section>
        <h3>How to align local alerts</h3>
        <div className="slab slab-plain slab-border-success">
            <span className="h3">Do</span>
            <Alert type="informative" icon="info" text={<p><b>Best practices:</b> To minimize the risk for a challenge request, it’s recommended that you add as much data as possible to the risk indicator object in the request below.</p>} />
            <Alert type="warning" icon="warning" text={<p><b>GDPR sensitive data:</b> If it is necessary to use GDPR sensitive data, it must be hashed and then the hash can be used in requests towards Swedbank Pay.</p>} />
        </div>
        <p>If multiple alerts are displayed subsequently they should be arranged vertically in consideration to readability.</p>

        <div className="slab slab-plain slab-border-error">
            <span className="h3">Don&apos;t</span>
            <div className="d-flex">
                <div className="flex-fill mr-1">
                    <Alert type="informative" icon="info" text={<p><b>Best practices:</b> To minimize the risk for a challenge request, it’s recommended that you add as much data as possible to the risk indicator object in the request below.</p>} />
                </div>
                <div className="flex-fill ml-1">
                    <Alert type="warning" icon="warning" text={<p><b>GDPR sensitive data:</b> If it is necessary to use GDPR sensitive data, it must be hashed and then the hash can be used in requests towards Swedbank Pay.</p>} />
                </div>
            </div>
        </div>

        <p>Avoid arranging subsequent alerts horizontally.</p>
    </section>
);

// Will be restored at a later stage

// const GlobalAlerts = () => (
//     <section id="global-alerts-container">
//         <h2 id="global-alerts">Global alerts</h2>
//         <p>Global alerts are used in the global context of an application and communicate a state that affects the entire system. This component should only be used when it’s necessary to broadcast a static message across the system. There are two different sub-types of global alerts: warning and info. They are full-width and placed at the very top of the page above content and navigation. </p>
//         <ComponentPreview language="html" showCasePanel showCasePanelAdvanced={alertsGlobalShowCase} codeFigure/>
//     </section>
// );

const ContentGuidelines = () => (
    <section>
        <h2 id="content-guidelines">Content guidelines</h2>
        <div className="slab slab-plain py-4">
            <div className="d-flex justify-content-center align-items-center pt-3">
                <Alert type="danger" icon="info" text={<p><b>Error title:</b> Content text <a href="" >link</a></p>} />
            </div>
        </div>

        <p>Alerts provide limited space for content, and therefore it must be short and concise. A user should be able to scan the notification, be apprised of the situation, and know what to do next.</p>

        <ul className="list list-bullet">
            <li>The <b>title</b> should be short and descriptive, explaining the most important piece of information.</li>
            <li>The <b>content</b> should be limited to one or two short sentences.</li>
            <li>If possible, include a <b>link</b> within the content that redirects the user to next step or if needed gives more information.</li>
        </ul>
    </section>
);

const DeveloperDocumentation = () => (
    <section>
        <h2 id="developer-documentation">Developer documentation</h2>
        <span className="h3">Javascript methods</span>
        <p className="mt-2">Use <CodeTags type="secondary" code="dg.alert.init()"/> to initialize all alerts.</p>
        <p>Use <CodeTags type="secondary" code='dg.alert.init("component-id")'/> to initialize one specific component.</p>
    </section>
);

const Alerts = () => {
    useEffect(() => {
        alert.init();
    });

    return (
        <DocContainer>
            <section id="alerts-doc">
                <p className="lead">Alerts are short messages used to inform and give feedback to the user about an action or state. Icons and color indicate the type and urgency of the information within the message. </p>
                <Overview />
                <ContentGuidelines />
                <DeveloperDocumentation />
                <NpmInformation componentName={"alert"}/>
            </section>
        </DocContainer>
    );
};

export default Alerts;

/* For testing */
export { Overview, ContentGuidelines, DeveloperDocumentation };
