import React, { Component } from "react";

import ActionListComponent from "@components/ActionList";
import { ComponentPreview, DocContainer } from "@docutils";
import CodeTags from "@components/CodeTags";

const { actionList } = window.dg;
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

const BasicList = () => (
    <>
        <h2 id="basic-list">Basic list</h2>
        <p>
            Add <CodeTags type="secondary" code=".list" /> to a list to display the basic list. Our lists do not use bullet points.
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
                <li>Tea {"\n"}
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
            Use <CodeTags type="secondary" code=".list-inline" /> on a list to make all items appear on the same line.
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

const BulletList = () => (
    <>
        <h2 id="bullet-list">Bullet list</h2>
        <p>
            Add <CodeTags type="secondary" code=".list-bullet" /> on a list to make it a bullet list.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ul className="list list-bullet">
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
            The description list lets you provide each item with a more specific description of each item. Add <CodeTags type="secondary" code=".description-list" /> to your dl.
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
            Use <CodeTags type="secondary" code=".settings-list" /> to visualize different settings in your web application.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ul className="settings-list">
                <li>{"\n"}
                    <i className="material-icons text-success" aria-hidden="true">check</i>
                    Shovels and tapestry newsletter{"\n"}
                </li>
                <li>{"\n"}
                    <i className="material-icons text-warning" aria-hidden="true">remove</i>
                    Spoon collectors weekly newsletter{"\n"}
                </li>
                <li>{"\n"}
                    <i className="material-icons text-danger" aria-hidden="true">clear</i>
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
            <CodeTags type="secondary" code=".item-list"/>s is a good way to offer more extensive information about each item. Each item has their own box which seperates the items more clearly than our other options.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ul className="item-list">
                <li>
                    <div>
                        <h3>Foo</h3>
                        <small>Due date 2 days</small>
                    </div>
                    <div>
                        <span className="h3 text-highlight">2120 kr</span>
                    </div>
                </li>
                <li>
                    <div>
                        <h3>Bar</h3>
                        <small>Due date 1 day</small>
                    </div>
                    <div>
                        <span className="h3 text-highlight">1100 kr</span>
                    </div>
                </li>
                <li>
                    <div>
                        <h3>Baz</h3>
                        <small>Due date 5 days</small>
                    </div>
                    <div>
                        <span className="h3 text-highlight">200 kr</span>
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
                        <h3>Foo</h3>
                        <small>Due date 2 days</small>
                    </div>
                    <div>
                        <span className="h3 text-highlight">2120 kr</span>
                    </div>
                    <footer><a href="#">Se faktura</a></footer>
                </li>
                <li>
                    <div>
                        <h3>Bar</h3>
                        <small>Due date 1 day</small>
                    </div>
                    <div>
                        <span className="h3 text-highlight">1100 kr</span>
                    </div>
                    <footer className="item-list-footer">
                        <a href="#">Se faktura</a>
                    </footer>
                </li>
                <li>
                    <div>
                        <h3>Baz</h3>
                        <small>Due date 5 days</small>
                    </div>
                    <div>
                        <span className="h3 text-highlight">200 kr</span>
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
                        <h3>Foo</h3>
                        <small>Due date 2 days</small>
                    </div>
                    <div>
                        <span className="h3 text-highlight">2120 kr</span>
                    </div>
                    <footer><a href="#">Se faktura</a></footer>
                </li>
                <li>
                    <div>
                        <h3>Bar</h3>
                        <small>Due date 1 day</small>
                    </div>
                    <div>
                        <span className="h3 text-highlight">1100 kr</span>
                    </div>
                    <footer className="item-list-footer">
                        <a href="#">Se faktura</a>
                    </footer>
                </li>
                <li>
                    <div>
                        <h3>Baz</h3>
                        <small>Due date 5 days</small>
                    </div>
                    <div>
                        <span className="h3 text-highlight">200 kr</span>
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
            Include <CodeTags type="secondary" code=".item-list-hover" /> to give your items a hover effect. You can use this on any variation of <CodeTags type="secondary" code=".item-list" />.
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
            If you want more seperation between each item you can use <CodeTags type="secondary" code=".item-list-striped" />.
        </p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <ul className="item-list item-list-striped">
                <li>
                    <span>4925*********004</span>
                    <ActionListComponent items={items} />
                </li>
                <li>{"\n"}
                    <span>{"\n\t\t\t"}4925*********004{"\n\t\t\t"}
                        <span className="badge badge-blue">new</span>{"\n"}
                    </span>{"\n"}
                    <a href="https://developer.payex.com">developer.swedbankpay.com</a>{"\n"}
                </li>
                <li>{"\n"}
                    <span>4925*********004</span>{"\n"}
                    <i className="material-icons" aria-hidden="true">star</i>{"\n"}
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
                <BulletList />
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

export {
    BasicList,
    InlineList,
    BulletList,
    DescriptionList,
    SettingsList,
    ItemList,
    ItemListBordered,
    ItemListLarge,
    HoverItemList,
    StripedItemList
};
