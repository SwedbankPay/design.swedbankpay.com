import React, { useState } from "react";
import PropTypes from "prop-types";
import { SandpackProvider, SandpackCodeEditor, SandpackPreview } from "@codesandbox/sandpack-react";
import { codeParsingForEditor } from "./codeParserFuncsForEditor";
import { ShowCasePanelAdvanced } from "./ShowCasePanelAdvanced";

const ShowCasePanel = ({ showCasePanelSm, negative }) => (
    <div className={`showcase-panel${showCasePanelSm ? " showcasepanel-sm" : ""}${negative ? " showcase-panel-negative" : ""}`}>
        <SandpackPreview />
    </div>
);

const CodeFigure = () => <SandpackCodeEditor showInlineErrors />;

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

    const content = () => {
        if (showCasePanel) {
            if (showCasePanelAdvanced) {
                return (
                    <ShowCasePanelAdvanced
                        showCasePanelAdvanced={showCasePanelAdvanced}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
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

    const code = () => {
        let code = "";

        if (!showCasePanelAdvanced || !showCasePanelAdvanced.elements?.length) {
            code = codeParsingForEditor(childrenPassed, language, removeOuterTag, removeList, dangerousHTML, hideValue);
        } else {
            code = codeParsingForEditor(activeTab?.component, language, removeOuterTag, removeList, dangerousHTML, hideValue);
        }

        return code;
    };

    return (
        <SandpackProvider
            theme="dark"
            template="vanilla"
            customSetup={{
                dependencies: {
                    "@swedbankpay/design-guide": "10.3.0"
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
                    code: code(),
                    active: true
                },
                "src/index.js": {
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
