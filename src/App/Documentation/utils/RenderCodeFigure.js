import React from "react";
import PropTypes from "prop-types";
import ReactDOMServer from "react-dom/server";
import PrismCode from "react-prism";
import jsbeautifier from "js-beautify";

const _generateHtml = (Component, removeOuterTag, props) => {
    let code = ReactDOMServer.renderToStaticMarkup(<Component {...props} />);

    if (removeOuterTag) {
        // TODO: This is stupid, find a better way to do this [EH]
        // should be possible with React 16.2
        // https://stackoverflow.com/questions/33766085/how-to-avoid-extra-wrapping-div-in-react
        const div = document.createElement("div");
        div.innerHTML = code;
        code = div.firstElementChild.innerHTML;
    }

    return (
        <figure>
            <pre>
                <PrismCode className="language-html">
                    {jsbeautifier.html_beautify(code)}
                </PrismCode>
            </pre>
        </figure>
    );
};

const _generateCss = (code) => (
    <figure>
        <pre>
            <PrismCode className="language-css">
                {jsbeautifier.css_beautify(code)}
            </PrismCode>
        </pre>
    </figure>
);

const _generateJs = () => {
    return (
        <div></div>
    );
};

const RenderCodeFigure = ({ Component, props, language, removeOuterTag, styleSheet }) => {
    let code;

    switch (language) {
        case "html":
            code = _generateHtml(Component, removeOuterTag, props);
            break;
        case "css":
            code = _generateCss(styleSheet);
            break;
        case "javascript":
            code = _generateJs();
            break;
    }

    return code;
};

RenderCodeFigure.propTypes = {
    language: PropTypes.string.isRequired,
    Component: PropTypes.func,
    props: PropTypes.object,
    styleSheet: PropTypes.string,
    removeOuterTag: PropTypes.bool
};

export default RenderCodeFigure;
