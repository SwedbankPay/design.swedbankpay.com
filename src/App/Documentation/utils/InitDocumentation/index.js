import React from "react";

import { ComponentPreview, Property } from "#";

const InitDocumentation = ({ componentName, scriptName }) => {
    // Ensures that the name is in lowercase [AW]
    const name = componentName ? componentName.toLowerCase() : "component";
    const script = scriptName ? scriptName.toLowerCase() : name;

    return (
        <>
            <h3>Initializing {name}s</h3>
            <p>
                To initialize {name}s use <Property value={`px.${script}.init()`} />. If <Property value=".init()" /> is called
                without arguments it will target all {name}s on the page. To initialize only a select few send one or more ids as an argument.
                The init function accepts both a single string or an array of strings. These strings need to match an
                existing {name} id and will print warning messages if an argument is invalid.
            </p>
            <hr/>
            <p>
                Example of valid arguments
            </p>
            <ComponentPreview language="javascript" codeFigure >
                {`px.${script}.init();\n`}
                {`px.${script}.init("demo-${script}");\n`}
                {`px.${script}.init(["demo-${script}"]);\n`}
                {`px.${script}.init(["demo-${script}-1", .. "demo-${script}-x"]);\n`}
            </ComponentPreview>
        </>
    );
};

export default InitDocumentation;
