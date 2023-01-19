
import { renderToStaticMarkup } from "react-dom/server";
import jsbeautifier from "js-beautify";

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
    val = val.replace(/value /g, "");

    return val;
};

const setDangerousHtml = val => {
    let code = "";

    if (typeof val.forEach === "function") {
        val.forEach(v => code += `${v}\n`);
    } else {
        code = val;
    }

    return code;
};

const copyOuterElement = element => {
    const renderedElement = document.createElement("div");

    renderedElement.innerHTML = renderToStaticMarkup(element);

    const clonedElement = renderedElement.firstElementChild?.cloneNode(false);

    return clonedElement;
};

export const codeParsingForEditor = (codePassedAsProp, language, removeOuterTag, removeList, dangerousHTML, hideValue) => {
    let code = "";
    let outerElement = null;

    if (language === "html" && dangerousHTML) {
        /* usually used for NPM  scripts informations at the bottome of component pages */
        code = setDangerousHtml(codePassedAsProp);
    } else if (language === "html" && codePassedAsProp && typeof codePassedAsProp.map === "function") {
        // typically used for scripts to use in HTML (e.g. Charts)
        codePassedAsProp.map(child => {
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
            code = _removeOuterTag(codePassedAsProp);
            outerElement = copyOuterElement(codePassedAsProp);
        } else if (removeList) {
            code += _removeList(codePassedAsProp);
        } else {
            code += renderToStaticMarkup(codePassedAsProp);
        }
    } else {
        switch (typeof codePassedAsProp) {
            case "string":
                code = codePassedAsProp;

                break;
            case "object":
                codePassedAsProp.forEach(child => code += child);

                break;
            default:
                console.warn("CodeFigure: codePassedAsProp needs attention!");
        }
    }

    switch (language) {
        case "html":
            code = jsbeautifier.html_beautify(code);
            code = _removeEmpty(code);

            if (hideValue) {
                code = code.replace(/ value="(.*)"/g, "");
            }

            break;
        case "css":
            code = jsbeautifier.css(code);

            break;
        case "javascript":
        // This is not needed, and for some reason crashes after a prod build [EH]
        // code = jsbeautifier(code);
            break;
        case "terminal":
        case "json":
            break;
        default:
            return "update switchcase!";
    }

    return [code, outerElement];
};
