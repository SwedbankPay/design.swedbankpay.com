import React, { Component } from "react";

import ActionListComponent from "@/ActionList";
import AlertComponent from "@/Alert";
import { ComponentPreview, DocContainer, JavascriptDocs, Property } from "#";

const { actionList } = window.px;

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
        {/*
            TODO: remove alert on next major release. Current: 2.2.0
            https://payexjira.atlassian.net/browse/DG-325 [AW]
        */}
        <AlertComponent type="warning">
            <h4>Deprecation warning</h4>
            <p>
                The Action list component no longer selects on <Property value=".material-icons"/>. Add <Property value=".action-toggle" /> to
                your toggling element.
            </p>
        </AlertComponent>
    </>
);

const Anchorpoints = () => (
    <>
        <h2 id="anchorpoints">Anchorpoints</h2>
        <p>You can change where the action list will have its anchor, by default the anchor will be top right.</p>
        <h3>Top left</h3>
        <p>Use class <code className="token property">.anchor-top-left</code> to anchor action-list button to the top left corner of the menu.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ActionListComponent classNames="anchor-top-left" items={items} />
        </ComponentPreview>
        <h3>Bottom right</h3>
        <p>Use class <code className="token property">.anchor-bottom-right</code> to anchor action-list button to the bottom right corner of the menu.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ActionListComponent classNames="anchor-bottom-right" items={items} />
        </ComponentPreview>
        <h3>Bottom left</h3>
        <p>Use class <code className="token property">.anchor-bottom-left</code> to anchor action-list button to the bottom left corner of the menu.</p>
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
            <DocContainer docToc>
                <p className="lead">
                    Action lists are small menus that remain hidden until clicked. In these you can put page links or anchors that trigger an action elsewhere.
                </p>
                <Overview />
                <Anchorpoints />
                <JavascriptMethods />
            </DocContainer>
        );
    }
}

export default ActionList;

/* For testing */
export { Overview, Anchorpoints, JavascriptMethods };
