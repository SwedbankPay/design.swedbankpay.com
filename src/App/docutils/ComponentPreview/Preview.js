import React, { cloneElement } from "react";
import { SandpackPreview } from "@codesandbox/sandpack-react";

/* TODO: test alternative background (cards?) */
export const Preview = ({ alternativeBackground, activeTab, staticPreview, activeOptions, previewMinHeight }) => (
    <div className="component-preview flex-fill">
        <div
            className={`component-preview-content${alternativeBackground ? " component-preview-alt-background" : ""}`}
            style={ previewMinHeight ? {
                "--preview-min-height": `${previewMinHeight}px`,
            } : null}
        >
            {staticPreview ?
                cloneElement(activeTab.component,
                    activeOptions.reduce((acc, currentOption) => ({
                        ...acc,
                        ...currentOption.value
                    }), {})
                )
                :
                <SandpackPreview /> }
        </div>
    </div>
);
