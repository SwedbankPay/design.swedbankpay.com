import React from "react";
import PrismCode from "react-prism";

import { ComponentPreview, DocContainer, Property } from "@docutils";

const CreatingYourComponent = () => (
    <>
        <h2 id="creating-your-component">Creating your component</h2>
        <p>Create a new file under <Property value="./src/App/components/[MyExampleComponent]/" /> for your component, name it <Property value="index.js" />:</p>
        <ComponentPreview language="javascript" codeFigure>
            {`
//example component
import React from "react";
import PropTypes from "prop-types";
const MyExampleComponent = ({ type, title, separator }) => (
    <div className={\`well well-\${type}\`}>
        <h3>{title}</h3>
        {separator ? <hr /> : null}
        This is my example component in a well.
    </div>
);
MyExampleComponent.propTypes = {
    type: PropTypes.oneOf(["light", "dark"]).isRequired,
    title: PropTypes.string.isRequired,
    separator: PropTypes.bool
};
export default MyExampleComponent;
            `}
        </ComponentPreview>
    </>
);

const CreateADocumentationPage = () => (
    <>
        <h2 id="create-a-documentation-page">Create a documentation page</h2>
        <p>Create a new file under <Property value="./src/App/Documentation/Components/[MyExampleDocumentationComponent]/" /> for your component, call it <Property value="index.js" />:</p>
        <ComponentPreview language="javascript" codeFigure>
            {`
//example documentation component
import React from "react";
import { ComponentPreview, DocContainer } from "@docutils";
import MyExampleComponent from "@components/MyExampleComponent";
const MyExampleDocumentationComponent = () => (
    <DocContainer docToc>
        <p className="lead">This is the documentation for My Example Component.</p>
        <h2 id="example-usage">Example usage</h2>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <MyExampleComponent type="dark" title="My Example Component" separator />
        </ComponentPreview>
    </DocContainer>
);
export default MyExampleDocumentationComponent;
            `}
        </ComponentPreview>
        <p>Use the custom <Property value="ComponentPreview" /> component to preview your component. It has several props, for this example we are going to be using <Property value="language" />, <Property value="showCasePanel" /> and <Property value="codeFigure" />.</p>
        <p>We are also using the <Property value="DocContainer" /> component to sentralize the layout of the documentation, pass the <Property value="docToc" /> prop to add a dynamic table of contents to the documentation of your component. This component scans the provided component for <PrismCode className="language-html">{"<h2>"}</PrismCode>-tags and creates anchors for easier navigation. Just remember to add an id to the <PrismCode className="language-html">{"<h2>"}</PrismCode>-tag.</p>
    </>
);

const AddComponentToRoutes = () => (
    <>
        <h2 id="add-component-to-routes">Add component to routes</h2>
        <p>In <Property value="./src/App/routes/docs.js" /> under the components object add the following:</p>
        <ComponentPreview language="javascript" codeFigure>
            {`
/**
 * Components
 */
{
    title: "Components",
    path: "/docs/components",
    redirect: "/docs/components/alerts",
    routes: [
        ...
        ...
        // ADD THIS
        {
            title: "My Example Documentation Component",
            path: "/docs/components/my-example-documentation-component",
            componentPath: "components/My-example-documentation-component"
        },
        ...
        ...
    ]
},
            `}
        </ComponentPreview>
        <p>You will now be able to go to the route you provided to preview your component. Run <Property value="npm start" /> if you haven{"'"}t already done so, and navigate to <Property value="localhost:3000/docs/components/my-example-documentation-component" /> to see your component in action.</p>
    </>
);

const AddingStyles = () => {

    const CreatingVariables = () => (
        <>
            <h3>Creating variables</h3>
            <p>To add custom variables to your component modify <Property value="./src/less/_variables.less" />, and add a section for your component. Add it alphabetically and update the table of contents.</p>
            <p>Adding a section should look like this:</p>
            <ComponentPreview language="css" codeFigure>
                {`
// _variables.less
// [number]. My Example Component
// ==========================================================================
@my-example-component-color: @gray-3;
@my-example-component-background: @gray-8;
@my-example-component-padding: 1rem;
@my-example-component-font-family: "Arial";
                `}
            </ComponentPreview>
        </>
    );

    return (
        <div>
            <h2 id="adding-styles">Adding styles</h2>
            <p>To add styling for your component create a new file in <Property value="./src/less/components/" />, name it <Property value="my-example-component.less" />.</p>
            <CreatingVariables />
            <p>The style for <Property value="MyExampleComponent" /> should now be included properly, and you should see changes immediately while running dev.</p>
            <p>When writing styles for your component, try to use <Property value="rem" /> (<Property value="1rem" /> = ~<Property value="16px" />) and the predefined variables (only if it makes sense of course) as much as possible. And follow the linting rules set by <Property value="./.stylelintrc" />.</p>
        </div>
    );
};

const AddingJavaScript = () => {
    const CreateAScriptFile = () => (
        <div>
            <h3>Create a script file for your component</h3>
            <p>Create a new file under <Property value="./src/scripts/main/[MyExampleComponent]/" /> for your component, name it <Property value="index.js" />:</p>
            <ComponentPreview language="javascript" codeFigure>
                {`
const init = () => {
    alert("MyExampleComponent was initialized");
};
const MyExampleComponent = {
    init
};
export default MyExampleComponent;
                `}
            </ComponentPreview>
            <p>Note: All essential functionality for your component needs to be called within the <Property value="init" /> method.</p>
        </div>
    );

    const AddScriptToDG = () => (
        <div>
            <h3>Add your components script to scripts</h3>
            <p>Open <Property value="./src/scripts/main/index.js" /> and add your component:</p>
            <ComponentPreview language="javascript" codeFigure>
                {`
...
import MyExampleComponent from "./MyExampleComponent";
...
const dg = {
...
MyExampleComponent,
...
};
...
export { ... MyExampleComponent, ... }
                `}
            </ComponentPreview>
        </div>
    );

    const InitializingTheScript = () => (
        <div>
            <h2>Initializing the script in the documentation</h2>
            <p>Considering the documentation is built in react your documentation component will load after <Property value="scripts" /> runs it{"'"}s <Property value="initAll" /> method, you will need to run your component{"'"}s init method when the component actually renders.</p>
            <p>You can do this by slightly modifying the <Property value="MyExampleDocumentationComponent" />:</p>
            <ComponentPreview language="javascript" codeFigure>
                {`
//example documentation component
// change this line
import React, { Component } from "react";
...
// import your components script
import { MyExampleComponent } from "@src/scripts/main";
...
...
// modify MyExampleDocumentationComponent
class MyExampleDocumentationComponent extends Component {
    componentDidMount () {
        MyExampleComponent.init();
    }
    render() {
        return (
            <DocContainer docToc>
                <p className="lead">This is the documentation for My Example Component.</p>
                <h2 id="example-usage">Example usage</h2>
                <ComponentPreview language="html" showCasePanel codeFigure>
                    <MyExampleComponent type="dark" title="My Example Component" separator />
                </ComponentPreview>
            </DocContainer>
        )
    }
}
                `}
            </ComponentPreview>
        </div>
    );

    return (
        <div>
            <h2 id="adding-javascript">Adding javascript</h2>
            <p>If your component needs javascript to run, you will need to add the javascript to the <Property value="scripts" /></p>
            <CreateAScriptFile />
            <AddScriptToDG />
            <InitializingTheScript />
        </div>
    );
};

const Contributing = () => (
    <DocContainer docToc>
        <p className="lead">When contributing, it is important to remember that this project supports two brands: <strong>Swedbank Pay</strong> and <strong>PayEx</strong>.</p>
        <p>Both brands depend on different theme variables, so it is vital to check that the component also works and looks good on the opposite brand of which you are working on.</p>
        <CreatingYourComponent />
        <CreateADocumentationPage />
        <AddComponentToRoutes />
        <AddingStyles />
        <AddingJavaScript />
    </DocContainer>
);

export default Contributing;

/* For testing */
export { CreatingYourComponent, CreateADocumentationPage, AddComponentToRoutes, AddingStyles, AddingJavaScript };
