import React, { useState, cloneElement } from "react";
import PropTypes from "prop-types";
import { SandpackProvider, SandpackCodeEditor, SandpackPreview } from "@codesandbox/sandpack-react";
import { codeParsingForEditor } from "./codeParserFuncsForEditor";
import { ShowCasePanelAdvanced } from "./ShowCasePanelAdvanced";
import { useCodeParser } from "./useCodeParser";

// TODO: should the preview of showCasePanel & the one of advancedShowCasePanel use the same component ?
// in a way it is using the same SndpackPreview, so it would keep them in sync (e.g. add additional button "copy to clipboard", etc)
// on the other hand the whole container around is different (for some reason)
const ShowCasePanel = ({ showCasePanelSm, negative }) => (
    <div className={`showcase-panel${showCasePanelSm ? " showcasepanel-sm" : ""}${negative ? " showcase-panel-negative" : ""}`}>
        <SandpackPreview />
    </div>
);

const CodeFigure = () => <SandpackCodeEditor showInlineErrors />;

// TODO: fix the previous componentsDidUpdate -> it used to re-init things like tab, etc
// TODO: fix styling of tabs & options (classes brought by Sandpack screw our own styling)
// TODO: fix the initial options active
// TODO: fix the setActiveOptions on sidebar
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
    codeFigure,
    dangerousHTML,
    negative
}) => {

    const [activeTab, setActiveTab] = useState(showCasePanelAdvanced?.elements[0]);

    // TODO: set initial activeOptions: -> CANNOT CHECK WITH CHECKBOXES (broken ?) only exist in prod with radio
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
                    >
                        <CodeFigure
                            childrenPassed={childrenPassed}
                        />
                    </ShowCasePanelAdvanced>
                );
            } else if (!showCasePanelAdvanced && codeFigure) {
                return (
                    <>
                        <ShowCasePanel
                            showCasePanelSm={showCasePanelSm}
                            negative={negative}
                            childrenPassed={childrenPassed}
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
                externalResources: [
                    "https://design.swedbankpay.com/v/10.5.1/styles/swedbankpay.css"
                ],
                readOnly: false,
                showTabs: true,
            }}
            files={{
                "/index.html": {
                    code: codeParsed,
                    active: true
                },
                "src/index.js": {
                    // TODO: make this JS initialization specific per component and show it to the user in tabs, until then it can be hidden
                    hidden: true,
                    code:
`import dg from "@swedbankpay/design-guide";
dg.script.initAll();
/* but if can adapt for each examples then the best would be to use the recommended way, i.e. importing only the specific element. But for this demo we don't care 😬
EXAMPLE:
import { accordion } from "@swedbankpay/design-guide";
accordion.init();
*/`
                }
            }}
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
    showCasePanelAdvanced: PropTypes.object,
    codeFigure: PropTypes.bool,
    dangerousHTML: PropTypes.bool,
    negative: PropTypes.bool
};

export default ComponentPreview;
