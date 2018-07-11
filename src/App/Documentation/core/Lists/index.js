import React from "react";

import { ComponentPreview, DocToc } from "#";

const BasicList = () => (
    <>
        <h2 id="basic-list">Basic list</h2>
        <p>Basic lists info...<code className="token property">.list</code></p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <ul className="list">
                <li>Bread</li>
                <li>Coffee beans</li>
                <li>Milk</li>
                <li>Butter</li>
            </ul>
        </ComponentPreview>
        <h3>Nested list</h3>
        <p>Nested lists are also pretty sweet...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
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
        <p>Inline lists info...<code className="token property">.list-inline</code></p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
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
        <p>Description lists info...<code className="token property">.description-list</code></p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
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
        <p>Settings lists info...<code className="token property">.settings-list</code></p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
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

const ListsText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Lots of cool info about lists will be here...</p>
        <BasicList />
        <InlineList />
        <DescriptionList />
        <SettingsList />
    </div>
);

const Lists = () => {
    return (
        <div className="doc-container">
            <div className="row">
                <ListsText />
                <DocToc component={ListsText} />
            </div>
        </div>
    );
};

export default Lists;

/* for testing */
export { BasicList, InlineList, DescriptionList, SettingsList, ListsText };
