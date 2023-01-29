import { useState, useEffect, cloneElement } from "react";
import { codeParsingForEditor } from "./codeParserFuncsForEditor";

export const useCodeParser = ({ showCasePanelAdvanced,
    childrenPassed,
    activeTab,
    activeOptions = [],
    language,
    removeOuterTag,
    removeList,
    dangerousHTML,
    hideValue }) => {

    const [codeParsed, setCodeParsed] = useState("");
    const [outerElement, setOuterElement] = useState(null);

    useEffect(() => {
        if (!showCasePanelAdvanced || !showCasePanelAdvanced.elements?.length) {
            setCodeParsed(codeParsingForEditor(childrenPassed, language, removeOuterTag, removeList, dangerousHTML, hideValue)[0]);

            if (removeOuterTag) { setOuterElement(codeParsingForEditor(childrenPassed, language, removeOuterTag, removeList, dangerousHTML, hideValue)[1]); }
        } else if (!activeTab?.component || !activeOptions) {
            setCodeParsed("");
        } else {
            const componentCodeToParse = cloneElement(activeTab?.component,
                activeOptions.reduce((acc, currentOption) => ({
                    ...acc,
                    ...currentOption.value
                }), {})
            );

            setCodeParsed(codeParsingForEditor(componentCodeToParse, language, removeOuterTag, removeList, dangerousHTML, hideValue)[0]);

            if (removeOuterTag) { setOuterElement(codeParsingForEditor(componentCodeToParse, language, removeOuterTag, removeList, dangerousHTML, hideValue)[1]); }
        }
    }, [showCasePanelAdvanced,
        childrenPassed,
        activeTab,
        activeOptions,
        language,
        removeOuterTag,
        removeList,
        dangerousHTML,
        hideValue]);

    const outerElementCssClasses = outerElement && outerElement?.classList ? [...outerElement?.classList] : [];

    return [codeParsed, outerElement, outerElementCssClasses];
};
