import React, { Component } from "react";

import ActionListComponent from "@components/ActionList";
import { ComponentPreview, DocContainer, JavascriptDocs } from "@docutils";
import CodeTags from "@components/CodeTags";
import Alert from "@components/Alert";
import { Link } from "react-router-dom";
import { actionList } from "@src/scripts/main";
import NpmInformation from "@docutils/NpmInformation";

const items = [
    {
        name: "Add bookmark",
        icon: "bookmark"
    },
    {
        name: "Add client",
        icon: "business_center"
    },
    {
        name: "Add document",
        icon: "add_circle"
    },
    {
        name: "Add user",
        icon: "person_add"
    }
];

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Action lists.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ActionListComponent items={items} />
        </ComponentPreview>
    </>
);

const Anchorpoints = () => (
    <>
        <h2 id="anchorpoints">Anchorpoints</h2>
        <p>You can change where the action list will have its anchor, by default the anchor will be top right.</p>
        <h3>Top left</h3>
        <p>Use class <CodeTags type="secondary" code=".anchor-top-left" /> to anchor action-list button to the top left corner of the menu.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ActionListComponent classNames="anchor-top-left" items={items} />
        </ComponentPreview>
        <h3>Bottom right</h3>
        <p>Use class <CodeTags type="secondary" code=".anchor-bottom-right" /> to anchor action-list button to the bottom right corner of the menu.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ActionListComponent classNames="anchor-bottom-right" items={items} />
        </ComponentPreview>
        <h3>Bottom left</h3>
        <p>Use class <CodeTags type="secondary" code=".anchor-bottom-left" /> to anchor action-list button to the bottom left corner of the menu.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ActionListComponent classNames="anchor-bottom-left" items={items} />
        </ComponentPreview>
    </>
);

const JavascriptMethods = () => (
    <>
        <h2 id="javascript-methods">JavaScript methods</h2>
        <JavascriptDocs componentName="actionList" open close />
    </>
);

class ActionList extends Component {
    componentDidMount () {
        actionList.init();
    }

    render () {
        return (
            <DocContainer>
                <Alert type="danger" icon="error" text={<p><b>Deprecated:</b> Be aware, this component will not be maintained anymore. Please make the transition to take use of the <Link to="/components/dropdown">dropdown</Link> component.</p>}/>
                <p className="lead">
                    Action lists are small menus that remain hidden until clicked. In these you can put page links or anchors that trigger an action elsewhere.
                </p>
                <Overview />
                <Anchorpoints />
                <JavascriptMethods />
                <NpmInformation componentName={"actionList"}/>
            </DocContainer>
        );
    }
}

export default ActionList;

/* For testing */
export { Overview, Anchorpoints, JavascriptMethods };
