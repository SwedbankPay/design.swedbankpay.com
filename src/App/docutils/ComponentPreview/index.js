import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { SandpackProvider, SandpackCodeEditor, SandpackPreview } from "@codesandbox/sandpack-react";
import { ShowCasePanelAdvanced } from "./ShowCasePanelAdvanced";
import { useCodeParser } from "./useCodeParser";
import { resetOptions } from "./optionsUtils";

// TODO: should the preview of showCasePanel & the one of advancedShowCasePanel use the same component ?
// in a way it is using the same SndpackPreview, so it would keep them in sync (e.g. add additional button "copy to clipboard", etc)
// on the other hand the whole container around is different (for some reason)
const ShowCasePanel = ({ showCasePanelSm, negative, childrenPassed, staticPreview, previewMinHeight }) => (
    <div
        className={`showcase-panel${showCasePanelSm ? " showcasepanel-sm" : ""}${negative ? " showcase-panel-negative" : ""}`}
        style={ previewMinHeight ? {
            "--preview-min-height": `${previewMinHeight}px`,
        } : null}
    >
        {staticPreview ?
            childrenPassed
            : <SandpackPreview /> }
    </div>
);

const CodeFigure = () => <SandpackCodeEditor showInlineErrors />;

// TODO: fix the previous componentsDidUpdate -> it used to re-init things like tab, accordion, hint-expander, sheetetc
// TODO: fix styling of tabs & options (classes brought by Sandpack screw our own styling)
const ComponentPreview = ({
    children: childrenPassed,
    language,
    removeOuterTag,
    hideValue,
    hideCodeFigure,
    removeList,
    showCasePanel,
    showCasePanelAdvanced,
    showCasePanelSm,
    previewMinHeight = false,
    codeFigure,
    dangerousHTML,
    negative,
    staticPreview = false
}) => {

    const [activeTab, setActiveTab] = useState(showCasePanelAdvanced?.elements[0]);

    /**
     * An activeOption
     * @typedef {Object} ActiveOption
     * @property {string|undefined} description - The optional description, for the text
     * @property {string} id - The option id
     * @property {object} value - The option value (e.g. `size: "lg",` -or- `disabled: true,`)
    */

    const [activeOptions, setActiveOptions] = useState(showCasePanelAdvanced?.elements[0]?.activeOptions ? [...showCasePanelAdvanced.elements[0].activeOptions] : []);
    const codeParsed = useCodeParser({ showCasePanelAdvanced,
        childrenPassed,
        activeTab,
        activeOptions,
        language,
        removeOuterTag,
        removeList,
        dangerousHTML,
        hideValue });

    const updateActiveOptions = (inputModified, inputType) => {

        if (inputType === "checkbox") {
            if (activeOptions.some(option => option.id === inputModified.id)) {
                setActiveOptions(
                    [...activeOptions.filter(option => option.id !== inputModified.id)]
                );
            } else {
                setActiveOptions(
                    [...activeOptions.filter(option => option.id !== inputModified.id),
                        inputModified]
                );
            }
        } else {
            setActiveOptions([...activeOptions.filter(option => inputModified.id !== option.id), {
                id: inputModified.id,
                value: inputModified.value,
                description: inputModified.description
            }]);
        }

    };

    const jsInitAllCode =
    `import "./styles.css";
    import dg from "@swedbankpay/design-guide";
    dg.script.initAll();
    /* but if can adapt for each examples then the best would be to use the recommended way, i.e. importing only the specific element. But for this demo we don't care 😬
    EXAMPLE:
    import { accordion } from "@swedbankpay/design-guide";
    accordion.init();
    */`;

    // when only code, or only preview, or staticPreview such as toast/Sheet/etc (at least those staticpreviews at the first iterations of the new sandbox)
    const isReadOnly = staticPreview || (!showCasePanel && codeFigure);

    const content = () => {
        if (showCasePanel) {
            if (showCasePanelAdvanced) {
                return (
                    <ShowCasePanelAdvanced
                        showCasePanelAdvanced={showCasePanelAdvanced}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        activeOptions={activeOptions}
                        updateActiveOptions={updateActiveOptions}
                        staticPreview={staticPreview}
                        previewMinHeight={previewMinHeight}
                    >
                        {!hideCodeFigure && <CodeFigure
                            childrenPassed={childrenPassed}
                        />}
                    </ShowCasePanelAdvanced>
                );
            } else if (!showCasePanelAdvanced && codeFigure) {
                return (
                    <>
                        <ShowCasePanel
                            showCasePanelSm={showCasePanelSm}
                            negative={negative}
                            childrenPassed={childrenPassed}
                            staticPreview={staticPreview}
                            previewMinHeight={previewMinHeight}
                        />
                        <CodeFigure
                            childrenPassed={childrenPassed}
                        />
                    </>
                );
            } else {
                return <ShowCasePanel
                    showCasePanelSm={showCasePanelSm}
                    negative={negative}
                    childrenPassed={childrenPassed}
                    staticPreview={staticPreview}
                    previewMinHeight={previewMinHeight}
                />;
            }
        } else if (!showCasePanel && codeFigure) {
            return <CodeFigure
                childrenPassed={childrenPassed}
            />;
        } else {
            return null;
        }
    };

    const commonStyleInIframe = `
    body {
        height: fit-content;
        padding: 2rem;
      }`;

    const codeFiles = () => {
        if (language === "html") {
            return ({
                "/index.html": {
                    code: codeParsed,
                    active: true,
                    hidden: false,
                    readOnly: isReadOnly,
                },
                "src/index.js": {
                    // TODO: make this JS initialization specific per component and show it to the user in tabs, until then it can be hidden
                    hidden: true,
                    code: jsInitAllCode,
                    readOnly: isReadOnly,
                },
                "src/styles.css": {
                    code: commonStyleInIframe,
                    hidden: true
                }
            });
        } else if (language === "javascript" || language === "json") {
            return ({
                "src/index.js": {
                    code: codeParsed,
                    readOnly: isReadOnly,
                }
            });
        } else if (language === "css") {
            return ({ "src/index.less": {
                code: codeParsed,
                readOnly: isReadOnly,
                active: true,
                hideTabs: true,
            } });
        } else {
            return ({
                "src/index.js": {
                    code: codeParsed,
                    readOnly: isReadOnly,
                    hideTabs: true,
                    active: true,
                }
            });
        }
    };

    useEffect(() => {
        if (showCasePanelAdvanced) {
            resetOptions({ showCasePanelAdvanced });
        }
    }, [activeTab]);

    return (
        <SandpackProvider
            theme="dark"
            template="vanilla"
            customSetup={{
                dependencies: {
                    "@swedbankpay/design-guide": "10.5.1"
                },
                devDependencies: {
                    "@babel/core": "7.2.0",
                },
            }}
            options={{
                showTabs: true,
                externalResources: [
                    "https://design.swedbankpay.com/v/10.5.1/styles/swedbankpay.css"
                ],
            }}
            files={codeFiles()}
        >
            {content()}
        </SandpackProvider>
    );
};

ComponentPreview.propTypes = {
    language: PropTypes.oneOf(["html", "javascript", "css", "terminal", "json"]).isRequired,
    removeOuterTag: PropTypes.bool,
    hideCodeFigure: PropTypes.bool,
    hideValue: PropTypes.bool,
    removeList: PropTypes.bool,
    showCasePanel: PropTypes.bool,
    showCasePanelSm: PropTypes.bool,
    previewMinHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.exact(false)]),
    showCasePanelAdvanced: PropTypes.object,
    codeFigure: PropTypes.bool,
    dangerousHTML: PropTypes.bool,
    negative: PropTypes.bool,
    staticPreview: PropTypes.bool,
    previewHeight: PropTypes.oneOf(["default", "lg", "xl"])
};

export default ComponentPreview;
