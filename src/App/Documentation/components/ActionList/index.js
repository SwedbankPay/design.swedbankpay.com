import React, { Component } from "react";

import { ComponentPreview, DocToc, Icon, ExperimentalComponentAlert } from "#";
import actionList from "$/px-script/action-list";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Action lists.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="action-list">{"\n"}
                <Icon icon="more_vert" />{"\n"}
                <div className="action-menu">{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="bookmark"/>Add bookmark</a>{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="business_center"/>Add client</a>{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="add_circle"/>Add document</a>{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="person_add"/>Add user</a>{"\n"}
                </div>
            </div>
        </ComponentPreview>
    </>
);

const Anchorpoints = () => (
    <>
        <h2 id="anchorpoints">Anchorpoints</h2>
        <p>Customize anchorpoint... Top right is default.</p>
        <h3>Top left</h3>
        <p>Use class <code className="token property">.anchor-top-left</code> to anchor action-list button to the top left corner of the menu.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="action-list anchor-top-left">{"\n"}
                <Icon icon="more_vert" />{"\n"}
                <div className="action-menu">{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="bookmark"/>Add bookmark</a>{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="business_center"/>Add client</a>{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="add_circle"/>Add document</a>{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="person_add"/>Add user</a>{"\n"}
                </div>
            </div>
        </ComponentPreview>
        <h3>Bottom right</h3>
        <p>Use class <code className="token property">.anchor-bottom-right</code> to anchor action-list button to the bottom right corner of the menu.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="action-list anchor-bottom-right">{"\n"}
                <Icon icon="more_vert" />{"\n"}
                <div className="action-menu">{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="bookmark"/>Add bookmark</a>{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="business_center"/>Add client</a>{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="add_circle"/>Add document</a>{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="person_add"/>Add user</a>{"\n"}
                </div>
            </div>
        </ComponentPreview>
        <h3>Bottom left</h3>
        <p>Use class <code className="token property">.anchor-bottom-left</code> to anchor action-list button to the bottom left corner of the menu.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <div className="action-list anchor-bottom-left">{"\n"}
                <Icon icon="more_vert" />{"\n"}
                <div className="action-menu">{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="bookmark"/>Add bookmark</a>{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="business_center"/>Add client</a>{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="add_circle"/>Add document</a>{"\n"}
                    <a href="#" onClick={e => e.preventDefault()}><Icon icon="person_add"/>Add user</a>{"\n"}
                </div>
            </div>
        </ComponentPreview>
    </>
);

const ActionListText = () => (
    <div className="col-lg-10 doc-body">
        <ExperimentalComponentAlert />
        <p className="lead">Action lists...</p>
        <Overview />
        <Anchorpoints />
    </div>
);

class ActionList extends Component {
    componentDidMount () {
        actionList.init();
    }

    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <ActionListText />
                    <DocToc component={ActionListText} />
                </div>
            </div>
        );
    }
}

export default ActionList;

/* For testing */
export { Overview, Anchorpoints, ActionListText };
