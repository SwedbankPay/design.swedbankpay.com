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

    useEffect(() => {
        if (!showCasePanelAdvanced || !showCasePanelAdvanced.elements?.length) {
            setCodeParsed(codeParsingForEditor(childrenPassed, language, removeOuterTag, removeList, dangerousHTML, hideValue));
        } else if (!activeTab?.component || !activeOptions) {
            setCodeParsed("");
        } else {
            const componentCodeToParse = cloneElement(activeTab?.component,
                activeOptions.reduce((acc, currentOption) => ({
                    ...acc,
                    ...currentOption.value
                }), {})
            );

            setCodeParsed(codeParsingForEditor(componentCodeToParse, language, removeOuterTag, removeList, dangerousHTML, hideValue));
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

    return codeParsed;
};
