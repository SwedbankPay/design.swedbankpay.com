import React from "react";
import { SandpackPreview } from "@codesandbox/sandpack-react";

/* TODO: test alternative background (cards?) */
export const Preview = ({ alternativeBackground }) => (
    <div className="component-preview flex-fill">
        <div className={`component-preview-content${alternativeBackground ? " component-preview-alt-background" : ""}`}>
            <SandpackPreview />
        </div>
    </div>
);
