import React, { Component } from "react";

import { ComponentPreview, DocContainer, Icon, Property } from "#";

const { actionList } = window.px;

const BasicList = () => (
    <>
        <h2 id="basic-list">Basic list</h2>
        <p>
            Add <Property value=".list" /> to a list to display the basic list. Our lists do not use bullet points.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ul className="list">
                <li>Bread</li>
                <li>Coffee beans</li>
                <li>Milk</li>
                <li>Butter</li>
            </ul>
        </ComponentPreview>
        <h3>Nested list</h3>
        <p>
            Use nesting with lists to signify that some items are children of another item.
        </p>
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
        <p>
            Use <Property value=".list-inline" /> on a list to make all items appear on the same line.
        </p>
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
        <p>
            The description list lets you provide each item with a more specific description of each item. Add <Property value=".description-list" /> to your dl.
        </p>
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
        <p>
            Use <Property value=".settings-list" /> to visualize different settings in your web application.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ul className="settings-list">
                <li>{"\n"}
                    <i className="material-icons text-success">check</i>
                    Shovels and tapestry newsletter{"\n"}
                </li>
                <li>{"\n"}
                    <i className="material-icons text-warning">remove</i>
                    Spoon collectors weekly newsletter{"\n"}
                </li>
                <li>{"\n"}
                    <i className="material-icons text-danger">clear</i>
                    Energetic squirrels newsletter{"\n"}
                </li>
            </ul>
        </ComponentPreview>
    </>
);

const ItemList = () => (
    <>
        <h2 id="item-list">Item list </h2>
        <p>
            <Property value=".item-list"/>s is a good way to offer more extensive information about each item. Each item has their own box which seperates the items more clearly than our other options.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ul className="item-list">
                <li>
                    <div>
                        <h5>Foo</h5>
                        <small>Due date 2 days</small>
                    </div>
                    <div>
                        <span className="h5 text-highlight">2120 kr</span>
                    </div>
                </li>
                <li>
                    <div>
                        <h5>Bar</h5>
                        <small>Due date 1 day</small>
                    </div>
                    <div>
                        <span className="h5 text-highlight">1100 kr</span>
                    </div>
                </li>
                <li>
                    <div>
                        <h5>Baz</h5>
                        <small>Due date 5 days</small>
                    </div>
                    <div>
                        <span className="h5 text-highlight">200 kr</span>
                    </div>
                </li>
            </ul>
        </ComponentPreview>
    </>
);

const ItemListLarge = () => (
    <>
        <h2 id="item-list-lg">Large item list </h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ul className="item-list item-list-lg">
                <li>
                    <div>
                        <h5>Foo</h5>
                        <small>Due date 2 days</small>
                    </div>
                    <div>
                        <span className="h5 text-highlight">2120 kr</span>
                    </div>
                    <footer><a href="#">Se faktura</a></footer>
                </li>
                <li>
                    <div>
                        <h5>Bar</h5>
                        <small>Due date 1 day</small>
                    </div>
                    <div>
                        <span className="h5 text-highlight">1100 kr</span>
                    </div>
                    <footer className="item-list-footer">
                        <a href="#">Se faktura</a>
                    </footer>
                </li>
                <li>
                    <div>
                        <h5>Baz</h5>
                        <small>Due date 5 days</small>
                    </div>
                    <div>
                        <span className="h5 text-highlight">200 kr</span>
                    </div>
                    <footer className="item-list-footer">
                        <a href="#">Se faktura</a>
                    </footer>
                </li>
            </ul>
        </ComponentPreview>
    </>
);

const ItemListBordered = () => (
    <>
        <h2 id="item-list-bordered">Bordered item list </h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ul className="item-list item-list-bordered">
                <li>
                    <div>
                        <h5>Foo</h5>
                        <small>Due date 2 days</small>
                    </div>
                    <div>
                        <span className="h5 text-highlight">2120 kr</span>
                    </div>
                    <footer><a href="#">Se faktura</a></footer>
                </li>
                <li>
                    <div>
                        <h5>Bar</h5>
                        <small>Due date 1 day</small>
                    </div>
                    <div>
                        <span className="h5 text-highlight">1100 kr</span>
                    </div>
                    <footer className="item-list-footer">
                        <a href="#">Se faktura</a>
                    </footer>
                </li>
                <li>
                    <div>
                        <h5>Baz</h5>
                        <small>Due date 5 days</small>
                    </div>
                    <div>
                        <span className="h5 text-highlight">200 kr</span>
                    </div>
                    <footer className="item-list-footer">
                        <a href="#">Se faktura</a>
                    </footer>
                </li>
            </ul>
        </ComponentPreview>
    </>
);

const HoverItemList = () => (
    <>
        <h2 id="hover-item-list">Hover item list </h2>
        <p>
            Include <Property value=".item-list-hover" /> to give your items a hover effect. You can use this on any variation of <Property value=".item-list" />.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ul className="item-list item-list-hover">
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
        <p>
            If you want more seperation between each item you can use <Property value=".item-list-striped" />.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ul className="item-list item-list-striped">
                <li>
                    <span>4925*********004</span>
                    <div className="action-list">{"\n"}
                        <Icon type="more_vert" />{"\n"}
                        <div className="action-menu">{"\n"}
                            <a href="#" onClick={e => e.preventDefault()}><Icon type="bookmark"/>Add bookmark</a>{"\n"}
                            <a href="#" onClick={e => e.preventDefault()}><Icon type="business_center"/>Add client</a>{"\n"}
                            <a href="#" onClick={e => e.preventDefault()}><Icon type="add_circle"/>Add document</a>{"\n"}
                            <a href="#" onClick={e => e.preventDefault()}><Icon type="person_add"/>Add user</a>{"\n"}
                        </div>
                    </div>
                </li>
                <li>{"\n"}
                    <span>{"\n\t\t\t"}4925*********004{"\n\t\t\t"}
                        <span className="badge badge-blue">new</span>{"\n"}
                    </span>{"\n"}
                    <a href="https://developer.payex.com">developer.swedbankpay.com</a>{"\n"}
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

class Lists extends Component {
    componentDidMount () {
        actionList.init();
    }

    render () {
        return (
            <DocContainer docToc>
                <p className="lead">
                    Use lists to give a structured view of information.
                </p>
                <BasicList />
                <InlineList />
                <DescriptionList />
                <SettingsList />
                <ItemList />
                <ItemListLarge />
                <ItemListBordered />
                <HoverItemList />
                <StripedItemList />
            </DocContainer>
        );
    }
}

export default Lists;

export { BasicList, InlineList, DescriptionList, SettingsList, ItemList, ItemListBordered, ItemListLarge, HoverItemList, StripedItemList };
