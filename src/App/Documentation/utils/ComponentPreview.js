import React from "react";
import PropTypes from "prop-types";
import { renderToStaticMarkup } from "react-dom/server";
import PrismCode from "react-prism";
import jsbeautifier from "js-beautify";

const ComponentPreview = ({ children, language, removeOuterTag, hideValue, removeList, showCasePanel, codeFigure }) => {
    // TODO: This is stupid, find a better way to do this [EH]
    // should be possible with React 16.2
    // https://stackoverflow.com/questions/33766085/how-to-avoid-extra-wrapping-div-in-react
    const _removeOuterTag = element => {
        const div = document.createElement("div");
        div.innerHTML = renderToStaticMarkup(element);

        if (div.firstElementChild) {
            return div.firstElementChild.innerHTML;
        } else if (div.firstChild) {
            return div.firstChild.nodeValue;
        }
        return "Check ComponentPreview _removeOuterTag!";
    };

    const _removeList = element => {
        const div = document.createElement("div");
        div.innerHTML = renderToStaticMarkup(element);

        const listElements = div.querySelectorAll("li");
        let htmlString = "";

        listElements.forEach(el => {
            htmlString += `${el.innerHTML} \n`;
        });

        return htmlString;
    };

    const _removeEmpty = val => {
        val = val.replace(/=""/g, "");
        val = val.replace(/ class>/g, ">");
        val = val.replace(/ class /g, " ");

        return val;
    };

    const _removeValue = val => {
        return val.replace(/ value="(.*)"/g, "");
    };

    const CodeFigure = () => {
        let code = "";

        if (language === "html" && children && typeof children.map === "function") {
            children.map(child => {
                if (removeOuterTag) {
                    code += _removeOuterTag(child);
                } else if (removeList) {
                    code += _removeList(child);
                } else {
                    code += renderToStaticMarkup(child);
                }
            });

        } else if (language === "html") {
            if (removeOuterTag) {
                code += _removeOuterTag(children);
            } else if (removeList) {
                code += _removeList(children);
            } else {
                code += renderToStaticMarkup(children);
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
                code = _removeEmpty(code);
                if (hideValue) {
                    code = _removeValue(code);
                }
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
        <>
            {showCasePanel ? <ShowCasePanel /> : null}
            {codeFigure ? <CodeFigure /> : null}
        </>
    );
};

ComponentPreview.propTypes = {
    language: PropTypes.string.isRequired,
    removeOuterTag: PropTypes.bool,
    removeList: PropTypes.bool,
    showCasePanel: PropTypes.bool,
    codeFigure: PropTypes.bool
};

const Attribute = ({ data, name, value }) => {
    if (name && value) {
        return (
            <code>
                {data ? <span className="token attr-name">data-</span> : null}
                <span className="token attr-name">{name}</span>
                <span className="token attr-value">
                    <span className="token punctuation">{"=\""}</span>
                    {value}
                    <span className="token punctuation">{"\""}</span>
                </span>
            </code>
        );
    } else if (name && !value) {
        return (
            <code>
                {data ? <span className="token attr-name">data-</span> : null}
                <span className="token attr-name">{name}</span>
            </code>
        );
    } else if (!name && value) {
        return (
            <code>
                <span className="token attr-value">{value}</span>
            </code>
        );
    }
};


Attribute.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
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
