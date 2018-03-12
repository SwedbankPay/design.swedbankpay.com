import React from "react";
import PropTypes from "prop-types";
import ReactDOMServer from "react-dom/server";
import PrismCode from "react-prism";
import jsbeautifier from "js-beautify";

const ComponentPreview = ({ children, language, removeOuterTag, showCasePanel, codeFigure }) => {
    // TODO: This is stupid, find a better way to do this [EH]
    // should be possible with React 16.2
    // https://stackoverflow.com/questions/33766085/how-to-avoid-extra-wrapping-div-in-react
    const _removeOuterTag = element => {
        const div = document.createElement("div");
        div.innerHTML = ReactDOMServer.renderToStaticMarkup(element);
        return div.firstElementChild.innerHTML;

    };

    const CodeFigure = () => {
        let code = "";

        if (language === "html" && typeof children.map === "function") {
            children.map(child => {
                if (removeOuterTag) {
                    code += _removeOuterTag(child);
                } else {
                    code += ReactDOMServer.renderToStaticMarkup(child);
                }
            });

        } else if (language === "html") {
            if (removeOuterTag) {
                code += _removeOuterTag(children);
            } else {
                code += ReactDOMServer.renderToStaticMarkup(children);
            }
        } else {
            switch (typeof children) {
                case "string":
                    code = children;
                    break;
                case "object":
                    children.forEach(child => code += child);
                    break;
                default:
                    console.warn("CodeFigure: children needs attention!");
            }
        }

        switch (language) {
            case "html":
                code = jsbeautifier.html_beautify(code);
                break;
            case "css":
                code = jsbeautifier.css_beautify(code);
                break;
            case "javascript":
                code = jsbeautifier.js_beautify(code, {
                    brace_style: "preserve-inline", // eslint-disable-line camelcase
                    e4x: true
                });
                break;
            default:
                return "update switchcase!";
        }

        return (
            <figure>
                <pre>
                    <PrismCode className={`language-${language}`}>
                        {code}
                    </PrismCode>
                </pre>
            </figure>
        );
    };


    const ShowCasePanel = () => (
        <div className="showcase-panel">
            {children}
        </div>
    );

    return (
        <div>
            {showCasePanel ? <ShowCasePanel /> : null}
            {codeFigure ? <CodeFigure /> : null}
        </div>
    );
};

ComponentPreview.propTypes = {
    language: PropTypes.string.isRequired,
    removeOuterTag: PropTypes.bool,
    showCasePanel: PropTypes.bool,
    codeFigure: PropTypes.bool
};

const Attribute = ({ data, name, value }) => (
    <code>
        {data ? <span className="token attr-name">data-px-</span> : null}
        <span className="token attr-name">{name}</span>
        <span className="token attr-value">
            <span className="token punctuation">{"=\""}</span>
            {value}
            <span className="token punctuation">{"\""}</span>
        </span>
    </code>
);

Attribute.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    data: PropTypes.bool
};

const PxScript = ({ component, subComponents, func, params }) => {
    let renderedParams, renderedSubComponents;

    if (subComponents) {
        renderedSubComponents = subComponents.map((component, i) => (
            <span key={i}>{component}
                <span className="token punctuation">.</span>
            </span>
        ));
    }

    if (params) {
        renderedParams = params.map((param, i) => (
            <span key={i}>{param}
                {(i < params.length - 1) ? <span className="token punctuation">, </span> : null}
            </span>
        ));
    }

    return (
        <code>
            <span>px</span>
            <span className="token punctuation">.</span>
            <span>{component}</span>
            <span className="token punctuation">.</span>
            {renderedSubComponents}
            <span className="token function">{func}</span>
            <span className="token punctuation">(</span>
            {renderedParams}
            <span className="token punctuation">);</span>
        </code>
    );
};

PxScript.propTypes = {
    component: PropTypes.string.isRequired,
    subComponents: PropTypes.array,
    func: PropTypes.string.isRequired,
    params: PropTypes.array
};

export default ComponentPreview;

export { Attribute, PxScript };
