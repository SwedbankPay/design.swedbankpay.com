import React from "react";
import PrismCode from "react-prism";

import { ComponentPreview, DocToc, Property } from "#";

const CreatingYourComponent = () => (
    <>
        <h2 id="creating-your-component">Creating your component</h2>
        <p>Create a new file under <Property value="./src/App/components/[MyExampleComponent]/" /> for your component, name it <Property value="index.js" />:</p>
        <ComponentPreview language="javascript" codeFigure>
            {"//example component\n\n"}
            {"import React from \"react\";"}
            {"import PropTypes from \"prop-types\";\n\n"}
            {"const MyExampleComponent = ({ type, title, separator }) => (\n"}
            {"<div className={`well well-${type}`}>\n"}
            {"        <h3>{title}</h3>\n"}
            {"        {separator ? <hr /> : null}\n"}
            {"        This is my example component in a well.\n"}
            {"    </div>\n"}
            {");\n\n"}
            {"MyExampleComponent.propTypes = {\n"}
            {"type: PropTypes.oneOf([\"light\", \"dark\"]).isRequired,"}
            {"title: PropTypes.string.isRequired,"}
            {"separator: PropTypes.bool"}
            {"};\n\n"}
            {"export default MyExampleComponent;"}
        </ComponentPreview>
    </>
);

const CreateADocumentationPage = () => (
    <>
        <h2 id="create-a-documentation-page">Create a documentation page</h2>
        <p>Create a new file under <Property value="./src/App/Documentation/Components/[MyExampleDocumentationComponent]/" /> for your component, call it <Property value="index.js" />:</p>
        <ComponentPreview language="javascript" codeFigure>
            {"//example documentation component\n\n"}
            {"import React from \"react\";\n\n"}
            {"import { ComponentPreview, DocToc } from \"#\";"}
            {"import MyExampleComponent from \"@/MyExampleComponent\";\n\n"}
            {"const MyExampleDocumentationComponentText = () => (\n"}
            {"    <div className=\"col-lg-10 doc-body\">\n"}
            {"        <p className=\"lead\">This is the documentation for My Example Component.</p>\n"}
            {"        <h2 id=\"example-usage\">Example usage</h2>\n"}
            {"        <ComponentPreview language=\"html\" showCasePanel codeFigure>\n"}
            {"            <MyExampleComponent type=\"dark\" title=\"My Example Component\" separator />\n"}
            {"        </ComponentPreview>\n"}
            {"    </div>\n"}
            {");\n\n"}
            {"const MyExampleDocumentationComponent = () => (\n"}
            {"    <div className=\"doc-container\">\n"}
            {"        <div className=\"row\">\n"}
            {"            <MyExampleDocumentationComponentText />\n"}
            {"            <DocToc component={MyExampleDocumentationComponentText} />\n"}
            {"        </div>\n"}
            {"    </div>\n"}
            {");\n\n"}
            {"export default MyExampleDocumentationComponent;"}
        </ComponentPreview>
        <p>Use the custom <Property value="ComponentPreview" /> component to preview your component. It has three props, <Property value="language" />, <Property value="showCasePanel" /> and <Property value="codeFigure" />, for this example we are goin to be using all three.</p>
        <p>We are also using the `DocToc` component to add a dynamic table of contents to the documentation of your component. This component scans the provided component for <PrismCode className="language-html">{"<h2>"}</PrismCode>-tags and creates anchors for easier navigation. Just remember to add an id to the <PrismCode className="language-html">{"<h2>"}</PrismCode>-tag.</p>
    </>
);

const AddComponentToRoutes = () => (
    <>
        <h2 id="add-component-to-routes">Add component to routes</h2>
        <p>In <Property value="./src/App/routes/docs.js" /> under the components object add the following:</p>
        <ComponentPreview language="javascript" codeFigure>
            {"/**\n"}
            {" * Components\n"}
            {" */\n"}
            {"{\n"}
            {"    title: \"Components\",\n"}
            {"    path: \"/docs/components\",\n"}
            {"    redirect: \"/docs/components/alerts\",\n"}
            {"    routes: [\n"}
            {"        ...\n"}
            {"        ...\n"}
            {"        // ADD THIS\n"}
            {"        {\n"}
            {"            title: \"My Example Documentation Component\",\n"}
            {"            path: \"/docs/components/my-example-documentation-component\",\n"}
            {"            component: require(\"../Documentation/Components/MyExampleDocumentationComponent\")\n"}
            {"        },\n"}
            {"        ...\n"}
            {"        ...\n"}
            {"    ]\n"}
            {"},\n"}
        </ComponentPreview>
        <p>You will now be able to go to the route you provided to preview your component. Run <Property value="npm start" /> if you haven{"'"}t already done so, and navigate to <Property value="localhost:3000/docs/components/my-example-documentation-component" /> to see your component in action.</p>
    </>
);

const AddingStyles = () => {
    const ImportingTheStyles = () => (
        <>
            <h3>Importing the styles</h3>
            <p>Import it in the appropriate root-file (<Property value="px.less" /> for the core styles, under <Property value="/themes" /> if the component is going to be part of a specific theme).</p>
            <p>Assuming you are creating a core component the import would look like this:</p>
            <ComponentPreview language="css" codeFigure>
                {"// px.less\n"}
                {"...\n"}
                {"...\n\n"}

                {"// Components\n"}
                {"...\n"}
                {"...\n"}
                {"@import \"components/my-example-component\";\n"}
                {"..."}
            </ComponentPreview>
        </>
    );

    const CreatingVariables = () => (
        <>
            <h3>Creating variables</h3>
            <p>To add custom variables to your component modify <Property value="./src/less/_variables.less" />, and add a section for your component. Add it alphabetically and update the table of contents.</p>
            <p>Adding a section should look like this:</p>
            <ComponentPreview language="css" codeFigure>
                {"// _variables.less\n\n"}
                {"// [number]. My Example Component\n"}
                {"// ==========================================================================\n\n"}
                {"@my-example-component-color: @gray-3;\n"}
                {"@my-example-component-background: @gray-8;\n"}
                {"@my-example-component-padding: 1rem;\n"}
                {"@my-example-component-font-family: \"Arial\";\n"}
            </ComponentPreview>
        </>
    );

    return (
        <div>
            <h2 id="adding-styles">Adding styles</h2>
            <p>To add styling for your component create a new file in <Property value="./src/less/components/" />, name it <Property value="my-example-component.less" />.</p>
            <ImportingTheStyles />
            <CreatingVariables />
            <p>Your the styles for <Property value="MyExampleComponent" /> should now be included properly, and you should see changes immediatly while running dev.</p>
            <p>When writing styles for your component, try to use <Property value="rem" /> (<Property value="1rem" /> = ~<Property value="16px" />) and the predefined variables (only if it makes sense of course) as much as possible. And follow the linting rules set by <Property value="./.stylelintrc" />.</p>
        </div>
    );
};

const AddingJavaScript = () => {
    const CreateAScriptFile = () => (
        <div>
            <h3>Create a script file for your component</h3>
            <p>Create a new file under <Property value="./src/px-script/[MyExampleComponent]/" /> for your component, name it <Property value="index.js" />:</p>
            <ComponentPreview language="javascript" codeFigure>
                {"const int = () => {\n"}
                {"alert(\"MyExampleComponent was initialized\");\n"}
                {"};\n\n"}
                {"const MyExampleComponent = {\n"}
                {"init\n"}
                {"};\n\n"}
                {"export default MyExampleComponent;"}
            </ComponentPreview>
            <p>Note: All essential functionality for your component needs to be called within the <Property value="init" /> method.</p>
        </div>
    );

    const AddScriptToPX = () => (
        <div>
            <h3>Add your components script to px-script</h3>
            <p>Open <Property value="./src/px-script/index.js" /> and add your component:</p>
            <ComponentPreview language="javascript" codeFigure>
                {"...\n"}
                {"import MyExampleComponent from \"./MyExampleComponent\";\n"}
                {"...\n"}
                {"const px = {\n"}
                {"...\n"}
                {"MyExampleComponent,\n"}
                {"...\n"}
                {"};\n\n"}
                {"...\n"}
                {"export { ... MyExampleComponent, ... }\n"}
            </ComponentPreview>
        </div>
    );

    const InitializingTheScript = () => (
        <div>
            <h2>Initializing the script in the documentation</h2>
            <p>Considering the documentation is built in react your documentation component will load after <Property value="px-script" /> runs it{"'"}s <Property value="initAll" /> method, you will need to run your component{"'"}s init method when the component actually renders.</p>
            <p>You can do this by slightly modifying the <Property value="MyExampleDocumentationComponent" />:</p>
            <ComponentPreview language="javascript" codeFigure>
                {"//example documentation component\n\n"}
                {"// change this line\n"}
                {"import React, { Component } from \"react\";\n"}
                {"...\n"}
                {"// import your components script\n"}
                {"import { MyExampleComponent } from \"../../../../px-script\";\n\n"}
                {"...\n"}
                {"...\n"}
                {"// modify MyExampleDocumentationComponent\n"}
                {"class MyExampleDocumentationComponent extends Component {\n"}
                {"componentDidMount () {\n"}
                {"MyExampleComponent.init();\n"}
                {"}\n\n"}
                {"render() {\n"}
                {"return (\n"}
                {"<div className=\"doc-container\">\n"}
                {"\t\t\t\t<div className=\"row\">\n"}
                {"\t\t\t\t\t<MyExampleDocumentationComponentText />\n"}
                {"\t\t\t\t\t<DocToc component={MyExampleDocumentationComponentText} />\n"}
                {"\t\t\t\t</div>\n"}
                {"\t\t\t</div>\n"}
                {")\n"}
                {"}\n"}
                {"}\n"}
            </ComponentPreview>
        </div>
    );

    return (
        <div>
            <h2 id="adding-javascript">Adding javascript</h2>
            <p>If your component needs javascript to run, you will need to add the javascript to the <Property value="px-script" /></p>
            <CreateAScriptFile />
            <AddScriptToPX />
            <InitializingTheScript />
        </div>
    );
};

const ContributingText = () => (
    <div className="col-lg-10">
        <p className="lead">To create a new component</p>
        <CreatingYourComponent />
        <CreateADocumentationPage />
        <AddComponentToRoutes />
        <AddingStyles />
        <AddingJavaScript />
    </div>
);

const Contributing = () => (
    <div className="doc-container">
        <div className="row">
            <ContributingText />
            <DocToc component={ContributingText} />
        </div>
    </div>
);

export default Contributing;

/* For testing */
export { CreatingYourComponent, CreateADocumentationPage, AddComponentToRoutes, AddingStyles, AddingJavaScript, ContributingText };
