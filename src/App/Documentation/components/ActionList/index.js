import React, { Component } from "react";

import { ComponentPreview, DocToc, Attribute, Icon } from "#";
import actionList from "$/px-script/action-list";

const Overview = () => (
    <>
        <h2 id="overview">Overview</h2>
        <p>Action lists.</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
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

const ActionListText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Action lists...</p>
        <Overview />
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

/* for testing */
export { Overview, ActionListText };
