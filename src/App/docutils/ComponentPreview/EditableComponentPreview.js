import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
    SandpackProvider,
    SandpackCodeEditor,
    SandpackPreview,
} from "@codesandbox/sandpack-react";
import { ShowCasePanelAdvanced } from "./components/ShowCasePanelAdvanced";
import { useCodeParser } from "./hooksUtils/useCodeParser";
import { resetOptions } from "./hooksUtils/optionsUtils";
import { useJsSandboxInitCode } from "./hooksUtils/useSandboxInitCode";
import packageJson from "~/package";

const ShowCasePanel = ({
    showCasePanelSm,
    negative,
    childrenPassed,
    staticPreview,
    previewMinHeight,
}) => (
    <div
        className={`showcase-panel${showCasePanelSm ? " showcasepanel-sm" : ""}${
            negative ? " showcase-panel-negative" : ""
        }`}
        style={
            previewMinHeight
                ? {
                    "--preview-min-height": `${previewMinHeight}px`,
                }
                : null
        }
    >
        {staticPreview ? childrenPassed : <SandpackPreview />}
    </div>
);

const CodeFigure = () => <SandpackCodeEditor showInlineErrors />;

export const EditableComponentPreview = ({
    children: childrenPassed,
    codeFigure,
    dangerousHTML,
    hideCodeFigure,
    hideValue,
    language,
    negative,
    previewMinHeight = false,
    removeList,
    removeOuterTag,
    showCasePanel,
    showCasePanelAdvanced,
    showCasePanelSm,
    staticPreview = false,
}) => {
    const [activeTab, setActiveTab] = useState(
        showCasePanelAdvanced?.elements[0]
    );

    const [activeOptions, setActiveOptions] = useState(
        showCasePanelAdvanced?.elements[0]?.activeOptions
            ? [...showCasePanelAdvanced.elements[0].activeOptions]
            : []
    );
    const [codeParsed, outerElement, outerElementCssClasses] = useCodeParser({
        showCasePanelAdvanced,
        childrenPassed,
        activeTab,
        activeOptions,
        language,
        removeOuterTag,
        removeList,
        dangerousHTML,
        hideValue,
    });

    const updateActiveTab = newTab => {
        setActiveOptions([]);
        setActiveTab(newTab);
    };

    const updateActiveOptions = (inputModified, inputType, id) => {
        if (inputType === "checkbox") {
            if (activeOptions.some(option => option.id === inputModified.id)) {
                setActiveOptions([
                    ...activeOptions.filter(option => option.id !== inputModified.id),
                ]);
            } else {
                setActiveOptions([
                    ...activeOptions.filter(option => option.id !== inputModified.id),
                    inputModified,
                ]);
            }
        } else {
            setActiveOptions([
                ...activeOptions.filter(option => id !== option.id),
                {
                    id,
                    value: inputModified.value,
                    description: inputModified.description,
                },
            ]);
        }
    };

    const jsInitAllCode = useJsSandboxInitCode(
        outerElementCssClasses,
        removeOuterTag
    );

    const isReadOnly = staticPreview || (!showCasePanel && codeFigure);

    const content = () => {
        if (showCasePanel) {
            if (showCasePanelAdvanced) {
                return (
                    <ShowCasePanelAdvanced
                        showCasePanelAdvanced={showCasePanelAdvanced}
                        activeTab={activeTab}
                        updateActiveTab={updateActiveTab}
                        activeOptions={activeOptions}
                        updateActiveOptions={updateActiveOptions}
                        staticPreview={staticPreview}
                        previewMinHeight={previewMinHeight}
                    >
                        {!hideCodeFigure && <CodeFigure childrenPassed={childrenPassed} />}
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
                        <CodeFigure childrenPassed={childrenPassed} />
                    </>
                );
            } else {
                return (
                    <ShowCasePanel
                        showCasePanelSm={showCasePanelSm}
                        negative={negative}
                        childrenPassed={childrenPassed}
                        staticPreview={staticPreview}
                        previewMinHeight={previewMinHeight}
                    />
                );
            }
        } else if (!showCasePanel && codeFigure) {
            return <CodeFigure childrenPassed={childrenPassed} />;
        } else {
            return null;
        }
    };

    const resourceVersion = packageJson.version;

    // TODO: in the future, move the css import to `externalResources`. But for now it creates an issue since tehy do not transfer when user clicks "open in codesandbox"
    // https://github.com/codesandbox/sandpack/discussions/532
    const commonStyleInIframe = `
    @import url('https://design.swedbankpay.com/v/${resourceVersion}/styles/swedbankpay.css');

    body {
        height: fit-content;
        padding: 2rem;
    }

    /* styles fixing specific components (e.g. alternate background (loader + links) ) */
    /* the elements inside the iframe are only styled by the design-system npm package documentations css does not affect them */
    .loader-preview-container.dark {
        background-color: #493c3b;
    }  `;

    const codeFiles = () => {
        if (language === "html") {
            return {
                "/index.html": {
                    code: codeParsed,
                    active: true,
                    hidden: false,
                    readOnly: isReadOnly,
                },
                "src/index.js": {
                    hidden: true,
                    code: jsInitAllCode,
                    readOnly: isReadOnly,
                },
                "src/styles.css": {
                    code: commonStyleInIframe,
                    hidden: true,
                },
            };
        } else if (language === "javascript" || language === "json") {
            return {
                "src/index.js": {
                    code: codeParsed,
                    readOnly: isReadOnly,
                },
            };
        } else if (language === "css") {
            return {
                "src/index.less": {
                    code: codeParsed,
                    readOnly: isReadOnly,
                    active: true,
                    hideTabs: true,
                },
            };
        } else {
            return {
                "src/index.js": {
                    code: codeParsed,
                    readOnly: isReadOnly,
                    hideTabs: true,
                    active: true,
                },
            };
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
                    "@swedbankpay/design-guide": resourceVersion,
                },
                devDependencies: {
                    "@babel/core": "7.2.0",
                },
            }}
            options={{
                showTabs: true,
            }}
            files={codeFiles()}
        >
            {content()}
        </SandpackProvider>
    );
};

EditableComponentPreview.propTypes = {
    language: PropTypes.oneOf(["html", "javascript", "css", "terminal", "json"])
        .isRequired,
    removeOuterTag: PropTypes.bool,
    hideCodeFigure: PropTypes.bool,
    hideValue: PropTypes.bool,
    removeList: PropTypes.bool,
    showCasePanel: PropTypes.bool,
    showCasePanelSm: PropTypes.bool,
    previewMinHeight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.exact(false),
    ]),
    showCasePanelAdvanced: PropTypes.object,
    codeFigure: PropTypes.bool,
    dangerousHTML: PropTypes.bool,
    negative: PropTypes.bool,
    staticPreview: PropTypes.bool,
    previewHeight: PropTypes.oneOf(["default", "lg", "xl"]),
};
