import React, { Component } from "react";

import { ComponentPreview, DocToc, Icon, Property } from "#";
import actionList from "$/px-script/action-list";

const BasicList = () => (
    <>
        <h2 id="basic-list">Basic list</h2>
        <p>Basic lists info...<Property value=".list" /></p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ul className="list">
                <li>Bread</li>
                <li>Coffee beans</li>
                <li>Milk</li>
                <li>Butter</li>
            </ul>
        </ComponentPreview>
        <h3>Nested list</h3>
        <p>Nested lists are also pretty sweet...</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ul className="list">
                <li>Coffee</li>
                <li>Tea
                    <ul>
                        <li>Black tea</li>
                        <li>Green tea</li>
                        <li>Ice tea</li>
                    </ul>
                </li>
                <li>Milk</li>
            </ul>
        </ComponentPreview>
    </>
);
const InlineList = () => (
    <>
        <h2 id="inline-list">Inline list</h2>
        <p>Inline lists info...<Property value=".list-inline" /></p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ul className="list list-inline">
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
        </ComponentPreview>
    </>
);

const DescriptionList = () => (
    <>
        <h2 id="description-list">Description list</h2>
        <p>Description lists info...<Property value=".description-list" /></p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <dl className="description-list">{"\n"}
                <dt>Frog</dt>
                <dd>Wet green thing that croaks.</dd>{"\n"}
                <dt>Rabbit</dt>
                <dd>Warm fluffy thing that jumps.</dd>{"\n"}
                <dt>Color</dt>
                <dd>Any hue except white or black.</dd>{"\n"}
            </dl>
        </ComponentPreview>
    </>
);

const SettingsList = () => (
    <>
        <h2 id="settings-list">Settings list</h2>
        <p>Settings lists info...<Property value=".settings-list" /></p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ul className="settings-list">
                <li>{"\n"}
                    <i className="material-icons color-success">check</i>
                    Shovels and tapestry newsletter{"\n"}
                </li>
                <li>{"\n"}
                    <i className="material-icons color-warning">remove</i>
                    Spoon collectors weekly newsletter{"\n"}
                </li>
                <li>{"\n"}
                    <i className="material-icons color-danger">clear</i>
                    Energetic squirrels newsletter{"\n"}
                </li>
            </ul>
        </ComponentPreview>
    </>
);

const ItemList = () => (
    <>
        <h2 id="item-list">Item list </h2>
        <p> Item list info...<Property value=".item-list" /></p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ul className="item-list">
                <li>
                    4925*********004
                </li>
                <li>
                    4925*********004
                </li>
                <li>
                    4925*********004
                </li>
            </ul>
        </ComponentPreview>
    </>
);

const StatusItemList = () => (
    <>
        <h2 id="status-item-list">Status item list </h2>
        <p> Status item list info...<Property value=".item-list" /></p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ul className="item-list">
                <li>{"\n"}
                    <span>4925*********004</span>{"\n"}
                    <span className="status status-success">Active</span>{"\n"}
                </li>
                <li>{"\n"}
                    <span>4925*********004</span>{"\n"}
                    <span className="status status-warning">Expires soon</span>{"\n"}
                </li>
                <li>{"\n"}
                    <span>4925*********004</span>{"\n"}
                    <span className="status status-danger">Expired</span>{"\n"}
                </li>
            </ul>
        </ComponentPreview>
    </>
);

const StripedItemList = () => (
    <>
        <h2 id="item-list-striped">Striped item list</h2>
        <p> Striped item list info...<Property value=".item-list-striped" /></p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ul className="item-list item-list-striped">
                <li>
                    <span>4925*********004</span>
                    <div className="action-list">{"\n"}
                        <Icon icon="more_vert" />{"\n"}
                        <div className="action-menu">{"\n"}
                            <a href="#" onClick={e => e.preventDefault()}><Icon icon="bookmark"/>Add bookmark</a>{"\n"}
                            <a href="#" onClick={e => e.preventDefault()}><Icon icon="business_center"/>Add client</a>{"\n"}
                            <a href="#" onClick={e => e.preventDefault()}><Icon icon="add_circle"/>Add document</a>{"\n"}
                            <a href="#" onClick={e => e.preventDefault()}><Icon icon="person_add"/>Add user</a>{"\n"}
                        </div>
                    </div>
                </li>
                <li>{"\n"}
                    <span>{"\n\t\t\t"}4925*********004{"\n\t\t\t"}
                        <span className="badge badge-blue">new</span>{"\n"}
                    </span>{"\n"}
                    <a href="https://developer.payex.com">developer.payex.com</a>{"\n"}
                </li>
                <li>{"\n"}
                    <span>4925*********004</span>{"\n"}
                    <i className="material-icons">star</i>{"\n"}
                </li>
                <li>{"\n"}
                    <span>4925*********004</span>{"\n"}
                    <span className="status status-success">Active</span>{"\n"}
                    <button type="button" className="btn btn-danger btn-xs"><i className="material-icons">delete</i></button>{"\n"}
                </li>
            </ul>
        </ComponentPreview>
    </>
);

const ListsText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Lots of cool info about lists will be here...</p>
        <BasicList />
        <InlineList />
        <DescriptionList />
        <SettingsList />
        <ItemList />
        <StatusItemList />
        <StripedItemList />
    </div>
);

class Lists extends Component {
    componentDidMount () {
        actionList.init();
    }

    render () {
        return (
            <div className="doc-container">
                <div className="row">
                    <ListsText />
                    <DocToc component={ListsText} />
                </div>
            </div>
        );
    }
}

export default Lists;

/* For testing */
export { BasicList, InlineList, DescriptionList, SettingsList, ItemList, StatusItemList, StripedItemList, ListsText };
