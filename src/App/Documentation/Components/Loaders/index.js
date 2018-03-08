import React from "react";
import PrismCode from "react-prism";

import ComponentPreview, { PxScript } from "../../utils/ComponentPreview";
import DocToc from "../../utils/DocToc";

import LoaderComponent from "../../../components/Loader";

const BasicUsage = () => (
    <div>
        <h2 id="basic-usage">Basic usage</h2>
        <p>Basic usage...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <LoaderComponent size="default" visible={true} />
        </ComponentPreview>
    </div>
);

const Sizes = () => (
    <div>
        <h2 id="sizes">Sizes</h2>
        <p>In addition to <code className="token property">.loader-default</code> you can use <code className="token property">.loader-small</code> and <code className="token property">.loader-large</code> to decrease or increase the size of the loader.</p>
        <h3>Small</h3>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <LoaderComponent size="small" visible={true} />
        </ComponentPreview>
        <h3>Large</h3>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <LoaderComponent size="large" visible={true} />
        </ComponentPreview>
    </div>
);

const MutedLoader = () => (
    <div>
        <h2 id="muted-loader">Muted loader</h2>
        <p>Use class <code className="token property">.loader-muted</code> to mute the loader...</p>
        <ComponentPreview language="html" showCasePanel={true} codeFigure={true}>
            <LoaderComponent id="test" size="default" visible={true} muted={true} />
        </ComponentPreview>
    </div>
);

const UsageWithJavascript = () => (
    <div>
        <h2 id="usage-with-javascript">Usage with javascript</h2>
        <p>To interact with the loader-component with javascript...</p>
        <h3>Show loaders</h3>
        <ComponentPreview language="javascript" codeFigure={true}>
            {"px.loader.show();"}{"\n"}
            {"// OR"}{"\n"}
            {"px.loader.show(id);"}
        </ComponentPreview>
        <h3>Hide loaders</h3>
        <ComponentPreview language="javascript" codeFigure={true}>
            {"px.loader.hide();"}{"\n"}
            {"// OR"}{"\n"}
            {"px.loader.hide(id);"}
        </ComponentPreview>
        <h3>Methods</h3>
        <table>
            <thead>
                <tr>
                    <th>Method</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <PxScript component="loader" func="show" />
                    </td>
                    <td>
                        Gives all rendered loaders the class <code className="token property">.in</code>, effectively giving them the css property <PrismCode className="language-css">{"display: inline-block;"}</PrismCode>.
                    </td>
                </tr>
                <tr>
                    <td>
                        <PxScript component="loader" func="show" params={["id"]} />
                    </td>
                    <td>
                        Gives the specified loader the class <code className="token property">.in</code>, giving it the css property <PrismCode className="language-css">{"display: inline-block;"}</PrismCode>. If no loader with the specified id is rendered to the DOM, the method does nothing.
                    </td>
                </tr>
                <tr>
                    <td>
                        <PxScript component="loader" func="hide" />
                    </td>
                    <td>
                        Removes the class <code className="token property">.in</code> from all rendered loaders, effectively giving them the css property <PrismCode className="language-css">{"display: none;"}</PrismCode>
                    </td>
                </tr>
                <tr>
                    <td>
                        <PxScript component="loader" func="hide" params={["id"]} />
                    </td>
                    <td>
                        Removes the class <code className="token property">.in</code> from the loader specified by id, giving it the css property <PrismCode className="language-css">{"display: none;"}</PrismCode>. If no alert with the specified id is rendered to the DOM, the method does nothing.
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

const LoadersText = () => (
    <div className="col-md-12 col-lg-10 doc-body">
        <p className="lead">Use loaders...</p>
        <BasicUsage />
        <Sizes />
        <MutedLoader />
        <UsageWithJavascript />
    </div>
);


const Loaders = () => {
    return (
        <div className="doc-container">
            <div className="row">
                <LoadersText />
                <DocToc component={LoadersText} />
            </div>
        </div>
    );
};

export default Loaders;

/* for testing */
export { BasicUsage, Sizes, MutedLoader, UsageWithJavascript, LoadersText };
